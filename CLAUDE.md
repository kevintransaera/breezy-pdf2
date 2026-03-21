# Breezy PDF

Free, ad-supported, client-side PDF toolkit. All processing happens in the browser — files never leave the user's device.

**Tech stack:** Next.js 14 (App Router) + Tailwind CSS + pdf-lib + pdfjs-dist v4

## Design Context

### Users
People who need to quickly process PDF files — merge, split, compress, convert. They arrive via Google search with a specific task, want to complete it fast, and leave. They value speed, trust, and clarity. Many have been burned by cluttered competitors (iLovePDF, SmallPDF) with aggressive upsells and dark patterns.

### Brand Personality
**Refined, Trustworthy, Effortless**

The interface should feel like a premium tool that respects the user's time and intelligence. No visual noise, no gimmicks. The privacy-first angle (100% client-side processing) should feel like a natural extension of the design's restraint and sophistication — not a loud marketing badge.

### Aesthetic Direction
**Visual tone:** Monochromatic editorial. Inspired by Vonix — a black/white/warm-gray palette with zero accent colors. Premium SaaS meets design studio.

**Reference:** Vonix — specifically:
- Strictly monochrome palette (black, white, warm gray ~#f5f4f0)
- Serif italic for emphasis/accent text (headlines, key phrases)
- Clean geometric sans-serif for body and UI
- Thin hairline borders as section dividers
- Generous whitespace and vertical rhythm
- Pill-shaped tags/badges with thin borders
- Black filled primary buttons, white outlined secondary buttons
- No emojis — use minimal SVG line icons or abstract shapes

**Anti-references:**
- iLovePDF / SmallPDF (cluttered, colorful, aggressive upsells)
- Generic SaaS with rainbow-colored feature cards
- Gradient text, emoji icons, heavy drop shadows

**Theme:** Light mode only.

### Design Principles

1. **Monochrome discipline** — Black, white, and warm gray only. No accent colors. Hierarchy comes from weight, size, and spacing — not color.
2. **Typography creates personality** — Use a serif italic for accent text paired with a clean sans-serif for everything else. This contrast is the primary design device.
3. **Whitespace is a feature** — Generous padding, tall sections, breathing room. Density signals clutter; space signals premium.
4. **Borders over backgrounds** — Use thin 1px hairline borders to delineate sections rather than colored backgrounds or heavy shadows.
5. **Invisible until needed** — UI controls should feel quiet when idle and confident when active.
