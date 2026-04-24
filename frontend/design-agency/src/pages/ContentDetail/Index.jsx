import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Bookmark, Clock, Copy, Link2, Share2 } from 'lucide-react'
import SEO from '../../components/SEO/SEO'
import { getContentItem, getContentList } from '../../services/contentService'

function renderSection(section, index) {
  if (!section || !section.type) return null
  if (section.type === 'heading') {
    return (
      <h2 key={index} className="blog-article__h2">
        {section.text}
      </h2>
    )
  }
  if (section.type === 'paragraph') {
    return (
      <p key={index} className="blog-article__p">
        {section.text}
      </p>
    )
  }
  if (section.type === 'quote') {
    return (
      <blockquote key={index} className="blog-article__quote">
        <p>{section.text}</p>
      </blockquote>
    )
  }
  if (section.type === 'list') {
    return (
      <ul key={index} className="blog-article__list">
        {(section.items ?? []).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )
  }
  return null
}

function ContentDetail({ type }) {
  const { slug } = useParams()
  const [state, setState] = useState({ item: null, slug: null, type: null })
  const [related, setRelated] = useState([])

  useEffect(() => {
    let ignore = false
    getContentItem(type, slug).then((content) => {
      if (!ignore) setState({ item: content, slug, type })
    })
    return () => {
      ignore = true
    }
  }, [slug, type])

  useEffect(() => {
    if (type !== 'blog') return undefined
    let ignore = false
    getContentList('blog').then((list) => {
      if (!ignore) setRelated(list)
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
        <p className="page-loading">Loading</p>
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

  if (type === 'blog') {
    const sections = Array.isArray(item.sections) && item.sections.length > 0 ? item.sections : null
    const plainParagraphs = !sections && item.body ? item.body.split(/\n{2,}/).map((text) => text.trim()).filter(Boolean) : []
    const tags = Array.isArray(item.tags) ? item.tags : []
    const relatedPosts = related.filter((post) => post.slug !== item.slug).slice(0, 3)

    return (
      <main className="blog-article" id="main-content">
        <SEO meta={item.meta} />

        <section className="blog-article__hero">
          <div className="blog-article__hero-grid" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="blog-article__hero-line" />
            ))}
          </div>
          <div className="blog-article__hero-inner">
            <nav className="blog-article__crumbs" aria-label="Breadcrumb">
              <Link to="/blog" className="blog-article__crumb">
                <ArrowLeft size={14} strokeWidth={2.2} aria-hidden="true" /> All articles
              </Link>
              {item.category ? (
                <>
                  <span aria-hidden="true">/</span>
                  <span className="blog-article__crumb blog-article__crumb--category">{item.category}</span>
                </>
              ) : null}
            </nav>

            <h1 className="blog-article__title">{item.title}</h1>
            {item.excerpt ? <p className="blog-article__lede">{item.excerpt}</p> : null}

            <div className="blog-article__meta">
              <div className="blog-article__author">
                <span className="blog-article__avatar" aria-hidden="true">
                  {item.author?.charAt(0) ?? 'D'}
                </span>
                <div>
                  <strong>{item.author ?? 'Design Agency Studio'}</strong>
                  <span>Editorial team</span>
                </div>
              </div>
              <span className="blog-article__meta-dot" aria-hidden="true" />
              {item.date ? <span className="blog-article__meta-item">{item.date}</span> : null}
              {item.readTime ? (
                <>
                  <span className="blog-article__meta-dot" aria-hidden="true" />
                  <span className="blog-article__meta-item">
                    <Clock size={13} strokeWidth={2} aria-hidden="true" /> {item.readTime}
                  </span>
                </>
              ) : null}
            </div>
          </div>
        </section>

        {item.heroImage ? (
          <figure className="blog-article__cover">
            <img src={item.heroImage} alt="" />
            <figcaption>{item.category ? `${item.category} — ${item.title}` : item.title}</figcaption>
          </figure>
        ) : null}

        <article className="blog-article__body">
          <aside className="blog-article__share" aria-label="Share">
            <span className="blog-article__share-label">Share</span>
            <button type="button" className="blog-article__share-btn" aria-label="Copy link">
              <Link2 size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <button type="button" className="blog-article__share-btn" aria-label="Share">
              <Share2 size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <button type="button" className="blog-article__share-btn" aria-label="Save">
              <Bookmark size={15} strokeWidth={2.2} aria-hidden="true" />
            </button>
          </aside>

          <div className="blog-article__prose">
            {sections
              ? sections.map((section, index) => renderSection(section, index))
              : plainParagraphs.length > 0
                ? plainParagraphs.map((p, i) => (
                    <p key={i} className="blog-article__p">
                      {p}
                    </p>
                  ))
                : item.body
                  ? <p className="blog-article__p">{item.body}</p>
                  : null}

            {tags.length > 0 ? (
              <div className="blog-article__tags">
                {tags.map((tag) => (
                  <span key={tag} className="blog-article__tag">#{tag}</span>
                ))}
              </div>
            ) : null}
          </div>
        </article>

        {item.author ? (
          <section className="blog-article__author-block" aria-label="About the author">
            <div className="blog-article__author-inner">
              <span className="blog-article__avatar blog-article__avatar--lg" aria-hidden="true">
                {item.author.charAt(0)}
              </span>
              <div className="blog-article__author-copy">
                <p className="blog-article__author-eyebrow">Written by</p>
                <h2>{item.author}</h2>
                {item.authorBio ? <p>{item.authorBio}</p> : null}
              </div>
              <Link to="/contactus" className="blog-article__author-cta">
                Work with us <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          </section>
        ) : null}

        {relatedPosts.length > 0 ? (
          <section className="blog-article__related" aria-label="Related reading">
            <div className="blog-article__related-inner">
              <header className="blog-article__related-header">
                <p className="blog-article__related-eyebrow">Keep reading</p>
                <h2>More from the studio</h2>
              </header>
              <ul className="blog-article__related-list">
                {relatedPosts.map((post) => (
                  <li key={post.id} className="blog-article__related-card">
                    <Link to={`/blog/${post.slug}`} className="blog-article__related-media">
                      {post.heroImage ? <img src={post.heroImage} alt="" loading="lazy" /> : null}
                    </Link>
                    <div className="blog-article__related-body">
                      {post.category ? <span className="blog-article__related-chip">{post.category}</span> : null}
                      <h3>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p>{post.excerpt}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
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
