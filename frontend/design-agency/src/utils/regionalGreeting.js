const INDIA_FALLBACK = {
  text: '\u0928\u092e\u0938\u094d\u0924\u0947',
  transliteration: 'Namaste',
}

const INTERNATIONAL_FALLBACK = {
  text: 'Hello',
  transliteration: 'Hello',
}

const STATE_GREETINGS = [
  { states: ['tamil nadu', 'puducherry', 'pondicherry'], codes: ['tn', 'py'], text: '\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd', transliteration: 'Vanakkam' },
  { states: ['karnataka'], codes: ['ka'], text: '\u0ca8\u0cae\u0cb8\u0ccd\u0c95\u0cbe\u0cb0', transliteration: 'Namaskara' },
  { states: ['andhra pradesh', 'telangana'], codes: ['ap', 'tg', 'ts'], text: '\u0c28\u0c2e\u0c38\u0c4d\u0c15\u0c3e\u0c30\u0c02', transliteration: 'Namaskaram' },
  { states: ['kerala'], codes: ['kl'], text: '\u0d28\u0d2e\u0d38\u0d4d\u0d15\u0d3e\u0d30\u0d02', transliteration: 'Namaskaram' },
  { states: ['maharashtra'], codes: ['mh'], text: '\u0928\u092e\u0938\u094d\u0915\u093e\u0930', transliteration: 'Namaskar' },
  { states: ['gujarat'], codes: ['gj'], text: '\u0a95\u0ac7\u0aae \u0a9b\u0acb', transliteration: 'Kem Cho' },
  { states: ['punjab'], codes: ['pb'], text: '\u0a38\u0a24 \u0a38\u0a4d\u0a30\u0a40 \u0a05\u0a15\u0a3e\u0a32', transliteration: 'Sat Sri Akal' },
  { states: ['west bengal'], codes: ['wb'], text: '\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09b0', transliteration: 'Nomoshkar' },
  { states: ['odisha'], codes: ['od', 'or'], text: '\u0b28\u0b2e\u0b38\u0b4d\u0b15\u0b3e\u0b30', transliteration: 'Namaskar' },
  { states: ['assam'], codes: ['as'], text: '\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09f0', transliteration: 'Namaskar' },
  { states: ['rajasthan', 'haryana'], codes: ['rj', 'hr'], text: '\u0930\u093e\u092e \u0930\u093e\u092e', transliteration: 'Ram Ram' },
  { states: ['bihar', 'uttar pradesh'], codes: ['br', 'up'], text: '\u092a\u094d\u0930\u0923\u093e\u092e', transliteration: 'Pranam' },
  { states: ['jammu and kashmir', 'kashmir'], codes: ['jk'], text: '\u0622\u062f\u0627\u0628', transliteration: 'Adaab' },
  { states: ['ladakh'], codes: ['la'], text: '\u091c\u0941\u0932\u0947', transliteration: 'Juley' },
  { states: ['goa'], codes: ['ga'], text: '\u0926\u0947\u0935 \u092c\u094b\u0930\u0947\u0902 \u0915\u0930\u0942', transliteration: 'Dev Borem Korum' },
]

const LANGUAGE_GREETINGS = [
  { prefixes: ['ta'], text: '\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd', transliteration: 'Vanakkam' },
  { prefixes: ['kn'], text: '\u0ca8\u0cae\u0cb8\u0ccd\u0c95\u0cbe\u0cb0', transliteration: 'Namaskara' },
  { prefixes: ['te'], text: '\u0c28\u0c2e\u0c38\u0c4d\u0c15\u0c3e\u0c30\u0c02', transliteration: 'Namaskaram' },
  { prefixes: ['ml'], text: '\u0d28\u0d2e\u0d38\u0d4d\u0d15\u0d3e\u0d30\u0d02', transliteration: 'Namaskaram' },
  { prefixes: ['mr'], text: '\u0928\u092e\u0938\u094d\u0915\u093e\u0930', transliteration: 'Namaskar' },
  { prefixes: ['gu'], text: '\u0a95\u0ac7\u0aae \u0a9b\u0acb', transliteration: 'Kem Cho' },
  { prefixes: ['pa'], text: '\u0a38\u0a24 \u0a38\u0a4d\u0a30\u0a40 \u0a05\u0a15\u0a3e\u0a32', transliteration: 'Sat Sri Akal' },
  { prefixes: ['bn'], text: '\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09b0', transliteration: 'Nomoshkar' },
  { prefixes: ['or'], text: '\u0b28\u0b2e\u0b38\u0b4d\u0b15\u0b3e\u0b30', transliteration: 'Namaskar' },
  { prefixes: ['as'], text: '\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09f0', transliteration: 'Namaskar' },
  { prefixes: ['hi', 'bho'], text: '\u092a\u094d\u0930\u0923\u093e\u092e', transliteration: 'Pranam' },
  { prefixes: ['ur', 'ks'], text: '\u0622\u062f\u0627\u0628', transliteration: 'Adaab' },
  { prefixes: ['kok'], text: '\u0926\u0947\u0935 \u092c\u094b\u0930\u0947\u0902 \u0915\u0930\u0942', transliteration: 'Dev Borem Korum' },
]

function normalizeLanguage(language) {
  return language.toLowerCase().replace('_', '-')
}

function normalizeRegion(region) {
  return region.toLowerCase().replace(/\s+/g, ' ').trim()
}

function getRegionFromLanguage(language) {
  const parts = normalizeLanguage(language).split('-')
  return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : ''
}

const CITY_TO_STATE = {
  pondicherry: 'puducherry',
  puducherry: 'puducherry',
  karaikal: 'puducherry',
  mahe: 'kerala',
  yanam: 'andhra pradesh',
  chandigarh: 'chandigarh',
  silvassa: 'dadra and nagar haveli',
  daman: 'daman and diu',
  diu: 'daman and diu',
  'port blair': 'andaman and nicobar islands',
  gangtok: 'sikkim',
  shillong: 'meghalaya',
  aizawl: 'mizoram',
  kohima: 'nagaland',
  imphal: 'manipur',
  itanagar: 'arunachal pradesh',
  agartala: 'tripura',
}

function getGreetingByCity(cityName) {
  if (!cityName) return null
  const normalizedCity = normalizeRegion(cityName)
  const mappedState = CITY_TO_STATE[normalizedCity]
  if (mappedState) return getGreetingByState(mappedState)
  return null
}

function getGreetingByState(regionName) {
  const normalizedRegion = normalizeRegion(regionName)
  return STATE_GREETINGS.find(({ codes = [], states }) =>
    states.includes(normalizedRegion) || codes.includes(normalizedRegion),
  ) ?? null
}

function getLocalGreetingOverride() {
  const override = window.localStorage.getItem('brandvue_region')

  if (!override) {
    return null
  }

  return getGreetingByState(override)
}

function getGreetingByBrowser() {
  if (typeof window === 'undefined') {
    return INTERNATIONAL_FALLBACK
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language].filter(Boolean)
  const normalizedLanguages = languages.map(normalizeLanguage)

  const languageMatch = LANGUAGE_GREETINGS.find(({ prefixes }) =>
    normalizedLanguages.some((language) => prefixes.some((prefix) => language === prefix || language.startsWith(`${prefix}-`))),
  )

  if (languageMatch) {
    return languageMatch
  }

  const region = languages.map(getRegionFromLanguage).find(Boolean)

  if (region === 'IN') {
    return INDIA_FALLBACK
  }

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  if (timezone === 'Asia/Kolkata' || timezone === 'Asia/Calcutta') {
    return INDIA_FALLBACK
  }

  return INTERNATIONAL_FALLBACK
}

async function fetchIpApiGreeting() {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 1400)

  try {
    const response = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()

    if (data.country_code !== 'IN') {
      return INTERNATIONAL_FALLBACK
    }

    return getGreetingByCity(data.city ?? '') ?? getGreetingByState(data.region_code ?? '') ?? getGreetingByState(data.region ?? '') ?? INDIA_FALLBACK
  } catch {
    return null
  } finally {
    window.clearTimeout(timeout)
  }
}

async function fetchIpWhoGreeting() {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 1400)

  try {
    const response = await fetch('https://ipwho.is/', {
      signal: controller.signal,
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()

    if (!data.success) {
      return null
    }

    if (data.country_code !== 'IN') {
      return INTERNATIONAL_FALLBACK
    }

    return getGreetingByCity(data.city ?? '') ?? getGreetingByState(data.region_code ?? '') ?? getGreetingByState(data.region ?? '') ?? INDIA_FALLBACK
  } catch {
    return null
  } finally {
    window.clearTimeout(timeout)
  }
}

async function fetchGeoJsGreeting() {
  const controller = new AbortController()
  const timeout = window.setTimeout(() => controller.abort(), 1400)

  try {
    const response = await fetch('https://get.geojs.io/v1/ip/geo.json', {
      signal: controller.signal,
    })

    if (!response.ok) {
      return null
    }

    const data = await response.json()

    if (data.country_code !== 'IN') {
      return INTERNATIONAL_FALLBACK
    }

    return getGreetingByCity(data.city ?? '') ?? getGreetingByState(data.region ?? '') ?? INDIA_FALLBACK
  } catch {
    return null
  } finally {
    window.clearTimeout(timeout)
  }
}

async function fetchGpsGreeting() {
  if (!navigator.geolocation) return null

  // Skip GPS if user previously denied or we already cached a region
  const gpsDenied = window.sessionStorage.getItem('brandvue_gps_denied')
  if (gpsDenied) return null

  try {
    if (navigator.permissions) {
      const perm = await navigator.permissions.query({ name: 'geolocation' })
      if (perm.state === 'denied') {
        window.sessionStorage.setItem('brandvue_gps_denied', '1')
        return null
      }
    }
  } catch {
    // permissions API not supported, still try GPS
  }

  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 2500,
        maximumAge: 600000,
        enableHighAccuracy: false,
      })
    })

    const { latitude, longitude } = position.coords
    const controller = new AbortController()
    const timer = window.setTimeout(() => controller.abort(), 2500)

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en&zoom=5`,
        { signal: controller.signal },
      )

      if (!response.ok) return null

      const data = await response.json()
      const state = data.address?.state ?? ''
      const city = data.address?.city ?? data.address?.town ?? data.address?.village ?? ''

      const result = getGreetingByCity(city) ?? getGreetingByState(state) ?? null

      // Cache the GPS-resolved region so we don't prompt again
      if (result && state) {
        window.localStorage.setItem('brandvue_region', state.toLowerCase())
      }

      return result
    } finally {
      window.clearTimeout(timer)
    }
  } catch {
    return null
  }
}

async function getGreetingByIpRegion() {
  return (await fetchGpsGreeting()) ?? (await fetchGeoJsGreeting()) ?? (await fetchIpApiGreeting()) ?? (await fetchIpWhoGreeting())
}

export function getRegionalGreeting() {
  if (typeof window === 'undefined') {
    return INTERNATIONAL_FALLBACK
  }

  return getLocalGreetingOverride() ?? getGreetingByBrowser()
}

export async function resolveRegionalGreeting() {
  if (typeof window === 'undefined') {
    return INTERNATIONAL_FALLBACK
  }

  const localOverride = getLocalGreetingOverride()
  if (localOverride) return localOverride

  const ipGreeting = await getGreetingByIpRegion()
  if (ipGreeting) return ipGreeting

  return getGreetingByBrowser()
}

export function splitGreetingText(text) {
  if (typeof Intl !== 'undefined' && typeof Intl.Segmenter === 'function') {
    return Array.from(new Intl.Segmenter(undefined, { granularity: 'grapheme' }).segment(text), (part) => part.segment)
  }

  return Array.from(text)
}
