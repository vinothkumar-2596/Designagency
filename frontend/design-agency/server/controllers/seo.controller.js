import * as seoService from '../services/seo.service.js'

export async function listSeo(req, res) {
  if (req.query.path) {
    res.status(200).json({
      success: true,
      data: await seoService.getSeoByPath(req.query.path),
    })
    return
  }

  res.status(200).json({
    success: true,
    data: await seoService.listSeo(),
  })
}

export async function getSeoByPath(req, res) {
  const path = `/${req.params.path}`.replace(/\/+/g, '/')

  res.status(200).json({
    success: true,
    data: await seoService.getSeoByPath(path),
  })
}

export async function upsertSeo(req, res) {
  const path = `/${req.params.path}`.replace(/\/+/g, '/')

  res.status(200).json({
    success: true,
    data: await seoService.upsertSeo(path, req.body),
  })
}

export async function sitemap(_req, res) {
  res.type('application/xml').send(await seoService.buildSitemap())
}

export function robots(_req, res) {
  res.type('text/plain').send(seoService.buildRobots())
}
