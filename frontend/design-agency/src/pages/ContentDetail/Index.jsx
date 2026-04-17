import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SEO from '../../components/SEO/SEO'
import { getContentItem } from '../../services/contentService'

function ContentDetail({ type }) {
  const { slug } = useParams()
  const [state, setState] = useState({
    item: null,
    slug: null,
    type: null,
  })

  useEffect(() => {
    let ignore = false

    getContentItem(type, slug).then((content) => {
      if (ignore) {
        return
      }

      setState({
        item: content,
        slug,
        type,
      })
    })

    return () => {
      ignore = true
    }
  }, [slug, type])

  const loading = state.slug !== slug || state.type !== type
  const item = state.item

  if (loading) {
    return (
      <main className="content-detail" id="main-content">
        <p>Loading</p>
      </main>
    )
  }

  if (!item) {
    return (
      <main className="content-detail" id="main-content">
        <section className="section">
          <div className="section__inner">
            <h1>Content not found</h1>
            <Link to="/">Return home</Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="content-detail" id="main-content">
      <SEO meta={item.meta} />
      <article>
        <header className="content-detail__hero">
          <div className="content-detail__copy">
            <p className="eyebrow">{type.replace('-', ' ')}</p>
            <h1>{item.title}</h1>
            <p>{item.excerpt}</p>
          </div>
          {item.heroImage ? <img src={item.heroImage} alt="" /> : null}
        </header>
        <div className="content-detail__body">
          <p>{item.body}</p>
        </div>
      </article>
    </main>
  )
}

export default ContentDetail
