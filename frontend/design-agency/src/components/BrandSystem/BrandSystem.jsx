import { Compass, Diamond, Layers3, Megaphone, PanelTop, TrendingUp } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'

const brandSystemNodes = [
  {
    label: 'Strategy',
    icon: Compass,
    left: '12%',
    path: 'M480 362 C416 286 150 280 150 140',
  },
  {
    label: 'Identity',
    icon: Diamond,
    left: '24.5%',
    path: 'M480 362 C438 288 272 276 272 140',
  },
  {
    label: 'Web',
    icon: PanelTop,
    left: '37.5%',
    path: 'M480 362 C458 290 392 274 392 140',
  },
  {
    label: 'Content',
    icon: Layers3,
    left: '50.5%',
    path: 'M480 362 C502 290 512 274 512 140',
  },
  {
    label: 'Campaigns',
    icon: Megaphone,
    left: '64%',
    path: 'M480 362 C526 286 634 278 634 140',
  },
  {
    label: 'Growth',
    icon: TrendingUp,
    left: '77.5%',
    path: 'M480 362 C548 284 756 282 756 140',
  },
]

function BrandSystem() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const signalGradientId = useId().replace(/:/g, '')

  useEffect(() => {
    const section = sectionRef.current

    if (!section || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="brand-system" aria-labelledby="brand-system-heading" ref={sectionRef}>
      <div className="brand-system__inner">
        <div className="brand-system__heading">
          <p className="eyebrow">Integrated delivery</p>
          <h2 id="brand-system-heading">Connected systems for modern brands.</h2>
          <p>Strategy, identity, web, content, and growth in one flow.</p>
        </div>

        <div className={`brand-system__stage ${isVisible ? 'is-visible' : ''}`}>
          <div className="brand-system__surface">
            <svg
              className="brand-system__lines"
              viewBox="0 0 960 470"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id={signalGradientId}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0%" stopColor="#f4e58a" stopOpacity="0.25" />
                  <stop offset="55%" stopColor="#ffb463" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#fff1e6" stopOpacity="1" />
                </linearGradient>
              </defs>

              {brandSystemNodes.map((item) => (
                <g key={item.label}>
                  <path
                    className="brand-system__line brand-system__line--base"
                    d={item.path}
                    pathLength="100"
                  />
                  {isVisible ? (
                    <g className="brand-system__signal">
                      <rect
                        className="brand-system__signal-glow"
                        x="-16"
                        y="-1.6"
                        width="32"
                        height="3.2"
                        rx="999"
                        fill={`url(#${signalGradientId})`}
                      >
                        <animateMotion
                          begin="0s"
                          dur="2.7s"
                          path={item.path}
                          repeatCount="indefinite"
                          rotate="auto"
                        />
                      </rect>
                      <rect
                        className="brand-system__signal-core"
                        x="-10"
                        y="-0.95"
                        width="20"
                        height="1.9"
                        rx="999"
                        fill="#ffca7b"
                      >
                        <animateMotion
                          begin="0s"
                          dur="2.7s"
                          path={item.path}
                          repeatCount="indefinite"
                          rotate="auto"
                        />
                      </rect>
                    </g>
                  ) : null}
                </g>
              ))}
            </svg>

            <div className="brand-system__nodes" aria-label="Brandvue network services">
              {brandSystemNodes.map((item) => (
                <article
                  className="brand-system__node"
                  key={item.label}
                  style={{ '--node-left': item.left }}
                  aria-label={item.label}
                >
                  <span className="brand-system__node-icon" aria-hidden="true">
                    <item.icon strokeWidth={1.8} />
                  </span>
                </article>
              ))}
            </div>

            <div className="brand-system__brand" aria-label="Brandvue India">
              <span className="brand-system__brand-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <strong>Brandvue India</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandSystem
