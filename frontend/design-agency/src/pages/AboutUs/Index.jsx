import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Gauge,
  Sparkles,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import SEO from '../../components/SEO/SEO'
import { getSeo } from '../../services/contentService'

const heroFacts = [
  { value: '15+', label: 'Years in practice' },
  { value: '150+', label: 'Brands shipped' },
  { value: '300+', label: 'Projects delivered' },
  { value: '55+', label: 'Specialists in studio' },
]

const stats = [
  {
    label: 'Experience',
    value: '15+',
    copy: 'years building market-ready brands.',
  },
  {
    label: 'Clients',
    value: '150+',
    copy: 'ambitious teams shipped to launch.',
  },
  {
    label: 'Team',
    value: '55+',
    copy: 'brand, content, web, and growth specialists.',
  },
  {
    label: 'Projects',
    value: '300+',
    copy: 'delivered with measurable momentum.',
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

  useEffect(() => {
    getSeo('/aboutus').then(setMeta)
  }, [])

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
          <p className="eyebrow about-hero__eyebrow">About us</p>

          <div className="about-hero__headline">
            <h1 className="about-hero__title">
              Strategy and craft. In the same room. Shipping the same week.
            </h1>

            <svg
              className="about-hero__sketch"
              viewBox="0 0 360 380"
              fill="none"
              aria-hidden="true"
              role="img"
            >
              <path
                className="about-hero__sketch-stroke about-hero__sketch-stroke--bubble"
                d="M50 95 C 50 70, 92 60, 148 58 C 218 55, 286 64, 316 82 C 340 96, 338 130, 332 160 C 326 190, 308 210, 270 218 C 240 222, 218 222, 196 222 L 152 290 L 178 222 C 132 222, 92 218, 70 208 C 48 198, 38 178, 40 150 C 42 120, 44 105, 50 95 Z"
                stroke="#ff6a00"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle className="about-hero__sketch-dot about-hero__sketch-dot--1" cx="142" cy="142" r="9" fill="#f4e58a" />
              <circle className="about-hero__sketch-dot about-hero__sketch-dot--2" cx="182" cy="142" r="9" fill="#f4e58a" />
              <circle className="about-hero__sketch-dot about-hero__sketch-dot--3" cx="222" cy="142" r="9" fill="#f4e58a" />
              <g
                className="about-hero__sketch-stroke about-hero__sketch-stroke--spark"
                stroke="#f4e58a"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <line x1="312" y1="22" x2="312" y2="58" />
                <line x1="294" y1="40" x2="330" y2="40" />
                <line x1="299" y1="27" x2="325" y2="53" />
                <line x1="325" y1="27" x2="299" y2="53" />
              </g>
              <path
                className="about-hero__sketch-stroke about-hero__sketch-stroke--at"
                d="M295 320 C 295 305, 308 296, 322 298 C 336 300, 343 312, 340 326 C 337 336, 328 340, 322 336 C 318 333, 318 322, 322 314 C 326 306, 333 305, 336 308"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.5"
              />
              <path
                className="about-hero__sketch-stroke about-hero__sketch-stroke--arrow"
                d="M276 332 C 220 348, 150 348, 80 332"
                stroke="#ff6a00"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                className="about-hero__sketch-stroke about-hero__sketch-stroke--arrowhead"
                d="M96 318 L 78 332 L 94 348"
                stroke="#ff6a00"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <div className="about-hero__support">
            <p className="about-hero__subtitle">
              A strategy, design, and frontend studio for ambitious teams.
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

          <dl className="about-hero__facts" aria-label="Brandvue at a glance">
            {heroFacts.map((fact) => (
              <div className="about-hero__fact" key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="about-story" aria-labelledby="story-heading">
        <div className="about-story__inner">
          <header className="about-story__header">
            <p className="eyebrow">( 01 ) Studio lens</p>
            <h2 id="story-heading">
              Scattered work becomes{' '}
              <span className="about-story__highlight">
                one clear system
                <svg className="about-story__swoosh" viewBox="0 0 240 26" aria-hidden="true">
                  <path
                    d="M4 18 C 50 6, 130 24, 200 10 C 216 5, 226 8, 236 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h2>
            <p>
              Most brands arrive with strategy, identity, content, and web decisions moving in different directions. We connect them into a single living system your team can ship and reuse.
            </p>
          </header>

          <div className="about-story__compare">
            <div className="about-story__before">
              <p className="about-story__compare-label">Before · Scattered</p>
              <ul className="about-story__before-chips" aria-hidden="true">
                <li className="about-story__chip about-story__chip--strategy">Strategy</li>
                <li className="about-story__chip about-story__chip--identity">Identity</li>
                <li className="about-story__chip about-story__chip--content">Content</li>
                <li className="about-story__chip about-story__chip--web">Web</li>
                <li className="about-story__chip about-story__chip--launch">Launch</li>
              </ul>
              <p className="about-story__before-note">
                Different vendors, different timelines, no shared language.
              </p>
            </div>

            <div className="about-story__arrow" aria-hidden="true">
              <svg viewBox="0 0 96 40" fill="none">
                <path
                  d="M6 20 C 30 8, 60 32, 86 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M76 12 L 88 20 L 78 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="about-story__after">
              <p className="about-story__compare-label">After · Connected</p>
              <ol className="about-story__steps">
                <li className="about-story__step">
                  <span className="about-story__step-index">01</span>
                  <div>
                    <h3>Positioning aligned</h3>
                    <p>Why, who, and the tone the brand needs to own.</p>
                  </div>
                </li>
                <li className="about-story__step">
                  <span className="about-story__step-index">02</span>
                  <div>
                    <h3>Identity system built</h3>
                    <p>One visual language, repeatable across every surface.</p>
                  </div>
                </li>
                <li className="about-story__step">
                  <span className="about-story__step-index">03</span>
                  <div>
                    <h3>Website ready to launch</h3>
                    <p>Production-ready frontend, content loaded, QA signed off.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <Link to="/services" className="about-story__link">
            Explore services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <section className="about-stats" aria-label="Brandvue results">
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
              Measured in trust
              <span className="about-stats__eyebrow-mark" aria-hidden="true">✶</span>
            </p>

            <h2 className="about-stats__title">
              Lean teams{' '}
              <span className="about-stats__chip about-stats__chip--users" aria-hidden="true">
                <Users strokeWidth={1.6} />
              </span>{' '}
              still need serious{' '}
              <span className="about-stats__highlight">
                delivery
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
              capacity
              <span className="about-stats__chip about-stats__chip--spark" aria-hidden="true">
                <Sparkles strokeWidth={1.6} />
              </span>
              .
            </h2>

            <p className="about-stats__copy">
              Close to the work, without losing the structure ambitious brands expect from a larger partner.
            </p>
          </header>

          <div className="about-stats__visual" aria-hidden="true">
            <svg
              className="about-stats__poster"
              viewBox="0 0 560 560"
              fill="none"
              role="img"
            >
              <defs>
                <pattern id="aboutStatsDots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.1" fill="rgba(10,13,18,0.11)" />
                </pattern>
                <clipPath id="aboutStatsCircleClip">
                  <circle cx="200" cy="270" r="180" />
                </clipPath>
                <filter id="aboutStatsSoftShadow" x="-8%" y="-8%" width="116%" height="116%">
                  <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0a0d12" floodOpacity="0.06" />
                </filter>
                <filter id="aboutStatsPanelShadow" x="-8%" y="-8%" width="116%" height="116%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0a0d12" floodOpacity="0.08" />
                </filter>
              </defs>

              <rect x="0" y="0" width="560" height="560" fill="url(#aboutStatsDots)" />

              <image
                href="https://res.cloudinary.com/dofapr3pk/image/upload/v1777996089/Untitled-2_zhtqot.jpg"
                x="20"
                y="90"
                width="360"
                height="360"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#aboutStatsCircleClip)"
              />
              <circle cx="200" cy="270" r="180" fill="#ff6a00" fillOpacity="0.045" clipPath="url(#aboutStatsCircleClip)" />

              <g transform="rotate(5 280 460)">
                <rect x="128" y="426" width="300" height="72" rx="14" fill="#0a0d12" />
                <rect className="about-stats__bar about-stats__bar--1" x="154" y="454" width="50" height="7" rx="3.5" fill="#ff6a00" />
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

              <g stroke="#ff6a00" strokeWidth="6" strokeLinecap="round" strokeOpacity="0.84" transform="translate(478 80)">
                <line x1="0" y1="-32" x2="0" y2="32" />
                <line x1="-32" y1="0" x2="32" y2="0" />
                <line x1="-23" y1="-23" x2="23" y2="23" />
                <line x1="23" y1="-23" x2="-23" y2="23" />
              </g>

              <g transform="translate(46 522)">
                <circle cx="0" cy="0" r="13" fill="#ff6a00" />
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

      <section className="about-values" aria-labelledby="values-heading">
        <div className="about-values__inner">
          <aside className="about-values__diagram" aria-hidden="true">
            <svg
              className="about-values__diagram-svg"
              viewBox="0 0 80 460"
              fill="none"
              role="img"
            >
              <line
                className="about-values__diagram-spine"
                x1="40"
                y1="38"
                x2="40"
                y2="422"
                stroke="#ff6a00"
                strokeWidth="0.7"
                strokeOpacity="0.45"
                strokeDasharray="2 5"
              />

              <g
                className="about-values__diagram-mark about-values__diagram-mark--intention"
                transform="translate(40 80)"
              >
                <circle cx="0" cy="0" r="26" stroke="#ff6a00" strokeWidth="2" fill="none" />
                <circle cx="0" cy="0" r="14" stroke="#ff6a00" strokeWidth="1.4" strokeOpacity="0.55" fill="none" />
                <circle cx="0" cy="0" r="3" fill="#ff6a00" />
                <line x1="-34" y1="0" x2="-30" y2="0" stroke="#ff6a00" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="34" y1="0" x2="30" y2="0" stroke="#ff6a00" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="0" y1="-34" x2="0" y2="-30" stroke="#ff6a00" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="0" y1="34" x2="0" y2="30" stroke="#ff6a00" strokeWidth="1.4" strokeLinecap="round" />
              </g>

              <g
                className="about-values__diagram-mark about-values__diagram-mark--clarity"
                transform="translate(40 230)"
              >
                <rect x="-26" y="-26" width="52" height="52" stroke="#f4e58a" strokeWidth="1.6" fill="none" />
                <line x1="-26" y1="-26" x2="26" y2="26" stroke="#f4e58a" strokeWidth="1.4" strokeOpacity="0.7" />
                <line x1="26" y1="-26" x2="-26" y2="26" stroke="#f4e58a" strokeWidth="1.4" strokeOpacity="0.7" />
                <circle cx="0" cy="0" r="3" fill="#f4e58a" />
              </g>

              <g
                className="about-values__diagram-mark about-values__diagram-mark--emotion"
                transform="translate(40 380)"
                fill="none"
                stroke="#ff6a00"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d="M 0 -6 C -10 -22, -30 -18, -30 -2 C -30 14, -10 24, 0 32 C 10 24, 30 14, 30 -2 C 30 -18, 10 -22, 0 -6 Z"
                  strokeWidth="2"
                />
                <path
                  d="M 0 0 C -6 -12, -18 -10, -18 0 C -18 10, -6 16, 0 20 C 6 16, 18 10, 18 0 C 18 -10, 6 -12, 0 0 Z"
                  strokeWidth="1.4"
                  strokeOpacity="0.55"
                />
              </g>
            </svg>
          </aside>

          <div className="about-values__title">
            <p className="eyebrow about-values__eyebrow">
              <span className="about-values__num">/ 03</span>
              <span className="about-values__rule" aria-hidden="true" />
              Our principles
            </p>
            <h2 id="values-heading">
              We design with intention, clarity, and emotion.
            </h2>

            <ul className="about-values__pillars" aria-label="Three core principles">
              <li>
                <span className="about-values__pillar-num">i.</span>
                <span>Intention</span>
              </li>
              <li>
                <span className="about-values__pillar-num">ii.</span>
                <span>Clarity</span>
              </li>
              <li>
                <span className="about-values__pillar-num">iii.</span>
                <span>Emotion</span>
              </li>
            </ul>
          </div>

          <div className="about-values__copy">
            <p>
              Every detail is crafted to create connection, build trust, and deliver lasting impact.
            </p>
            <p>
              Intention shapes the strategy. Clarity sharpens the design. Emotion is what makes both stick.
            </p>

            <p className="about-values__sign" aria-hidden="true">
              <span className="about-values__sign-rule" />
              The Brandvue studio
            </p>
          </div>
        </div>
      </section>

      <section className="about-culture" aria-labelledby="culture-heading">
        <div className="about-culture__paper" aria-hidden="true" />
        <svg className="about-culture__doodle about-culture__doodle--tl" viewBox="0 0 110 70" aria-hidden="true">
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
        <svg className="about-culture__doodle about-culture__doodle--br" viewBox="0 0 140 70" aria-hidden="true">
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
            <span className="about-culture__image-tape" aria-hidden="true" />
            <span className="about-culture__image-stamp" aria-hidden="true">
              <Sparkles size={16} strokeWidth={2.4} />
              In studio
            </span>
          </figure>

          <div className="about-culture__content">
            <p className="about-culture__eyebrow">
              <span className="about-culture__eyebrow-rule" aria-hidden="true" />
              ( 02 ) How we work
            </p>
            <h2 id="culture-heading">
              Small team energy,{' '}
              <span className="about-culture__highlight">
                big-agency
                <svg className="about-culture__swoosh" viewBox="0 0 200 26" aria-hidden="true">
                  <path
                    d="M4 18 C 40 6, 96 24, 156 10 C 172 5, 184 8, 196 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              output.
            </h2>
            <p className="about-culture__lede">
              Positioning first. Then design language, responsive patterns, and a system the in-house team can actually maintain. No bloat, no layers, no hand-offs to a delivery floor.
            </p>

            <ol className="about-culture__steps" aria-label="How Brandvue works">
              {processSteps.map((item, index) => (
                <li className="about-step" key={item.title}>
                  <span className="about-step__index">{`0${index + 1}`}</span>
                  <div className="about-step__body">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
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
