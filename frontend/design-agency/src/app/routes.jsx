import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { getLoader } from './routePrefetch'

const Home = lazy(getLoader('/'))
const Services = lazy(getLoader('/services'))
const ServiceRouter = lazy(getLoader('/services/:slug'))
const CaseStudies = lazy(getLoader('/case-studies'))
const Blog = lazy(getLoader('/blog'))
const AboutUs = lazy(getLoader('/aboutus'))
const ContactUs = lazy(getLoader('/contactus'))
const ContentDetail = lazy(getLoader('/blog/:slug'))
const NotFound = lazy(getLoader('*'))

// Tiny invisible fallback: previous page stays painted while the next chunk
// loads. With prefetch-on-hover the chunk is almost always already cached,
// so the spinner would just flash for ~10ms and feel like jank.
function RouteFallback() {
  return <div aria-hidden="true" style={{ minHeight: '60vh' }} />
}

function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceRouter />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<ContentDetail type="case-studies" />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ContentDetail type="blog" />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
