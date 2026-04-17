import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Award,
  Blocks,
  Code2,
  Smartphone,
  Sparkles,
  Trophy,
  Star,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import formulaCursorImage from '../../assets/image copy.png'
import formulaPuzzleImage from '../../assets/image.png'
import BrandSystem from '../../components/BrandSystem/BrandSystem'
import Button from '../../components/Button/Button'
import SEO from '../../components/SEO/SEO'
import { getSeo } from '../../services/contentService'

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

function Home() {
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    getSeo('/').then((seo) => {
      setMeta(seo)
    })
  }, [])

  return (
    <main className="home-page" id="main-content">
      <SEO meta={meta} />
      <section className="home-hero">
        <div className="home-hero__inner">
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
              />
              <img
                className="home-hero__asset home-hero__asset--cubes"
                src="https://framerusercontent.com/images/9HLgJV9XMUyaWaX4Kn4NDxzk.png?width=610&height=610"
                alt=""
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
                <img src={formulaPuzzleImage} alt="" className="home-formula__image home-formula__image--puzzle" />
              </div>
            </article>

            <article className="home-formula__panel home-formula__panel--right">
              <div className="home-formula__visual home-formula__visual--right" aria-hidden="true">
                <div className="home-formula__figure">
                  <img src={formulaCursorImage} alt="" className="home-formula__image home-formula__image--cursor" />
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
    </main>
  )
}

export default Home
