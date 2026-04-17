import { env } from '../config/env.js'
import * as authService from '../services/auth.service.js'

const refreshCookieOptions = {
  httpOnly: true,
  secure: env.isProduction,
  sameSite: 'lax',
  path: '/api/auth',
  maxAge: 7 * 24 * 60 * 60 * 1000,
}

export async function login(req, res) {
  const result = await authService.login(req.body)

  res.cookie(env.refreshCookieName, result.refreshToken, refreshCookieOptions)
  res.status(200).json({
    success: true,
    data: {
      user: result.user,
      accessToken: result.accessToken,
    },
  })
}

export async function refresh(req, res) {
  const result = await authService.refresh(req.cookies[env.refreshCookieName])

  res.cookie(env.refreshCookieName, result.refreshToken, refreshCookieOptions)
  res.status(200).json({
    success: true,
    data: {
      user: result.user,
      accessToken: result.accessToken,
    },
  })
}

export async function logout(req, res) {
  await authService.logout(req.cookies[env.refreshCookieName])
  res.clearCookie(env.refreshCookieName, refreshCookieOptions)
  res.status(204).send()
}

export function me(req, res) {
  res.status(200).json({
    success: true,
    data: {
      user: req.user,
    },
  })
}
