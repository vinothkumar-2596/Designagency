import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import { env } from '../config/env.js'
import { rateLimit } from './rateLimit.js'
import { requestId } from './requestId.js'

export function applySecurityMiddleware(app) {
  app.set('trust proxy', 1)
  app.disable('x-powered-by')

  app.use(requestId)
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: 'cross-origin' },
    }),
  )
  app.use(
    cors({
      origin: env.clientOrigin,
      credentials: true,
      methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }),
  )
  app.use(compression())
  app.use(cookieParser())
  app.use(express.json({ limit: '1mb' }))
  app.use(express.urlencoded({ extended: true, limit: '1mb' }))
  app.use(rateLimit())
}
