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
    <Suspense fallback={<div aria-hidden="true" style={{ minHeight: '100vh' }} />}>
      <Component />
    </Suspense>
  )
}

export default ServiceRouter
