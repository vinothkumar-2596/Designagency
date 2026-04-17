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
            <img className="content-card__image" src={item.heroImage} alt="" loading="lazy" />
          ) : null}
          <div className="content-card__body">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <Link to={`/${item.type}/${item.slug}`} aria-label={`Read ${item.title}`}>
              Read more
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ContentGrid
