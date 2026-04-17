import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import ContentGrid from '../../components/ContentGrid/ContentGrid'
import SEO from '../../components/SEO/SEO'
import { getContentList, getSeo } from '../../services/contentService'

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

const awards = ['Brand Award', 'Best Innovation', 'Best Recommend', 'Growth Award']

function Home() {
  const [caseStudies, setCaseStudies] = useState([])
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    Promise.all([getContentList('case-studies'), getSeo('/')]).then(
      ([caseContent, seo]) => {
        setCaseStudies(caseContent.slice(0, 2))
        setMeta(seo)
      },
    )
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
              <Button as={Link} to="/contactus">
                Start a project
              </Button>
              <Button as={Link} to="/case-studies" variant="secondary" className="home-hero__secondary">
                View work
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
            <h2 id="why-heading">Powering the next generation of digital brand experiences</h2>
          </div>

          <div className="why-panel">
            <div className="why-panel__intro">
              <p>
                We are here for brands who want to move with clarity, not noise. Strategy,
                design, and execution stay connected from first idea to launch.
              </p>
              <Button as={Link} to="/about">
                About us
              </Button>
            </div>

            <figure className="why-panel__image">
              <img
                src="https://framerusercontent.com/images/WaZHSoJlOYIWHh3RuwUm5E2fY4.png?width=884&height=1564"
                alt="Architectural concrete steps"
              />
            </figure>

            <div className="why-panel__stats" aria-label="BrandView India results">
              {whyStats.map((item) => (
                <article className="why-stat" key={item.label}>
                  <h3>{item.label}</h3>
                  <strong>{item.value}</strong>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="why-awards" aria-label="BrandView India awards">
            <div className="why-awards__lead">
              <span aria-hidden="true" />
              <p>We have been awarded for the milestones our teams have achieved.</p>
            </div>
            {awards.map((award) => (
              <div className="why-awards__item" key={award}>
                <span aria-hidden="true" />
                <p>{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent" aria-labelledby="work-heading">
        <div className="section__inner">
          <div className="section__heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading">Launch-ready design with practical execution.</h2>
          </div>
          <ContentGrid items={caseStudies} eyebrow="Case study" />
        </div>
      </section>
    </main>
  )
}

export default Home
