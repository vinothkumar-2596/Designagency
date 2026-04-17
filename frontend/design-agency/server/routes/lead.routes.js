import { Router } from 'express'
import * as leadController from '../controllers/lead.controller.js'
import { requireAuth, requireRole } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { validate } from '../middleware/validate.js'
import { leadSchema } from '../validators/schemas.js'

export const leadRouter = Router()

leadRouter.post('/', validate(leadSchema), asyncHandler(leadController.createLead))
leadRouter.get('/', requireAuth, requireRole('admin'), asyncHandler(leadController.listLeads))
