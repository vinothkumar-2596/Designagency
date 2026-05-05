import { Link, NavLink, Outlet } from 'react-router-dom'
import { ArrowUpRight, Code2, LayoutGrid, Palette, PenTool, Smartphone } from 'lucide-react'
import { siteConfig } from '../../config/site'
import Footer from '../Footer/Footer'

const NAV_ICONS = {
  penTool: PenTool,
  layoutGrid: LayoutGrid,
  code2: Code2,
  smartphone: Smartphone,
  palette: Palette,
}

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
            {siteConfig.navItems.map((item) => {
              if (item.children?.length) {
                return (
                  <div
                    key={item.path}
                    className="site-header__nav-item site-header__nav-item--has-menu"
                  >
                    <NavLink to={item.path} className="site-header__nav-link">
                      <span>{item.label}</span>
                      <svg
                        className="site-header__nav-caret"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </NavLink>
                    <div className="site-header__nav-menu" role="menu">
                      <div className="site-header__nav-menu-head">
                        <span>Studio services</span>
                        <small>Choose a capability</small>
                      </div>
                      {item.children.map((child) => {
                        const Icon = child.icon ? NAV_ICONS[child.icon] : null
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="site-header__nav-menu-link"
                            role="menuitem"
                          >
                            {Icon ? (
                              <span className="site-header__nav-menu-icon" aria-hidden="true">
                                <Icon size={15} strokeWidth={1.6} />
                              </span>
                            ) : null}
                            <span className="site-header__nav-menu-copy">
                              <strong>{child.label}</strong>
                              {child.description ? <small>{child.description}</small> : null}
                            </span>
                            <ArrowUpRight className="site-header__nav-menu-arrow" size={14} strokeWidth={1.9} aria-hidden="true" />
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }
              return (
                <NavLink key={item.path} to={item.path}>
                  {item.label}
                </NavLink>
              )
            })}
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
