import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Compass,
  Eye,
  Gauge,
  Layers,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import SEO from '../../components/SEO/SEO'
import { getSeo } from '../../services/contentService'

const heroPillars = [
  {
    title: 'Positioning with substance',
    copy: 'We define the audience, offer, and message before visuals start driving decisions.',
  },
  {
    title: 'Interface systems that scale',
    copy: 'Reusable components, patterns, and documentation keep the work sharp after launch.',
  },
  {
    title: 'Launch-ready execution',
    copy: 'Accessibility, responsive behaviour, and performance are built in from the first pass.',
  },
]

const heroMetrics = [
  'Strategy workshops',
  'Design systems',
  'Accessible frontend',
]

const studioLenses = [
  {
    id: 'strategy',
    label: 'Strategy',
    summary: 'Offer, audience, narrative',
    eyebrow: 'Strategy lens',
    title: 'Brand-first thinking before interface polish.',
    copy: 'Positioning, voice, and audience clarity stay visible through every stage of the project, so design choices always have a reason to exist.',
    callout: 'We remove guesswork early so visual direction, content, and conversion decisions all point at the same outcome.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Team discussing work around laptops in a collaborative meeting',
    cards: [
      { label: 'Audience fit', value: 'Clear market focus' },
      { label: 'Offer clarity', value: 'Sharper value story' },
      { label: 'Narrative', value: 'Messaging with hierarchy' },
    ],
  },
  {
    id: 'systems',
    label: 'Systems',
    summary: 'Components, content, consistency',
    eyebrow: 'Systems lens',
    title: 'Design systems that survive handoff and keep momentum.',
    copy: 'Reusable interface patterns, content logic, and production-aware layouts make the work easier to extend once real teams inherit it.',
    callout: 'Instead of a single polished page, teams get a design language with repeatable rules and durable structure.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Designers and strategists collaborating in a bright studio workspace',
    cards: [
      { label: 'Components', value: 'Reusable UI patterns' },
      { label: 'Content flow', value: 'Scannable information systems' },
      { label: 'Team handoff', value: 'Less friction after launch' },
    ],
  },
  {
    id: 'launch',
    label: 'Launch',
    summary: 'Accessibility, responsiveness, speed',
    eyebrow: 'Launch lens',
    title: 'Execution with accessibility and performance built in.',
    copy: 'We close the gap between concept and production with responsive QA, semantic markup, and performance-aware frontend decisions from the first pass.',
    callout: 'The final experience is meant to ship cleanly, adapt across screens, and hold up under real use.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Team reviewing ideas and launch materials in a strategy session',
    cards: [
      { label: 'Accessibility', value: 'More inclusive interactions' },
      { label: 'Responsive QA', value: 'Confidence across devices' },
      { label: 'Performance', value: 'Lean delivery decisions' },
    ],
  },
]

const stats = [
  {
    label: 'Experience',
    value: '15+',
    copy: 'years shaping market-ready brands, campaigns, and digital systems.',
  },
  {
    label: 'Clients',
    value: '150+',
    copy: 'ambitious teams supported through strategy, design, and launch.',
  },
  {
    label: 'Team',
    value: '55+',
    copy: 'specialists across brand, content, web, and performance growth.',
  },
  {
    label: 'Projects',
    value: '300+',
    copy: 'brand and digital projects delivered with measurable momentum.',
  },
]

const values = [
  {
    title: 'Strategy First',
    copy: 'Every project begins with deep positioning work. We define the why before we design the what.',
    icon: Compass,
  },
  {
    title: 'Accessible Design',
    copy: 'We build interfaces that work for everyone through semantic markup, proper contrast, and keyboard-friendly patterns.',
    icon: Eye,
  },
  {
    title: 'Performance-Driven',
    copy: 'Speed is a feature. We optimise assets, minimise render-blocking, and ship lean, fast experiences.',
    icon: Gauge,
  },
  {
    title: 'Scalable Systems',
    copy: 'Our design systems and component libraries are built to grow with your team and your ambitions.',
    icon: Layers,
  },
]

const processSteps = [
  {
    title: 'Define the direction',
    copy: 'We align on positioning, audience, offer, and the tone the brand needs to own.',
  },
  {
    title: 'Build the design language',
    copy: 'Layouts, interaction patterns, and content structure are designed as a connected system.',
  },
  {
    title: 'Ship with confidence',
    copy: 'Responsive QA, accessibility checks, and performance-minded frontend close the gap between design and launch.',
  },
]

const heroGridLines = Array.from({ length: 12 }, (_, index) => index)

function AboutUs() {
  const [meta, setMeta] = useState(null)
  const [activeLensId, setActiveLensId] = useState(studioLenses[0].id)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    getSeo('/aboutus').then(setMeta)
  }, [])

  useEffect(() => {
    if (hasInteracted || typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveLensId((currentId) => {
        const currentIndex = studioLenses.findIndex((item) => item.id === currentId)
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % studioLenses.length
        return studioLenses[nextIndex].id
      })
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [hasInteracted])

  const activeLens = studioLenses.find((item) => item.id === activeLensId) ?? studioLenses[0]

  const handleLensSelect = (lensId) => {
    setHasInteracted(true)
    setActiveLensId(lensId)
  }

  return (
    <main className="about-us-page" id="main-content">
      <SEO meta={meta} />

      <section className="about-hero">
        <div className="about-hero__grid-box grid-box" aria-hidden="true">
          {heroGridLines.map((line) => (
            <div className="grid-line" key={line}>
              <div className="grid-line-inner" />
            </div>
          ))}
        </div>

        <div className="about-hero__inner">
          <div className="about-hero__content">
            <p className="eyebrow">About us</p>
            <h1>We combine creative direction with production&#8209;ready digital craft.</h1>
            <p className="about-hero__subtitle">
              Our work sits where brand strategy, interface design, and accessible frontend execution meet.
            </p>

            <div className="about-hero__actions">
              <Button as={Link} to="/contactus" className="about-button">
                <span>Start a project</span>
                <ArrowRight size={18} />
              </Button>
              <Link className="about-hero__link" to="/services">
                <span>Explore services</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <aside className="about-hero__panel" aria-label="How Brandvue works">
            <div className="about-hero__panel-copy">
              <p className="about-hero__panel-eyebrow">Built with intent</p>
              <p className="about-hero__panel-title">
                Strategy, interface design, and frontend execution stay in the same room.
              </p>
              <p>
                That keeps the work coherent from the first workshop to the final responsive build.
              </p>
            </div>

            <div className="about-hero__pillar-list" role="list">
              {heroPillars.map((item) => (
                <article className="about-hero__pillar" key={item.title} role="listitem">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>

            <div className="about-hero__metrics" aria-label="Core capabilities">
              {heroMetrics.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="about-story" aria-labelledby="story-heading">
        <div className="about-story__inner">
          <div className="about-story__content">
            <p className="eyebrow">( 01 ) Studio lens</p>
            <h2 id="story-heading">Built for ambitious brands that refuse to blend in.</h2>
            <p>
              Brandvue started with a simple belief: great brands deserve great digital craft.
              We saw too many companies settle for template-driven work that looked polished on the surface but lacked strategic depth underneath.
            </p>
            <p>
              Today we are a multidisciplinary team of strategists, designers, and engineers
              who partner with founders and marketing leaders to build brand systems, websites,
              and digital products that perform as well as they look.
            </p>

            <div className="about-story__tabs" role="tablist" aria-label="Brandvue working lenses">
              {studioLenses.map((item) => (
                <button
                  key={item.id}
                  id={`about-story-tab-${item.id}`}
                  className={`about-story__tab${item.id === activeLens.id ? ' is-active' : ''}`}
                  type="button"
                  role="tab"
                  tabIndex={item.id === activeLens.id ? 0 : -1}
                  aria-selected={item.id === activeLens.id}
                  aria-controls={`about-story-panel-${item.id}`}
                  onClick={() => handleLensSelect(item.id)}
                  onMouseEnter={() => handleLensSelect(item.id)}
                  onFocus={() => handleLensSelect(item.id)}
                >
                  <span className="about-story__tab-label">{item.label}</span>
                  <span className="about-story__tab-summary">{item.summary}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="about-story__experience">
            <div className="about-story__stage" key={activeLens.id}>
              <figure className="about-story__image">
                <img
                  src={activeLens.image}
                  alt={activeLens.imageAlt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
                <span className="about-story__image-badge">{activeLens.label}</span>
                <figcaption>{activeLens.callout}</figcaption>
              </figure>

              <div
                className="about-story__panel"
                id={`about-story-panel-${activeLens.id}`}
                role="tabpanel"
                aria-labelledby={`about-story-tab-${activeLens.id}`}
              >
                <p className="about-story__panel-eyebrow">{activeLens.eyebrow}</p>
                <h3>{activeLens.title}</h3>
                <p>{activeLens.copy}</p>
                <div className="about-story__signals" aria-label={`${activeLens.label} focus points`}>
                  {activeLens.cards.map((item) => (
                    <span className="about-story__signal" key={`${activeLens.id}-${item.label}`}>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="about-story__cards" role="list">
              {activeLens.cards.map((item) => (
                <article className="about-story__card" key={`${activeLens.id}-${item.label}`} role="listitem">
                  <span>{item.label}</span>
                  <h3>{item.value}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats" aria-label="Brandvue results">
        <div className="about-stats__inner">
          <div className="about-stats__lead">
            <p className="eyebrow">Measured in trust</p>
            <h2>Lean teams still need serious delivery capacity.</h2>
            <p>
              We stay close to the work without losing the structure, velocity, or quality control
              ambitious brands expect from a larger partner.
            </p>

            <div className="about-stats__active-lens" aria-label="Current Brandvue lens">
              <span className="about-stats__active-label">Current lens</span>
              <strong>{activeLens.label}</strong>
              <p>{activeLens.callout}</p>
            </div>
          </div>

          <div className="about-stats__grid">
            {stats.map((item, index) => (
              <article className="about-stat" key={item.label}>
                <span className="about-stat__index">{`0${index + 1}`}</span>
                <h3>{item.label}</h3>
                <strong>{item.value}</strong>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values" aria-labelledby="values-heading">
        <div className="about-values__inner">
          <div className="about-values__heading">
            <div>
              <p className="eyebrow">Our principles</p>
              <h2 id="values-heading">What guides every decision we make</h2>
            </div>
            <p>
              A small set of standards keeps our work sharp: clear thinking, accessible systems,
              and execution that holds up once real teams start using it.
            </p>
          </div>

          <div className="about-values__grid" role="list">
            {values.map((item, index) => (
              <article className="about-value" key={item.title} role="listitem">
                <div className="about-value__topline">
                  <span className="about-value__index">{`0${index + 1}`}</span>
                  <span className="about-value__icon" aria-hidden="true">
                    <item.icon strokeWidth={1.8} />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-culture" aria-labelledby="culture-heading">
        <div className="about-culture__inner">
          <figure className="about-culture__image">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80"
              alt="Team working together in a bright studio"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="about-culture__content">
            <p className="eyebrow">( 02 ) How we work</p>
            <h2 id="culture-heading">Small team energy, big-agency output.</h2>
            <p>
              We start with positioning, build the design language, test responsive patterns, and hand off systems
              teams can actually maintain. No bloated processes, no unnecessary layers.
            </p>

            <div className="about-culture__steps" role="list" aria-label="How Brandvue works">
              {processSteps.map((item, index) => (
                <article className="about-step" key={item.title} role="listitem">
                  <span className="about-step__index">{`0${index + 1}`}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__inner">
          <div className="about-cta__content">
            <p className="eyebrow">Start a project</p>
            <h2>Ready to build something bold?</h2>
            <p>Let&apos;s talk about your next project and make it count.</p>
          </div>

          <Button as={Link} to="/contactus" className="about-button">
            <span>Start a project</span>
            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
