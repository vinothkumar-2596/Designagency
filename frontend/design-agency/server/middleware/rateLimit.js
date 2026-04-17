import { ApiError } from '../utils/ApiError.js'

const buckets = new Map()

export function rateLimit({ windowMs = 60_000, max = 120 } = {}) {
  return (req, _res, next) => {
    const key = req.ip
    const now = Date.now()
    const bucket = buckets.get(key) ?? { count: 0, resetAt: now + windowMs }

    if (now > bucket.resetAt) {
      bucket.count = 0
      bucket.resetAt = now + windowMs
    }

    bucket.count += 1
    buckets.set(key, bucket)

    if (bucket.count > max) {
      next(new ApiError(429, 'Too many requests'))
      return
    }

    next()
  }
}
