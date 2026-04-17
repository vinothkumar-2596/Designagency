const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const message = await response.text()
    throw new Error(message || 'API request failed')
  }

  if (response.status === 204) {
    return null
  }

  const payload = await response.json()
  return payload.data
}
