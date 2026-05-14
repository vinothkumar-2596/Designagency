export const heroSketches = [
  {
    id: 'ux',
    label: 'UI/UX',
    render: () => (
      <>
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-back"
          x="50" y="80" width="240" height="170" rx="14"
          stroke="#f4e58a" strokeWidth="3" fill="none"
          transform="rotate(-8 170 165)"
        />
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-mid"
          x="60" y="90" width="240" height="170" rx="14"
          stroke="#ffffff" strokeWidth="2.5" opacity="0.45" fill="none"
          transform="rotate(-3 180 175)"
        />
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-front"
          x="70" y="100" width="240" height="170" rx="14"
          stroke="#ff6a00" strokeWidth="11" strokeLinejoin="round" fill="none"
        />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--1" cx="92" cy="124" r="5.5" fill="#ff6a00" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--2" cx="112" cy="124" r="5.5" fill="#f4e58a" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--3" cx="132" cy="124" r="5.5" fill="#ffffff" opacity="0.45" />
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--lines" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.7">
          <line x1="92" y1="160" x2="280" y2="160" />
          <line x1="92" y1="180" x2="226" y2="180" />
          <line x1="92" y1="200" x2="252" y2="200" />
        </g>
        <rect className="services-hero__sketch-btn" x="92" y="220" width="84" height="24" rx="12" fill="#ff6a00" />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--cursor"
          d="M218 196 L218 240 L228 232 L236 250 L246 245 L238 228 L250 226 Z"
          fill="#ffffff" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
        />
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--spark" stroke="#f4e58a" strokeWidth="4" strokeLinecap="round">
          <line x1="320" y1="34" x2="320" y2="70" />
          <line x1="302" y1="52" x2="338" y2="52" />
          <line x1="307" y1="39" x2="333" y2="65" />
          <line x1="333" y1="39" x2="307" y2="65" />
        </g>
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--spark2" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
          <line x1="34" y1="58" x2="34" y2="86" />
          <line x1="20" y1="72" x2="48" y2="72" />
        </g>
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--swoosh"
          d="M30 312 C 100 298, 180 326, 332 304"
          stroke="#ff6a00" strokeWidth="6" strokeLinecap="round" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--arrow"
          d="M60 352 C 140 362, 220 350, 304 338"
          stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--arrowhead"
          d="M288 326 L 308 338 L 294 354"
          stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" fill="none"
        />
      </>
    ),
  },
  {
    id: 'brand',
    label: 'Branding',
    render: () => (
      <>
        {/* Single brand sheet card */}
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-front"
          x="68" y="98" width="260" height="232" rx="14"
          stroke="#ff6a00" strokeWidth="10" strokeLinejoin="round" fill="none"
        />

        {/* Logo mark — orange disc with asterisk */}
        <circle cx="128" cy="158" r="26" fill="#ff6a00" />
        <g stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" fill="none">
          <line x1="128" y1="142" x2="128" y2="174" />
          <line x1="112" y1="158" x2="144" y2="158" />
          <line x1="116" y1="146" x2="140" y2="170" />
          <line x1="140" y1="146" x2="116" y2="170" />
        </g>

        {/* Wordmark line beside logo */}
        <line
          className="services-hero__sketch-stroke services-hero__sketch-stroke--lines"
          x1="172" y1="158" x2="296" y2="158"
          stroke="#ffffff" strokeWidth="4" strokeLinecap="round"
        />

        {/* Type sample */}
        <text x="100" y="266" fontFamily="'Manrope', system-ui, sans-serif" fontSize="44" fontWeight="700" letterSpacing="-0.03em" fill="#ffffff">Aa</text>

        {/* Palette swatches */}
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--1" cx="200" cy="252" r="11" fill="#ff6a00" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--2" cx="228" cy="252" r="11" fill="#f4e58a" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--3" cx="256" cy="252" r="11" fill="#ffffff" opacity="0.85" />
        <circle cx="284" cy="252" r="11" fill="#0a0d12" stroke="#ffffff" strokeWidth="1.5" />
      </>
    ),
  },
  {
    id: 'web',
    label: 'Web',
    render: () => (
      <>
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-back"
          d="M84 120 L 44 170 L 84 220"
          stroke="#f4e58a" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-front"
          d="M276 120 L 316 170 L 276 220"
          stroke="#ff6a00" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-mid"
          d="M214 110 L 144 230"
          stroke="#ffffff" strokeWidth="6" strokeLinecap="round" opacity="0.7" fill="none"
        />
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--lines" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.55">
          <line x1="120" y1="150" x2="240" y2="150" />
          <line x1="138" y1="170" x2="222" y2="170" />
          <line x1="120" y1="190" x2="240" y2="190" />
        </g>
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--1" cx="100" cy="80" r="6" fill="#ff6a00" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--2" cx="120" cy="80" r="6" fill="#f4e58a" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--3" cx="140" cy="80" r="6" fill="#ffffff" opacity="0.45" />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--ribbon"
          d="M118 250 L 244 250"
          stroke="#f4e58a" strokeWidth="14" strokeLinecap="round" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--pen"
          d="M270 70 L 296 80 L 286 110 L 256 100 Z"
          fill="#ffffff" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
        />
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--spark" stroke="#f4e58a" strokeWidth="4" strokeLinecap="round">
          <line x1="320" y1="34" x2="320" y2="70" />
          <line x1="302" y1="52" x2="338" y2="52" />
          <line x1="307" y1="39" x2="333" y2="65" />
          <line x1="333" y1="39" x2="307" y2="65" />
        </g>
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--burst" stroke="#ff6a00" strokeWidth="2.5" strokeLinecap="round">
          <line x1="46" y1="280" x2="62" y2="270" />
          <line x1="48" y1="296" x2="68" y2="296" />
          <line x1="46" y1="312" x2="62" y2="320" />
        </g>
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--swoosh"
          d="M30 322 C 100 306, 200 332, 332 308"
          stroke="#ff6a00" strokeWidth="6" strokeLinecap="round" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--arrow"
          d="M60 352 C 140 362, 220 350, 304 338"
          stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--arrowhead"
          d="M288 326 L 308 338 L 294 354"
          stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" fill="none"
        />
      </>
    ),
  },
  {
    id: 'social',
    label: 'Social',
    render: () => (
      <>
        {/* Stacked card behind */}
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-back"
          x="60" y="80" width="180" height="220" rx="14"
          stroke="#f4e58a" strokeWidth="3" fill="none"
          transform="rotate(-7 150 190)"
        />

        {/* Main post card */}
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-front"
          x="80" y="90" width="180" height="220" rx="14"
          stroke="#ff6a00" strokeWidth="11" strokeLinejoin="round" fill="none"
        />

        {/* Photo placeholder inside the post */}
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-mid"
          x="98" y="108" width="144" height="118" rx="6"
          fill="#ffffff" opacity="0.06" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.4"
        />

        {/* Sun inside the photo */}
        <circle cx="125" cy="148" r="11" fill="#f4e58a" />

        {/* Mountain silhouette inside the photo */}
        <path
          d="M 100 224 L 140 174 L 168 196 L 196 168 L 222 200 L 240 224 Z"
          fill="#ff6a00" opacity="0.55"
        />

        {/* Caption lines below the photo */}
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--lines" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.7">
          <line x1="100" y1="246" x2="220" y2="246" />
          <line x1="100" y1="262" x2="180" y2="262" />
        </g>

        {/* Engagement: heart icon */}
        <g transform="translate(102 281) scale(0.7)">
          <path
            d="M 12 21.35 l -1.45 -1.32 C 5.4 16.36 2 13.28 2 9.5 C 2 6.42 4.42 4 7.5 4 c 1.74 0 3.41 0.81 4.5 2.09 C 13.09 4.81 14.76 4 16.5 4 C 19.58 4 22 6.42 22 9.5 c 0 3.78 -3.4 6.86 -8.55 11.54 L 12 21.35 z"
            fill="#ff6a00" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round"
          />
        </g>

        {/* Engagement: comment bubble */}
        <g fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.7" strokeLinejoin="round" strokeLinecap="round">
          <rect x="140" y="282" width="32" height="18" rx="4" />
          <path d="M 148 300 L 148 305 L 156 300" />
        </g>

        {/* Engagement count dots */}
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--1" cx="206" cy="291" r="4" fill="#ff6a00" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--2" cx="218" cy="291" r="4" fill="#f4e58a" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--3" cx="230" cy="291" r="4" fill="#ffffff" opacity="0.6" />

        {/* Floating heart popping out top-right */}
        <g
          className="services-hero__sketch-stroke services-hero__sketch-stroke--pen"
          transform="translate(282 84) scale(1.4)"
        >
          <path
            d="M 12 21.35 l -1.45 -1.32 C 5.4 16.36 2 13.28 2 9.5 C 2 6.42 4.42 4 7.5 4 c 1.74 0 3.41 0.81 4.5 2.09 C 13.09 4.81 14.76 4 16.5 4 C 19.58 4 22 6.42 22 9.5 c 0 3.78 -3.4 6.86 -8.55 11.54 L 12 21.35 z"
            fill="#ff6a00" stroke="#0a0d12" strokeWidth="1.6" strokeLinejoin="round"
          />
        </g>

        {/* Sparkle bursts around floating heart */}
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--burst" stroke="#f4e58a" strokeWidth="2.5" strokeLinecap="round">
          <line x1="328" y1="88" x2="338" y2="84" />
          <line x1="330" y1="106" x2="342" y2="110" />
          <line x1="262" y1="80" x2="256" y2="74" />
        </g>

        {/* Spark top-left */}
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--spark" stroke="#f4e58a" strokeWidth="4" strokeLinecap="round">
          <line x1="34" y1="48" x2="34" y2="82" />
          <line x1="18" y1="64" x2="50" y2="64" />
          <line x1="22" y1="52" x2="46" y2="76" />
          <line x1="46" y1="52" x2="22" y2="76" />
        </g>

        {/* Tiny spark bottom-left */}
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--spark2" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
          <line x1="40" y1="320" x2="40" y2="348" />
          <line x1="28" y1="334" x2="52" y2="334" />
        </g>

        {/* Bottom swoosh */}
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--swoosh"
          d="M30 350 C 100 338, 200 362, 332 340"
          stroke="#ff6a00" strokeWidth="6" strokeLinecap="round" fill="none"
        />
      </>
    ),
  },
  {
    id: 'packaging',
    label: 'Packaging',
    render: () => (
      <>
        {/* Spark top-left (matches other sketches' vocabulary) */}
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--spark" stroke="#f4e58a" strokeWidth="4" strokeLinecap="round">
          <line x1="46" y1="50" x2="46" y2="86" />
          <line x1="28" y1="68" x2="64" y2="68" />
          <line x1="32" y1="54" x2="60" y2="82" />
          <line x1="60" y1="54" x2="32" y2="82" />
        </g>

        {/* Small white twinkle top-right */}
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--spark2" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
          <line x1="316" y1="56" x2="316" y2="84" />
          <line x1="302" y1="70" x2="330" y2="70" />
        </g>

        {/* Yellow back-card (offset, rotated) — same depth trick as other sketches */}
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-back"
          x="68" y="86" width="220" height="220" rx="4"
          stroke="#f4e58a" strokeWidth="3" fill="none"
          transform="rotate(-5 178 196)"
        />

        {/* The package itself — bold orange front face */}
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-front"
          x="78" y="96" width="220" height="220" rx="4"
          stroke="#ff6a00" strokeWidth="12" strokeLinejoin="round" fill="none"
        />

        {/* Yellow tape strip across the top — the signature packaging cue */}
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--tape"
          x="78" y="124" width="220" height="24"
          fill="#f4e58a"
        />
        <line
          x1="86" y1="136" x2="290" y2="136"
          stroke="#0a0d12" strokeWidth="1.6" strokeDasharray="5 5" strokeLinecap="round" opacity="0.55"
        />

        {/* Product silhouette inside (a stylised bottle/jar) */}
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--product"
           stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" opacity="0.55">
          <rect x="172" y="166" width="32" height="14" rx="2" />
          <path d="M168 180 L 172 196 L 172 250 C 172 258, 178 264, 188 264 C 198 264, 204 258, 204 250 L 204 196 L 208 180 Z" />
          <line x1="178" y1="216" x2="198" y2="216" />
        </g>

        {/* White product-label on the package, with barcode */}
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--label"
          x="100" y="276" width="176" height="34" rx="4"
          fill="#ffffff" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
        />
        <g stroke="#0a0d12" strokeWidth="2" strokeLinecap="round">
          <line x1="110" y1="284" x2="110" y2="302" />
          <line x1="116" y1="284" x2="116" y2="302" />
          <line x1="121" y1="286" x2="121" y2="300" />
          <line x1="128" y1="284" x2="128" y2="302" />
          <line x1="135" y1="286" x2="135" y2="300" />
          <line x1="141" y1="284" x2="141" y2="302" />
          <line x1="149" y1="284" x2="149" y2="302" />
          <line x1="156" y1="286" x2="156" y2="300" />
          <line x1="163" y1="284" x2="163" y2="302" />
          <line x1="171" y1="286" x2="171" y2="300" />
          <line x1="178" y1="284" x2="178" y2="302" />
          <line x1="186" y1="284" x2="186" y2="302" />
          <line x1="193" y1="286" x2="193" y2="300" />
          <line x1="201" y1="284" x2="201" y2="302" />
          <line x1="208" y1="286" x2="208" y2="300" />
          <line x1="216" y1="284" x2="216" y2="302" />
          <line x1="224" y1="286" x2="224" y2="300" />
          <line x1="232" y1="284" x2="232" y2="302" />
          <line x1="240" y1="286" x2="240" y2="300" />
          <line x1="248" y1="284" x2="248" y2="302" />
          <line x1="256" y1="284" x2="256" y2="302" />
          <line x1="264" y1="286" x2="264" y2="300" />
        </g>

        {/* Color swatch dots bottom-left (consistent across sketches) */}
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--1" cx="60" cy="346" r="12" fill="#ff6a00" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--2" cx="92" cy="346" r="12" fill="#f4e58a" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--3" cx="124" cy="346" r="12" fill="#ffffff" opacity="0.55" />

        {/* Bottom orange swoosh */}
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--swoosh"
          d="M160 354 C 222 344, 268 366, 332 348"
          stroke="#ff6a00" strokeWidth="6" strokeLinecap="round" fill="none"
        />

        {/* Bottom arrow */}
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--arrow"
          d="M168 372 C 220 374, 260 366, 304 358"
          stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.5" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--arrowhead"
          d="M288 346 L 308 358 L 294 374"
          stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" fill="none"
        />
      </>
    ),
  },
  {
    id: 'app',
    label: 'App',
    render: () => (
      <>
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-back"
          x="84" y="50" width="160" height="240" rx="28"
          stroke="#f4e58a" strokeWidth="3" fill="none"
          transform="rotate(-6 164 170)"
        />
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-front"
          x="100" y="60" width="160" height="240" rx="26"
          stroke="#ff6a00" strokeWidth="11" fill="none"
        />
        <rect
          className="services-hero__sketch-btn"
          x="146" y="76" width="68" height="10" rx="5"
          fill="#0a0d12" opacity="0.55"
        />
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--lines" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.7">
          <line x1="118" y1="118" x2="240" y2="118" />
          <line x1="118" y1="138" x2="206" y2="138" />
        </g>
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--1" cx="138" cy="190" r="14" fill="#ff6a00" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--2" cx="180" cy="190" r="14" fill="#f4e58a" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--3" cx="222" cy="190" r="14" fill="#ffffff" opacity="0.4" />
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--ribbon"
          x="120" y="226" width="120" height="16" rx="8"
          fill="#f4e58a"
        />
        <rect
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-mid"
          x="146" y="280" width="68" height="6" rx="3"
          fill="#ffffff" opacity="0.5" stroke="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--cursor"
          d="M268 188 L268 232 L278 224 L286 242 L296 237 L288 220 L300 218 Z"
          fill="#ffffff" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
        />
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--spark" stroke="#f4e58a" strokeWidth="4" strokeLinecap="round">
          <line x1="320" y1="50" x2="320" y2="86" />
          <line x1="302" y1="68" x2="338" y2="68" />
          <line x1="307" y1="55" x2="333" y2="81" />
          <line x1="333" y1="55" x2="307" y2="81" />
        </g>
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--burst" stroke="#ff6a00" strokeWidth="2.5" strokeLinecap="round">
          <line x1="60" y1="180" x2="76" y2="172" />
          <line x1="56" y1="200" x2="74" y2="200" />
          <line x1="60" y1="220" x2="76" y2="228" />
        </g>
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--swoosh"
          d="M30 332 C 100 318, 200 344, 332 322"
          stroke="#ff6a00" strokeWidth="6" strokeLinecap="round" fill="none"
        />
      </>
    ),
  },
]

export const services = [
  {
    number: '01',
    title: 'Branding & Identity Design',
    heading: 'Build a brand people recognize, remember, and trust.',
    body: [
      'Your brand is more than a logo. It is the first impression people feel, the confidence they build, and the reason they remember your business later.',
      'We create brand identities that feel clear, professional, and emotionally connected. From logo design to colors, typography, visual style, and brand guidelines, every detail is designed to reflect who you are and what your business stands for.',
      'Our branding process helps your business look consistent across websites, social media, presentations, packaging, and marketing materials.',
    ],
    items: [
      'Logo Design',
      'Brand Identity Design',
      'Color Palette',
      'Typography System',
      'Brand Guidelines',
      'Social Media Brand Kit',
      'Business Card & Stationery Design',
      'Visual Direction',
    ],
    cta: 'Create My Brand Identity',
    measuredInTrust: {
      eyebrow: 'Designed to stand out',
      before: 'Strong brands',
      middle: "don't whisper — they",
      highlight: 'own',
      after: 'the room',
      copy: 'From identity to expression, every detail is built to earn recognition and respect across every touchpoint.',
    },
  },
  {
    number: '02',
    title: 'UI/UX Design Services',
    heading: 'Design digital experiences that feel simple, smooth, and human.',
    body: [
      'People trust digital products that are easy to understand. A beautiful interface is important, but a clear user experience is what keeps people engaged and helps them take action.',
      'We design websites, mobile apps, dashboards, and digital platforms with real users in mind. Every screen, button, section, and flow is planned to reduce confusion and create a smooth journey from start to finish.',
      'Our UI/UX design services focus on clarity, usability, emotion, and conversion, so your digital product not only looks good but feels effortless to use.',
    ],
    items: [
      'Website UI Design',
      'Mobile App UI Design',
      'User Experience Design',
      'Wireframes',
      'User Flow',
      'Landing Page Design',
      'Dashboard Design',
      'Prototype Design',
      'Design System',
    ],
    cta: 'Improve My User Experience',
    measuredInTrust: {
      eyebrow: 'Tested with real users',
      before: 'Clean interfaces',
      middle: 'still need thoughtful',
      highlight: 'flows',
      after: 'behind every screen',
      copy: 'Research, wireframes, and polish that turn complex products into journeys people finish without thinking.',
    },
    banner: {
      badge: 'Collaborate with the studio',
      heading: (
        <>
          Let U<em>(&amp;)</em>I design UX, together.
        </>
      ),
      lede:
        'Research, wireframes, interaction design, and final UI — co-built with your team, from concept to launch.',
      cta: { label: 'Start a project', to: '/contactus' },
      secondary: { label: 'View our process', to: '/services' },
    },
  },
  {
    number: '03',
    title: 'Web Design & Development',
    heading: 'Create a website that looks premium and works with purpose.',
    body: [
      'Your website is often the first place people decide whether they can trust your business. It should look professional, load fast, work smoothly on every device, and guide visitors toward action.',
      'We design and develop responsive websites that combine strong visuals, clean structure, SEO-ready foundations, and smooth performance.',
      'Whether you need a business website, landing page, portfolio, or service-based website, we build digital experiences that help your brand communicate clearly and grow with confidence.',
    ],
    items: [
      'Business Website Design',
      'Landing Page Design',
      'Responsive Web Development',
      'Frontend Development',
      'CMS Setup',
      'SEO-Ready Website Structure',
      'Website Speed Optimization',
      'Contact Form Integration',
      'Website Maintenance Support',
    ],
    cta: 'Build My Website',
    measuredInTrust: {
      eyebrow: 'Built to perform',
      before: 'Beautiful sites',
      middle: 'still need real',
      highlight: 'performance',
      after: 'under load',
      copy: 'Pixel-perfect design, clean code, and Core Web Vitals tuned to move the needle from the first paint.',
    },
  },
  {
    number: '04',
    title: 'Mobile App Design & Development',
    heading: 'Turn your idea into a reliable digital product people enjoy using.',
    body: [
      'A great app should feel simple, useful, and reliable. It should solve a real problem, guide users clearly, and make every interaction feel smooth.',
      'We help businesses and startups shape app ideas into practical digital products. From planning and UI design to development and testing, we focus on building app experiences that are easy to use, scalable, and ready for growth.',
      'Whether it is a customer app, booking app, internal tool, startup product, or service platform, we create solutions that support real users and real business needs.',
    ],
    items: [
      'Mobile App UI Design',
      'App Prototype',
      'Frontend Development',
      'Backend Integration',
      'User Dashboard',
      'Admin Panel',
      'App Testing',
      'Launch Support',
      'Feature Planning',
    ],
    cta: 'Start My App Project',
    measuredInTrust: {
      eyebrow: 'Engineered for scale',
      before: 'Good ideas',
      middle: 'still need',
      highlight: 'reliable',
      after: 'engineering behind them',
      copy: 'From prototype to store launch, we ship products users open daily and keep coming back to.',
    },
  },
  {
    number: '05',
    title: 'Creative & Social Media Design',
    heading: 'Make your brand look consistent across every platform.',
    body: [
      'Your audience sees your brand in many places: Instagram, ads, posters, banners, presentations, websites, and campaigns. Every touchpoint should feel connected, polished, and instantly recognizable.',
      'We create creative designs that help your brand communicate with confidence. From social media posts to campaign visuals, pitch decks, brochures, and marketing materials, we make sure your brand looks professional wherever it appears.',
      'Our goal is to create designs that do not just look attractive, but also help people understand, trust, and remember your brand.',
    ],
    items: [
      'Social Media Creative Design',
      'Ad Banner Design',
      'Poster Design',
      'Brochure Design',
      'Pitch Deck Design',
      'Presentation Design',
      'Campaign Visuals',
      'Marketing Collaterals',
      'Digital Creatives',
    ],
    cta: 'Design My Brand Creatives',
    measuredInTrust: {
      eyebrow: 'Consistent at speed',
      before: 'Daily creative',
      middle: 'still needs an',
      highlight: 'unmistakable',
      after: 'voice across every feed',
      copy: 'Campaign-ready assets that earn the scroll and keep your brand instantly recognizable, post after post.',
    },
  },
  {
    number: '06',
    title: 'Packaging Design',
    heading: 'Create packaging that earns the first pickup and the second purchase.',
    body: [
      'Packaging is the first product your customer holds. It has to communicate the brand, the promise, and the personality in a fraction of a second on a crowded shelf.',
      'We design packaging that balances structural craft with visual storytelling. From label systems and dieline engineering to material choices and finishing details, every element is built to look premium, feel right in the hand, and survive real-world print production.',
      'Whether it is a single SKU, a full product line, or a seasonal range, our packaging work helps your brand feel intentional, consistent, and ready for retail.',
    ],
    items: [
      'Packaging Strategy',
      'Label & Graphic Design',
      'Dieline & Structural Design',
      'Material & Finish Specification',
      'Mockups & Print Files',
      'Brand-Consistent Visual System',
      'Multi-SKU Family Design',
      'Production-Ready Artwork',
    ],
    cta: 'Design My Packaging',
    measuredInTrust: {
      eyebrow: 'Made for the shelf',
      before: 'On-shelf packaging',
      middle: 'still needs to be',
      highlight: 'instantly',
      after: 'recognizable in the hand',
      copy: 'Structural craft, brand-true visuals, and print-ready files that survive every retail surface and finish.',
    },
  },
]
