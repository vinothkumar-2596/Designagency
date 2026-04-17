import express from 'express'
import { applySecurityMiddleware } from './middleware/security.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'
import { apiRouter } from './routes/index.js'
import * as seoController from './controllers/seo.controller.js'

export function createApp() {
  const app = express()

  applySecurityMiddleware(app)

  app.get('/sitemap.xml', seoController.sitemap)
  app.get('/robots.txt', seoController.robots)
  app.use('/api', apiRouter)

  app.use(notFoundHandler)
  app.use(errorHandler)

  return app
}
