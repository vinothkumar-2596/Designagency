import { Link } from 'react-router-dom'

function ContentGrid({ items, eyebrow, emptyMessage = 'No content published yet.' }) {
  if (!items.length) {
    return <p className="content-grid__empty">{emptyMessage}</p>
  }

  return (
    <div className="content-grid">
      {items.map((item) => (
        <article className="content-card" key={item.id}>
          {item.heroImage ? (
            <div className="content-card__media">
              <img className="content-card__image" src={item.heroImage} alt="" loading="lazy" />
            </div>
          ) : null}
          <div className="content-card__body">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h3 className="content-card__title">{item.title}</h3>
            <p className="content-card__excerpt">{item.excerpt}</p>
            <Link
              className="content-card__link"
              to={`/${item.type}/${item.slug}`}
              aria-label={`Read ${item.title}`}
            >
              <span>Read more</span>
              <svg
                className="content-card__arrow"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ContentGrid
