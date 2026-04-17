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

function SEO({ meta }) {
  const location = useLocation()
  const title = meta?.title ?? siteConfig.name
  const description = meta?.description ?? siteConfig.description
  const canonicalPath = meta?.canonicalPath ?? location.pathname
  const schema = buildSchema(meta, location.pathname)

  useEffect(() => {
    document.title = title

    upsertMeta(
      'meta[name="description"]',
      () => {
        const element = document.createElement('meta')
        element.setAttribute('name', 'description')
        return element
      },
      (element) => element.setAttribute('content', description),
    )

    upsertMeta(
      'link[rel="canonical"]',
      () => {
        const element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        return element
      },
      (element) => element.setAttribute('href', `${siteConfig.url}${canonicalPath}`),
    )

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
  }, [canonicalPath, description, schema, title])

  return null
}

export default SEO
