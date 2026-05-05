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
        <circle
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-back"
          cx="180" cy="170" r="98"
          stroke="#f4e58a" strokeWidth="3" fill="none"
          transform="rotate(-6 180 170)"
        />
        <circle
          className="services-hero__sketch-stroke services-hero__sketch-stroke--card-front"
          cx="180" cy="170" r="86"
          stroke="#ff6a00" strokeWidth="12" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--lines"
          d="M132 168 L 158 192 L 224 144"
          stroke="#ffffff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--1" cx="76" cy="270" r="14" fill="#ff6a00" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--2" cx="108" cy="270" r="14" fill="#f4e58a" />
        <circle className="services-hero__sketch-dot services-hero__sketch-dot--3" cx="140" cy="270" r="14" fill="#ffffff" opacity="0.55" />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--ribbon"
          d="M210 250 L 320 252"
          stroke="#f4e58a" strokeWidth="14" strokeLinecap="round" fill="none"
        />
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--pen"
          d="M298 60 L 318 70 L 268 130 L 252 122 Z"
          fill="#ffffff" stroke="#0a0d12" strokeWidth="2" strokeLinejoin="round"
        />
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--spark" stroke="#f4e58a" strokeWidth="4" strokeLinecap="round">
          <line x1="48" y1="58" x2="48" y2="92" />
          <line x1="32" y1="74" x2="64" y2="74" />
          <line x1="36" y1="62" x2="60" y2="86" />
          <line x1="60" y1="62" x2="36" y2="86" />
        </g>
        <g className="services-hero__sketch-stroke services-hero__sketch-stroke--burst" stroke="#ff6a00" strokeWidth="2.5" strokeLinecap="round">
          <line x1="280" y1="180" x2="298" y2="174" />
          <line x1="282" y1="200" x2="302" y2="206" />
          <line x1="278" y1="220" x2="296" y2="232" />
        </g>
        <path
          className="services-hero__sketch-stroke services-hero__sketch-stroke--swoosh"
          d="M30 318 C 100 304, 180 332, 332 308"
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
  },
]
