# Ranjit — Webflow & Frontend Developer Portfolio

Production website for **Ranjit**, a Webflow and frontend developer and co-founder of Cocaimo based in Kochi, Kerala, India.

Built strictly against modern Swiss-editorial brutalist design standards with zero gradients, zero shadows, zero ambient blur, and 100% crawlable pre-rendered static HTML.

---

## Technical Architecture & Core Priorities

1. **SEO & Crawlability First:**
   - Complete static HTML pre-rendered directly into entry point (`index.html`).
   - `curl -A "GPTBot"` and Googlebot receive all text, headings, links, and structured data with zero JavaScript required.
   - Rich JSON-LD `@graph` schema covering `WebSite`, `WebPage`, `Person`, `ProfessionalService`, and `ItemList`.
   - Comprehensive OpenGraph and Twitter Summary Large Image cards (`1200x630`).

2. **Performance & Lighthouse 100 Target:**
   - Self-hosted Latin-subset variable WOFF2 fonts with zero layout shift metric-matched fallbacks (`size-adjust`, `ascent-override`, `descent-override`, `line-gap-override`).
   - Responsive `<picture>` elements with AVIF, WebP, and JPG fallbacks across multiple device breakpoints (`480w`, `720w`, `960w`).
   - Hardware-accelerated CSS-only marquee and reveal animations (`transform` only).
   - Strict CSS token scoping (`tokens.css` + `base.css`) and section modes (`data-mode="void|surface|paper|lime-block"`).

3. **Responsiveness & Accessibility:**
   - Mobile-first fluid scaling with touch targets >= 48px.
   - Screen-reader accessible landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
   - Accessible keyboard skip link (`.skip-link`) and visible `:focus-visible` states.
   - Anti-spam honeypot input and validation on enquiry form.

---

## Directory Structure

```
├── public/
│   ├── _headers               # Cloudflare / Netlify security & caching rules
│   ├── favicon.svg            # Geometric "R" monogram SVG
│   ├── favicon.ico            # 32px icon
│   ├── apple-touch-icon.png   # 180x180 iOS icon
│   ├── icon-192.png           # 192x192 PWA icon
│   ├── icon-512.png           # 512x512 PWA icon
│   ├── maskable-512.png       # 512x512 maskable PWA icon
│   ├── site.webmanifest       # PWA manifest
│   ├── og-image.png           # 1200x630 social share card
│   ├── robots.txt             # AI scraper rules (GPTBot, ClaudeBot, etc.)
│   ├── sitemap.xml            # Sitemap with lastmod
│   ├── llms.txt               # LLM scraper summary
│   ├── fonts/                 # Self-hosted variable WOFF2 fonts
│   └── images/                # Responsive AVIF, WebP, JPG pictures
├── scripts/
│   ├── generate-icons.mjs     # Sharp-based icon & manifest builder
│   ├── generate-og.mjs        # Sharp-based 1200x630 social card generator
│   ├── inject-prerender.tsx   # React SSG static HTML pre-renderer
│   ├── download-images.mjs    # Responsive image processor
│   └── check-placeholders.mjs # Build validation for placeholders
├── src/
│   ├── content/               # Single source of truth (site, projects, services, process)
│   ├── components/
│   │   ├── ui/                # Button, Chip, MonoLabel, SectionHeader, Picture, Icon
│   │   ├── cards/             # ProjectCard, ServiceCard, ProcessStep, StatBlock
│   │   ├── sections/          # Hero, Work, Marquee, Services, About, Process, Clients, CTA, Footer
│   │   └── seo/               # HeadDefaults, JsonLd schema generator
│   ├── layouts/               # LayoutDefault with landmarks & skip link
│   ├── styles/                # tokens.css & base.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── vercel.json                # Vercel deployment headers & caching
└── package.json
```

---

## Development & Build Commands

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Serves the application locally on `http://localhost:3000`.

### Prebuild & Production Build
```bash
npm run build
```
Executes:
1. `generate-icons.mjs` (Generates all favicon formats and webmanifest)
2. `generate-og.mjs` (Renders 1200x630 OpenGraph card)
3. `inject-prerender.tsx` (Pre-renders all static HTML into `index.html`)
4. `check-placeholders.mjs` (Validates configuration)
5. `vite build` (Outputs optimized production bundle into `dist/`)

### Preview Production Build
```bash
npm run preview
```

---

## Configuration & Content Customization

All copy, project case studies, and metadata are located in `src/content/`:
- **`src/content/site.ts`**: Update personal details, contact email, social links, location coordinates, and availability notice.
- **`src/content/projects.ts`**: Add or modify portfolio projects, tags, links, and case studies.
- **`src/content/services.ts`**: Edit service offerings and capability statements.
- **`src/content/process.ts`**: Customize the 4-stage client workflow.

---

## Image Optimization Guide

To replace or add images:
1. Place source photos in high resolution (minimum 1200px width).
2. Run `node scripts/download-images.mjs` or execute Sharp directly to generate responsive `.avif`, `.webp`, and `.jpg` variants at `480w`, `720w`, and `960w`.
3. Set fixed `aspect-ratio` on every image container (`4/5` for portraits, `16/9` for project previews) to guarantee **CLS = 0**.

---

## Production Deployment Notes

### Redirects (HTTP to HTTPS & WWW to Non-WWW)
- On Cloudflare Pages or Netlify, enable **Automatic HTTPS Rewrites** and configure DNS records to route `www.ranjit.dev` directly to apex `ranjit.dev` with a 301 Permanent Redirect.
- On Vercel, assign `ranjit.dev` as the production domain and set `www.ranjit.dev` to redirect to `ranjit.dev` automatically in the project Domains settings.

### Verification Checklist
- [x] Pre-rendered HTML includes all text, headings, and JSON-LD schema without JS.
- [x] Fonts self-hosted as Latin-subset variable WOFF2 in `public/fonts/`.
- [x] Favicons (SVG, ICO, PNG, Apple Touch Icon, WebManifest) fully wired.
- [x] Zero gradients, zero box shadows, zero blur filters applied.
- [x] Color tokens adhere strictly to `#09090B`, `#131318`, `#26262E`, `#F4EFE6`, `#A7A29A`, `#C6FF3D`, `#FF3D9A`.
- [x] Accessible form with honeypot spam protection and mailto fallback.
