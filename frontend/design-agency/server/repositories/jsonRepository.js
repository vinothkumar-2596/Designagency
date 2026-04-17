import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createId } from '../utils/crypto.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataDir = path.resolve(__dirname, '../data')

async function ensureDataFile(collection) {
  await fs.mkdir(dataDir, { recursive: true })
  const filePath = path.join(dataDir, `${collection}.json`)

  try {
    await fs.access(filePath)
  } catch {
    await fs.writeFile(filePath, '[]\n')
  }

  return filePath
}

export async function readCollection(collection) {
  const filePath = await ensureDataFile(collection)
  const raw = await fs.readFile(filePath, 'utf8')
  return JSON.parse(raw || '[]')
}

export async function writeCollection(collection, records) {
  const filePath = await ensureDataFile(collection)
  const tempPath = `${filePath}.tmp`
  await fs.writeFile(tempPath, `${JSON.stringify(records, null, 2)}\n`)
  await fs.rename(tempPath, filePath)
}

export async function list(collection) {
  return readCollection(collection)
}

export async function findById(collection, id) {
  const records = await readCollection(collection)
  return records.find((record) => record.id === id) ?? null
}

export async function findOne(collection, predicate) {
  const records = await readCollection(collection)
  return records.find(predicate) ?? null
}

export async function create(collection, payload, prefix = collection) {
  const records = await readCollection(collection)
  const now = new Date().toISOString()
  const record = {
    id: createId(prefix),
    createdAt: now,
    updatedAt: now,
    ...payload,
  }

  records.push(record)
  await writeCollection(collection, records)
  return record
}

export async function update(collection, id, payload) {
  const records = await readCollection(collection)
  const index = records.findIndex((record) => record.id === id)

  if (index === -1) {
    return null
  }

  records[index] = {
    ...records[index],
    ...payload,
    updatedAt: new Date().toISOString(),
  }

  await writeCollection(collection, records)
  return records[index]
}

export async function remove(collection, id) {
  const records = await readCollection(collection)
  const nextRecords = records.filter((record) => record.id !== id)

  if (records.length === nextRecords.length) {
    return false
  }

  await writeCollection(collection, nextRecords)
  return true
}
