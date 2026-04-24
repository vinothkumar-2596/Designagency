import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  Briefcase,
  Blocks,
  Code2,
  TrendingUp,
  Smartphone,
  Sparkles,
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
import BrandSystem from '../../components/BrandSystem/BrandSystem'
import Button from '../../components/Button/Button'
import SEO from '../../components/SEO/SEO'
import { getSeo } from '../../services/contentService'
import { resolveRegionalGreeting, splitGreetingText } from '../../utils/regionalGreeting'

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
  },
  {
    title: 'UI/UX Design',
    copy: 'User-first experiences that feel intuitive, elegant, and conversion-ready.',
    icon: Blocks,
  },
  {
    title: 'Web Development',
    copy: 'Modern, high-performance websites built for speed, SEO, and scalability.',
    icon: Code2,
  },
  {
    title: 'App Development',
    copy: 'Cross-platform apps designed to deliver seamless, engaging experiences.',
    icon: Smartphone,
  },
]

const proofHighlights = [
  {
    icon: Briefcase,
    title: 'Strong design can outperform competitors',
    copy: 'Companies that invest in design maturity have been shown to achieve significantly stronger revenue growth and shareholder returns. BrandVue helps businesses turn creative execution into measurable business value.',
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
  const [isGreetingVisible, setIsGreetingVisible] = useState(true)
  const [isGreetingLeaving, setIsGreetingLeaving] = useState(false)
  const [isIntroComplete, setIsIntroComplete] = useState(false)

  useEffect(() => {
    let isMounted = true

    getSeo('/').then((seo) => {
      setMeta(seo)
    })

    resolveRegionalGreeting().then((greeting) => {
      if (isMounted) {
        setRegionalGreeting(greeting)
      }
    })

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

  return (
    <main className="home-page" id="main-content">
      <SEO meta={meta} />
      <section className="home-hero">
        <div className="home-hero__grid-box grid-box" aria-hidden="true">
          {heroGridLines.map((line) => (
            <div className="grid-line" key={line}>
              <div className="grid-line-inner" />
            </div>
          ))}
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
            <div className="home-hero__badge" aria-label="Trusted by ambitious founders">
              <span className="home-hero__avatars" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>Trusted by ambitious founders</span>
            </div>
            <h1>
              Global branding design for ambitious brands.
              <span>Digital experiences that connect.</span>
            </h1>
            <div className="home-hero__actions">
              <Button as={Link} to="/contactus" className="about-button">
                <span>Start a project</span>
                <ArrowRight size={18} />
              </Button>
              <Button as={Link} to="/case-studies" variant="secondary" className="home-hero__secondary about-button">
                <span>View work</span>
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          <div className="home-hero__visual" aria-hidden="true">
            <div className="home-hero__asset-stack">
              <img
                className="home-hero__asset home-hero__asset--base"
                src="https://framerusercontent.com/images/czMv9lrgvmFb1ErVo2lqUWyBjU.png?width=825&height=694"
                alt=""
                width="825"
                height="694"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
              <img
                className="home-hero__asset home-hero__asset--cubes"
                src="https://framerusercontent.com/images/9HLgJV9XMUyaWaX4Kn4NDxzk.png?width=610&height=610"
                alt=""
                width="610"
                height="610"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="home-hero__seal">
              <span>Start project</span>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section" aria-labelledby="why-heading">
        <div className="why-section__inner">
          <div className="why-section__heading">
            <p className="eyebrow">( 02 ) Why choose us?</p>
            <h2 id="why-heading">Powering bold brands with clarity, creativity, and digital precision</h2>
          </div>

          <div className="why-panel">
            <div className="why-panel__intro">
              <p>
                At Brandvue, we build brand experiences that do more than look good. We align
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

            <div className="why-panel__stats" aria-label="Brandvue India results">
              {whyStats.map((item) => (
                <article className="why-stat" key={item.label}>
                  <h3>{item.label}</h3>
                  <strong>{item.value}</strong>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="why-awards" aria-label="Brandvue India awards">
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

      <section className="home-services" aria-labelledby="services-heading">
        <div className="home-services__inner">
          <div className="home-services__heading">
            <p className="eyebrow">Our services</p>
            <h2 id="services-heading">What we do best</h2>
            <p>
              We are a full-service creative agency built for bold brands and ambitious ideas.
            </p>
          </div>

          <div className="home-services__list" role="list">
            {serviceHighlights.map((service) => (
              <article className="home-service" key={service.title} role="listitem">
                <span className="home-service__icon" aria-hidden="true">
                  <service.icon strokeWidth={1.8} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
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
              The Brandvue <span>formula</span>
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
                  Brandvue brings discipline to websites, campaigns, and digital systems while
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
                Great design drives real
                <span className="home-proof__rotating">
                  <span>business growth</span>
                  <span>brand authority</span>
                  <span>customer trust</span>
                </span>
              </h2>
            </div>

            <div className="home-proof__mark" aria-hidden="true">
              <span className="home-proof__arc home-proof__arc--outer" />
              <span className="home-proof__arc home-proof__arc--middle" />
              <span className="home-proof__arc home-proof__arc--inner" />
              <span className="home-proof__needle" />
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

      <section className="home-faq" aria-labelledby="faq-heading">
        <div className="home-faq__wrapper">
          <div className="home-faq__inner">
            <div className="home-faq__cta">
              <div className="home-faq__cta-copy">
                <p className="home-faq__cta-eyebrow">( 03 ) FAQ</p>
                <h3>Need a sharper answer?</h3>
                <p className="home-faq__cta-description">
                  Discuss scope, timelines, or collaboration details with the Brandvue team.
                </p>
              </div>

              <div className="home-faq__cta-meta" aria-label="Contact topics">
                <span>Project inquiries</span>
                <span>Retainer support</span>
                <span>Partnerships</span>
              </div>

              <a href="mailto:hello@brandvue.com" className="home-faq__cta-email">
                <span>hello@brandvue.com</span>
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
