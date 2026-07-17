# Deployment — profile (Cloudflare Workers)

Static Next.js portfolio deployed as a **Workers Static Assets** app named **`profile`**.

## Live URLs

| Host | Status |
|------|--------|
| https://profile.shiv.io | Primary custom domain (`shiv.io` zone) |
| https://profile.\<account\>.workers.dev | Default Workers URL |
| https://shivprakash.in | Add `shivprakash.in` zone to Cloudflare, then add custom domain route |

## Prerequisites

- Node 20+
- Logged-in Wrangler: `npx wrangler whoami`
- `shiv.io` on this Cloudflare account (for `profile.shiv.io`)

## Local

```bash
npm install
npm run dev          # Next.js dev server
npm run build        # static export → ./out
npx wrangler dev     # serve built assets via Workers runtime (after build)
```

## Deploy

### Automatic (push to `main`)

GitHub Actions workflow: [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)

On every push to `main` (and manual **workflow_dispatch**):

1. `npm ci`
2. `npm run build` (`NEXT_PUBLIC_SITE_URL=https://profile.shiv.io`)
3. `wrangler deploy` → Worker **`profile`**

**One-time secret setup** (required for Actions):

1. Cloudflare → [Create API token](https://dash.cloudflare.com/profile/api-tokens) → template **Edit Cloudflare Workers** (scope to this account)
2. GitHub repo → Settings → Secrets and variables → Actions → New repository secret:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: the token

```bash
# or via CLI:
gh secret set CLOUDFLARE_API_TOKEN -R Shivprakash/shivprakash.github.io
# paste token when prompted
```

**Optional alternative — Cloudflare Workers Builds** (no GitHub secret; same as `research`):

1. [Workers dashboard → `profile` → Settings → Builds → Connect](https://dash.cloudflare.com/552b3fc9d685bef17e3a479ae1dfd41c/workers/services/view/profile/settings)
2. Connect `Shivprakash/shivprakash.github.io`, branch `main`
3. Build command: `npm run build`
4. Deploy command: `npx wrangler deploy`
5. Build env: `NEXT_PUBLIC_SITE_URL=https://profile.shiv.io`

If both Actions and Workers Builds are enabled, disable one to avoid double deploys.

### Manual

```bash
npm run deploy       # build + wrangler deploy
# or
npm run build && npm run cf:deploy
```

## Cloudflare config

See `wrangler.jsonc`:

- **Worker name:** `profile`
- **Assets:** `./out` (Next `output: 'export'`)
- **Custom domain:** `profile.shiv.io`

### Attach shivprakash.in

**Current state (as of setup):** DNS is at **GoDaddy** (`ns07` / `ns08.domaincontrol.com`), apex A records still point at **GitHub Pages** (`185.199.*.*`).

Cloudflare Workers custom domains require the zone on this account. Wrangler OAuth could not create the zone (missing `zone.create` permission).

1. Cloudflare Dashboard → **Add a site** → `shivprakash.in` (same account as `shiv.io`)
2. At GoDaddy, set nameservers to the Cloudflare pair shown in the dashboard
3. Wait until the zone is **Active**
4. In `wrangler.jsonc`, add routes:

```jsonc
"routes": [
  { "pattern": "profile.shiv.io", "custom_domain": true },
  { "pattern": "shivprakash.in", "custom_domain": true },
  { "pattern": "www.shivprakash.in", "custom_domain": true }
]
```

5. Redeploy: `npm run deploy`
6. Remove GitHub Pages apex A records / disable GitHub Pages so traffic is only on Cloudflare

**Temporary alternative (no zone move):** GoDaddy domain forward `shivprakash.in` → `https://profile.shiv.io` (301). Not as clean as a custom domain, but works until NS cutover.

## Making the GitHub repo private

This deploy path does **not** require a public GitHub repo:

1. Deploy from local CLI (`npm run deploy`) or Cloudflare Workers Builds with a private repo + API token
2. Disable GitHub Pages for `shivprakash.github.io` (Settings → Pages)
3. Set the repo to **Private**

Optional: connect the private repo to **Workers Builds** in the Cloudflare dashboard (Build command: `npm run build`, Deploy: `npx wrangler deploy`, Root: repo root).

## Site env

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL at build time (default `https://profile.shiv.io`) |
