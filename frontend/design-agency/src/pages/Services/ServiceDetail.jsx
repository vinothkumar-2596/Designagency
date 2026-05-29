import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Gauge, Sparkles, Users } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
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
              <Button as={Link} to="/contactus" className="services-hero__cta">
                <span>{service.cta}</span>
                <ArrowRight size={18} />
              </Button>
              <Button as={Link} to="/services" variant="secondary" className="services-hero__link">
                <span>Browse other services</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {service.banner ? (
        <section
          className="service-banner"
          aria-label={service.banner.badge ?? 'Collaborate'}
        >
          <div className="service-banner__pastels" aria-hidden="true">
            <span className="service-banner__blob service-banner__blob--peach" />
            <span className="service-banner__blob service-banner__blob--butter" />
            <span className="service-banner__blob service-banner__blob--rose" />
            <span className="service-banner__shape service-banner__shape--square" />
            <span className="service-banner__shape service-banner__shape--circle" />

            <div className="service-banner__swatches">
              <span className="service-banner__swatches-label">Palette</span>
              <span className="service-banner__swatch service-banner__swatch--peach" />
              <span className="service-banner__swatch service-banner__swatch--butter" />
              <span className="service-banner__swatch service-banner__swatch--mint" />
              <span className="service-banner__swatch service-banner__swatch--lilac" />
            </div>

            <div className="service-banner__tag service-banner__tag--research">
              <span className="service-banner__tag-dot" />
              Research
            </div>
          </div>

          <div className="service-banner__inner">
            <p className="service-banner__badge">
              <span className="service-banner__badge-dot" aria-hidden="true" />
              {service.banner.badge ?? 'Collaborate with the studio'}
            </p>

            <h2 className="service-banner__heading">{service.banner.heading}</h2>

            <div className="service-banner__support">
              {service.banner.lede ? (
                <p className="service-banner__lede">{service.banner.lede}</p>
              ) : null}

              <div className="service-banner__actions">
                <Link to={service.banner.cta?.to ?? '/contactus'} className="service-banner__cta">
                  <span>{service.banner.cta?.label ?? 'Start a project'}</span>
                  <ArrowUpRight size={16} strokeWidth={2.4} aria-hidden="true" />
                </Link>
                {service.banner.secondary ? (
                  <Link to={service.banner.secondary.to} className="service-banner__link">
                    <span>{service.banner.secondary.label}</span>
                    <ArrowRight size={14} strokeWidth={2.4} aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <ServicesPortfolio
        heading={`${service.title} · Featured work`}
        lede={`Recent ${service.title.toLowerCase()} projects we've shipped for ambitious teams.`}
        activeSlug={slug}
      />

      {service.measuredInTrust ? (
        <section className="about-stats" aria-label={service.measuredInTrust.eyebrow}>
          <div className="about-stats__paper" aria-hidden="true" />
          <svg className="about-stats__doodle about-stats__doodle--tl" viewBox="0 0 110 70" aria-hidden="true">
            <path
              d="M6 52 C 24 10, 58 4, 100 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M88 10 L100 16 L94 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg className="about-stats__doodle about-stats__doodle--br" viewBox="0 0 140 70" aria-hidden="true">
            <path
              d="M6 20 C 34 8, 70 46, 134 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="52" r="1.8" fill="currentColor" />
            <circle cx="28" cy="58" r="1.4" fill="currentColor" opacity="0.7" />
          </svg>

          <div className="about-stats__inner">
            <header className="about-stats__lead">
              <p className="about-stats__eyebrow">
                <span className="about-stats__eyebrow-rule" aria-hidden="true" />
                {service.measuredInTrust.eyebrow}
                <span className="about-stats__eyebrow-mark" aria-hidden="true">✶</span>
              </p>

              <h2 className="about-stats__title">
                {service.measuredInTrust.before}{' '}
                <span className="about-stats__chip about-stats__chip--users" aria-hidden="true">
                  <Users strokeWidth={1.6} />
                </span>{' '}
                {service.measuredInTrust.middle}{' '}
                <span className="about-stats__highlight">
                  {service.measuredInTrust.highlight}
                  <svg className="about-stats__swoosh" viewBox="0 0 160 26" aria-hidden="true">
                    <path
                      d="M4 18 C 30 6, 72 24, 118 10 C 132 5, 144 8, 156 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{' '}
                <span className="about-stats__chip about-stats__chip--gauge" aria-hidden="true">
                  <Gauge strokeWidth={1.6} />
                </span>{' '}
                {service.measuredInTrust.after}
                <span className="about-stats__chip about-stats__chip--spark" aria-hidden="true">
                  <Sparkles strokeWidth={1.6} />
                </span>
                .
              </h2>

              <p className="about-stats__copy">{service.measuredInTrust.copy}</p>
            </header>

            <div className="about-stats__visual" aria-hidden="true">
              <svg
                className="about-stats__poster"
                viewBox="0 0 560 560"
                fill="none"
                role="img"
              >
                <defs>
                  <pattern id="serviceStatsDots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.1" fill="rgba(10,13,18,0.11)" />
                  </pattern>
                  <clipPath id="serviceStatsCircleClip">
                    <circle cx="200" cy="270" r="180" />
                  </clipPath>
                </defs>

                <rect x="0" y="0" width="560" height="560" fill="url(#serviceStatsDots)" />

                {slug === 'packaging' ? (
                  <g clipPath="url(#serviceStatsCircleClip)">
                    {/* Warm cream wash inside the circle to match the section background */}
                    <rect x="20" y="90" width="360" height="360" fill="#fff4e7" />

                    {/* Tiny doodle: stitches on the left */}
                    <g stroke="#0a0d12" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.5">
                      <path d="M58 220 q8 -6 16 0" />
                      <path d="M58 236 q8 -6 16 0" />
                      <circle cx="346" cy="244" r="2" fill="#0a0d12" />
                      <circle cx="354" cy="262" r="2" fill="#0a0d12" />
                    </g>

                    {/* Main isometric gift box */}
                    {/* Top face (light butter) */}
                    <path
                      d="M90 210 L160 160 L320 160 L250 210 Z"
                      stroke="#0a0d12" strokeWidth="3" fill="#fde6b6" strokeLinejoin="round"
                    />
                    {/* Right side face (peach) */}
                    <path
                      d="M250 210 L320 160 L320 320 L250 370 Z"
                      stroke="#0a0d12" strokeWidth="3" fill="#f9c897" strokeLinejoin="round"
                    />
                    {/* Front face (orange) */}
                    <rect
                      x="90" y="210" width="160" height="160" rx="3"
                      stroke="#0a0d12" strokeWidth="3" fill="#ff8c4a"
                    />

                    {/* Vertical ribbon — front strip */}
                    <rect x="160" y="210" width="20" height="160" fill="#720d28" />
                    <line x1="160" y1="210" x2="160" y2="370" stroke="#0a0d12" strokeWidth="2" />
                    <line x1="180" y1="210" x2="180" y2="370" stroke="#0a0d12" strokeWidth="2" />
                    {/* Vertical ribbon — top strip (over top face) */}
                    <path
                      d="M160 210 L230 160 L250 160 L180 210 Z"
                      fill="#720d28" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
                    />
                    {/* Vertical ribbon — edge shadow on the side */}
                    <path d="M180 210 L250 160 L250 168 L180 218 Z" fill="#cc4f00" opacity="0.55" />

                    {/* Bow on top of box */}
                    <g transform="translate(220, 162)">
                      {/* Left loop */}
                      <path
                        d="M0 0 C -26 -22, -42 -8, -28 7 L -6 5 Z"
                        fill="#720d28" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
                      />
                      {/* Right loop */}
                      <path
                        d="M0 0 C 26 -22, 42 -8, 28 7 L 6 5 Z"
                        fill="#720d28" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
                      />
                      {/* Tails */}
                      <path
                        d="M -3 6 L -8 24 L -2 22 L -2 8 Z"
                        fill="#720d28" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
                      />
                      <path
                        d="M 3 6 L 8 24 L 2 22 L 2 8 Z"
                        fill="#720d28" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
                      />
                      {/* Knot */}
                      <ellipse cx="0" cy="3" rx="8" ry="6" fill="#cc4f00" stroke="#0a0d12" strokeWidth="2" />
                    </g>

                    {/* Small brand label / check sticker on the front face */}
                    <g transform="translate(108, 318)">
                      <rect x="0" y="0" width="42" height="40" rx="4" fill="#fbfaf6" stroke="#0a0d12" strokeWidth="2" />
                      <path
                        d="M9 16 L18 24 L34 8"
                        stroke="#720d28" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
                      />
                    </g>

                    {/* Decorative sparkles around the scene */}
                    <g stroke="#720d28" strokeWidth="3" strokeLinecap="round" fill="none">
                      <g transform="translate(58, 170)">
                        <line x1="0" y1="-11" x2="0" y2="11" />
                        <line x1="-11" y1="0" x2="11" y2="0" />
                        <line x1="-8" y1="-8" x2="8" y2="8" />
                        <line x1="8" y1="-8" x2="-8" y2="8" />
                      </g>
                      <g transform="translate(346, 388)">
                        <line x1="0" y1="-9" x2="0" y2="9" />
                        <line x1="-9" y1="0" x2="9" y2="0" />
                      </g>
                    </g>
                  </g>
                ) : (
                  <image
                    href="https://res.cloudinary.com/dofapr3pk/image/upload/v1777996089/Untitled-2_zhtqot.jpg"
                    x="20"
                    y="90"
                    width="360"
                    height="360"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#serviceStatsCircleClip)"
                  />
                )}
                <circle cx="200" cy="270" r="180" fill="#720d28" fillOpacity="0.045" clipPath="url(#serviceStatsCircleClip)" />

                <g transform="rotate(5 280 460)">
                  <rect x="128" y="426" width="300" height="72" rx="14" fill="#0a0d12" />
                  <rect className="about-stats__bar about-stats__bar--1" x="154" y="454" width="50" height="7" rx="3.5" fill="#720d28" />
                  <rect className="about-stats__bar about-stats__bar--2" x="218" y="454" width="128" height="7" rx="3.5" fill="rgba(255,255,255,0.34)" />
                  <rect className="about-stats__bar about-stats__bar--3" x="360" y="454" width="38" height="7" rx="3.5" fill="rgba(255,255,255,0.18)" />
                </g>

                <path
                  d="M40 70 C 130 36, 250 44, 330 80"
                  stroke="#0a0d12"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />

                <g stroke="#720d28" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.84" transform="translate(478 80)">
                  <line x1="0" y1="-32" x2="0" y2="32" />
                  <line x1="-32" y1="0" x2="32" y2="0" />
                  <line x1="-23" y1="-23" x2="23" y2="23" />
                  <line x1="23" y1="-23" x2="-23" y2="23" />
                </g>

                <g transform="translate(46 522)">
                  <circle cx="0" cy="0" r="13" fill="#720d28" />
                  <circle cx="32" cy="0" r="13" fill="#f4e58a" />
                  <circle cx="64" cy="0" r="13" fill="#0a0d12" />
                  <circle cx="96" cy="0" r="13" fill="#fbfaf6" stroke="#0a0d12" strokeWidth="2" />
                </g>

                <g fill="#0a0d12">
                  <circle cx="498" cy="514" r="5" />
                  <circle cx="516" cy="514" r="5" />
                  <circle cx="534" cy="514" r="5" />
                </g>
              </svg>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  )
}

export default ServiceDetail
