import { lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { SLUG_TO_NUMBER } from './serviceSlugs'

const ServiceDetail = lazy(() => import('./ServiceDetail.jsx'))
const ContentDetail = lazy(() => import('../ContentDetail/Index.jsx'))

function ServiceRouter() {
  const { slug } = useParams()
  const Component = SLUG_TO_NUMBER[slug]
    ? ServiceDetail
    : () => <ContentDetail type="services" />

  return (
    <Suspense
      fallback={
        <main className="page-loading page-loading--screen" id="main-content" aria-live="polite">
          <span className="page-loading__mark" aria-hidden="true" />
          <span className="page-loading__text">Preparing your experience</span>
        </main>
      }
    >
      <Component />
    </Suspense>
  )
}

export default ServiceRouter
