import { env } from './config/env.js'
import { createApp } from './app.js'
import { ensureDefaultAdmin } from './services/auth.service.js'

await ensureDefaultAdmin()

const app = createApp()

app.listen(env.port, () => {
  console.log(`Design agency API running on http://127.0.0.1:${env.port}`)
})
