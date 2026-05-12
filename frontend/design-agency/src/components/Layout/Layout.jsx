import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, Code2, LayoutGrid, Palette, PenTool, Smartphone } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { prefetchRoute, warmIdleRoutes } from '../../app/routePrefetch'
import Footer from '../Footer/Footer'

const NAV_ICONS = {
  penTool: PenTool,
  layoutGrid: LayoutGrid,
  code2: Code2,
  smartphone: Smartphone,
  palette: Palette,
}

// Shared handlers — wire hover/focus/touchstart to start the chunk download
// before the user actually clicks. Touchstart catches mobile taps that have
// no hover state.
function prefetchHandlers(path) {
  const fire = () => prefetchRoute(path)
  return {
    onMouseEnter: fire,
    onFocus: fire,
    onTouchStart: fire,
  }
}

function Layout() {
  const location = useLocation()

  // Close any open dropdown after route changes (release :focus-within).
  useEffect(() => {
    const active = typeof document !== 'undefined' ? document.activeElement : null
    if (
      active instanceof HTMLElement &&
      active.closest('.site-header__nav-item--has-menu')
    ) {
      active.blur()
    }
  }, [location.pathname])

  // After the page is interactive, warm the chunks for the rest of the nav
  // during browser idle time. Every primary route ends up pre-cached without
  // blocking the first-paint critical path.
  useEffect(() => {
    warmIdleRoutes(location.pathname)
  }, [location.pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <NavLink
            className="site-header__brand"
            to="/"
            aria-label={`${siteConfig.name} home`}
            {...prefetchHandlers('/')}
          >
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
                    onMouseEnter={() => {
                      // Parent hover = imminent dropdown open. Warm every
                      // child route at once so a click on any item is instant.
                      prefetchRoute(item.path)
                      for (const child of item.children) prefetchRoute(child.path)
                    }}
                  >
                    <NavLink
                      to={item.path}
                      className="site-header__nav-link"
                      onClick={(event) => event.currentTarget.blur()}
                      {...prefetchHandlers(item.path)}
                    >
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
                            onClick={(event) => event.currentTarget.blur()}
                            {...prefetchHandlers(child.path)}
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
                <NavLink key={item.path} to={item.path} {...prefetchHandlers(item.path)}>
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          <NavLink
            className="site-header__action"
            to="/contactus"
            {...prefetchHandlers('/contactus')}
          >
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
