import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, Code2, LayoutGrid, Menu, Package, Palette, PenTool, Smartphone, X } from 'lucide-react'
import { siteConfig } from '../../config/site'
import { prefetchRoute, warmIdleRoutes } from '../../app/routePrefetch'
import Footer from '../Footer/Footer'
import CommandPalette from '../CommandPalette/CommandPalette'

const NAV_ICONS = {
  penTool: PenTool,
  layoutGrid: LayoutGrid,
  code2: Code2,
  smartphone: Smartphone,
  palette: Palette,
  package: Package,
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
  const navRef = useRef(null)
  const indicatorRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Tracks which parent nav items have their submenu expanded on mobile.
  // Keyed by item.path. Desktop ignores this — its dropdown is hover-driven.
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({})
  // True only for the very first paint after a hard refresh. The bootloader
  // already handles that transition, so we suppress the page-transition
  // fade-in on initial mount to avoid a flash of the body's cream background
  // behind the dark header.
  const isInitialMountRef = useRef(true)
  useEffect(() => {
    isInitialMountRef.current = false
  }, [])

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

  // Close mobile menu on route change and collapse any expanded submenus so
  // the next open starts clean.
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenMobileSubmenus({})
  }, [location.pathname])

  const toggleMobileSubmenu = (path) => {
    setOpenMobileSubmenus((prev) => ({ ...prev, [path]: !prev[path] }))
  }

  // Lock body scroll while mobile menu is open + close on ESC.
  useEffect(() => {
    if (typeof document === 'undefined') return undefined
    if (isMobileMenuOpen) {
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      const handleKey = (event) => {
        if (event.key === 'Escape') setIsMobileMenuOpen(false)
      }
      window.addEventListener('keydown', handleKey)
      return () => {
        document.body.style.overflow = previous
        window.removeEventListener('keydown', handleKey)
      }
    }
    return undefined
  }, [isMobileMenuOpen])

  // Slide a single shared dot to whichever nav link is active. Measuring in a
  // layout effect (before paint) lets the indicator move smoothly without a
  // visible flash between the old position and the new one.
  useLayoutEffect(() => {
    const nav = navRef.current
    const indicator = indicatorRef.current
    if (!nav || !indicator) return undefined

    const measure = () => {
      const active = nav.querySelector('.site-header__nav-link.active, a.active')
      if (!active) {
        indicator.style.opacity = '0'
        return
      }
      const navRect = nav.getBoundingClientRect()
      const linkRect = active.getBoundingClientRect()
      const centerX = linkRect.left - navRect.left + linkRect.width / 2
      indicator.style.transform = `translate3d(${centerX}px, 0, 0) translateX(-50%)`
      indicator.style.opacity = '1'
    }

    measure()

    // Recompute on font-load, image-load, or wrap changes so the dot tracks
    // the link if widths shift after first paint.
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(nav)
    window.addEventListener('resize', measure)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [location.pathname])

  // After the page is interactive, warm the chunks for the rest of the nav
  // during browser idle time. Every primary route ends up pre-cached without
  // blocking the first-paint critical path.
  useEffect(() => {
    warmIdleRoutes(location.pathname)
  }, [location.pathname])

  // Reset scroll on route change. This runs in `useLayoutEffect` (not
  // `useEffect`) so the jump happens after the DOM is updated but BEFORE the
  // browser paints — otherwise the user sees one frame of the new page at the
  // old scroll position, which reads as a glitch.
  //
  // `behavior: 'instant'` is required because the html element has
  // `scroll-behavior: smooth` globally for anchor links; `'auto'` would defer
  // to that CSS and animate the scroll.
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    // Hash-link navigation (e.g. #section) should still anchor-jump.
    if (location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  const isHomeRoute = location.pathname === '/'

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className={`site-header${isMobileMenuOpen ? ' is-menu-open' : ''}`}>
        <div className="site-header__inner">
          <NavLink
            className="site-header__brand"
            to="/"
            aria-label={`${siteConfig.name} home`}
            onClick={() => setIsMobileMenuOpen(false)}
            {...prefetchHandlers('/')}
          >
            <svg
              className="site-header__brand-lockup"
              viewBox="0 0 612 86.67"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={siteConfig.name}
            >
              {/* Emblem — left */}
              <g fill="#ffffff">
                <path fill="#eda369" d="M56.93,80.62l-28.75-46.66H9.37l25.77,41.82c1.91,3.1,5.29,4.99,8.93,4.99h12.6l.25-.15Z"/>
                <path d="M79.32,44.13c1.77-3.55,2.77-7.55,2.77-11.79,0-4.83-1.29-9.35-3.55-13.25-4.58-7.89-13.12-13.2-22.9-13.2H10.61v7.99c0,5.49,4.45,9.93,9.93,9.93h37.52c4.54,0,8.21,3.68,8.21,8.21v.07c0,5.29-4.29,9.58-9.58,9.58h-14.22l7.39,11.46,6.52,10.19,3.02-4.8.18-.29,1.12-1.79c1.4-2.23,4.34-2.9,6.57-1.5,1.78,1.12,2.57,3.23,2.09,5.16-.1.57-.32,1.13-.64,1.65l-11.99,19h18.63l7.86-14.16c4.23-7.62,2.4-16.96-3.89-22.48Z"/>
              </g>
              {/* Wordmark — shifted right for breathing room */}
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
          </NavLink>

          <button
            type="button"
            className="site-header__menu-toggle"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-header-mobile-drawer"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
          </button>

          <div
            id="site-header-mobile-drawer"
            className={`site-header__drawer${isMobileMenuOpen ? ' is-open' : ''}`}
          >
          <nav className="site-header__nav" aria-label="Primary navigation" ref={navRef}>
            {siteConfig.navItems.map((item) => {
              if (item.children?.length) {
                const isSubmenuOpen = Boolean(openMobileSubmenus[item.path])
                return (
                  <div
                    key={item.path}
                    className={`site-header__nav-item site-header__nav-item--has-menu${
                      isSubmenuOpen ? ' is-mobile-open' : ''
                    }`}
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
                      aria-expanded={isSubmenuOpen}
                      onClick={(event) => {
                        // Mobile (drawer): tapping the parent label should
                        // toggle the submenu, not navigate. Desktop keeps
                        // its hover-to-open behavior and click-to-navigate.
                        if (
                          typeof window !== 'undefined' &&
                          window.matchMedia('(max-width: 991px)').matches
                        ) {
                          event.preventDefault()
                          toggleMobileSubmenu(item.path)
                          return
                        }
                        event.currentTarget.blur()
                      }}
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
            <span
              ref={indicatorRef}
              className="site-header__nav-indicator"
              aria-hidden="true"
            />
          </nav>

          <NavLink
            className="site-header__action"
            to="/contactus"
            onClick={() => setIsMobileMenuOpen(false)}
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
          <button
            type="button"
            className={`site-header__backdrop${isMobileMenuOpen ? ' is-visible' : ''}`}
            aria-hidden="true"
            tabIndex={-1}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </header>

      <div
        key={location.pathname}
        className={`page-transition${isHomeRoute ? ' page-transition--home' : ''}${
          isInitialMountRef.current ? ' page-transition--initial' : ''
        }`}
      >
        <Outlet />
      </div>

      <Footer />

      <CommandPalette />
    </>
  )
}

export default Layout
