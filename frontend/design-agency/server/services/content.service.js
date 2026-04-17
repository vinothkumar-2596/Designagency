import * as repo from '../repositories/jsonRepository.js'
import { ApiError } from '../utils/ApiError.js'
import { toSlug } from '../utils/slug.js'

const collection = 'content'
const allowedTypes = new Set(['blog', 'case-studies', 'services'])

function assertType(type) {
  if (!allowedTypes.has(type)) {
    throw new ApiError(400, 'Unsupported content type')
  }
}

export async function listContent(type, { includeDrafts = false } = {}) {
  assertType(type)
  const records = await repo.list(collection)
  return records
    .filter((record) => record.type === type)
    .filter((record) => includeDrafts || record.status === 'published')
    .sort((a, b) => new Date(b.publishedAt ?? b.createdAt) - new Date(a.publishedAt ?? a.createdAt))
}

export async function getContentBySlug(type, slug, { includeDrafts = false } = {}) {
  assertType(type)
  const record = await repo.findOne(collection, (item) => item.type === type && item.slug === slug)

  if (!record || (!includeDrafts && record.status !== 'published')) {
    throw new ApiError(404, 'Content not found')
  }

  return record
}

export async function createContent(type, payload) {
  assertType(type)
  const slug = payload.slug ? toSlug(payload.slug) : toSlug(payload.title)

  return repo.create(
    collection,
    {
      ...payload,
      type,
      slug,
      status: payload.status ?? 'draft',
      publishedAt: payload.status === 'published' ? (payload.publishedAt ?? new Date().toISOString()) : null,
    },
    'content',
  )
}

export async function updateContent(id, payload) {
  const existing = await repo.findById(collection, id)

  if (!existing) {
    throw new ApiError(404, 'Content not found')
  }

  const nextPayload = {
    ...payload,
  }

  if (payload.title || payload.slug) {
    nextPayload.slug = payload.slug ? toSlug(payload.slug) : toSlug(payload.title)
  }

  if (payload.status === 'published' && !existing.publishedAt) {
    nextPayload.publishedAt = new Date().toISOString()
  }

  return repo.update(collection, id, nextPayload)
}

export async function deleteContent(id) {
  const deleted = await repo.remove(collection, id)

  if (!deleted) {
    throw new ApiError(404, 'Content not found')
  }
}
