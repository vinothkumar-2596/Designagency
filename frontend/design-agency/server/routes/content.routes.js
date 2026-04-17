import { Router } from 'express'
import * as contentController from '../controllers/content.controller.js'
import { requireAuth, requireRole } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { validate } from '../middleware/validate.js'
import {
  contentParamsSchema,
  contentSlugSchema,
  createContentSchema,
  deleteContentSchema,
  updateContentSchema,
} from '../validators/schemas.js'

export const contentRouter = Router()

contentRouter.get('/:type', validate(contentParamsSchema), asyncHandler(contentController.listContent))
contentRouter.get('/:type/:slug', validate(contentSlugSchema), asyncHandler(contentController.getContentBySlug))
contentRouter.post(
  '/:type',
  requireAuth,
  requireRole('admin'),
  validate(createContentSchema),
  asyncHandler(contentController.createContent),
)
contentRouter.patch(
  '/items/:id',
  requireAuth,
  requireRole('admin'),
  validate(updateContentSchema),
  asyncHandler(contentController.updateContent),
)
contentRouter.delete(
  '/items/:id',
  requireAuth,
  requireRole('admin'),
  validate(deleteContentSchema),
  asyncHandler(contentController.deleteContent),
)
