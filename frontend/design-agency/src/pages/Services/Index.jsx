import { useEffect, useState } from 'react'
import {
  ArrowRight,
  BookCopy,
  BookOpen,
  Box,
  Boxes,
  Camera,
  ChevronDown,
  Code2,
  Compass,
  Component,
  CreditCard,
  Database,
  FileCheck,
  Fingerprint,
  Gauge,
  GitBranch,
  Globe,
  Hexagon,
  Image as ImageIcon,
  Layers,
  Layout,
  LayoutDashboard,
  LayoutGrid,
  Lightbulb,
  ListChecks,
  Megaphone,
  MessageSquare,
  Monitor,
  MonitorPlay,
  MonitorSmartphone,
  Newspaper,
  Palette,
  Plus,
  Presentation,
  Printer,
  Rocket,
  Ruler,
  Search,
  Server,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tag,
  TestTube,
  Type,
  Users,
  Wand2,
  Wrench,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import { siteConfig } from '../../config/site'
import { getSeo } from '../../services/contentService'
import { heroSketches, services } from './serviceContent.jsx'
import { SERVICE_SKETCH_MAP, SERVICE_SLUGS } from './serviceSlugs'
import ServicesPortfolio from './ServicesPortfolio.jsx'

const itemIconMap = {
  'Logo Design': Hexagon,
  'Brand Identity Design': Fingerprint,
  'Color Palette': Palette,
  'Typography System': Type,
  'Brand Guidelines': BookOpen,
  'Social Media Brand Kit': Share2,
  'Business Card & Stationery Design': CreditCard,
  'Visual Direction': Compass,
  'Website UI Design': Monitor,
  'Mobile App UI Design': Smartphone,
  'User Experience Design': Users,
  Wireframes: LayoutGrid,
  'User Flow': GitBranch,
  'Landing Page Design': Layout,
  'Dashboard Design': LayoutDashboard,
  'Prototype Design': Component,
  'Design System': Boxes,
  'Business Website Design': Globe,
  'Responsive Web Development': MonitorSmartphone,
  'Frontend Development': Code2,
  'CMS Setup': Database,
  'SEO-Ready Website Structure': Search,
  'Website Speed Optimization': Gauge,
  'Contact Form Integration': MessageSquare,
  'Website Maintenance Support': Wrench,
  'App Prototype': Component,
  'Backend Integration': Server,
  'User Dashboard': LayoutDashboard,
  'Admin Panel': ShieldCheck,
  'App Testing': TestTube,
  'Launch Support': Rocket,
  'Feature Planning': ListChecks,
  'Social Media Creative Design': Camera,
  'Ad Banner Design': Megaphone,
  'Poster Design': ImageIcon,
  'Brochure Design': BookCopy,
  'Pitch Deck Design': Presentation,
  'Presentation Design': MonitorPlay,
  'Campaign Visuals': Sparkles,
  'Marketing Collaterals': Newspaper,
  'Digital Creatives': Wand2,
  'Packaging Strategy': Lightbulb,
  'Label & Graphic Design': Tag,
  'Dieline & Structural Design': Ruler,
  'Material & Finish Specification': Layers,
  'Mockups & Print Files': Printer,
  'Brand-Consistent Visual System': Box,
  'Multi-SKU Family Design': Boxes,
  'Production-Ready Artwork': FileCheck,
}

const getItemIcon = (label) => itemIconMap[label] || Plus

const brandName = siteConfig.name

const heroFacts = [
  { value: '06', label: 'Disciplines in studio' },
  { value: '15+', label: 'Years in practice' },
  { value: '150+', label: 'Brands shipped' },
  { value: '300+', label: 'Projects delivered' },
]

const heroGridLines = Array.from({ length: 12 }, (_, index) => index)


const serviceMeta = {
  title: `Branding, UI/UX, Web, App & Packaging Design Services in India | ${brandName}`,
  description: `${brandName} offers branding, UI/UX design, web development, app development, creative design, and packaging design services for businesses that want a professional digital presence built with strategy, emotion, and impact.`,
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
  'Shelf-Ready Packaging',
  'Launch-Ready Delivery',
  'Ongoing Support Options',
]

const splitItemIconMap = {
  'Clear Project Direction': Compass,
  'Professional Visual Design': Sparkles,
  'Responsive Digital Experience': MonitorSmartphone,
  'SEO-Ready Website Structure': Search,
  'User-Friendly Interface': Users,
  'Brand Consistency': Fingerprint,
  'Conversion-Focused Layouts': Gauge,
  'Shelf-Ready Packaging': Box,
  'Launch-Ready Delivery': Rocket,
  'Ongoing Support Options': Wrench,
  'Startups launching a new idea': Lightbulb,
  'Small businesses building trust online': Globe,
  'Personal brands improving their presence': Users,
  'Companies redesigning their website': Monitor,
  'Brands preparing for campaigns': Megaphone,
  'D2C brands launching a new product': Tag,
  'Businesses needing creative support': Wand2,
}

const getSplitItemIcon = (label) => splitItemIconMap[label] || Sparkles

const audiences = [
  'Startups launching a new idea',
  'Small businesses building trust online',
  'Personal brands improving their presence',
  'Companies redesigning their website',
  'Brands preparing for campaigns',
  'D2C brands launching a new product',
  'Businesses needing creative support',
]

const whyPillars = [
  {
    number: '01',
    title: 'Strategy first',
    copy: 'Every decision starts with a goal — audience, message, and outcome before pixels.',
  },
  {
    number: '02',
    title: 'Crafted execution',
    copy: 'Considered typography, motion, and detail. Nothing shipped for the sake of shipping.',
  },
  {
    number: '03',
    title: 'Built to grow',
    copy: 'Systems and structures that scale with your brand instead of breaking under it.',
  },
]

const faqs = [
  ['What services does BrandViora India offer?', 'BrandViora India offers branding and identity, UI/UX design, web design and development, mobile app development, creative and social media design, and packaging design — six disciplines under one studio roof.'],
  ['Do you design websites for small businesses?', 'Yes. We create professional, responsive, and SEO-ready websites for startups, small businesses, personal brands, and growing companies.'],
  ['Can you handle both design and development?', 'Yes. We support projects from strategy and design to development, testing, and launch, so the final output feels consistent and complete.'],
  ['Do you provide brand identity design?', 'Yes. We create logos, color palettes, typography systems, social media brand kits, and brand guidelines to help businesses look clear and professional.'],
  ['Do you offer custom app development?', 'Yes. We design and develop practical mobile app experiences based on your idea, audience, features, and growth goals.'],
  ['Do you provide social media creative designs?', 'Yes. We create social media posts, ad banners, posters, campaign visuals, pitch decks, brochures, and other marketing creatives.'],
  ['Do you design product packaging?', 'Yes. We handle label and graphic design, dieline and structural work, material and finish specification, and print-ready artwork — built to stand out on shelf and survive real production.'],
  ['Can you help if I do not know which service I need?', 'Yes. Share your goal with us, and we will help you understand what your brand needs first.'],
]

function Services() {
  const [meta, setMeta] = useState(serviceMeta)
  const [openService, setOpenService] = useState(services[0].number)
  const [openFaq, setOpenFaq] = useState(0)

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

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? -1 : index))
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
              Six specialist disciplines, one studio — strategy, identity, UI/UX, web, apps, and packaging under one roof.
            </p>

            <div className="services-hero__actions">
              <Link className="services-hero__cta" to="/contactus">
                <span>Start a Project</span>
                <ArrowRight size={18} />
              </Link>
              <a className="services-hero__link" href="#services">
                <span>Browse Services</span>
                <span className="services-hero__link-chevron" aria-hidden="true">›</span>
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
                      {service.items.map((item) => {
                        const Icon = getItemIcon(item)
                        return (
                          <li key={item}>
                            <span className="service-panel__includes-icon" aria-hidden="true">
                              <Icon size={15} strokeWidth={1.8} />
                            </span>
                            <span className="service-panel__includes-text">{item}</span>
                          </li>
                        )
                      })}
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
        <ul className="services-split__items">
          {outcomes.map((item) => {
            const Icon = getSplitItemIcon(item)
            return (
            <li className="services-split__item" key={item}>
              <span className="services-split__item-icon" aria-hidden="true">
                <Icon size={17} strokeWidth={1.8} />
              </span>
              <span className="services-split__item-text">{item}</span>
            </li>
            )
          })}
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
        <ul className="services-split__items services-split__items--filled">
          {audiences.map((item) => {
            const Icon = getSplitItemIcon(item)
            return (
            <li className="services-split__item" key={item}>
              <span className="services-split__item-icon" aria-hidden="true">
                <Icon size={17} strokeWidth={1.8} />
              </span>
              <span className="services-split__item-text">{item}</span>
            </li>
            )
          })}
        </ul>
      </section>

      <section className="services-why">
        <div className="services-why__intro">
          <p className="eyebrow">/ Why choose us</p>
          <h2>We design with purpose, <span>not just decoration.</span></h2>
          <p>
            Every project is built with intention. We focus on what your audience needs to understand, feel,
            and do. Strategy, creativity, emotion, and clean execution — so your brand looks better, communicates
            clearly, and grows with confidence.
          </p>
        </div>

        <ul className="services-why__pillars">
          {whyPillars.map((pillar) => (
            <li className="services-why__pillar" key={pillar.number}>
              <span className="services-why__pillar-num">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="services-faq">
        <header className="services-section-heading">
          <p className="eyebrow">/ FAQ</p>
          <h2>Questions before we start.</h2>
        </header>
        <div className="services-faq__list">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFaq === index
            const panelId = `faq-panel-${index}`
            return (
              <article
                className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
                key={question}
              >
                <button
                  type="button"
                  className="faq-item__trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="faq-item__num">{`0${index + 1}`}</span>
                  <span className="faq-item__question">{question}</span>
                  <span className="faq-item__plus" aria-hidden="true">+</span>
                </button>
                <div
                  id={panelId}
                  className="faq-item__answer"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <div className="faq-item__answer-inner">
                    <p>{answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

    </main>
  )
}

export default Services
