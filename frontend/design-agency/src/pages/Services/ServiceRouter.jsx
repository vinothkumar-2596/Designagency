import { useParams } from 'react-router-dom'
import { SLUG_TO_NUMBER } from './serviceSlugs'
import ServiceDetail from './ServiceDetail.jsx'
import ContentDetail from '../ContentDetail/Index.jsx'

// Both children are imported eagerly so the dropdown-click → service-page
// transition never has to wait on a second async chunk. The outer
// `/services/:slug` route is already hover-prefetched in Layout, so by the
// time the user clicks the chunk for ServiceRouter is already in cache —
// and now everything it renders is too. No nested Suspense, no blank gap.
function ServiceRouter() {
  const { slug } = useParams()

  return SLUG_TO_NUMBER[slug] ? <ServiceDetail /> : <ContentDetail type="services" />
}

export default ServiceRouter
