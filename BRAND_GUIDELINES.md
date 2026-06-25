# La Petit Fleur — Brand Guidelines

## Brand Identity

La Petit Fleur is a French-inspired floral atelier and event styling house based in Tirana. We do two things, beautifully: **floral design** — garden roses, seasonal blooms and hand-tied bouquets — and **full event styling**, from intimate bridal flowers to lavish venue installations.

The brand voice is refined, editorial and quietly romantic. Think dusty peach and caramel petals against warm cream linen, vintage botanical illustration, and the unhurried elegance of a Parisian flower market. Every touchpoint should feel sophisticated, tactile and timeless — never loud, never trend-chasing.

- **Name:** La Petit Fleur
- **Wordmark:** La Petit Fleur (display: `LA PETIT FLEUR`)
- **Tagline:** Flowers & Events · Lule & Evente
- **Location:** Bulevardi Bajram Curri, Tirana, Albania
- **Instagram:** [@la.petit.fleur](https://instagram.com/la.petit.fleur)
- **Languages:** English & Albanian (bilingual site)

## Logo

The mark pairs a delicate vintage botanical bloom — a garden-rose whorl with trailing stems — drawn in caramel (`#C9956B`) with deeper caramel (`#9A6A45`) detailing, set above the tracked-caps serif wordmark `LA PETIT FLEUR`. A thin hairline separates the wordmark from the tagline `FLOWERS & EVENTS · TIRANA`.

- Always present the logo on the warm cream ground (`#F6F1E8`) or on white.
- Preserve generous clear space around the mark; let it breathe.
- The wordmark sits on a single line — do not stack or wrap "LA PETIT FLEUR".
- Do not recolour the bloom outside the caramel palette, distort proportions, or add drop shadows.
- Primary asset: `Brand/logo.svg`.

## Color Palette

A dusty-peach, caramel and warm-cream vintage palette. The system is fully token-based in Tailwind (`brand.*`).

| Token            | Hex       | Role                                              |
|------------------|-----------|---------------------------------------------------|
| `brand-dark`     | `#34302A` | Primary ink / body text                           |
| `brand-night`    | `#211D17` | Deepest backgrounds (loader, hero, footer)        |
| `brand-gold`     | `#C9956B` | Signature accent — dusty peach / caramel          |
| `brand-deep`     | `#9A6A45` | Deeper caramel — accent text & hairlines on white |
| `brand-champagne`| `#F6F1E8` | Warm-cream section backgrounds                    |
| `brand-red`      | `#B5654D` | Warm terracotta highlight / notification accent   |

White (`#FFFFFF`) is the primary canvas; cream and deep espresso-brown anchor the contrast.

## Typography

- **Playfair Display** (serif) — display & editorial headings, the wordmark and italic accents. Refined, high-contrast and unmistakably vintage-French.
- **Montserrat** (display sans) — eyebrows, navigation, buttons, tracked uppercase labels and tags.
- **Inter** (body sans) — paragraphs, UI copy and fine print for clean legibility.

Headings lean into Playfair Display with light/italic flourishes; labels use wide letter-spacing (tracking) in Montserrat caps. Body copy stays light-weight and airy.

## Website Style & Layout

- Full-screen cinematic hero with a soft floral video and a layered cream-to-espresso gradient.
- Editorial pacing: generous whitespace, large serif statements, thin hairline dividers and uppercase tracked eyebrows.
- Sections: hero, scrolling marquee, philosophy/editorial quote, floral collections, the flower collection grid, weddings & events styling, visit/map, Instagram feed, footer newsletter ("Bloom Club").
- Motion: GSAP preloader with a shimmering wordmark, scroll-reveal fades, parallax imagery, a custom desktop cursor, and a desaturated Leaflet map.
- Imagery: garden roses, peonies, full event installations — soft, warm, naturally lit and unfussy.
- Bilingual (EN/AL) with a runtime language toggle; every visible string is dictionary-keyed.

## Tech

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (token-based `brand` palette; PostCSS + Autoprefixer)
- **GSAP** + `@gsap/react` (ScrollTrigger) for animation
- **lucide-react** icons
- **Leaflet** (loaded at runtime) for the shop map
- Fonts via Google Fonts: Playfair Display, Montserrat, Inter
