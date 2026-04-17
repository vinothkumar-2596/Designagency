import * as contentService from '../services/content.service.js'

export async function listContent(req, res) {
  const includeDrafts = req.user?.role === 'admin' && req.query.includeDrafts === 'true'
  const records = await contentService.listContent(req.params.type, { includeDrafts })

  res.status(200).json({
    success: true,
    data: records,
  })
}

export async function getContentBySlug(req, res) {
  const record = await contentService.getContentBySlug(req.params.type, req.params.slug, {
    includeDrafts: req.user?.role === 'admin',
  })

  res.status(200).json({
    success: true,
    data: record,
  })
}

export async function createContent(req, res) {
  const record = await contentService.createContent(req.params.type, req.body)

  res.status(201).json({
    success: true,
    data: record,
  })
}

export async function updateContent(req, res) {
  const record = await contentService.updateContent(req.params.id, req.body)

  res.status(200).json({
    success: true,
    data: record,
  })
}

export async function deleteContent(req, res) {
  await contentService.deleteContent(req.params.id)
  res.status(204).send()
}
