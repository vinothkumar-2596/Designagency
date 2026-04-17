import * as r2Service from '../services/r2.service.js'
import { ApiError } from '../utils/ApiError.js'

export async function uploadAsset(req, res) {
  if (!req.file) {
    throw new ApiError(400, 'File is required')
  }

  const asset = await r2Service.uploadToR2(req.file)

  res.status(201).json({
    success: true,
    data: asset,
  })
}
