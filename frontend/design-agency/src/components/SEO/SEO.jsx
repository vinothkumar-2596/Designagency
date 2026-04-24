import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import { buildSchema } from '../../utils/schema'

function upsertMeta(selector, createElement, updateElement) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = createElement()
    document.head.appendChild(element)
  }

  updateElement(element)
}

function upsertNamedMeta(attribute, name, content) {
  upsertMeta(
    `meta[${attribute}="${name}"]`,
    () => {
      const element = document.createElement('meta')
      element.setAttribute(attribute, name)
      return element
    },
    (element) => element.setAttribute('content', content),
  )
}

function SEO({ meta }) {
  const location = useLocation()
  const title = meta?.title ?? siteConfig.name
  const description = meta?.description ?? siteConfig.description
  const canonicalPath = meta?.canonicalPath ?? location.pathname
  const canonicalUrl = `${siteConfig.url}${canonicalPath}`
  const image = meta?.image ?? `${siteConfig.url}/og-image.jpg`
  const schema = buildSchema(meta, location.pathname)

  useEffect(() => {
    document.title = title

    upsertNamedMeta('name', 'description', description)

    upsertMeta(
      'link[rel="canonical"]',
      () => {
        const element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        return element
      },
      (element) => element.setAttribute('href', canonicalUrl),
    )

    upsertNamedMeta('property', 'og:title', title)
    upsertNamedMeta('property', 'og:description', description)
    upsertNamedMeta('property', 'og:url', canonicalUrl)
    upsertNamedMeta('property', 'og:site_name', siteConfig.name)
    upsertNamedMeta('property', 'og:type', meta?.type ?? 'website')
    upsertNamedMeta('property', 'og:image', image)

    upsertNamedMeta('name', 'twitter:card', 'summary_large_image')
    upsertNamedMeta('name', 'twitter:title', title)
    upsertNamedMeta('name', 'twitter:description', description)
    upsertNamedMeta('name', 'twitter:image', image)

    upsertMeta(
      'script[type="application/ld+json"][data-managed="schema"]',
      () => {
        const element = document.createElement('script')
        element.type = 'application/ld+json'
        element.dataset.managed = 'schema'
        return element
      },
      (element) => {
        element.textContent = JSON.stringify(schema)
      },
    )
  }, [canonicalUrl, description, image, meta?.type, schema, title])

  return null
}

export default SEO
