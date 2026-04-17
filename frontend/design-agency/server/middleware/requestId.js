import { createId } from '../utils/crypto.js'

export function requestId(req, res, next) {
  req.id = createId('req')
  res.setHeader('X-Request-Id', req.id)
  next()
}
