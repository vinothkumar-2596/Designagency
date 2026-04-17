import { useEffect, useState } from 'react'
import ContentGrid from '../../components/ContentGrid/ContentGrid'
import SEO from '../../components/SEO/SEO'
import { getContentList, getSeo } from '../../services/contentService'

function Services() {
  const [services, setServices] = useState([])
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    Promise.all([getContentList('services'), getSeo('/services')]).then(([content, seo]) => {
      setServices(content)
      setMeta(seo)
    })
  }, [])

  return (
    <main className="cms-page" id="main-content">
      <SEO meta={meta} />
      <section className="page-hero">
        <div className="page-hero__content">
          <p className="eyebrow">Services</p>
          <h1>Creative systems for brands that need sharper digital presence.</h1>
          <p>
            Strategy, identity, web design, and accessible interface systems built to move from idea to launch.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section__inner">
          <ContentGrid items={services} eyebrow="Design service" />
        </div>
      </section>
    </main>
  )
}

export default Services
