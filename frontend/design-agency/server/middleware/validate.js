import { ZodError } from 'zod'
import { ApiError } from '../utils/ApiError.js'

export function validate(schema) {
  return (req, _res, next) => {
    try {
      const parsed = schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      })

      req.body = parsed.body ?? req.body
      req.params = parsed.params ?? req.params
      req.validated = parsed
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        next(new ApiError(422, 'Validation failed', error.flatten()))
        return
      }

      next(error)
    }
  }
}
