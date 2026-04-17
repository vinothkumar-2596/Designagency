import { ApiError } from '../utils/ApiError.js'

export function notFoundHandler(req, res, next) {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`))
}

export function errorHandler(err, req, res, _next) {
  const statusCode = err.statusCode ?? 500
  const response = {
    success: false,
    message: statusCode === 500 ? 'Internal server error' : err.message,
    requestId: req.id,
  }

  if (err.details) {
    response.details = err.details
  }

  if (process.env.NODE_ENV !== 'production' && statusCode === 500) {
    response.error = err.message
  }

  res.status(statusCode).json(response)
}
