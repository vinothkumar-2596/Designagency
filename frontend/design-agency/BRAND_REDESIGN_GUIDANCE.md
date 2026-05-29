# BrandViora Visual Identity Redesign Guidance

## Color Replacement Strategy

Replace the previous black/orange startup palette with a warm luxury-minimal system:

- Primary identity: `#720D28` Deep Burgundy
- Primary hover/depth: `#8A1835`
- Secondary action: `#720d28` Deep Burgundy
- Detail accent: `#784E24` Deep Earth Bronze
- Premium highlight: `#D8AA68` Soft Luxury Gold
- Main background: `#F3ECE5` Warm Beige
- Alternate background: `#FBF7F2` / `#EEE3D8`
- Primary text: `#0F0F0F`
- Muted text: `rgba(15,15,15,.65)`

Dark black sections should become burgundy-led premium sections. Orange should no longer behave as the dominant brand color; reserve it for secondary action emphasis and selected conversion moments.

## Updated Design System

Use warm beige as the default page canvas, burgundy for identity-bearing areas, and gold/bronze for small premium details. Keep cards flatter, with restrained shadows and thin low-opacity borders.

Typography should stay strong and editorial: large section headlines, compact eyebrow labels, and generous line height for supporting copy. Avoid neon glows, highly saturated gradients, and tech-heavy visual noise.

## Component Color Mapping

- Header: transparent burgundy glass at top, solid burgundy after scroll, gold divider details, burgundy CTA.
- Hero: warm beige editorial canvas on home; burgundy highlights and black text. Subpage heroes can stay dark burgundy.
- Primary CTA: burgundy background, white text, lighter burgundy hover.
- Secondary CTA: warm orange background, white text.
- Outline CTA: burgundy border and text, burgundy fill on hover.
- Service cards: beige/white surfaces, burgundy hover border, soft shadows.
- Project gallery: dark burgundy overlays with white text.
- Testimonials: warm beige section, clean white cards, gold micro accents.
- Footer: full burgundy background, gold accent details, white text.
- Forms: warm beige inputs, burgundy focus state, white active field background.
- Icons: monoline, rounded, burgundy by default; gold/bronze only for small highlights.

## Before To After Recommendations

- Before: orange as the main brand signal. After: burgundy owns identity; orange is used sparingly for action emphasis.
- Before: black digital-agency hero language. After: warmer editorial/luxury tone with beige and burgundy contrast.
- Before: visible neon/tech glow details. After: softer premium shadows, gold dividers, low-opacity texture.
- Before: animated gradients and saturated decorative effects. After: slow, subtle transitions with reduced visual noise.
- Before: stark white input/card surfaces. After: warm beige surfaces with burgundy focus and cleaner hierarchy.

## CSS Variables

```css
:root {
  --color-brand-primary: #720d28;
  --color-brand-primary-hover: #8a1835;
  --color-brand-secondary: #720d28;
  --color-brand-bronze: #784e24;
  --color-brand-gold: #d8aa68;
  --color-background: #f3ece5;
  --color-background-alt: #fbf7f2;
  --color-background-soft: #eee3d8;
  --color-text-primary: #0f0f0f;
  --color-text-muted: rgba(15, 15, 15, 0.65);
  --color-white: #ffffff;
  --shadow-soft: 0 18px 44px rgba(15, 15, 15, 0.08);
  --shadow-premium: 0 24px 70px rgba(114, 13, 40, 0.16);
}
```

## UI Improvements

Keep the current information architecture and section order. Improve perceived quality by reducing saturated accents, using calmer hover motion, preserving large breathing spaces, and making burgundy the consistent thread across navigation, CTAs, section labels, focus states, and overlays.

Motion should remain slow and subtle: opacity, small translate values, and restrained scale only where it improves affordance.
