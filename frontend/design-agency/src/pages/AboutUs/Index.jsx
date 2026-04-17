import { useEffect, useState } from 'react'
import SEO from '../../components/SEO/SEO'
import { getSeo } from '../../services/contentService'

function AboutUs() {
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    getSeo('/aboutus').then(setMeta)
  }, [])

  return (
    <main className="about-us-page" id="main-content">
      <SEO meta={meta} />
      <section className="page-hero">
        <div className="page-hero__content">
          <p className="eyebrow">About us</p>
          <h1>We combine creative direction with production-ready digital craft.</h1>
          <p>
            Our work sits where brand strategy, interface design, and accessible frontend execution meet.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section__inner split-section">
          <div>
            <h2>How we work</h2>
            <p>
              We start with positioning, build the design language, test responsive patterns, and hand off systems
              teams can actually maintain.
            </p>
          </div>
          <ul className="principles-list" aria-label="Design principles">
            <li>Clear brand systems</li>
            <li>Accessible interface patterns</li>
            <li>Responsive layouts from the first draft</li>
            <li>Performance-aware frontend decisions</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default AboutUs
