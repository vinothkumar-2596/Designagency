import * as repo from '../repositories/jsonRepository.js'

const collection = 'leads'

export async function createLead(payload) {
  return repo.create(
    collection,
    {
      ...payload,
      status: 'new',
      source: payload.source ?? 'website',
    },
    'lead',
  )
}

export async function listLeads() {
  const leads = await repo.list(collection)
  return leads.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
}
