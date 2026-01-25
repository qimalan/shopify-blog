# Shopify Blog Design Document

## Overview

Personal blog for attracting Shopify theme/app development clients. Luxury/Editorial design style.

## Architecture

```
/                    → Homepage (intro, tech stack, WeChat contact)
/projects            → Project showcase
/blog                → Blog list
/blog/[slug]         → Blog detail
```

## Tech Stack

- Next.js 16 + Tailwind CSS v4
- MDX for blog content
- rehype-pretty-code + shiki for code highlighting
- Fonts: Playfair Display + Inter

## Design Tokens

- Background: #F9F8F6 (Warm Alabaster)
- Foreground: #1A1A1A (Rich Charcoal)
- Accent: #D4AF37 (Metallic Gold)
- Border radius: 0px everywhere
- Animations: 500ms-2000ms, slow and cinematic

## Pages

### Homepage
1. Hero: Large name/brand, subtitle
2. About: Photo (grayscale→color) + intro text with drop cap
3. Tech Stack: Icon grid (Shopify, Liquid, React, Next.js, TypeScript, Tailwind)
4. Contact: WeChat QR code, dark background section

### Projects
- No page title, direct card display
- 3-6 large image cards
- Asymmetric layout (odd left, even right)
- Click opens external link

### Blog List
- 2-column grid (desktop), 1-column (mobile)
- Cards: cover image, title, date, excerpt

### Blog Detail
- Title + date
- Full-width cover image
- Content: max-w-2xl, drop cap, code highlighting
- Back to list link

## Global Elements

### Header
- Fixed top, semi-transparent with backdrop blur
- Logo left, nav links right
- Mobile: hamburger menu

### Noise Background
- SVG noise texture, 2-3% opacity
- Subtle animation
- Covers entire viewport

### Grid Lines (desktop only)
- 4 vertical lines at 20% opacity

### Footer
- None (minimal design)

## Dependencies

- next-mdx-remote
- rehype-pretty-code
- shiki
- gray-matter
- lucide-react
