import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Clock, Command, Mail, Search, Shield, SlidersHorizontal, X } from 'lucide-react'
import SEO from '../../components/SEO/SEO'
import Button from '../../components/Button/Button'
import { getContentList, getSeo } from '../../services/contentService'

const FALLBACK_CATEGORIES = ['All', 'Branding', 'Design Systems', 'Web Design', 'Typography', 'Motion', 'Process']

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'alpha', label: 'A → Z' },
]

function Blog() {
  const [posts, setPosts] = useState([])
  const [meta, setMeta] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('latest')
  const [sortOpen, setSortOpen] = useState(false)
  const searchRef = useRef(null)
  const sortRef = useRef(null)

  useEffect(() => {
    Promise.all([getContentList('blog'), getSeo('/blog')]).then(([content, seo]) => {
      setPosts(content)
      setMeta(seo)
    })
  }, [])

  useEffect(() => {
    function handleShortcut(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        searchRef.current?.focus()
      }
      if (event.key === 'Escape' && document.activeElement === searchRef.current) {
        setQuery('')
        searchRef.current?.blur()
      }
    }
    window.addEventListener('keydown', handleShortcut)
    return () => window.removeEventListener('keydown', handleShortcut)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setSortOpen(false)
      }
    }
    if (sortOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [sortOpen])

  const categoryCounts = useMemo(() => {
    const counts = { All: posts.length }
    posts.forEach((post) => {
      if (!post.category) return
      counts[post.category] = (counts[post.category] ?? 0) + 1
    })
    return counts
  }, [posts])

  const categories = useMemo(() => {
    const derived = Array.from(new Set(posts.map((post) => post.category).filter(Boolean)))
    return ['All', ...(derived.length ? derived : FALLBACK_CATEGORIES.slice(1))]
  }, [posts])

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    const list = posts.filter((post) => {
      const matchCategory = activeCategory === 'All' || post.category === activeCategory
      const matchQuery =
        !trimmed ||
        post.title?.toLowerCase().includes(trimmed) ||
        post.excerpt?.toLowerCase().includes(trimmed) ||
        post.category?.toLowerCase().includes(trimmed)
      return matchCategory && matchQuery
    })

    const sorted = [...list]
    if (sort === 'alpha') {
      sorted.sort((a, b) => (a.title ?? '').localeCompare(b.title ?? ''))
    } else if (sort === 'oldest') {
      sorted.sort((a, b) => new Date(a.date ?? 0) - new Date(b.date ?? 0))
    } else {
      sorted.sort((a, b) => new Date(b.date ?? 0) - new Date(a.date ?? 0))
    }
    return sorted
  }, [posts, activeCategory, query, sort])

  const activeSortLabel = SORT_OPTIONS.find((option) => option.value === sort)?.label ?? 'Latest'

  const isUnfiltered = activeCategory === 'All' && query.trim() === '' && sort === 'latest'
  const spotlight = isUnfiltered ? filtered.slice(0, Math.min(3, filtered.length)) : []
  const rest = isUnfiltered ? filtered.slice(spotlight.length) : filtered

  const [spotlightIndex, setSpotlightIndex] = useState(0)

  useEffect(() => {
    setSpotlightIndex(0)
  }, [isUnfiltered, spotlight.length])

  const activeSpotlight = spotlight[spotlightIndex] ?? null
  const gotoSpotlight = (delta) => {
    if (spotlight.length === 0) return
    setSpotlightIndex((i) => (i + delta + spotlight.length) % spotlight.length)
  }

  return (
    <main className="blog-page" id="main-content">
      <SEO meta={meta} />

      <section className="blog-hero">
        <div className="blog-hero__grid" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} className="blog-hero__grid-line">
              <span className="blog-hero__grid-pulse" />
            </span>
          ))}
        </div>
        <div className="blog-hero__inner">
          <span className="blog-hero__badge">
            <span className="blog-hero__badge-dot" /> Insight Journal
          </span>
          <h1 className="blog-hero__title">
            Practical thinking on <span>brand, product, and the web.</span>
          </h1>
          <p className="blog-hero__lede">
            Notes from the studio on design systems, identity, motion, and the craft of shipping clear digital
            experiences. Written for teams who care about the details.
          </p>
          <div className="blog-hero__meta">
            <span>{posts.length || 6} Articles</span>
            <span aria-hidden="true">·</span>
            <span>Updated weekly</span>
            <span aria-hidden="true">·</span>
            <span>Curated by the studio</span>
          </div>
        </div>
      </section>

      <section className="blog-toolbar" aria-label="Article filters">
        <div className="blog-toolbar__inner">
          <div className="blog-toolbar__panel">
            <div className="blog-toolbar__grid" aria-hidden="true" />
            <div className="blog-toolbar__glow" aria-hidden="true" />

            <div className="blog-toolbar__row">
              <div className="blog-toolbar__label">
                <SlidersHorizontal size={13} strokeWidth={2.2} aria-hidden="true" />
                <span>Filter</span>
                <span className="blog-toolbar__divider" aria-hidden="true" />
              </div>

              <ul className="blog-toolbar__tabs" role="tablist" aria-label="Filter articles by category">
                {categories.map((category) => {
                  const isActive = activeCategory === category
                  const count = categoryCounts[category] ?? 0
                  return (
                    <li key={category}>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`blog-toolbar__tab${isActive ? ' is-active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                      >
                        <span className="blog-toolbar__tab-dot" aria-hidden="true" />
                        <span className="blog-toolbar__tab-label">{category}</span>
                        <span className="blog-toolbar__tab-count">
                          {count.toString().padStart(2, '0')}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="blog-toolbar__row blog-toolbar__row--secondary">
              <label className="blog-toolbar__search" aria-label="Search articles">
                <Search size={15} strokeWidth={2} aria-hidden="true" />
                <input
                  ref={searchRef}
                  type="search"
                  placeholder="Search articles, topics, authors…"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                {query ? (
                  <button
                    type="button"
                    className="blog-toolbar__search-clear"
                    aria-label="Clear search"
                    onClick={() => setQuery('')}
                  >
                    <X size={14} strokeWidth={2.2} aria-hidden="true" />
                  </button>
                ) : (
                  <span className="blog-toolbar__kbd" aria-hidden="true">
                    <Command size={11} strokeWidth={2.4} />K
                  </span>
                )}
              </label>

              <div className="blog-toolbar__sort" ref={sortRef}>
                <button
                  type="button"
                  className="blog-toolbar__sort-trigger"
                  aria-haspopup="listbox"
                  aria-expanded={sortOpen}
                  onClick={() => setSortOpen((open) => !open)}
                >
                  <span className="blog-toolbar__sort-hint">Sort</span>
                  <span className="blog-toolbar__sort-value">{activeSortLabel}</span>
                  <ChevronDown
                    size={13}
                    strokeWidth={2.2}
                    aria-hidden="true"
                    style={{ transform: sortOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}
                  />
                </button>
                {sortOpen ? (
                  <ul className="blog-toolbar__sort-menu" role="listbox">
                    {SORT_OPTIONS.map((option) => (
                      <li key={option.value}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={sort === option.value}
                          className={`blog-toolbar__sort-option${sort === option.value ? ' is-active' : ''}`}
                          onClick={() => {
                            setSort(option.value)
                            setSortOpen(false)
                          }}
                        >
                          {option.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="blog-toolbar__status" role="status" aria-live="polite">
                <span className="blog-toolbar__status-dot" aria-hidden="true" />
                <span className="blog-toolbar__status-text">
                  <strong>{filtered.length.toString().padStart(2, '0')}</strong>
                  <span className="blog-toolbar__status-sep">/</span>
                  {posts.length.toString().padStart(2, '0')} articles
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeSpotlight ? (
        <section className="blog-spotlight" aria-label="Latest articles">
          <div className="blog-spotlight__inner">
            <header className="blog-spotlight__header">
              <div className="blog-spotlight__header-main">
                <p className="blog-spotlight__eyebrow">
                  <span className="blog-spotlight__eyebrow-index">
                    ({String(spotlightIndex + 1).padStart(2, '0')})
                  </span>
                  The latest
                </p>
                <h2 className="blog-spotlight__heading">Stay up to date with our articles</h2>
              </div>
              <div className="blog-spotlight__header-side">
                <p className="blog-spotlight__header-copy">
                  Fresh thinking on brand systems, web design, typography, motion, and the practical decisions behind the work.
                </p>
                <div className="blog-spotlight__header-stat" aria-label={`${spotlight.length} spotlight articles`}>
                  <strong>{String(spotlight.length).padStart(2, '0')}</strong>
                  <span>Spotlight articles</span>
                </div>
              </div>
            </header>

            <div className="blog-spotlight__rule" aria-hidden="true" />

            <div className="blog-spotlight__body">
              <div className="blog-spotlight__content">
                <div className="blog-spotlight__meta">
                  {activeSpotlight.category ? (
                    <span className="blog-spotlight__chip">{activeSpotlight.category}</span>
                  ) : null}
                  {activeSpotlight.readTime ? (
                    <span className="blog-spotlight__read">
                      <Clock size={13} strokeWidth={2} aria-hidden="true" /> {activeSpotlight.readTime}
                    </span>
                  ) : null}
                </div>

                <h3 className="blog-spotlight__title">
                  <Link to={`/blog/${activeSpotlight.slug}`}>{activeSpotlight.title}</Link>
                </h3>

                <p className="blog-spotlight__excerpt">{activeSpotlight.excerpt}</p>

                <div className="blog-spotlight__byline">
                  <span className="blog-author__avatar blog-author__avatar--spotlight" aria-hidden="true">
                    {activeSpotlight.author?.charAt(0) ?? 'D'}
                  </span>
                  <strong>{activeSpotlight.author ?? 'Design Agency Studio'}</strong>
                  <span className="blog-spotlight__dot" aria-hidden="true" />
                  <span>{activeSpotlight.date}</span>
                </div>

                <div className="blog-spotlight__controls">
                  <div className="blog-spotlight__nav" role="group" aria-label="Spotlight navigation">
                    <button
                      type="button"
                      className="blog-spotlight__nav-btn"
                      aria-label="Previous article"
                      onClick={() => gotoSpotlight(-1)}
                    >
                      <ArrowLeft size={16} strokeWidth={2.2} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="blog-spotlight__nav-btn"
                      aria-label="Next article"
                      onClick={() => gotoSpotlight(1)}
                    >
                      <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
                    </button>
                  </div>
                  <span className="blog-spotlight__counter">
                    <strong>{String(spotlightIndex + 1).padStart(2, '0')}</strong>
                    <span>/</span>
                    {String(spotlight.length).padStart(2, '0')}
                  </span>
                  <Link to={`/blog/${activeSpotlight.slug}`} className="blog-spotlight__cta">
                    Read article <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <Link
                to={`/blog/${activeSpotlight.slug}`}
                className="blog-spotlight__media"
                aria-label={`Read ${activeSpotlight.title}`}
              >
                {activeSpotlight.heroImage ? (
                  <img
                    key={activeSpotlight.id}
                    src={activeSpotlight.heroImage}
                    alt=""
                    loading="eager"
                  />
                ) : (
                  <div className="blog-spotlight__media-fallback" aria-hidden="true" />
                )}
                <span className="blog-spotlight__badge">Featured</span>
              </Link>
            </div>

            <div className="blog-spotlight__rule" aria-hidden="true" />
          </div>
        </section>
      ) : null}

      <section className="blog-list">
        <div className="blog-list__inner">
          <div className="blog-list__heading">
            <p className="eyebrow">Latest articles</p>
            <h2>Selected intelligence for sharper brands</h2>
          </div>

          {rest.length === 0 ? (
            <p className="blog-list__empty">
              No articles match that filter yet. Try another category or clear the search.
            </p>
          ) : (
            <div className="blog-grid">
              {rest.map((post, index) => (
                <article className="blog-card" key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="blog-card__media">
                    {post.heroImage ? (
                      <img src={post.heroImage} alt="" loading="lazy" />
                    ) : (
                      <div className="blog-card__media-fallback" aria-hidden="true" />
                    )}
                    {post.category ? (
                      <span className="blog-card__category">{post.category}</span>
                    ) : null}
                  </Link>
                  <div className="blog-card__body">
                    <div className="blog-card__index-row">
                      <span className="blog-card__index">
                        {String(index + spotlight.length + 1).padStart(2, '0')}
                      </span>
                      <span className="blog-card__index-rule" aria-hidden="true" />
                      <span className="blog-card__meta">
                        {post.date ? <span>{post.date}</span> : null}
                        {post.date && post.readTime ? (
                          <span className="blog-card__meta-dot" aria-hidden="true" />
                        ) : null}
                        {post.readTime ? (
                          <span className="blog-card__read">
                            <Clock size={12} strokeWidth={2} aria-hidden="true" /> {post.readTime}
                          </span>
                        ) : null}
                      </span>
                    </div>
                    <h3 className="blog-card__title">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__footer">
                      <div className="blog-author blog-author--compact">
                        <span className="blog-author__avatar" aria-hidden="true">
                          {post.author?.charAt(0) ?? 'D'}
                        </span>
                        <span>{post.author ?? 'Studio'}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="blog-card__link" aria-label={`Read ${post.title}`}>
                        Read <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {isUnfiltered && posts.length >= 5 ? (
        <section className="blog-picks" aria-label="Popular reading">
          <svg className="blog-picks__sketch blog-picks__sketch--star" viewBox="0 0 64 64" aria-hidden="true">
            <path
              d="M32 6 L36 26 L56 30 L36 34 L32 54 L28 34 L8 30 L28 26 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <circle cx="32" cy="30" r="2.2" fill="currentColor" />
          </svg>

          <svg className="blog-picks__sketch blog-picks__sketch--scribble" viewBox="0 0 180 40" aria-hidden="true">
            <path
              d="M4 22 C 18 8, 34 32, 50 18 S 82 10, 98 22 S 130 34, 148 20 S 176 12, 178 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>

          <svg className="blog-picks__sketch blog-picks__sketch--swirl" viewBox="0 0 60 60" aria-hidden="true">
            <path
              d="M30 8 C 46 8, 52 24, 48 36 S 30 52, 18 46 S 8 28, 20 22 S 38 26, 36 34 S 26 40, 26 34"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>

          <div className="blog-picks__inner">
            <header className="blog-picks__header">
              <p className="blog-picks__eyebrow">
                <span className="blog-picks__eyebrow-circle">
                  <svg viewBox="0 0 80 40" aria-hidden="true">
                    <path
                      d="M12 22 C 12 10, 32 6, 48 8 S 74 16, 72 24 S 52 36, 32 34 S 8 28, 14 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="blog-picks__eyebrow-index">(02)</span>
                </span>
                Editor&apos;s picks
              </p>
              <h2 className="blog-picks__heading">
                Popular reading from the studio
                <svg
                  className="blog-picks__underline"
                  viewBox="0 0 320 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10 C 40 2, 80 16, 120 8 S 200 2, 240 10 S 300 16, 316 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="blog-picks__lede">
                A curated mix of what our readers are bookmarking this month — practical, sharp, and worth your
                coffee break.
              </p>
            </header>

            <div className="blog-picks__body">
              {(() => {
                const feature = posts[0]
                const items = posts.slice(1, 5)
                return (
                  <>
                    <article className="blog-picks__feature">
                      <Link to={`/blog/${feature.slug}`} className="blog-picks__feature-media">
                        {feature.heroImage ? (
                          <img src={feature.heroImage} alt="" loading="lazy" />
                        ) : (
                          <div className="blog-picks__media-fallback" aria-hidden="true" />
                        )}
                      </Link>
                      <div className="blog-picks__feature-body">
                        {feature.category ? (
                          <span className="blog-picks__category">{feature.category}</span>
                        ) : null}
                        <h3 className="blog-picks__feature-title">
                          <Link to={`/blog/${feature.slug}`}>{feature.title}</Link>
                        </h3>
                        <p className="blog-picks__feature-excerpt">{feature.excerpt}</p>
                        <Link to={`/blog/${feature.slug}`} className="blog-picks__feature-link" aria-label={`Read ${feature.title}`}>
                          <span className="blog-picks__feature-link-circle">
                            <ArrowUpRight size={14} strokeWidth={2.2} aria-hidden="true" />
                          </span>
                        </Link>
                      </div>
                    </article>

                    <ul className="blog-picks__list">
                      {items.map((post) => (
                        <li key={post.id} className="blog-picks__item">
                          <Link to={`/blog/${post.slug}`} className="blog-picks__item-media">
                            {post.heroImage ? (
                              <img src={post.heroImage} alt="" loading="lazy" />
                            ) : (
                              <div className="blog-picks__media-fallback" aria-hidden="true" />
                            )}
                          </Link>
                          <div className="blog-picks__item-body">
                            {post.category ? (
                              <span className="blog-picks__category">{post.category}</span>
                            ) : null}
                            <h4 className="blog-picks__item-title">
                              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                            </h4>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )
              })()}
            </div>
          </div>
        </section>
      ) : null}

      <section className="blog-newsletter">
        <div className="blog-newsletter__inner">
          <div className="blog-newsletter__copy">
            <p className="blog-newsletter__eyebrow"><span>Studio Dispatch</span></p>
            <h2 className="blog-newsletter__title">
              Design intelligence, <span>delivered monthly.</span>
            </h2>
            <p className="blog-newsletter__lede">
              Case studies, research, and frameworks for design and product teams.
            </p>
          </div>
          <div className="blog-newsletter__action">
            <form
              className="blog-newsletter__form"
              onSubmit={(event) => {
                event.preventDefault()
              }}
            >
              <label htmlFor="blog-newsletter-email" className="visually-hidden">
                Email address
              </label>
              <input
                id="blog-newsletter-email"
                type="email"
                required
                placeholder="name@company.com"
                autoComplete="email"
              />
              <button type="submit" className="blog-newsletter__submit">
                Subscribe <ArrowRight size={15} strokeWidth={2.4} aria-hidden="true" />
              </button>
            </form>
            <p className="blog-newsletter__meta">
              <Shield size={13} strokeWidth={2} aria-hidden="true" />
              Read by 4,800+ teams. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Blog
