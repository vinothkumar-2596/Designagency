import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ContentGrid from '../../components/ContentGrid/ContentGrid'
import SEO from '../../components/SEO/SEO'
import { getContentList, getSeo } from '../../services/contentService'

const SHOWCASE_TILES = [
  { img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80', tag: 'Branding · 2024', title: 'DLF CyberHub Musix' },
  { img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80', tag: 'Mobile UX', title: 'Wellness companion' },
  { img: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&q=80', tag: 'Identity', title: 'Modern hospitality', size: 'wide' },
  { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', tag: 'Dashboard', title: 'Analytics platform', size: 'wide' },
  { img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80', tag: 'Web design', title: 'Studio launch site' },
  { img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80', tag: 'E-commerce', title: 'Premium retail' },
  { img: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=1200&q=80', tag: 'UX research', title: 'Wireframe system', size: 'wide' },
  { img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80', tag: 'Strategy', title: 'Design sprint deck' },
]

function ShowcaseTile({ tile, index }) {
  const className = `case-hero__tile${tile.size ? ` case-hero__tile--${tile.size}` : ''}`
  return (
    <article className={className}>
      <img src={tile.img} alt="" loading="lazy" decoding="async" />
      <span className="case-hero__tile-marker">
        <span className="case-hero__tile-marker-dot" aria-hidden="true" />
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="case-hero__tile-overlay">
        <span className="case-hero__tile-tag">{tile.tag}</span>
        <strong className="case-hero__tile-title">{tile.title}</strong>
      </div>
    </article>
  )
}

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
      <section className="case-hero">
        <div className="case-hero__grid" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="case-hero__grid-line">
              <span className="case-hero__grid-pulse" />
            </span>
          ))}
        </div>

        <div className="case-hero__inner">
          <h1 className="case-hero__title">
            Selected work across
            {' '}
            <em>brand, product,</em>
            {' '}
            and the web.
          </h1>

          <div className="case-hero__showcase-head">
            <p className="case-hero__showcase-label">
              <span className="case-hero__showcase-dot" aria-hidden="true" />
              Selected projects on view
            </p>
            <p className="case-hero__showcase-count">
              <strong>{String(SHOWCASE_TILES.length).padStart(2, '0')}</strong>
              <span>Live in showcase</span>
            </p>
            <p className="case-hero__showcase-hint">
              <span>Hover to explore</span>
              <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
            </p>
          </div>
        </div>

        <div className="case-hero__marquee" aria-hidden="true">
          <div className="case-hero__marquee-row">
            <div className="case-hero__marquee-track">
              {[...SHOWCASE_TILES, ...SHOWCASE_TILES].map((tile, i) => (
                <ShowcaseTile tile={tile} index={i % SHOWCASE_TILES.length} key={`row1-${i}`} />
              ))}
            </div>
          </div>
          <div className="case-hero__marquee-row case-hero__marquee-row--reverse">
            <div className="case-hero__marquee-track">
              {[...SHOWCASE_TILES.slice().reverse(), ...SHOWCASE_TILES.slice().reverse()].map((tile, i) => {
                const sourceIndex = SHOWCASE_TILES.length - 1 - (i % SHOWCASE_TILES.length)
                return (
                  <ShowcaseTile tile={tile} index={sourceIndex} key={`row2-${i}`} />
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="section case-index" aria-labelledby="case-index-heading">
        <div className="section__inner section__inner--wide">
          <header className="case-index__header">
            <div className="case-index__intro">
              <p className="eyebrow case-index__eyebrow">The full index</p>
              <h2 className="case-index__heading" id="case-index-heading">
                All case studies. <em>Most recent first.</em>
              </h2>
            </div>
            <p className="case-index__count">
              <span className="case-index__count-value">
                {String(caseStudies.length || 0).padStart(2, '0')}
              </span>
              <span className="case-index__count-label">
                {caseStudies.length === 1 ? 'Project' : 'Projects'} shipped
              </span>
            </p>
          </header>
          <ContentGrid items={caseStudies} eyebrow="Case study" />
        </div>
      </section>
    </main>
  )
}

export default CaseStudies
