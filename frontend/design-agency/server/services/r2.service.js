import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { env } from '../config/env.js'
import { ApiError } from '../utils/ApiError.js'
import { createId } from '../utils/crypto.js'

function assertR2Configured() {
  const configured =
    env.r2.accountId &&
    env.r2.accessKeyId &&
    env.r2.secretAccessKey &&
    env.r2.bucket &&
    env.r2.publicUrl

  if (!configured) {
    throw new ApiError(503, 'Cloudflare R2 is not configured')
  }
}

function getClient() {
  assertR2Configured()

  return new S3Client({
    region: 'auto',
    endpoint: `https://${env.r2.accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: env.r2.accessKeyId,
      secretAccessKey: env.r2.secretAccessKey,
    },
  })
}

export async function uploadToR2(file) {
  const client = getClient()
  const extension = file.originalname.split('.').pop()
  const key = `uploads/${createId('asset')}.${extension}`

  await client.send(
    new PutObjectCommand({
      Bucket: env.r2.bucket,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
      CacheControl: 'public, max-age=31536000, immutable',
    }),
  )

  return {
    key,
    url: `${env.r2.publicUrl.replace(/\/$/, '')}/${key}`,
    contentType: file.mimetype,
    size: file.size,
  }
}
