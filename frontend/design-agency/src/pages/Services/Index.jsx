import { useEffect, useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import { siteConfig } from '../../config/site'
import { getSeo } from '../../services/contentService'
import { heroSketches, services } from './serviceContent.jsx'
import { SERVICE_SKETCH_MAP, SERVICE_SLUGS } from './serviceSlugs'
import ServicesPortfolio from './ServicesPortfolio.jsx'

const brandName = siteConfig.name

const heroFacts = [
  { value: '05', label: 'Disciplines in studio' },
  { value: '15+', label: 'Years in practice' },
  { value: '150+', label: 'Brands shipped' },
  { value: '300+', label: 'Projects delivered' },
]

const heroGridLines = Array.from({ length: 12 }, (_, index) => index)


const serviceMeta = {
  title: `Branding, UI/UX, Web & App Development Services in India | ${brandName}`,
  description: `${brandName} offers branding, UI/UX design, web development, app development, and creative design services for businesses that want a professional digital presence built with strategy, emotion, and impact.`,
  canonicalPath: '/services',
  schemaType: 'CollectionPage',
}


const processSteps = [
  ['01', 'Discover', 'We understand your business, audience, goals, and challenges before starting the work.'],
  ['02', 'Plan', 'We define the structure, creative approach, features, and content direction.'],
  ['03', 'Design', 'We create layouts, interfaces, and brand elements that connect with your audience.'],
  ['04', 'Build', 'We develop, refine, test, and prepare everything for launch.'],
  ['05', 'Support', 'We guide handover, updates, improvements, and support options after delivery.'],
]

const outcomes = [
  'Clear Project Direction',
  'Professional Visual Design',
  'Responsive Digital Experience',
  'SEO-Ready Website Structure',
  'User-Friendly Interface',
  'Brand Consistency',
  'Conversion-Focused Layouts',
  'Launch-Ready Delivery',
  'Ongoing Support Options',
]

const audiences = [
  'Startups launching a new idea',
  'Small businesses building trust online',
  'Personal brands improving their presence',
  'Companies redesigning their website',
  'Brands preparing for campaigns',
  'Businesses needing creative support',
]

const faqs = [
  ['What services does BrandView India offer?', 'BrandView India offers branding, UI/UX design, web design and development, app development, and creative design services for businesses that want a stronger digital presence.'],
  ['Do you design websites for small businesses?', 'Yes. We create professional, responsive, and SEO-ready websites for startups, small businesses, personal brands, and growing companies.'],
  ['Can you handle both design and development?', 'Yes. We support projects from strategy and design to development, testing, and launch, so the final output feels consistent and complete.'],
  ['Do you provide brand identity design?', 'Yes. We create logos, color palettes, typography systems, social media brand kits, and brand guidelines to help businesses look clear and professional.'],
  ['Do you offer custom app development?', 'Yes. We design and develop practical mobile app experiences based on your idea, audience, features, and growth goals.'],
  ['Do you provide social media creative designs?', 'Yes. We create social media posts, ad banners, posters, campaign visuals, pitch decks, brochures, and other marketing creatives.'],
  ['Can you help if I do not know which service I need?', 'Yes. Share your goal with us, and we will help you understand what your brand needs first.'],
]

function Services() {
  const [meta, setMeta] = useState(serviceMeta)
  const [openService, setOpenService] = useState(services[0].number)

  const activeSketchId = SERVICE_SKETCH_MAP[openService] || heroSketches[0].id
  const activeSketch =
    heroSketches.find((sketch) => sketch.id === activeSketchId) || heroSketches[0]

  useEffect(() => {
    getSeo('/services').then((seo) => {
      setMeta({ ...serviceMeta, ...seo, title: serviceMeta.title, description: serviceMeta.description })
    })
  }, [])

  const toggleService = (number) => {
    setOpenService((current) => (current === number ? null : number))
  }

  return (
    <main className="services-page" id="main-content">
      <SEO meta={meta} />

      <section className="services-hero">
        <div className="services-hero__grid-box grid-box" aria-hidden="true">
          {heroGridLines.map((line) => (
            <div className="grid-line" key={line}>
              <div className="grid-line-inner" />
            </div>
          ))}
        </div>

        <div className="services-hero__inner">
          <p className="eyebrow services-hero__eyebrow">/ Services</p>

          <div className="services-hero__headline">
            <h1 className="services-hero__title">
              Brand systems. Interfaces. Frontends. Built end to end.
            </h1>

            <svg
              key={activeSketch.id}
              className="services-hero__sketch"
              viewBox="0 0 360 380"
              fill="none"
              aria-hidden="true"
              role="img"
            >
              {activeSketch.render()}
            </svg>
          </div>

          <div className="services-hero__support">
            <p className="services-hero__subtitle">
              Five disciplines, one studio — strategy, identity, UI/UX, web, and apps under one roof.
            </p>

            <div className="services-hero__actions">
              <Link className="services-hero__cta" to="/contactus">
                <span>Start a project</span>
                <ArrowRight size={18} />
              </Link>
              <a className="services-hero__link" href="#services">
                <span>Browse services</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <dl className="services-hero__facts" aria-label="Studio at a glance">
            {heroFacts.map((fact) => (
              <div className="services-hero__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="services-list" id="services" aria-label="Services">
        {services.map((service) => {
          const isOpen = openService === service.number
          const panelId = `service-panel-${service.number}`

          return (
            <article
              className={`service-panel${isOpen ? ' service-panel--open' : ''}`}
              key={service.number}
            >
              <button
                type="button"
                className="service-panel__trigger"
                onClick={() => toggleService(service.number)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span className="service-panel__num">{service.number}</span>
                <span className="service-panel__title-block">
                  <span className="service-panel__label">{service.title}</span>
                </span>
                <span className="service-panel__chevron" aria-hidden="true">
                  <ChevronDown size={22} strokeWidth={1.8} />
                </span>
              </button>

              <div
                id={panelId}
                className="service-panel__body"
                role="region"
                aria-hidden={!isOpen}
              >
                <div className="service-panel__body-inner">
                  <h2 className="service-panel__heading">{service.heading}</h2>

                  {service.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  <div className="service-panel__includes" aria-label={`${service.title} deliverables`}>
                    <p className="service-panel__includes-label">What we provide</p>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-panel__actions">
                    <Link className="service-panel__cta" to="/contactus">
                      <span>{service.cta}</span>
                      <ArrowRight size={16} />
                    </Link>
                    <Link className="service-panel__more" to={`/services/${SERVICE_SLUGS[service.number]}`}>
                      <span>View full page</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      <ServicesPortfolio />

      <section className="services-process">
        <header className="services-section-heading">
          <p className="eyebrow">/ Process</p>
          <h2>A simple process, built for clarity and confidence.</h2>
        </header>
        <ol className="services-process__list">
          {processSteps.map(([number, title, copy]) => (
            <li className="process-step" key={number}>
              <span className="process-step__num">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="services-split">
        <div className="services-split__lead">
          <p className="eyebrow">/ What you get</p>
          <h2>Everything you need to move from idea to launch.</h2>
          <p>
            When you work with {brandName}, you get more than design. You get clear creative direction,
            professional execution, and a digital experience built to support your business goals.
          </p>
        </div>
        <ul className="services-split__chips">
          {outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="services-split services-split--quiet">
        <div className="services-split__lead">
          <p className="eyebrow">/ Who we help</p>
          <h2>Built for businesses ready to grow with confidence.</h2>
          <p>
            Whether you&apos;re launching something new or improving what already exists, we help you create a brand
            experience that feels clear, trustworthy, and ready for growth.
          </p>
        </div>
        <ul className="services-split__chips services-split__chips--filled">
          {audiences.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="services-why">
        <p className="eyebrow">/ Why choose us</p>
        <h2>We design with purpose, <span>not just decoration.</span></h2>
        <p>
          Every project is built with intention. We focus on what your audience needs to understand, feel,
          and do. Strategy, creativity, emotion, and clean execution — so your brand looks better, communicates
          clearly, and grows with confidence.
        </p>
      </section>

      <section className="services-faq">
        <header className="services-section-heading">
          <p className="eyebrow">/ FAQ</p>
          <h2>Questions before we start.</h2>
        </header>
        <div className="services-faq__list">
          {faqs.map(([question, answer], index) => (
            <article className="faq-item" key={question}>
              <span className="faq-item__num">{`0${index + 1}`}</span>
              <div className="faq-item__body">
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
              <span className="faq-item__plus" aria-hidden="true">+</span>
            </article>
          ))}
        </div>
      </section>

      <section className="services-final-cta">
        <div className="services-final-cta__inner">
          <p className="eyebrow services-final-cta__eyebrow">/ Next move</p>
          <h2>
            Not sure what your brand needs yet? <span>That&apos;s completely okay.</span>
          </h2>
          <p>
            Share your idea, goal, or challenge — we&apos;ll help you find the right direction.
          </p>
          <div className="services-final-cta__actions">
            <Link className="services-final-cta__button" to="/contactus">
              <span>Start a conversation</span>
              <ArrowRight size={18} />
            </Link>
            <a className="services-final-cta__link" href="mailto:hello@brandvue.com">
              <span>hello@brandvue.com</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services
