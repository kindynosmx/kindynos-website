# Kindynos Website

Bilingual marketing site for Kindynos — a Mexico-based software studio.

## Stack

- [Next.js](https://nextjs.org) 16.3 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org) 7
- [Tailwind CSS](https://tailwindcss.com) 4 + [shadcn/ui](https://ui.shadcn.com)
- [next-intl](https://next-intl.dev) (`/en`, `/es`)
- [Bun](https://bun.sh)
- Deploy: [Vercel](https://vercel.com) or [Cloudflare Workers](https://developers.cloudflare.com/workers/) via [OpenNext](https://opennext.js.org/cloudflare)

## Prerequisites

- [Bun](https://bun.sh) 1.3+
- Node.js 22+ (Vercel / Workers build)

## Setup

```bash
git clone https://github.com/kindynosmx/kindynos-website && cd kindynos-website
bun install
cp .env.example .env
cp .dev.vars.example .dev.vars
bun dev
```

Open [http://localhost:3000](http://localhost:3000). Locale routing lives at `/en` and `/es`.

Set in `.env` (and the same keys in Vercel or Cloudflare for production):

- `RESEND_API_KEY` — verify `kindynos.mx` at [Resend Domains](https://resend.com/domains) so mail can be sent from `contact@kindynos.mx`. Until then, local tests can use `CONTACT_FROM_EMAIL=Kindynos <beth.t@example.com>` and `CONTACT_TO_EMAIL` set to the email on your Resend account.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` — add `localhost` and `kindynos.mx` as hostnames in [Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile)

Restart `bun dev` after changing `NEXT_PUBLIC_*` values.

## Commands

- `bun dev` — Next.js development server
- `bun run build` — production build
- `bun run start` — serve the production build
- `bun run tscheck` — TypeScript (`noEmit`)
- `bun run preview` — build for Cloudflare and run it locally in Workerd
- `bun run deploy` — build and deploy to Cloudflare Workers

Copy lives in `src/messages/en.json` and `src/messages/es.json`.

## Cloudflare Workers

The app uses [`@opennextjs/cloudflare`](https://opennext.js.org/cloudflare). Locale routing stays on `src/middleware.ts` (Edge) because OpenNext does not yet support Next.js 16 `proxy.ts` Node middleware.

Image optimization on Workers needs the `IMAGES` binding (Cloudflare Images). Put secrets in the Worker (Preview / Production), not in Development:

```bash
wrangler secret put RESEND_API_KEY
wrangler secret put TURNSTILE_SECRET_KEY
```

Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` as a plaintext Worker var so it is inlined at build time. Optional: `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL`.
