import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  Briefcase,
  Code2,
  Command,
  CornerDownLeft,
  Home,
  LayoutGrid,
  Mail,
  Newspaper,
  Palette,
  PenTool,
  Search,
  Smartphone,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { siteConfig } from '../../config/site'
import { prefetchRoute } from '../../app/routePrefetch'

const ICON_MAP = {
  home: Home,
  layoutGrid: LayoutGrid,
  briefcase: Briefcase,
  newspaper: Newspaper,
  users: Users,
  mail: Mail,
  penTool: PenTool,
  code2: Code2,
  smartphone: Smartphone,
  palette: Palette,
  sparkles: Sparkles,
}

function buildItems() {
  const items = []

  items.push(
    { id: 'nav-home', section: 'Pages', label: 'Home', hint: 'Studio overview', path: '/', icon: 'home' },
    { id: 'nav-services', section: 'Pages', label: 'Services', hint: 'All capabilities', path: '/services', icon: 'layoutGrid' },
    { id: 'nav-case', section: 'Pages', label: 'Case Studies', hint: 'Selected work', path: '/case-studies', icon: 'briefcase' },
    { id: 'nav-blog', section: 'Pages', label: 'Blog', hint: 'Insight journal', path: '/blog', icon: 'newspaper' },
    { id: 'nav-about', section: 'Pages', label: 'About', hint: 'The studio', path: '/aboutus', icon: 'users' },
    { id: 'nav-contact', section: 'Pages', label: 'Contact', hint: 'Start a project', path: '/contactus', icon: 'mail' },
  )

  const services = siteConfig.navItems.find((item) => item.path === '/services')?.children ?? []
  services.forEach((service) => {
    items.push({
      id: `svc-${service.path}`,
      section: 'Services',
      label: service.label,
      hint: service.description,
      path: service.path,
      icon: service.icon,
    })
  })

  items.push(
    { id: 'act-start', section: 'Quick actions', label: 'Start a project', hint: 'Open the brief form', path: '/contactus', icon: 'sparkles' },
    { id: 'act-email', section: 'Quick actions', label: `Email ${siteConfig.email}`, hint: 'Open mail client', href: `mailto:${siteConfig.email}`, icon: 'mail' },
  )

  return items
}

function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const previouslyFocused = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  const items = useMemo(buildItems, [])

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (!trimmed) return items
    return items.filter((item) => {
      const haystack = `${item.label} ${item.hint ?? ''} ${item.section}`.toLowerCase()
      return haystack.includes(trimmed)
    })
  }, [items, query])

  const grouped = useMemo(() => {
    const map = new Map()
    filtered.forEach((item) => {
      if (!map.has(item.section)) map.set(item.section, [])
      map.get(item.section).push(item)
    })
    return Array.from(map.entries())
  }, [filtered])

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActiveIndex(0)
  }, [])

  const runItem = useCallback(
    (item) => {
      if (!item) return
      if (item.href) {
        window.location.href = item.href
      } else if (item.path) {
        navigate(item.path)
      }
      close()
    },
    [navigate, close],
  )

  // Global ⌘K / Ctrl+K toggle. Skip when the user is typing in an input or
  // textarea so we never steal the shortcut from a focused field.
  useEffect(() => {
    function handle(event) {
      const key = event.key?.toLowerCase()
      if ((event.metaKey || event.ctrlKey) && key === 'k') {
        const target = event.target
        const inEditable =
          target instanceof HTMLElement &&
          (target.tagName === 'TEXTAREA' ||
            (target.tagName === 'INPUT' && target.type !== 'checkbox' && target.type !== 'radio') ||
            target.isContentEditable)
        if (inEditable && !open) return
        event.preventDefault()
        setOpen((prev) => !prev)
      } else if (key === 'escape' && open) {
        event.preventDefault()
        close()
      }
    }
    function openEvent() {
      setOpen(true)
    }
    window.addEventListener('keydown', handle)
    window.addEventListener('open-command-palette', openEvent)
    return () => {
      window.removeEventListener('keydown', handle)
      window.removeEventListener('open-command-palette', openEvent)
    }
  }, [open, close])

  // Close palette automatically on route change (in case navigate() didn't
  // already close it, e.g. clicking a result on the current route).
  useEffect(() => {
    if (open) close()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  // Lock background scroll + restore focus when the palette toggles.
  useEffect(() => {
    if (!open) return undefined
    previouslyFocused.current = document.activeElement
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 20)

    return () => {
      window.clearTimeout(focusTimer)
      document.body.style.overflow = overflow
      const prev = previouslyFocused.current
      if (prev instanceof HTMLElement) prev.focus()
    }
  }, [open])

  // Clamp the active index if the filtered list shrinks under it.
  useEffect(() => {
    if (activeIndex >= filtered.length) setActiveIndex(Math.max(0, filtered.length - 1))
  }, [filtered.length, activeIndex])

  // Reset to the top of the list each time the query changes.
  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  // Prefetch the highlighted route so pressing Enter feels instant.
  useEffect(() => {
    const item = filtered[activeIndex]
    if (item?.path) prefetchRoute(item.path)
  }, [activeIndex, filtered])

  // Keep the highlighted row scrolled into view when navigating via keys.
  useEffect(() => {
    const list = listRef.current
    if (!list) return
    const el = list.querySelector(`[data-cmd-index="${activeIndex}"]`)
    if (el instanceof HTMLElement) el.scrollIntoView({ block: 'nearest' })
  }, [activeIndex])

  if (!open) return null

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((i) => Math.min(filtered.length - 1, i + 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((i) => Math.max(0, i - 1))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      runItem(filtered[activeIndex])
    } else if (event.key === 'Home') {
      event.preventDefault()
      setActiveIndex(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setActiveIndex(Math.max(0, filtered.length - 1))
    }
  }

  let flatIndex = -1

  return (
    <div
      className="command-palette"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div className="command-palette__panel" role="document">
        <div className="command-palette__searchbar">
          <Search size={16} strokeWidth={2.2} aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            className="command-palette__input"
            placeholder="Jump to a page or search the studio…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
            aria-label="Search commands"
          />
          <span className="command-palette__kbd" aria-hidden="true">ESC</span>
          <button
            type="button"
            className="command-palette__close"
            aria-label="Close command palette"
            onClick={close}
          >
            <X size={14} strokeWidth={2.4} aria-hidden="true" />
          </button>
        </div>

        <div className="command-palette__results" ref={listRef} role="listbox" aria-label="Results">
          {grouped.length === 0 ? (
            <div className="command-palette__empty">
              <span>No matches for &ldquo;{query}&rdquo;</span>
              <small>Try a page name, service, or keyword.</small>
            </div>
          ) : (
            grouped.map(([section, sectionItems]) => (
              <div className="command-palette__group" key={section}>
                <div className="command-palette__group-label">{section}</div>
                <ul className="command-palette__list">
                  {sectionItems.map((item) => {
                    flatIndex += 1
                    const index = flatIndex
                    const isActive = index === activeIndex
                    const Icon = ICON_MAP[item.icon] ?? ArrowRight
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isActive}
                          data-cmd-index={index}
                          className={`command-palette__item${isActive ? ' is-active' : ''}`}
                          onMouseEnter={() => setActiveIndex(index)}
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={() => runItem(item)}
                        >
                          <span className="command-palette__item-icon" aria-hidden="true">
                            <Icon size={15} strokeWidth={1.8} />
                          </span>
                          <span className="command-palette__item-copy">
                            <strong>{item.label}</strong>
                            {item.hint ? <small>{item.hint}</small> : null}
                          </span>
                          <span className="command-palette__item-go" aria-hidden="true">
                            <CornerDownLeft size={13} strokeWidth={2.2} />
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))
          )}
        </div>

        <div className="command-palette__footer" aria-hidden="true">
          <span className="command-palette__footer-group">
            <kbd><Command size={10} strokeWidth={2.4} /></kbd>
            <kbd>K</kbd>
            <small>Toggle</small>
          </span>
          <span className="command-palette__footer-group">
            <kbd>↑</kbd>
            <kbd>↓</kbd>
            <small>Navigate</small>
          </span>
          <span className="command-palette__footer-group">
            <kbd><CornerDownLeft size={10} strokeWidth={2.4} /></kbd>
            <small>Open</small>
          </span>
          <span className="command-palette__footer-group command-palette__footer-group--end">
            <kbd>ESC</kbd>
            <small>Close</small>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CommandPalette
