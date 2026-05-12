// Central registry of route chunk loaders.
// Used by both the router (lazy()) and the navigation prefetcher
// so each chunk has a single import site and Vite can dedupe it cleanly.

const loaders = {
  '/': () => import('../pages/Home/Index.jsx'),
  '/services': () => import('../pages/Services/Index.jsx'),
  '/services/:slug': () => import('../pages/Services/ServiceRouter.jsx'),
  '/case-studies': () => import('../pages/CaseStudies/Index.jsx'),
  '/case-studies/:slug': () => import('../pages/ContentDetail/Index.jsx'),
  '/blog': () => import('../pages/Blog/Index.jsx'),
  '/blog/:slug': () => import('../pages/ContentDetail/Index.jsx'),
  '/aboutus': () => import('../pages/AboutUs/Index.jsx'),
  '/contactus': () => import('../pages/ContactUs/Index.jsx'),
  '*': () => import('../pages/NotFound/Index.jsx'),
}

// In-flight promise cache so we never kick off the same import twice.
const inflight = new Map()

function resolveLoader(path) {
  if (loaders[path]) return loaders[path]
  // For /services/<anything>, /case-studies/<anything>, /blog/<anything>
  // hand back the dynamic-segment loader, so dropdown items prefetch
  // their detail-route bundles too.
  if (path.startsWith('/services/')) return loaders['/services/:slug']
  if (path.startsWith('/case-studies/')) return loaders['/case-studies/:slug']
  if (path.startsWith('/blog/')) return loaders['/blog/:slug']
  return null
}

export function getLoader(key) {
  return loaders[key]
}

export function prefetchRoute(path) {
  if (!path) return
  if (inflight.has(path)) return inflight.get(path)
  const loader = resolveLoader(path)
  if (!loader) return
  const promise = loader().catch(() => {
    // Swallow — a failed prefetch is harmless, the actual nav will retry.
    inflight.delete(path)
  })
  inflight.set(path, promise)
  return promise
}

// After first paint, warm the chunks for the rest of the primary nav in idle
// time so subsequent clicks are essentially instant. Bails out cleanly when
// the browser doesn't support requestIdleCallback (Safari).
const IDLE_PREFETCH = ['/services', '/case-studies', '/aboutus', '/contactus', '/blog']

export function warmIdleRoutes(currentPath = '') {
  if (typeof window === 'undefined') return
  const schedule =
    window.requestIdleCallback ||
    ((cb) => window.setTimeout(cb, 1500))

  schedule(() => {
    for (const path of IDLE_PREFETCH) {
      if (path === currentPath) continue
      prefetchRoute(path)
    }
  })
}
