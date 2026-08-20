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

Image optimization on Workers needs the `IMAGES` binding (Cloudflare Images).

Runtime secrets belong on the Worker itself (**Settings → Variables and Secrets**, Production / Preview — not Development):

```bash
wrangler secret put RESEND_API_KEY
wrangler secret put TURNSTILE_SECRET_KEY
```

`kindynos.mx` must be verified at [Resend Domains](https://resend.com/domains) or sends from `contact@kindynos.mx` will be rejected. Until then, set `CONTACT_FROM_EMAIL` (and optionally `CONTACT_TO_EMAIL`) as Worker vars.

Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` as a plaintext **build** variable so it is inlined at build time. Do not put `RESEND_API_KEY` only in Build variables — the API route reads it at runtime.

### Workers Builds (Git)

Cloudflare already ships Bun on the build image. Pin it to this repo’s version and run the OpenNext build — a plain `next build` / `bun run build` does not produce `.open-next/`.

In the Worker **Settings → Build**:

| Setting | Value |
| --- | --- |
| **Build command** | `bunx opennextjs-cloudflare build` |
| **Deploy command** | `bunx opennextjs-cloudflare deploy -- --keep-vars` |
| **Non-production branch deploy** | `bunx opennextjs-cloudflare upload -- --keep-vars` |

Build variables:

| Variable | Value |
| --- | --- |
| `BUN_VERSION` | `1.3.14` |
| `NODE_VERSION` | `22` |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | your Turnstile site key |
