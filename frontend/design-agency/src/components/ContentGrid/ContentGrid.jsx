import { Link } from 'react-router-dom'

function ContentGrid({ items, eyebrow, emptyMessage = 'No content published yet.' }) {
  if (!items.length) {
    return <p className="content-grid__empty">{emptyMessage}</p>
  }

  return (
    <div className="content-grid">
      {items.map((item, index) => {
        const hasMedia = Boolean(item.heroImage)
        const titleParts = (item.title || '').split('—').map((part) => part.trim()).filter(Boolean)
        const [titleMain, ...titleRest] = titleParts
        const titleMeta = titleRest.join(' — ')
        const firstTag = item.tags && item.tags[0]
        return (
          <article className="content-card" key={item.id}>
            <span className="content-card__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>

            {hasMedia ? (
              <div className="content-card__media">
                <img
                  className="content-card__image"
                  src={item.heroImage}
                  alt=""
                  loading="lazy"
                />
                {eyebrow ? <span className="content-card__media-tag">{eyebrow}</span> : null}
              </div>
            ) : null}

            <div className="content-card__body">
              <div className="content-card__meta">
                {item.year ? (
                  <span className="content-card__meta-item content-card__meta-year">{item.year}</span>
                ) : null}
                {eyebrow ? (
                  <>
                    {item.year ? (
                      <span className="content-card__meta-dot" aria-hidden="true">·</span>
                    ) : null}
                    <span className="content-card__meta-item">{eyebrow}</span>
                  </>
                ) : null}
              </div>
              <h3 className="content-card__title">
                <span className="content-card__title-main">{titleMain || item.title}</span>
                {titleMeta ? (
                  <span className="content-card__title-meta">{titleMeta}</span>
                ) : null}
              </h3>
              {item.excerpt ? <p className="content-card__excerpt">{item.excerpt}</p> : null}
              {item.tags && item.tags.length ? (
                <ul className="content-card__tags" aria-label="Disciplines">
                  {item.tags.slice(0, 4).map((tag) => (
                    <li className="content-card__tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="content-card__cta">
              <Link
                className="content-card__button"
                to={`/${item.type}/${item.slug}`}
                aria-label={`Read ${item.title}`}
              >
                <span>Read case study</span>
                <span className="content-card__arrow" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default ContentGrid
