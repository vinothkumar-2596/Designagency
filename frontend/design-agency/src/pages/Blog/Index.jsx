import { useEffect, useState } from 'react'
import ContentGrid from '../../components/ContentGrid/ContentGrid'
import SEO from '../../components/SEO/SEO'
import { getContentList, getSeo } from '../../services/contentService'

function Blog() {
  const [posts, setPosts] = useState([])
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    Promise.all([getContentList('blog'), getSeo('/blog')]).then(([content, seo]) => {
      setPosts(content)
      setMeta(seo)
    })
  }, [])

  return (
    <main className="cms-page" id="main-content">
      <SEO meta={meta} />
      <section className="page-hero">
        <div className="page-hero__content">
          <p className="eyebrow">Blog</p>
          <h1>Practical thinking on design systems, accessibility, and creative direction.</h1>
          <p>Notes for teams building clearer brands and better digital experiences.</p>
        </div>
      </section>
      <section className="section">
        <div className="section__inner">
          <ContentGrid items={posts} eyebrow="Insight" />
        </div>
      </section>
    </main>
  )
}

export default Blog
