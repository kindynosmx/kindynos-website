# Kindynos Website

Bilingual marketing site for Kindynos — a Mexico-based software studio.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4 + [shadcn/ui](https://ui.shadcn.com)
- [next-intl](https://next-intl.dev) (`/en`, `/es`)
- [Bun](https://bun.sh)
- Hosted on [Vercel](https://vercel.com)

## Prerequisites

- [Bun](https://bun.sh) 1.3+
- Node.js 22+ (Vercel runtime)

## Setup

```bash
git clone https://github.com/kindynosmx/kindynos-website && cd kindynos-website
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000). Locale routing lives at `/en` and `/es`.

## Commands

- `bun dev` — development server
- `bun run build` — production build
- `bun run start` — serve the production build
- `bun run tscheck` — TypeScript (`noEmit`)

Copy lives in `src/messages/en.json` and `src/messages/es.json`.
