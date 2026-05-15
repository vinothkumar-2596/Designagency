import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const defaultItems = [
  { id: 'home-hero', label: 'Hero', code: '01' },
  { id: 'why-section', label: 'Why', code: '02' },
  { id: 'home-services', label: 'Services', code: '03' },
  { id: 'home-faq', label: 'FAQ', code: '04' },
  { to: '/contactus', label: 'Contact', code: '05', external: true },
]

function SectionRail({ items = defaultItems }) {
  const trackableIds = items.filter((item) => !item.external).map((item) => item.id)
  const [activeId, setActiveId] = useState(trackableIds[0] ?? null)
  const listRef = useRef(null)
  const [indicatorOffset, setIndicatorOffset] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return undefined

    let rafId = 0
    const computeActive = () => {
      rafId = 0
      const sections = trackableIds
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((entry) => entry.el)
      if (sections.length === 0) return

      const probe = window.innerHeight * 0.35
      let next = sections[0].id
      for (const { id, el } of sections) {
        const rect = el.getBoundingClientRect()
        if (rect.top - probe <= 0 && rect.bottom - probe > 0) {
          next = id
          break
        }
        if (rect.top - probe <= 0) {
          next = id
        }
      }
      setActiveId(next)
    }

    const schedule = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(computeActive)
    }

    computeActive()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
    // trackableIds is derived from items
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  useEffect(() => {
    if (!listRef.current) return
    const activeEl = listRef.current.querySelector('[data-active="true"]')
    if (!activeEl) return
    const listRect = listRef.current.getBoundingClientRect()
    const itemRect = activeEl.getBoundingClientRect()
    setIndicatorOffset(itemRect.top - listRect.top + itemRect.height / 2)
  }, [activeId])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const activeIndex = trackableIds.indexOf(activeId)
  const hudCode = String((activeIndex >= 0 ? activeIndex : 0) + 1).padStart(2, '0')

  const isHidden = activeId === 'home-hero'

  return (
    <aside
      className={`section-rail${isHidden ? ' is-hidden' : ''}`}
      aria-label="Page sections"
      aria-hidden={isHidden ? 'true' : undefined}
    >
      <span className="section-rail__hud" aria-hidden="true">
        <span className="section-rail__hud-dot" />
        NAV / {hudCode}
      </span>
      <ul className="section-rail__list" ref={listRef}>
        <span
          className="section-rail__indicator"
          aria-hidden="true"
          style={{ transform: `translateY(${indicatorOffset}px)` }}
        />
        {items.map((item) => {
          const isActive = !item.external && activeId === item.id
          const content = (
            <>
              <span className="section-rail__dot" />
              <span className="section-rail__code">{item.code}</span>
              <span className="section-rail__label">{item.label}</span>
            </>
          )
          if (item.external) {
            return (
              <li className="section-rail__item" key={item.to}>
                <Link to={item.to} className="section-rail__link">
                  {content}
                </Link>
              </li>
            )
          }
          return (
            <li
              className={`section-rail__item${isActive ? ' is-active' : ''}`}
              key={item.id}
              data-active={isActive ? 'true' : 'false'}
            >
              <button
                type="button"
                className="section-rail__link"
                onClick={() => handleClick(item.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                {content}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default SectionRail
