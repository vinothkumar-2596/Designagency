export const SERVICE_SLUGS = {
  '01': 'branding',
  '02': 'ui-ux',
  '03': 'web',
  '04': 'app',
  '05': 'creative',
}

export const SLUG_TO_NUMBER = Object.fromEntries(
  Object.entries(SERVICE_SLUGS).map(([number, slug]) => [slug, number])
)

export const SERVICE_SKETCH_MAP = {
  '01': 'brand',
  '02': 'ux',
  '03': 'web',
  '04': 'app',
  '05': 'brand',
}
