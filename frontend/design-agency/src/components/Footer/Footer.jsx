import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/site'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { email, social } = siteConfig
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScrollTop = () => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  const socialLinks = [
    { url: social.twitter, label: 'Twitter', symbol: '𝕏' },
    { url: social.youtube, label: 'YouTube', symbol: '▶' },
    { url: social.linkedin, label: 'LinkedIn', symbol: 'in' },
    { url: social.github, label: 'GitHub', symbol: '<>' },
    { url: social.instagram, label: 'Instagram', symbol: '◎' },
  ].filter((link) => link.url)

  return (
    <footer className="footer">
      <div className="footer__cta-banner">
        <div className="footer__cta-content">
          <p>Starting a new project or want to collaborate with us?</p>
          <Link to="/contactus" className="footer__cta-link">Let's talk <span>›</span></Link>
        </div>
        <a href={`mailto:${email}`} className="footer__cta-email">{email}</a>
      </div>

      <div className="footer__content">
        <div className="footer__main">
          <div className="footer__left">
            <div className="footer__brand">
              <span className="footer__brand-mark" aria-hidden="true" />
              <span>{siteConfig.name}</span>
            </div>

            <p className="footer__description">
              {siteConfig.description}
            </p>

            <div className="footer__badges">
              <div className="footer__badge">SOC 2</div>
              <div className="footer__badge">Verified</div>
            </div>

            {socialLinks.length > 0 && (
              <nav className="footer__socials" aria-label="Social media">
                {socialLinks.map(({ url, label, symbol }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    {symbol}
                  </a>
                ))}
              </nav>
            )}
          </div>

          <div className="footer__right">
            <div className="footer__columns">
              <div className="footer__column">
                <h3>Resources</h3>
                <ul>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/case-studies">Case studies</Link></li>
                  <li><Link to="/aboutus">About us</Link></li>
                  <li><Link to="/contactus">Contact</Link></li>
                </ul>
              </div>

              <div className="footer__column">
                <h3>Company</h3>
                <ul>
                  <li><Link to="/aboutus">About</Link></li>
                  <li><a href="#privacy">Privacy policy</a></li>
                  <li><a href="#terms">Terms &amp; conditions</a></li>
                </ul>
              </div>
            </div>

            <div className="footer__status">
              <div className="footer__status-dot" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} {siteConfig.name}. All rights reserved <span aria-hidden="true">›</span></p>
        </div>
      </div>

      <button
        type="button"
        className={`footer__back-to-top${showScrollTop ? ' is-visible' : ''}`}
        onClick={handleScrollTop}
        aria-label="Back to top"
        aria-hidden={!showScrollTop}
        tabIndex={showScrollTop ? 0 : -1}
      >
        <ArrowUp size={20} strokeWidth={2.4} aria-hidden="true" />
      </button>
    </footer>
  )
}

export default Footer
