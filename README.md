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

Copy `.env.example` to `.env` and set:

- `RESEND_API_KEY` — verify `kindynos.mx` at [Resend Domains](https://resend.com/domains) so mail can be sent from `contact@kindynos.mx`. Until then, local tests can use `CONTACT_FROM_EMAIL=Kindynos <beth.t@example.com>` and `CONTACT_TO_EMAIL` set to the email on your Resend account.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` — add `localhost` and `kindynos.mx` as hostnames in [Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)

Add the same variables in the Vercel project for production. Restart `bun dev` after changing `NEXT_PUBLIC_*` values.

## Commands

- `bun dev` — development server
- `bun run build` — production build
- `bun run start` — serve the production build
- `bun run tscheck` — TypeScript (`noEmit`)

Copy lives in `src/messages/en.json` and `src/messages/es.json`.
