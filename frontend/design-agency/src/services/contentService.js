import { fallbackContent } from '../data/fallbackContent'
import { seoDefaults } from '../data/seoDefaults'
import { apiRequest } from './apiClient'

export async function getContentList(type) {
  try {
    return await apiRequest(`/api/content/${type}`)
  } catch {
    return fallbackContent[type] ?? []
  }
}

export async function getContentItem(type, slug) {
  try {
    return await apiRequest(`/api/content/${type}/${slug}`)
  } catch {
    const records = fallbackContent[type] ?? []
    return records.find((record) => record.slug === slug) ?? null
  }
}

export async function getSeo(path) {
  try {
    return (await apiRequest(`/api/seo?path=${encodeURIComponent(path)}`)) ?? seoDefaults[path]
  } catch {
    return seoDefaults[path] ?? seoDefaults['/']
  }
}

export async function submitLead(payload) {
  return apiRequest('/api/leads', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}
