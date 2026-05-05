import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import { siteConfig } from '../../config/site'
import { getSeo } from '../../services/contentService'
import { SERVICE_SKETCH_MAP, SLUG_TO_NUMBER } from './serviceSlugs'
import { heroSketches, services } from './serviceContent.jsx'
import ServicesPortfolio from './ServicesPortfolio.jsx'

const brandName = siteConfig.name

const heroGridLines = Array.from({ length: 12 }, (_, index) => index)

function ServiceDetail() {
  const { slug } = useParams()
  const number = SLUG_TO_NUMBER[slug]
  const service = services.find((item) => item.number === number)

  const [meta, setMeta] = useState(null)

  useEffect(() => {
    if (!service) return
    const path = `/services/${slug}`
    const fallback = {
      title: `${service.title} | ${brandName}`,
      description: service.body[0],
      canonicalPath: path,
      schemaType: 'Service',
    }
    setMeta(fallback)
    getSeo(path).then((seo) => {
      setMeta((current) => ({ ...fallback, ...(seo || {}) }))
    })
  }, [slug, service])

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const sketchId = SERVICE_SKETCH_MAP[number]
  const sketch = heroSketches.find((item) => item.id === sketchId) || heroSketches[0]

  return (
    <main className="services-page service-detail-page" id="main-content">
      <SEO meta={meta} />

      <section className="services-hero service-detail-hero">
        <div className="services-hero__grid-box grid-box" aria-hidden="true">
          {heroGridLines.map((line) => (
            <div className="grid-line" key={line}>
              <div className="grid-line-inner" />
            </div>
          ))}
        </div>

        <div className="services-hero__inner">
          <Link to="/services" className="service-detail-hero__back">
            <ArrowLeft size={14} strokeWidth={2.4} aria-hidden="true" />
            <span>All services</span>
          </Link>

          <p className="eyebrow services-hero__eyebrow">/ {service.number} · {service.title}</p>

          <div className="services-hero__headline">
            <h1 className="services-hero__title">{service.heading}</h1>

            <svg
              key={sketch.id}
              className="services-hero__sketch"
              viewBox="0 0 360 380"
              fill="none"
              aria-hidden="true"
              role="img"
            >
              {sketch.render()}
            </svg>
          </div>

          <div className="services-hero__support">
            <p className="services-hero__subtitle">{service.body[0]}</p>

            <div className="services-hero__actions">
              <Link className="services-hero__cta" to="/contactus">
                <span>{service.cta}</span>
                <ArrowRight size={18} />
              </Link>
              <Link className="services-hero__link" to="/services">
                <span>Browse other services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesPortfolio
        heading={`${service.title} · Featured work`}
        lede={`Recent ${service.title.toLowerCase()} projects we've shipped for ambitious teams.`}
        activeSlug={slug}
      />
    </main>
  )
}

export default ServiceDetail
