import { Router } from 'express'
import multer from 'multer'
import * as uploadController from '../controllers/upload.controller.js'
import { requireAuth, requireRole } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (_req, file, callback) => {
    if (!file.mimetype.startsWith('image/')) {
      callback(new Error('Only image uploads are allowed'))
      return
    }

    callback(null, true)
  },
})

export const uploadRouter = Router()

uploadRouter.post(
  '/',
  requireAuth,
  requireRole('admin'),
  upload.single('file'),
  asyncHandler(uploadController.uploadAsset),
)
