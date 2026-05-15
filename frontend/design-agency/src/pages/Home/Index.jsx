import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Briefcase,
  Blocks,
  Code2,
  Coffee,
  TrendingUp,
  Smartphone,
  Sparkles,
  Package,
  Palette,
  Plus,
  Trophy,
  Star,
  Users,
  Zap,
  ChevronDown,
  Heart,
} from 'lucide-react'
import { BiLogoAdobe } from 'react-icons/bi'
import { LuBanana } from 'react-icons/lu'
import {
  SiCloudflare,
  SiFigma,
  SiFreepik,
  SiGithub,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiVercel,
} from 'react-icons/si'
import { Link } from 'react-router-dom'
import formulaCursorImage from '../../assets/formula-cursor.png'
import formulaPuzzleImage from '../../assets/formula-puzzle.png'
import heroMockupImage from '../../assets/coffee-app-mockup.png'
import BrandSystem from '../../components/BrandSystem/BrandSystem'
import Button from '../../components/Button/Button'
import SectionRail from '../../components/SectionRail/SectionRail'
import SEO from '../../components/SEO/SEO'
import { getSeo } from '../../services/contentService'
import { resolveRegionalGreeting, splitGreetingText } from '../../utils/regionalGreeting'

const GREETING_PLAYED_KEY = 'brandviora_greeting_played'

function hasPlayedGreetingThisSession() {
  if (typeof window === 'undefined') return true
  try {
    return window.localStorage.getItem(GREETING_PLAYED_KEY) === '1'
  } catch {
    return false
  }
}

function markGreetingPlayed() {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(GREETING_PLAYED_KEY, '1')
  } catch {
    /* storage unavailable — fine, we'll just play it again next mount */
  }
}

const whyStats = [
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

const awards = [
  { label: 'Brand Award', icon: Award },
  { label: 'Best Innovation', icon: Zap },
  { label: 'Best Recommend', icon: Star },
  { label: 'Growth Award', icon: Trophy },
]

const serviceHighlights = [
  {
    title: 'Branding & Identity',
    copy: 'We craft bold, memorable brand systems that set you apart and build trust.',
    icon: Sparkles,
    chips: ['Logo', 'Identity', 'Guidelines'],
    href: '/services',
  },
  {
    title: 'UI/UX Design',
    copy: 'User-first experiences that feel intuitive, elegant, and conversion-ready.',
    icon: Blocks,
    chips: ['Research', 'Wireframes', 'Prototypes'],
    href: '/services',
  },
  {
    title: 'Web Development',
    copy: 'Modern, high-performance websites built for speed, SEO, and scalability.',
    icon: Code2,
    chips: ['React', 'Next.js', 'Performance'],
    href: '/services',
  },
  {
    title: 'App Development',
    copy: 'Cross-platform apps designed to deliver seamless, engaging experiences.',
    icon: Smartphone,
    chips: ['iOS', 'Android', 'React Native'],
    href: '/services',
  },
  {
    title: 'Creative & Social',
    copy: 'Campaigns, content, and motion built to make your brand impossible to scroll past.',
    icon: Palette,
    chips: ['Campaigns', 'Motion', 'Content'],
    href: '/services',
  },
  {
    title: 'Packaging Design',
    copy: 'Tactile, on-shelf packaging that turns first glance into a buying decision.',
    icon: Package,
    chips: ['Structural', 'Label', 'Print-Ready'],
    href: '/services/packaging',
  },
]

const servicesStrip = [
  { title: 'Branding & Identity', tagline: 'Logo, identity, visual systems', icon: Sparkles, href: '/services' },
  { title: 'UI/UX Design', tagline: 'Interfaces, flows, prototypes', icon: Blocks, href: '/services' },
  { title: 'Web Design & Development', tagline: 'Responsive websites that convert', icon: Code2, href: '/services' },
  { title: 'Mobile App Development', tagline: 'Product design and app builds', icon: Smartphone, href: '/services' },
  { title: 'Creative & Social Media', tagline: 'Campaign and content creatives', icon: Palette, href: '/services' },
  { title: 'Packaging Design', tagline: 'Shelf-ready packaging and labels', icon: Package, href: '/services/packaging' },
]

const proofHighlights = [
  {
    icon: Briefcase,
    title: 'Strong design can outperform competitors',
    copy: 'Companies that invest in design maturity have been shown to achieve significantly stronger revenue growth and shareholder returns. BrandViora India helps businesses turn creative execution into measurable business value.',
    source: 'McKinsey',
  },
  {
    icon: Users,
    title: 'Consistent branding builds trust faster',
    copy: 'Consistent brand presentation can improve recognition, strengthen credibility, and even contribute to revenue growth. We create clear, unified brand systems that stay powerful across every touchpoint.',
    source: 'Adobe',
  },
  {
    icon: TrendingUp,
    title: 'Better design decisions create real ROI',
    copy: 'Research on design thinking and experience-led practices shows that thoughtful design investment can produce strong returns. From brand identity to digital products, we focus on work that performs, not just work that looks good.',
    source: 'Forrester',
  },
]

const faqItems = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Most brand projects take 6-12 weeks, while web development can range from 8-20 weeks depending on requirements.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer: 'Absolutely! We work with ambitious brands of all sizes, from early-stage startups to established enterprises. We tailor our approach to fit your budget and goals.',
  },
  {
    question: 'What is your design and development process?',
    answer: 'We follow a collaborative process: Discovery, Strategy, Design, Development, Testing, and Launch. Regular communication ensures your vision is realized at every stage.',
  },
  {
    question: 'Can you help with brand strategy?',
    answer: 'Yes, brand strategy is core to everything we do. We help define positioning, messaging, and visual identity to create coherent brand experiences.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'We offer maintenance and support packages to keep your digital presence optimized, secure, and performing at its best.',
  },
  {
    question: 'How do we get started with a project?',
    answer: 'Simply reach out through our contact form or email. We\'ll schedule a discovery call to discuss your goals, and provide a customized proposal and timeline.',
  },
]

const trustTools = [
  { label: 'Adobe', icon: BiLogoAdobe },
  { label: 'Figma', icon: SiFigma },
  { label: 'GitHub', icon: SiGithub },
  { label: 'React', icon: SiReact },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'Freepik', icon: SiFreepik },
  { label: 'OpenAI', icon: SiOpenai },
  { label: 'Cloudflare', icon: SiCloudflare },
  { label: 'Vercel', icon: SiVercel },
  { label: 'Nano Banana', icon: LuBanana },
]

const marqueeTools = [...trustTools, ...trustTools]
const heroGridLines = Array.from({ length: 12 }, (_, index) => index)

function Home() {
  const [meta, setMeta] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)
  const [regionalGreeting, setRegionalGreeting] = useState(null)
  const [typedGreeting, setTypedGreeting] = useState('')
  const [isGreetingVisible, setIsGreetingVisible] = useState(() => !hasPlayedGreetingThisSession())
  const [isGreetingLeaving, setIsGreetingLeaving] = useState(false)
  const [isIntroComplete, setIsIntroComplete] = useState(() => hasPlayedGreetingThisSession())

  useEffect(() => {
    let isMounted = true

    getSeo('/').then((seo) => {
      setMeta(seo)
    })

    // Only resolve the regional greeting on a fresh session — on subsequent
    // mounts (navigating About → Home, etc.) we skip the intro entirely.
    if (!hasPlayedGreetingThisSession()) {
      resolveRegionalGreeting().then((greeting) => {
        if (isMounted) {
          setRegionalGreeting(greeting)
        }
      })
    }

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (!regionalGreeting) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const greetingSegments = splitGreetingText(regionalGreeting.text)
    setTypedGreeting('')
    setIsGreetingLeaving(false)
    setIsGreetingVisible(true)
    setIsIntroComplete(false)

    if (prefersReducedMotion) {
      setTypedGreeting(regionalGreeting.text)
      const hideTimer = window.setTimeout(() => {
        setIsGreetingLeaving(true)
        window.setTimeout(() => {
          setIsGreetingVisible(false)
          setIsIntroComplete(true)
        }, 420)
      }, 1200)

      return () => window.clearTimeout(hideTimer)
    }

    let characterIndex = 0
    const typingTimer = window.setInterval(() => {
      characterIndex += 1
      setTypedGreeting(greetingSegments.slice(0, characterIndex).join(''))

      if (characterIndex >= greetingSegments.length) {
        window.clearInterval(typingTimer)
      }
    }, 72)

    const exitTimer = window.setTimeout(() => {
      setIsGreetingLeaving(true)
    }, greetingSegments.length * 72 + 1250)

    const removeTimer = window.setTimeout(() => {
      setIsGreetingVisible(false)
      setIsIntroComplete(true)
    }, greetingSegments.length * 72 + 1750)

    return () => {
      window.clearInterval(typingTimer)
      window.clearTimeout(exitTimer)
      window.clearTimeout(removeTimer)
    }
  }, [regionalGreeting])

  useEffect(() => {
    if (isIntroComplete) {
      markGreetingPlayed()
    }
  }, [isIntroComplete])

  return (
    <main className="home-page" id="main-content">
      <SEO meta={meta} />
      <SectionRail />
      <section className="home-hero" id="home-hero">
        <div className="home-hero__grid-box grid-box" aria-hidden="true">
          {heroGridLines.map((line) => (
            <div className="grid-line" key={line}>
              <div className="grid-line-inner" />
            </div>
          ))}
        </div>

        <div className="home-hero__tech" aria-hidden="true">
          <svg className="home-hero__tech-svg" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid meet">
            <circle className="home-hero__tech-ring home-hero__tech-ring--outer" cx="600" cy="500" r="260" />
            <circle className="home-hero__tech-ring home-hero__tech-ring--mid" cx="600" cy="500" r="200" />
          </svg>

        </div>
        {regionalGreeting && isGreetingVisible ? (
          <p
            className={`home-hero__greeting${isGreetingLeaving ? ' is-leaving' : ''}`}
            aria-label={`Regional greeting: ${regionalGreeting.transliteration}`}
          >
            <span className="home-hero__greeting-line">
              <span>{typedGreeting}</span>
              {typedGreeting === regionalGreeting.text ? (
                <Heart className="home-hero__greeting-love" size={68} strokeWidth={2.1} aria-hidden="true" />
              ) : null}
              <span className="home-hero__greeting-cursor" aria-hidden="true" />
            </span>
          </p>
        ) : null}
        <div className={`home-hero__inner${isIntroComplete ? ' is-ready' : ''}`}>
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">
              <span className="home-hero__eyebrow-dot" aria-hidden="true" />
              Creative Studio · India · Est. 2014
            </p>
            <h1>
              A <span className="home-hero__accent">human-centered</span> design <br />
              approach focused on trust, <br />
              clarity, and business growth.
              <span className="home-hero__subline">Identity, web, product, and motion — under one studio roof.</span>
            </h1>
            <div className="home-hero__actions">
              <Button as={Link} to="/contactus" className="about-button">
                <span>Start a project</span>
                <ArrowRight size={18} />
              </Button>
            </div>
            <dl className="home-hero__stats" aria-label="Studio at a glance">
              <div>
                <dt>Years of design craft</dt>
                <dd>15<span aria-hidden="true">+</span></dd>
              </div>
              <div>
                <dt>Brand projects shipped</dt>
                <dd>300<span aria-hidden="true">+</span></dd>
              </div>
              <div>
                <dt>Founder rating</dt>
                <dd>4.9<span aria-hidden="true"><Star size={24} fill="currentColor" strokeWidth={0} /></span></dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="home-hero__visual" aria-hidden="true">
          <div className="home-hero__mockup">
            <span className="home-hero__mockup-glow" />
            <span className="home-hero__mockup-ring" />
            <img
              src={heroMockupImage}
              alt="Mobile coffee ordering app mockup held in hands"
              loading="eager"
              decoding="async"
            />

            <div className="home-hero__chip home-hero__chip--order">
              <span className="home-hero__chip-icon">
                <Coffee size={15} strokeWidth={2.2} />
              </span>
              <span className="home-hero__chip-body">
                <span className="home-hero__chip-label">Cappuccino</span>
                <span className="home-hero__chip-meta">+ ₹120</span>
              </span>
              <span className="home-hero__chip-plus">
                <Plus size={12} strokeWidth={3} />
              </span>
            </div>

            <div className="home-hero__chip home-hero__chip--rating">
              <span className="home-hero__chip-stars">
                <Star size={11} fill="currentColor" strokeWidth={0} />
                <Star size={11} fill="currentColor" strokeWidth={0} />
                <Star size={11} fill="currentColor" strokeWidth={0} />
                <Star size={11} fill="currentColor" strokeWidth={0} />
                <Star size={11} fill="currentColor" strokeWidth={0} />
              </span>
              <strong>4.9</strong>
              <span className="home-hero__chip-meta">12k reviews</span>
            </div>

            <div className="home-hero__chip home-hero__chip--growth">
              <span className="home-hero__chip-growth-icon" aria-hidden="true">
                <TrendingUp size={14} strokeWidth={2.4} />
              </span>
              <span className="home-hero__chip-body">
                <span className="home-hero__chip-growth-label">Growth</span>
                <strong>+24%</strong>
              </span>
              <span className="home-hero__chip-growth-bars" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
            </div>

          </div>
        </div>

        <div className="services-strip" aria-label="Services overview">
          <div className="services-strip__marquee">
            <div className="services-strip__track">
              {[...servicesStrip, ...servicesStrip].map((service, idx) => {
                const isClone = idx >= servicesStrip.length
                return (
                  <Link
                    to={service.href}
                    key={`${service.title}-${idx}`}
                    className="services-strip__card"
                    aria-hidden={isClone ? 'true' : undefined}
                    tabIndex={isClone ? -1 : undefined}
                  >
                    <span className="services-strip__card-icon" aria-hidden="true">
                      <service.icon strokeWidth={1.7} />
                    </span>
                    <span className="services-strip__card-body">
                      <span className="services-strip__card-title">{service.title}</span>
                      <span className="services-strip__card-tagline">{service.tagline}</span>
                    </span>
                    <span className="services-strip__card-arrow" aria-hidden="true">
                      <ArrowUpRight size={13} strokeWidth={2.2} />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="why-section" id="why-section" aria-labelledby="why-heading">
        <div className="why-section__decor" aria-hidden="true">
          <svg viewBox="0 0 220 320" preserveAspectRatio="xMidYMid meet" fill="none">
            <circle
              className="why-section__decor-circle"
              cx="120"
              cy="68"
              r="42"
              strokeWidth="1.1"
              strokeDasharray="2 5"
            />
            <path
              className="why-section__decor-stroke"
              d="M 24 158 Q 70 124, 122 152 T 210 172"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              className="why-section__decor-stroke why-section__decor-stroke--accent"
              d="M 36 200 q 12 -10, 24 0 t 24 0 t 24 0 t 24 0"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <g transform="translate(180, 230)">
              <g
                className="why-section__decor-spark"
                strokeWidth="1.4"
                strokeLinecap="round"
              >
                <line x1="-9" y1="0" x2="9" y2="0" />
                <line x1="0" y1="-9" x2="0" y2="9" />
                <line x1="-6.5" y1="-6.5" x2="6.5" y2="6.5" />
                <line x1="-6.5" y1="6.5" x2="6.5" y2="-6.5" />
              </g>
            </g>
            <circle className="why-section__decor-dot" cx="56" cy="248" r="2.4" />
            <circle className="why-section__decor-dot" cx="148" cy="278" r="1.6" />
            <circle className="why-section__decor-dot why-section__decor-dot--accent" cx="42" cy="110" r="2.2" />
          </svg>
        </div>
        <div className="why-section__inner">
          <div className="why-section__heading">
            <p className="eyebrow">( 02 ) Why choose us?</p>
            <h2 id="why-heading">Powering bold brands with clarity, creativity, and digital precision</h2>
          </div>

          <div className="why-panel">
            <div className="why-panel__intro">
              <p>
                At BrandViora India, we build brand experiences that do more than look good. We align
                strategy, identity, web design, content, and development to help businesses
                launch stronger, grow faster, and stay consistent across every digital
                touchpoint.
              </p>
              <Button as={Link} to="/aboutus" className="about-button">
                <span>About us</span>
                <ArrowRight size={18} />
              </Button>
            </div>

            <figure className="why-panel__image">
              <img
                src="https://framerusercontent.com/images/WaZHSoJlOYIWHh3RuwUm5E2fY4.png?width=884&height=1564"
                alt="Architectural concrete steps"
                width="884"
                height="1564"
                loading="lazy"
                decoding="async"
              />
            </figure>

            <div className="why-panel__stats" aria-label="BrandViora India results">
              {whyStats.map((item) => (
                <article className="why-stat" key={item.label}>
                  <h3>{item.label}</h3>
                  <strong>{item.value}</strong>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="why-awards" aria-label="BrandViora India awards">
            <div className="why-awards__lead">
              <span aria-hidden="true" />
              <p>We have been awarded for the milestones our teams have achieved.</p>
            </div>
            {awards.map((award) => (
              <div className="why-awards__item" key={award.label}>
                <span aria-hidden="true">
                  <award.icon strokeWidth={1.5} />
                </span>
                <p>{award.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-services" id="home-services" aria-labelledby="services-heading">
        <div className="home-services__inner">
          <div className="home-services__heading">
            <p className="eyebrow">
              <span className="home-services__eyebrow-rule" aria-hidden="true" />
              ( 01 ) &nbsp;Our services
            </p>
            <h2 id="services-heading">
              What we <em>do best.</em>
            </h2>
            <p>
              A full-service creative studio for bold brands and ambitious ideas — from strategy and identity through to motion, web, and product.
            </p>
          </div>

          <div className="home-services__list" role="list">
            {serviceHighlights.map((service, idx) => (
              <Link
                to={service.href}
                key={service.title}
                className="home-service"
                role="listitem"
                aria-label={`${service.title} — learn more`}
              >
                <span className="home-service__index" aria-hidden="true">
                  / {String(idx + 1).padStart(2, '0')}
                </span>

                <span className="home-service__icon" aria-hidden="true">
                  <service.icon strokeWidth={1.6} />
                </span>

                <h3>{service.title}</h3>
                <p>{service.copy}</p>

                {service.chips ? (
                  <ul className="home-service__chips" aria-hidden="true">
                    {service.chips.map((chip) => (
                      <li key={chip}>{chip}</li>
                    ))}
                  </ul>
                ) : null}

                <span className="home-service__arrow" aria-hidden="true">
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </span>
              </Link>
            ))}
          </div>

          <div className="home-services__cta">
            <Link to="/services" className="home-services__cta-link">
              <span className="home-services__cta-dot" aria-hidden="true" />
              Explore the full studio
              <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="trusted-by" aria-labelledby="trusted-heading">
        <div className="trusted-by__inner">
          <h2 id="trusted-heading" className="trusted-by__heading">Trusted by teams at</h2>
          <div className="trusted-by__scroll-container">
            <div className="trusted-by__logos">
              <div className="trusted-by__logo">Runebottloop</div>
              <div className="trusted-by__logo">Mythosync</div>
              <div className="trusted-by__logo">Fizzyriff</div>
              <div className="trusted-by__logo">Voltaura</div>
              <div className="trusted-by__logo">Okoblox</div>
              <div className="trusted-by__logo">Tunogen</div>
              <div className="trusted-by__logo">Runebottloop</div>
              <div className="trusted-by__logo">Mythosync</div>
              <div className="trusted-by__logo">Fizzyriff</div>
              <div className="trusted-by__logo">Voltaura</div>
              <div className="trusted-by__logo">Okoblox</div>
              <div className="trusted-by__logo">Tunogen</div>
            </div>
          </div>
        </div>
      </section>

      <BrandSystem />

      <section className="home-formula" aria-labelledby="formula-heading">
        <div className="home-formula__inner">
          <div className="home-formula__header">
            <p className="eyebrow">Our formula</p>
            <h2 id="formula-heading">
              The BrandViora India <span>formula</span>
            </h2>
            <div className="home-formula__banner">
              Good Ideas + Good Vibes, <span>Equals US</span>
            </div>
          </div>

          <div className="home-formula__grid">
            <article className="home-formula__panel">
              <div className="home-formula__copy">
                <h3>
                  Blending strategy with <span>structure and story.</span>
                </h3>
                <p>
                  We take your big ideas, and wrap them in smart strategies. We don't just throw ideas at a wall to see what sticks. When we're ideating for the perfect presentation, we mix strategy with storytelling and make it smooth like peanut butter on a bread. Each bite you take, we mean each slide, is created to hit the sweet spot.
                </p>
              </div>

              <div className="home-formula__visual home-formula__visual--left" aria-hidden="true">
                <img src={formulaPuzzleImage} alt="" className="home-formula__image home-formula__image--puzzle" loading="lazy" decoding="async" />
              </div>
            </article>

            <article className="home-formula__panel home-formula__panel--right">
              <div className="home-formula__visual home-formula__visual--right" aria-hidden="true">
                <div className="home-formula__figure">
                  <img src={formulaCursorImage} alt="" className="home-formula__image home-formula__image--cursor" loading="lazy" decoding="async" />
                </div>
              </div>

              <div className="home-formula__copy">
                <h3>
                  Premium delivery, <span>without generic output.</span>
                </h3>
                <p>
                  BrandViora India brings discipline to websites, campaigns, and digital systems while
                  keeping the final work expressive, sharp, and built to scale with confidence.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-proof" aria-labelledby="proof-heading">
        <div className="home-proof__inner">
          <div className="home-proof__header">
            <div className="home-proof__copy">
              <p className="eyebrow">Why it matters</p>
              <h2 id="proof-heading">
                Great design drives real{' '}
                <span className="home-proof__rotating">
                  <span>business growth</span>
                  <span>brand authority</span>
                  <span>customer trust</span>
                </span>
              </h2>
            </div>
          </div>

          <div className="home-proof__grid" role="list">
            {proofHighlights.map((item) => (
              <article className="home-proof__card" key={item.title} role="listitem">
                <span className="home-proof__icon" aria-hidden="true">
                  <item.icon strokeWidth={1.7} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="home-proof__source">Source: {item.source}</span>
              </article>
            ))}
          </div>

          <p className="home-proof__sources">Sources: McKinsey, Adobe, Forrester</p>
        </div>
      </section>

      <section className="home-faq" id="home-faq" aria-labelledby="faq-heading">
        <div className="home-faq__wrapper">
          <div className="home-faq__inner">
            <div className="home-faq__cta">
              <div className="home-faq__cta-copy">
                <p className="home-faq__cta-eyebrow">( 03 ) FAQ</p>
                <h3>Need a sharper answer?</h3>
                <p className="home-faq__cta-description">
                  Discuss scope, timelines, or collaboration details with the BrandViora India team.
                </p>
              </div>

              <div className="home-faq__cta-meta" aria-label="Contact topics">
                <span>Project inquiries</span>
                <span>Retainer support</span>
                <span>Partnerships</span>
              </div>

              <a href="mailto:hello@brandviora.com" className="home-faq__cta-email">
                <span>hello@brandviora.com</span>
                <ArrowRight size={16} />
              </a>

              <figure className="home-faq__cta-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" alt="Leadership team in a strategy meeting" width="900" height="600" loading="lazy" decoding="async" />
                <svg className="home-faq__cta-vector" viewBox="0 0 160 160" aria-hidden="true">
                  <circle cx="118" cy="42" r="28" />
                  <path d="M28 132C54 98 76 82 118 42" />
                  <path d="M58 132C78 104 94 90 126 58" />
                  <path d="M86 132C102 112 114 96 132 76" />
                  <circle cx="28" cy="132" r="4" />
                  <circle cx="58" cy="132" r="4" />
                  <circle cx="86" cy="132" r="4" />
                </svg>
                <figcaption>Direct access for planning, launch, and long-term brand work.</figcaption>
              </figure>
            </div>

            <div className="home-faq__content">
              <div className="home-faq__header">
                <h2 id="faq-heading" className="home-faq__heading">Here to help with all your <span>questions</span></h2>
                <p className="home-faq__description">Understand our process and how we deliver bold, memorable brand experiences that drive results.</p>
              </div>
              <div className="home-faq__list" role="region" aria-label="Frequently asked questions">
                {faqItems.map((item, index) => (
                  <div key={index} className={`home-faq__item ${openFaq === index ? 'is-open' : ''}`}>
                    <button
                      className={`home-faq__trigger ${openFaq === index ? 'is-open' : ''}`}
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-panel-${index}`}
                    >
                      <span>{item.question}</span>
                      <span className="home-faq__icon" aria-hidden="true">
                        <ChevronDown size={18} />
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${index}`}
                      className={`home-faq__answer ${openFaq === index ? 'is-open' : ''}`}
                    >
                      <div className="home-faq__answer-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="trust-strip">
          <div className="trust-strip__inner">
            <span className="trust-strip__eyebrow">Powered by Industry Tools</span>

            <div className="trust-strip__marquee">
              <div className="trust-strip__marquee-inner">
                {marqueeTools.map((tool, index) => {
                  const Icon = tool.icon

                  return (
                    <div
                      key={`${tool.label}-${index}`}
                      className="trust-strip__logo-item"
                      aria-label={tool.label}
                    >
                      <Icon />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
