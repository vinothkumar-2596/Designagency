import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import * as repo from '../repositories/jsonRepository.js'
import { ApiError } from '../utils/ApiError.js'
import { createId, hashToken } from '../utils/crypto.js'

const usersCollection = 'users'
const refreshTokensCollection = 'refreshTokens'

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  }
}

function signAccessToken(user) {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
    },
    env.jwtAccessSecret,
    { expiresIn: env.jwtAccessExpiresIn },
  )
}

async function createRefreshToken(user) {
  const tokenId = createId('refresh')
  const token = jwt.sign(
    {
      sub: user.id,
      jti: tokenId,
      role: user.role,
    },
    env.jwtRefreshSecret,
    { expiresIn: env.jwtRefreshExpiresIn },
  )
  const decoded = jwt.decode(token)

  await repo.create(
    refreshTokensCollection,
    {
      userId: user.id,
      tokenId,
      tokenHash: hashToken(token),
      expiresAt: new Date(decoded.exp * 1000).toISOString(),
      revokedAt: null,
    },
    'session',
  )

  return token
}

export async function ensureDefaultAdmin() {
  const users = await repo.list(usersCollection)

  if (users.length > 0) {
    return
  }

  await repo.create(
    usersCollection,
    {
      name: 'Design Admin',
      email: env.adminEmail.toLowerCase(),
      passwordHash: await bcrypt.hash(env.adminPassword, 12),
      role: 'admin',
    },
    'user',
  )
}

export async function login({ email, password }) {
  const normalizedEmail = email.toLowerCase()
  const user = await repo.findOne(usersCollection, (record) => record.email === normalizedEmail)

  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    throw new ApiError(401, 'Invalid email or password')
  }

  return {
    user: publicUser(user),
    accessToken: signAccessToken(user),
    refreshToken: await createRefreshToken(user),
  }
}

export async function refresh(refreshToken) {
  if (!refreshToken) {
    throw new ApiError(401, 'Refresh token required')
  }

  let decoded

  try {
    decoded = jwt.verify(refreshToken, env.jwtRefreshSecret)
  } catch {
    throw new ApiError(401, 'Invalid or expired refresh token')
  }

  const session = await repo.findOne(
    refreshTokensCollection,
    (record) =>
      record.tokenId === decoded.jti &&
      record.tokenHash === hashToken(refreshToken) &&
      !record.revokedAt,
  )

  if (!session || new Date(session.expiresAt) <= new Date()) {
    throw new ApiError(401, 'Refresh session expired')
  }

  const user = await repo.findById(usersCollection, decoded.sub)

  if (!user) {
    throw new ApiError(401, 'User no longer exists')
  }

  await repo.update(refreshTokensCollection, session.id, {
    revokedAt: new Date().toISOString(),
  })

  return {
    user: publicUser(user),
    accessToken: signAccessToken(user),
    refreshToken: await createRefreshToken(user),
  }
}

export async function logout(refreshToken) {
  if (!refreshToken) {
    return
  }

  const session = await repo.findOne(
    refreshTokensCollection,
    (record) => record.tokenHash === hashToken(refreshToken) && !record.revokedAt,
  )

  if (session) {
    await repo.update(refreshTokensCollection, session.id, {
      revokedAt: new Date().toISOString(),
    })
  }
}
