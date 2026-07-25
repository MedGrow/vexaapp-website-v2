# Vexaapp Marketing Site

Next.js 14 (App Router) + Tailwind, built as a fully static export so it deploys
cleanly to **Cloudflare Pages** with no server runtime, no Workers config, and
no Node-only APIs anywhere in the codebase.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

This produces a static site in the `out/` folder (via `output: 'export'` in
`next.config.js`) — that folder is everything Cloudflare needs to serve.

> Note: the build fetches Fraunces / IBM Plex Sans / IBM Plex Mono from Google
> Fonts at build time (via `next/font/google`). That needs normal internet
> access — it will fail in network-locked sandboxes but works in any regular
> dev machine or CI runner.

## Deploy to Cloudflare Pages

**Easiest path — connect the GitHub repo:**

1. Push this project to a GitHub repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**, pick the repo.
3. Build settings:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
4. Deploy. Every push to `main` redeploys automatically.

**Or via Wrangler CLI (no GitHub needed):**

```bash
npm install -g wrangler
npm run build
wrangler pages deploy out --project-name=vexaapp
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections in order
  globals.css
components/
  Header.tsx
  Hero.tsx
  RoiStrip.tsx
  FeatureShowcase.tsx   Feature tabs — swaps the real app screenshots, no rebuilt UI
  HowItWorks.tsx
  BuiltFor.tsx
  BookingSection.tsx    Split layout: copy/CTA left, booking iframe right
  Faq.tsx
  Footer.tsx
public/images/       Your real app screenshots + logo
```

## Editing content

- **Copy**: edit directly inside each component in `components/`.
- **Colors/fonts**: `tailwind.config.ts` — burgundy / ivory / charcoal / gold tokens.
- **Feature screenshots**: `components/FeatureShowcase.tsx` — the `FEATURES` array maps each tab to an image in `public/images/`.
- **Booking link**: `components/BookingSection.tsx` — the iframe `src`.
