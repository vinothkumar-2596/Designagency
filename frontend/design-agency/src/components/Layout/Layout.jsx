import { NavLink, Outlet } from 'react-router-dom'
import { siteConfig } from '../../config/site'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <NavLink className="site-header__brand" to="/" aria-label={`${siteConfig.name} home`}>
            <span className="site-header__brand-mark" aria-hidden="true" />
            <span>{siteConfig.name}</span>
          </NavLink>

          <nav className="site-header__nav" aria-label="Primary navigation">
            {siteConfig.navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink className="site-header__action" to="/contactus">
            Start a project
            <span aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </span>
          </NavLink>
        </div>
      </header>

      <Outlet />

      <Footer />
    </>
  )
}

export default Layout
