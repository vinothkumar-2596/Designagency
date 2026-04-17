import jwt from 'jsonwebtoken'
import { env } from '../config/env.js'
import { ApiError } from '../utils/ApiError.js'

export function requireAuth(req, _res, next) {
  const header = req.headers.authorization
  const token = header?.startsWith('Bearer ') ? header.slice(7) : null

  if (!token) {
    next(new ApiError(401, 'Authentication required'))
    return
  }

  try {
    req.user = jwt.verify(token, env.jwtAccessSecret)
    next()
  } catch {
    next(new ApiError(401, 'Invalid or expired access token'))
  }
}

export function requireRole(...roles) {
  return (req, _res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      next(new ApiError(403, 'Insufficient permissions'))
      return
    }

    next()
  }
}
