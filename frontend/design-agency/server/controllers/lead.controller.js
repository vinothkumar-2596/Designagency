import * as leadService from '../services/lead.service.js'

export async function createLead(req, res) {
  const lead = await leadService.createLead(req.body)

  res.status(201).json({
    success: true,
    data: lead,
  })
}

export async function listLeads(_req, res) {
  const leads = await leadService.listLeads()

  res.status(200).json({
    success: true,
    data: leads,
  })
}
