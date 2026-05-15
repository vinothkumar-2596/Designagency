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
              <svg
                className="footer__brand-lockup"
                viewBox="0 0 612 86.67"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={siteConfig.name}
              >
                <g fill="#ffffff">
                  <path fill="#eda369" d="M56.93,80.62l-28.75-46.66H9.37l25.77,41.82c1.91,3.1,5.29,4.99,8.93,4.99h12.6l.25-.15Z"/>
                  <path d="M79.32,44.13c1.77-3.55,2.77-7.55,2.77-11.79,0-4.83-1.29-9.35-3.55-13.25-4.58-7.89-13.12-13.2-22.9-13.2H10.61v7.99c0,5.49,4.45,9.93,9.93,9.93h37.52c4.54,0,8.21,3.68,8.21,8.21v.07c0,5.29-4.29,9.58-9.58,9.58h-14.22l7.39,11.46,6.52,10.19,3.02-4.8.18-.29,1.12-1.79c1.4-2.23,4.34-2.9,6.57-1.5,1.78,1.12,2.57,3.23,2.09,5.16-.1.57-.32,1.13-.64,1.65l-11.99,19h18.63l7.86-14.16c4.23-7.62,2.4-16.96-3.89-22.48Z"/>
                </g>
                <g fill="#ffffff" transform="translate(36 0)">
                  <path d="M140.32,55.42c0,7.36-5.57,14.62-15.1,14.62h-17.96V22.03h13.11c8.28,0,13.88,5.96,13.88,12.33,0,5.18-3.6,8.64-5.39,8.64,5.39,0,11.47,4.94,11.47,12.42ZM114.77,29.35v11.97l5.96-.03c3.72.03,6.46-2.53,6.46-5.96s-2.98-5.99-6.37-5.99h-6.05ZM132.96,54.91c0-3.63-3.1-6.97-8.55-6.97l-9.65.03v14.71h9.77c4.32,0,8.43-3.13,8.43-7.77Z"/>
                  <path d="M177.76,70.04l-12.93-18.59h-5.9v18.59h-7.54l-.03-48.01h14.92c8.94,0,16.26,6.88,16.26,15.43,0,6.2-3.99,11.59-9.5,13.37l13.97,19.21h-9.26ZM166.47,45.2c4.53.03,8.31-3.63,8.31-7.92s-3.84-7.77-8.31-7.77h-7.57v15.7h7.57Z"/>
                  <path d="M227.38,62.74h-22.73l-3.28,7.3h-8.16l22.58-49h.45l22.58,49h-8.16l-3.28-7.3ZM224.46,56.28l-8.43-18.77-8.46,18.77h16.89Z"/>
                  <path d="M287.82,21.91v48.97h-.36l-30.71-32.08v31.3h-7.54V21.19h.39l30.65,32.02v-31.31h7.57Z"/>
                  <path d="M340.54,46.09c0,14.74-9.5,23.95-24.75,23.95h-13.67V22.03h13.67c15.25-.03,24.75,9.2,24.75,24.07ZM332.91,46.06c0-10.19-6.61-16.56-17.16-16.56h-6.14v33.03h6.23c10.48,0,17.07-6.34,17.07-16.47Z"/>
                  <path fill="#eda369" d="M388.96,22.03l-22.16,49h-.51l-22.07-49h8.01l14.3,32.5,14.36-32.5h8.07Z"/>
                  <path d="M399.36,22.03h7.54v48.01h-7.54V22.03Z"/>
                  <path d="M418.9,46.09c0-13.7,11.14-24.9,24.81-24.9s24.84,11.2,24.84,24.9-11.2,24.72-24.87,24.72-24.78-11.14-24.78-24.72ZM460.93,46.03c0-9.5-7.77-17.25-17.25-17.25s-17.19,7.74-17.19,17.25,7.71,17.16,17.19,17.16,17.25-7.71,17.25-17.16Z"/>
                  <path d="M506.91,70.04l-12.93-18.59h-5.9v18.59h-7.54l-.03-48.01h14.92c8.94,0,16.26,6.88,16.26,15.43,0,6.2-3.99,11.59-9.5,13.37l13.97,19.21h-9.26ZM495.62,45.2c4.53.03,8.31-3.63,8.31-7.92s-3.84-7.77-8.31-7.77h-7.57v15.7h7.57Z"/>
                  <path d="M556.53,62.74h-22.73l-3.28,7.3h-8.16l22.58-49h.45l22.58,49h-8.16l-3.28-7.3ZM553.62,56.28l-8.43-18.77-8.46,18.77h16.89Z"/>
                </g>
              </svg>
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
