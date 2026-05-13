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

// Invisible fallback at 100vh so the dark footer stays below the fold while
// the next chunk loads (otherwise it would peek into view as a black bar).
// Prefetch-on-hover means this is usually unmounted within a frame or two.
function RouteFallback() {
  return <div aria-hidden="true" style={{ minHeight: '100vh' }} />
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
