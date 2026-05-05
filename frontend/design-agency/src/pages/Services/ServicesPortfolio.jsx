import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SERVICE_SLUGS } from './serviceSlugs'

const PORTFOLIO_ITEMS = [
  { title: 'DLF CyberHub Musix', tag: 'Branding', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80', bg: '#cfd5dc' },
  { title: 'Ahimsa', tag: 'Branding', img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=80', bg: '#e8c84a' },
  { title: 'Nordlys Craft & Design', tag: 'Branding', img: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=900&q=80', bg: '#4a3f3a' },
  { title: 'Spice Grill', tag: 'Branding', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80', bg: '#f0d9b8' },
  { title: 'Kohler Bathroom Furniture', tag: 'Branding', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=80', bg: '#1a1a1a' },
  { title: 'XpertEase', tag: 'Branding', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b8?auto=format&fit=crop&w=900&q=80', bg: '#f0f0f0' },
]

const SIDEBAR_LINKS = [
  { label: 'Branding & Identity', slug: SERVICE_SLUGS['01'] },
  { label: 'UI/UX Design', slug: SERVICE_SLUGS['02'] },
  { label: 'Web Design & Development', slug: SERVICE_SLUGS['03'] },
  { label: 'Mobile App Development', slug: SERVICE_SLUGS['04'] },
  { label: 'Creative & Social Media', slug: SERVICE_SLUGS['05'] },
]

function ServicesPortfolio({ heading = 'Branding Portfolio', lede = "A glimpse of recent identity and brand systems we've shipped for ambitious teams.", activeSlug }) {
  return (
    <section className="services-portfolio" aria-label="Portfolio">
      <div className="services-portfolio__inner">
        <div className="services-portfolio__main">
          <header className="services-portfolio__heading">
            <h2>{heading}</h2>
            <p>{lede}</p>
          </header>

          <div className="services-portfolio__grid">
            {PORTFOLIO_ITEMS.map((item) => (
              <article className="portfolio-card" key={item.title}>
                <Link to="/contactus" className="portfolio-card__link">
                  <div className="portfolio-card__media" style={{ background: item.bg }}>
                    <img src={item.img} alt={item.title} loading="lazy" decoding="async" />
                  </div>
                  <span className="portfolio-card__tag">{item.tag}</span>
                  <h3 className="portfolio-card__title">{item.title}</h3>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <aside className="services-portfolio__aside" aria-label="Quick services">
          <Link to="/contactus" className="services-portfolio__quote">
            <span>Get a Quote</span>
            <ArrowRight size={18} strokeWidth={2.2} />
          </Link>

          <div className="services-portfolio__nav">
            <h3 className="services-portfolio__nav-title">Services</h3>
            <ul>
              {SIDEBAR_LINKS.map((item) => {
                const isActive = activeSlug === item.slug
                return (
                  <li key={item.slug}>
                    <Link
                      to={`/services/${item.slug}`}
                      className={isActive ? 'is-active' : undefined}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ServicesPortfolio
