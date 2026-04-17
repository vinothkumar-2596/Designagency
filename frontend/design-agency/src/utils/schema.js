import { siteConfig } from '../config/site'

export function buildSchema(meta, path = '/') {
  const schemaType = meta?.schemaType ?? 'WebPage'
  const url = `${siteConfig.url}${meta?.canonicalPath ?? path}`

  if (schemaType === 'Organization') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteConfig.name,
      url,
      description: meta.description,
      email: siteConfig.email,
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: meta?.title ?? siteConfig.name,
    description: meta?.description ?? siteConfig.description,
    url,
  }
}
