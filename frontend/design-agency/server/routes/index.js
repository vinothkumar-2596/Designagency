import { Router } from 'express'
import { authRouter } from './auth.routes.js'
import { contentRouter } from './content.routes.js'
import { leadRouter } from './lead.routes.js'
import { seoRouter } from './seo.routes.js'
import { uploadRouter } from './upload.routes.js'

export const apiRouter = Router()

apiRouter.get('/health', (_req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'ok',
      service: 'design-agency-api',
    },
  })
})

apiRouter.use('/auth', authRouter)
apiRouter.use('/content', contentRouter)
apiRouter.use('/leads', leadRouter)
apiRouter.use('/seo', seoRouter)
apiRouter.use('/uploads', uploadRouter)
