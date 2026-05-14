# Alsabahy Group — Landing Page

Next.js 15 + Tailwind v4 implementation of the Editorial Corporate theme
(see `../03_Design_Theme_Decision.md`) and the homepage content
(`../04_Homepage_Content.md`).

## Run

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript (strict)
- Tailwind v4 (CSS-first config in `app/globals.css`)
- Fonts: Fraunces (display serif) + Inter (body sans), self-hosted via `next/font`

## Design tokens

Locked in `app/globals.css` under `@theme`:

| Token | Value | Use |
|---|---|---|
| `--color-navy` | `#0E1B2C` | Primary text, dark surfaces |
| `--color-cream` | `#F1ECE2` | Default background |
| `--color-offwhite` | `#FAFAF7` | Alternate background |
| `--color-bronze` | `#B98B3A` | Accent — CTAs, rules, micro-only |
| `--color-charcoal` | `#1A1F26` | Body text |
| `--color-divider` | `#E5E0D4` | Dividers |

## Photography

Per spec, photography is *the* critical deliverable and AI/stock are off-limits.
Each placeholder slot is rendered with `<PhotoPlate>` and carries the shoot brief
inline as the caption — these are the briefs to hand a photographer in Sana'a /
Aden.

## Bracketed placeholders

Every `[X]` and `[year]` in the rendered page maps to an open data point in
`04_Homepage_Content.md` §"What still needs real data before content can ship".

## Structure

```
app/
├── layout.tsx          Root layout — fonts + metadata + Organization JSON-LD
├── page.tsx            Homepage — composes the 7 sections
├── globals.css         Design system (Tailwind v4 @theme + components)
├── sitemap.ts          Generated sitemap
├── robots.ts           robots.txt
└── components/
    ├── Header.tsx
    ├── Footer.tsx
    ├── PhotoPlate.tsx  Photo placeholder with shoot-brief caption
    ├── FadeIn.tsx      Calm scroll fade (no parallax / no pin)
    ├── Hero.tsx        §1
    ├── Role.tsx        §2
    ├── Sectors.tsx     §3
    ├── Brands.tsx      §4
    ├── Operations.tsx  §5
    ├── WhyAlsabahy.tsx §6
    └── Closer.tsx      §7
```
