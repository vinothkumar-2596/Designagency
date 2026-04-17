import 'dotenv/config'

const inProduction = process.env.NODE_ENV === 'production'

function readEnv(name, fallback = '') {
  const value = process.env[name] ?? fallback

  if (inProduction && !value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  isProduction: inProduction,
  port: Number(process.env.PORT ?? 4000),
  clientOrigin: process.env.CLIENT_ORIGIN ?? 'http://127.0.0.1:5173',
  siteUrl: process.env.SITE_URL ?? 'http://127.0.0.1:5173',
  jwtAccessSecret: readEnv('JWT_ACCESS_SECRET', 'dev-access-secret-change-me'),
  jwtRefreshSecret: readEnv('JWT_REFRESH_SECRET', 'dev-refresh-secret-change-me'),
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN ?? '15m',
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN ?? '7d',
  refreshCookieName: process.env.REFRESH_COOKIE_NAME ?? 'design_refresh_token',
  adminEmail: process.env.ADMIN_EMAIL ?? 'admin@designagency.local',
  adminPassword: process.env.ADMIN_PASSWORD ?? 'change-this-password',
  r2: {
    accountId: process.env.CLOUDFLARE_R2_ACCOUNT_ID ?? '',
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY ?? '',
    bucket: process.env.CLOUDFLARE_R2_BUCKET ?? '',
    publicUrl: process.env.CLOUDFLARE_R2_PUBLIC_URL ?? '',
  },
}
