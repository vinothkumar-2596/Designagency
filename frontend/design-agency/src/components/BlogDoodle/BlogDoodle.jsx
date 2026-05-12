/* ------------------------------------------------------------- */
/* Icon library — clean white-stroke illustrations, 64x64 viewBox */
/* Each icon is a path-based SVG meant to read at 36–64px.       */
/* ------------------------------------------------------------- */

const ICONS = {
  // Organic / signature
  leaves: (
    <g strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M8 56 C 14 42, 24 30, 40 22 S 56 12, 58 8" />
      <path d="M16 50 C 20 44, 22 38, 22 30" />
      <path d="M16 50 C 12 48, 10 44, 10 40" />
      <path d="M24 44 C 30 40, 34 34, 36 26" />
      <path d="M24 44 C 20 42, 18 38, 18 34" />
      <path d="M34 36 C 40 32, 44 26, 46 18" />
      <path d="M34 36 C 30 34, 28 30, 28 26" />
      <path d="M44 28 C 50 24, 54 18, 56 10" />
    </g>
  ),
  leafSprig: (
    <g strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M12 52 C 22 38, 36 26, 54 18" />
      <path d="M22 44 C 26 40, 28 34, 28 28" />
      <path d="M32 36 C 38 32, 42 26, 44 20" />
    </g>
  ),
  sparkleSmall: (
    <g strokeWidth="2.2" strokeLinecap="round" fill="none">
      <path d="M32 10 L32 24" />
      <path d="M32 40 L32 54" />
      <path d="M10 32 L24 32" />
      <path d="M40 32 L54 32" />
    </g>
  ),
  sparkleBurst: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M32 6 L36 28 L58 32 L36 36 L32 58 L28 36 L6 32 L28 28 Z" />
      <circle cx="32" cy="32" r="1.6" fill="currentColor" stroke="none" />
    </g>
  ),
  swirl: (
    <g strokeWidth="1.8" strokeLinecap="round" fill="none">
      <path d="M10 38 C 14 22, 30 14, 44 22 S 56 42, 44 50 S 22 48, 22 38 S 34 30, 38 36" />
    </g>
  ),

  // Branding / identity
  palette: (
    <g strokeWidth="1.8" strokeLinejoin="round" fill="none">
      <path d="M32 10 C 18 10, 8 22, 10 36 C 12 48, 24 54, 30 50 C 33 47, 30 42, 34 40 C 38 38, 44 42, 50 38 C 56 34, 56 22, 48 16 C 42 12, 38 10, 32 10 Z" />
      <circle cx="22" cy="22" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="40" cy="18" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="46" cy="28" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="34" r="2.4" fill="currentColor" stroke="none" />
    </g>
  ),
  typeAa: (
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M10 50 L20 16 L30 50" />
      <path d="M14 40 L26 40" />
      <path d="M44 38 C 38 38, 36 42, 38 46 C 40 50, 48 50, 50 46 L50 32 C 50 26, 42 24, 38 28" />
    </g>
  ),
  star: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M32 8 L38 26 L56 26 L42 36 L48 54 L32 44 L16 54 L22 36 L8 26 L26 26 Z" />
    </g>
  ),
  brandMark: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <circle cx="32" cy="32" r="22" />
      <path d="M22 22 L22 42 L34 42 C 40 42, 42 38, 42 35 C 42 32, 40 30, 36 30 C 40 30, 42 28, 42 25 C 42 22, 40 22, 34 22 Z" />
    </g>
  ),
  badge: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M32 8 L40 16 L52 16 L52 28 L58 36 L52 44 L52 56 L40 56 L32 60 L24 56 L12 56 L12 44 L6 36 L12 28 L12 16 L24 16 Z" />
      <path d="M22 36 L30 42 L42 28" strokeWidth="2.4" strokeLinecap="round" />
    </g>
  ),
  heart: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M32 54 C 12 40, 6 28, 14 18 C 22 10, 30 16, 32 22 C 34 16, 42 10, 50 18 C 58 28, 52 40, 32 54 Z" />
    </g>
  ),

  // AI / tech
  chip: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <rect x="16" y="16" width="32" height="32" rx="2" />
      <rect x="24" y="24" width="16" height="16" rx="1" />
      <path d="M22 10 L22 16 M32 10 L32 16 M42 10 L42 16" strokeLinecap="round" />
      <path d="M22 48 L22 54 M32 48 L32 54 M42 48 L42 54" strokeLinecap="round" />
      <path d="M10 22 L16 22 M10 32 L16 32 M10 42 L16 42" strokeLinecap="round" />
      <path d="M48 22 L54 22 M48 32 L54 32 M48 42 L54 42" strokeLinecap="round" />
    </g>
  ),
  magicWand: (
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M14 52 L42 24" />
      <path d="M44 22 L48 18 L52 22 L48 26 Z" />
      <path d="M22 12 L22 18 M18 14 L26 18 M18 18 L26 14" />
      <path d="M50 40 L50 46 M46 42 L54 46 M46 46 L54 42" />
    </g>
  ),
  crystalBall: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <circle cx="32" cy="30" r="18" />
      <path d="M18 48 L46 48" strokeLinecap="round" />
      <path d="M22 52 L42 52" strokeLinecap="round" />
      <path d="M22 22 C 26 18, 32 18, 36 22" strokeLinecap="round" />
    </g>
  ),
  codeBrackets: (
    <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M22 18 L10 32 L22 46" />
      <path d="M42 18 L54 32 L42 46" />
      <path d="M36 16 L28 48" />
    </g>
  ),
  brain: (
    <g strokeWidth="1.8" strokeLinejoin="round" fill="none">
      <path d="M24 14 C 16 14, 12 22, 16 28 C 12 32, 14 40, 22 42 C 22 48, 30 50, 32 46 L32 18 C 30 14, 26 14, 24 14 Z" />
      <path d="M40 14 C 48 14, 52 22, 48 28 C 52 32, 50 40, 42 42 C 42 48, 34 50, 32 46 L32 18 C 34 14, 38 14, 40 14 Z" />
      <path d="M22 26 L28 26 M22 34 L28 34 M36 26 L42 26 M36 34 L42 34" strokeLinecap="round" />
    </g>
  ),

  // Web / performance / SEO
  gauge: (
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M10 44 C 10 26, 22 14, 32 14 C 42 14, 54 26, 54 44" />
      <path d="M32 44 L42 26" />
      <circle cx="32" cy="44" r="2.4" fill="currentColor" stroke="none" />
      <path d="M14 44 L18 44 M50 44 L46 44 M32 22 L32 18" />
    </g>
  ),
  lightning: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M36 6 L18 34 L30 34 L26 58 L46 28 L34 28 Z" />
    </g>
  ),
  stopwatch: (
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="32" cy="36" r="20" />
      <path d="M28 8 L36 8" />
      <path d="M32 8 L32 14" />
      <path d="M48 18 L52 14" />
      <path d="M32 36 L32 24" />
      <path d="M32 36 L42 40" />
    </g>
  ),
  rocket: (
    <g strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M32 6 C 40 14, 44 24, 44 36 L20 36 C 20 24, 24 14, 32 6 Z" />
      <circle cx="32" cy="22" r="3" />
      <path d="M20 36 L14 44 L22 42 L20 36 Z" />
      <path d="M44 36 L50 44 L42 42 L44 36 Z" />
      <path d="M26 46 L26 54 M32 48 L32 56 M38 46 L38 54" />
    </g>
  ),
  searchG: (
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <circle cx="28" cy="28" r="14" />
      <path d="M38 38 L52 52" />
      <path d="M28 22 L28 28 L34 28" />
    </g>
  ),
  browserWindow: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <rect x="8" y="14" width="48" height="36" rx="2" />
      <path d="M8 22 L56 22" />
      <circle cx="14" cy="18" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="18" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="22" cy="18" r="1.4" fill="currentColor" stroke="none" />
      <path d="M14 30 L34 30 M14 36 L42 36 M14 42 L28 42" strokeLinecap="round" />
    </g>
  ),
  mobile: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <rect x="18" y="8" width="28" height="48" rx="3" />
      <path d="M28 12 L36 12" strokeLinecap="round" />
      <circle cx="32" cy="50" r="1.6" fill="currentColor" stroke="none" />
    </g>
  ),
  linkChain: (
    <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M26 28 L20 22 C 16 18, 12 22, 16 26 L22 32 C 26 36, 30 32, 28 30" />
      <path d="M38 36 L44 42 C 48 46, 52 42, 48 38 L42 32 C 38 28, 34 32, 36 34" />
      <path d="M24 40 L40 24" />
    </g>
  ),

  // UX / conversion
  cursorClick: (
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M20 14 L20 46 L28 38 L34 50 L40 48 L34 36 L46 36 Z" />
      <path d="M48 14 L52 10 M44 8 L46 14 M52 18 L58 18" strokeWidth="1.8" />
    </g>
  ),
  target: (
    <g strokeWidth="2" fill="none">
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="6" />
      <path d="M32 32 L52 12" strokeLinecap="round" />
      <path d="M52 12 L46 12 M52 12 L52 18" strokeLinecap="round" />
    </g>
  ),
  funnel: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M8 12 L56 12 L40 32 L40 52 L24 46 L24 32 Z" />
    </g>
  ),
  chartUp: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M8 52 L56 52" strokeLinecap="round" />
      <rect x="14" y="40" width="8" height="12" />
      <rect x="28" y="30" width="8" height="22" />
      <rect x="42" y="20" width="8" height="32" />
      <path d="M14 16 L26 24 L36 18 L52 8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 8 L46 8 M52 8 L52 14" strokeLinecap="round" />
    </g>
  ),
  arrowUpRight: (
    <g strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M14 50 L50 14" />
      <path d="M22 14 L50 14 L50 42" />
    </g>
  ),
  thumbsUp: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M14 30 L22 30 L22 54 L14 54 Z" />
      <path d="M22 30 L30 30 L34 12 C 36 8, 42 10, 42 14 L40 24 L52 24 C 56 24, 56 30, 54 32 C 56 34, 54 38, 52 38 C 54 40, 52 44, 50 44 C 52 46, 50 50, 46 50 L34 50 L22 46 Z" />
    </g>
  ),

  // Money / commerce / trust
  rupee: (
    <g strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M20 14 L46 14" />
      <path d="M20 24 L46 24" />
      <path d="M20 14 C 32 14, 38 18, 38 24 C 38 30, 32 34, 22 34 L18 34 L40 54" />
    </g>
  ),
  dollar: (
    <g strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M32 8 L32 56" />
      <path d="M44 18 C 40 12, 22 12, 22 22 C 22 32, 42 30, 42 42 C 42 52, 24 52, 20 46" />
    </g>
  ),
  bagMoney: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M22 16 L26 8 L38 8 L42 16" strokeLinecap="round" />
      <path d="M22 16 L42 16 C 52 22, 56 36, 52 46 C 48 54, 40 56, 32 56 C 24 56, 16 54, 12 46 C 8 36, 12 22, 22 16 Z" />
      <path d="M28 32 L36 32 M28 38 L36 38" strokeLinecap="round" />
      <path d="M32 28 L32 42" strokeLinecap="round" />
    </g>
  ),
  shieldCheck: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M32 6 L52 14 L52 32 C 52 44, 42 54, 32 58 C 22 54, 12 44, 12 32 L12 14 Z" />
      <path d="M22 32 L30 40 L44 24" strokeLinecap="round" strokeWidth="2.4" />
    </g>
  ),
  handshake: (
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M6 28 L18 22 L28 28 L34 24 L46 24 L58 28" />
      <path d="M18 22 L18 40 L26 44 L34 40 L42 44 L50 40 L50 30" />
      <path d="M28 28 L34 32 L40 28" />
    </g>
  ),
  priceTag: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M30 6 L56 6 L56 32 L26 58 L4 36 Z" />
      <circle cx="44" cy="18" r="3" />
    </g>
  ),

  // Process / audit
  checklist: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <rect x="14" y="10" width="36" height="48" rx="2" />
      <path d="M24 6 L40 6 L40 14 L24 14 Z" />
      <path d="M20 24 L24 28 L30 22" strokeLinecap="round" strokeWidth="2.2" />
      <path d="M20 36 L24 40 L30 34" strokeLinecap="round" strokeWidth="2.2" />
      <path d="M20 48 L24 52 L30 46" strokeLinecap="round" strokeWidth="2.2" />
      <path d="M34 26 L44 26 M34 38 L44 38 M34 50 L42 50" strokeLinecap="round" />
    </g>
  ),
  ruler: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M10 24 L40 54 L54 40 L24 10 Z" />
      <path d="M16 22 L20 26 M22 16 L26 20 M28 14 L30 16 M14 28 L18 32 M20 34 L24 38" strokeLinecap="round" />
    </g>
  ),
  microscope: (
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M28 12 L40 12 L40 30 L28 30 Z" />
      <path d="M34 30 L34 40" />
      <circle cx="34" cy="44" r="6" />
      <path d="M14 56 L54 56" />
      <path d="M14 56 L20 48 L30 48" />
    </g>
  ),
  calendar: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <rect x="8" y="12" width="48" height="44" rx="2" />
      <path d="M8 24 L56 24" />
      <path d="M20 8 L20 18 M44 8 L44 18" strokeLinecap="round" />
      <circle cx="20" cy="36" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="32" cy="36" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="44" cy="36" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="20" cy="46" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="32" cy="46" r="1.6" fill="currentColor" stroke="none" />
    </g>
  ),
  flag: (
    <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M14 8 L14 58" />
      <path d="M14 10 L46 14 L40 22 L46 30 L14 28" />
    </g>
  ),
  gear: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <circle cx="32" cy="32" r="8" />
      <path d="M32 6 L32 14 M32 50 L32 58 M6 32 L14 32 M50 32 L58 32 M14 14 L20 20 M44 44 L50 50 M14 50 L20 44 M44 20 L50 14" strokeLinecap="round" />
    </g>
  ),
  layers: (
    <g strokeWidth="1.8" strokeLinejoin="round" fill="none">
      <path d="M32 8 L56 20 L32 32 L8 20 Z" />
      <path d="M8 32 L32 44 L56 32" />
      <path d="M8 44 L32 56 L56 44" />
    </g>
  ),

  // Misc
  warning: (
    <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M32 8 L58 54 L6 54 Z" />
      <path d="M32 24 L32 40" />
      <circle cx="32" cy="48" r="1.6" fill="currentColor" stroke="none" />
    </g>
  ),
  bulb: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M22 36 C 18 30, 18 22, 24 16 C 32 8, 44 12, 46 22 C 48 30, 44 34, 40 38 L40 46 L24 46 L24 38 Z" />
      <path d="M26 50 L38 50" strokeLinecap="round" />
      <path d="M28 54 L36 54" strokeLinecap="round" />
    </g>
  ),
  hourglass: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M16 8 L48 8 M16 56 L48 56" strokeLinecap="round" />
      <path d="M18 8 L18 14 C 18 22, 32 26, 32 32 C 32 38, 18 42, 18 50 L18 56" />
      <path d="M46 8 L46 14 C 46 22, 32 26, 32 32 C 32 38, 46 42, 46 50 L46 56" />
    </g>
  ),
  speech: (
    <g strokeWidth="2" strokeLinejoin="round" fill="none">
      <path d="M8 14 L56 14 L56 42 L26 42 L16 52 L16 42 L8 42 Z" />
      <path d="M18 24 L46 24 M18 32 L40 32" strokeLinecap="round" />
    </g>
  ),
  cross: (
    <g strokeWidth="2.4" strokeLinecap="round" fill="none">
      <path d="M14 14 L50 50" />
      <path d="M50 14 L14 50" />
    </g>
  ),
}

/* ------------------------------------------------------------- */
/* Layout — places icons in a scattered horizontal cluster        */
/* with a leaf cluster as an anchor and sparkles as filler.       */
/* ------------------------------------------------------------- */

function buildLayout(icons, leafSide, seedKey) {
  if (!icons || icons.length === 0) return []

  // Mulberry32 seeded RNG so each post lays out identically every render
  const seed = Array.from(String(seedKey ?? '')).reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) | 0, 7)
  let state = seed >>> 0
  const rand = () => {
    state |= 0
    state = (state + 0x6d2b79f5) | 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return (((t ^ (t >>> 14)) >>> 0) % 10000) / 10000
  }
  const between = (a, b) => a + (b - a) * rand()

  const result = []

  // 1. Place topic icons across the middle in a gentle arc
  const count = icons.length
  const startX = leafSide === 'right' ? 14 : 22
  const endX = leafSide === 'right' ? 78 : 86
  const stepX = count === 1 ? 0 : (endX - startX) / (count - 1)

  icons.forEach((name, i) => {
    const x = count === 1 ? (startX + endX) / 2 : startX + stepX * i
    const arc = Math.sin((i / Math.max(count - 1, 1)) * Math.PI) // 0→1→0
    const y = 38 + (1 - arc) * 14 + between(-3, 3)
    const rotate = between(-8, 8)
    const size = 52 + Math.round(between(0, 10))

    result.push({
      name,
      style: {
        top: `${y}%`,
        left: `${x}%`,
        width: size,
        height: size,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      },
      cls: 'icon',
    })
  })

  // 2. A big sparkle on one side as a focal point
  result.push({
    name: 'sparkleBurst',
    style: leafSide === 'right'
      ? { top: '14%', left: '8%', width: 42, height: 42 }
      : { top: '14%', right: '8%', width: 42, height: 42 },
    cls: 'sparkleBig',
  })

  // 3. Two small twinkle sparkles in remaining gaps
  const sparklePositions = [
    { top: `${between(20, 30)}%`, left: `${between(40, 55)}%` },
    { top: `${between(70, 80)}%`, left: `${between(40, 55)}%` },
  ]
  sparklePositions.forEach((pos, i) => {
    result.push({
      name: 'sparkleSmall',
      style: { ...pos, width: 20, height: 20, transform: `rotate(${between(-20, 20)}deg)` },
      cls: 'sparkle',
      key: `sp-${i}`,
    })
  })

  return result
}

/* ------------------------------------------------------------- */
/* Component                                                      */
/* ------------------------------------------------------------- */

function BlogDoodle({ icons = [], leafSide = 'left', seed = '' }) {
  const layout = buildLayout(icons, leafSide, seed || icons.join('|'))

  return (
    <span className="blog-doodle" aria-hidden="true">
      {layout.map((item, index) => {
        const glyph = ICONS[item.name]
        if (!glyph) return null
        return (
          <span
            key={item.key ?? `${item.name}-${index}`}
            className={`blog-doodle__item blog-doodle__item--${item.cls}`}
            style={item.style}
          >
            <svg viewBox="0 0 64 64" width="100%" height="100%" stroke="currentColor" fill="none">
              {glyph}
            </svg>
          </span>
        )
      })}
    </span>
  )
}

export default BlogDoodle
