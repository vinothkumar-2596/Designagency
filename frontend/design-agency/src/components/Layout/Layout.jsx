import { NavLink, Outlet } from 'react-router-dom'
import { siteConfig } from '../../config/site'

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
            <span aria-hidden="true">-&gt;</span>
          </NavLink>
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>Creative design solutions for ambitious teams.</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </footer>
    </>
  )
}

export default Layout
