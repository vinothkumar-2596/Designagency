import { Router } from 'express'
import * as seoController from '../controllers/seo.controller.js'
import { requireAuth, requireRole } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { validate } from '../middleware/validate.js'
import { seoParamsSchema, upsertSeoSchema } from '../validators/schemas.js'

export const seoRouter = Router()

seoRouter.get('/', asyncHandler(seoController.listSeo))
seoRouter.get('/:path', validate(seoParamsSchema), asyncHandler(seoController.getSeoByPath))
seoRouter.put(
  '/:path',
  requireAuth,
  requireRole('admin'),
  validate(upsertSeoSchema),
  asyncHandler(seoController.upsertSeo),
)
