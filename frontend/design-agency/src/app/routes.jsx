import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Home = lazy(() => import('../pages/Home/Index.jsx'))
const Services = lazy(() => import('../pages/Services/Index.jsx'))
const ServiceRouter = lazy(() => import('../pages/Services/ServiceRouter.jsx'))
const CaseStudies = lazy(() => import('../pages/CaseStudies/Index.jsx'))
const Blog = lazy(() => import('../pages/Blog/Index.jsx'))
const AboutUs = lazy(() => import('../pages/AboutUs/Index.jsx'))
const ContactUs = lazy(() => import('../pages/ContactUs/Index.jsx'))
const ContentDetail = lazy(() => import('../pages/ContentDetail/Index.jsx'))
const NotFound = lazy(() => import('../pages/NotFound/Index.jsx'))

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <main className="page-loading page-loading--screen" id="main-content" aria-live="polite">
          <span className="page-loading__mark" aria-hidden="true" />
          <span className="page-loading__text">Preparing your experience</span>
        </main>
      }
    >
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
