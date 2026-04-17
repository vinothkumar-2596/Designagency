import { Router } from 'express'
import * as authController from '../controllers/auth.controller.js'
import { requireAuth } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { validate } from '../middleware/validate.js'
import { loginSchema } from '../validators/schemas.js'

export const authRouter = Router()

authRouter.post('/login', validate(loginSchema), asyncHandler(authController.login))
authRouter.post('/refresh', asyncHandler(authController.refresh))
authRouter.post('/logout', asyncHandler(authController.logout))
authRouter.get('/me', requireAuth, authController.me)
