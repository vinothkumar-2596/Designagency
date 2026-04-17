import { useEffect, useState } from 'react'
import ContentGrid from '../../components/ContentGrid/ContentGrid'
import SEO from '../../components/SEO/SEO'
import { getContentList, getSeo } from '../../services/contentService'

function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([])
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    Promise.all([getContentList('case-studies'), getSeo('/case-studies')]).then(([content, seo]) => {
      setCaseStudies(content)
      setMeta(seo)
    })
  }, [])

  return (
    <main className="cms-page" id="main-content">
      <SEO meta={meta} />
      <section className="page-hero">
        <div className="page-hero__content">
          <p className="eyebrow">Case studies</p>
          <h1>Selected work across brand launches, websites, and digital campaigns.</h1>
          <p>Each project connects creative direction with measurable user experience improvements.</p>
        </div>
      </section>
      <section className="section">
        <div className="section__inner">
          <ContentGrid items={caseStudies} eyebrow="Case study" />
        </div>
      </section>
    </main>
  )
}

export default CaseStudies
