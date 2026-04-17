import crypto from 'node:crypto'

export function createId(prefix = 'id') {
  return `${prefix}_${crypto.randomUUID()}`
}

export function hashToken(token) {
  return crypto.createHash('sha256').update(token).digest('hex')
}
