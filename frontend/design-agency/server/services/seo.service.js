import { env } from '../config/env.js'
import * as repo from '../repositories/jsonRepository.js'

const seoCollection = 'seo'
const contentCollection = 'content'

export async function listSeo() {
  return repo.list(seoCollection)
}

export async function getSeoByPath(path) {
  const records = await repo.list(seoCollection)
  return records.find((record) => record.path === path) ?? null
}

export async function upsertSeo(path, payload) {
  const existing = await getSeoByPath(path)

  if (existing) {
    return repo.update(seoCollection, existing.id, payload)
  }

  return repo.create(seoCollection, { path, ...payload }, 'seo')
}

export async function buildSitemap() {
  const seoRecords = await repo.list(seoCollection)
  const contentRecords = await repo.list(contentCollection)
  const staticPaths = seoRecords.map((record) => record.path)
  const contentPaths = contentRecords
    .filter((record) => record.status === 'published')
    .map((record) => `/${record.type}/${record.slug}`)

  const urls = [...new Set([...staticPaths, ...contentPaths])]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${env.siteUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.7'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`
}

export function buildRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${env.siteUrl}/sitemap.xml`
}
