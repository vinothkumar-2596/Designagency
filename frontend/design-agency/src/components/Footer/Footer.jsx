function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__cta-banner">
        <div className="footer__cta-content">
          <p>Starting a new project or want to collaborate with us?</p>
          <a href="/contactus" className="footer__cta-link">Let's talk <span>›</span></a>
        </div>
        <a href="mailto:hello@brandvue.com" className="footer__cta-email">hello@brandvue.com</a>
      </div>

      <div className="footer__content">
        <div className="footer__main">
          <div className="footer__left">
            <div className="footer__brand">
              <span className="footer__brand-mark" aria-hidden="true" />
              <span>Brandvue</span>
            </div>

            <p className="footer__description">
              Brandvue is designed to revolutionize how modern brands are built.
            </p>

            <div className="footer__badges">
              <div className="footer__badge">SOC 2</div>
              <div className="footer__badge">Verified</div>
            </div>

            <nav className="footer__socials">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">&lt;&gt;</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
            </nav>
          </div>

          <div className="footer__right">
            <div className="footer__columns">
              <div className="footer__column">
                <h3>Resources</h3>
                <ul>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#blogs">Blogs</a></li>
                  <li><a href="#integrations">Integrations</a></li>
                  <li><a href="#aboutus">About us</a></li>
                  <li><a href="#careers">Careers</a></li>
                </ul>
              </div>

              <div className="footer__column">
                <h3>Security</h3>
                <ul>
                  <li><a href="#security">Security</a></li>
                  <li><a href="#privacy">Privacy policy</a></li>
                  <li><a href="#terms">Terms & conditions</a></li>
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
          <p>© {currentYear} Brandvue. All rights reserved <span aria-hidden="true">›</span></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
