# CBCora — Cloudflare deployment package

This package is arranged for Cloudflare Workers Static Assets.

## Git repository layout
- `wrangler.toml`
- `package.json`
- `public/`
  - `index.html`
  - `app.js`
  - `styles.css`
  - `manifest.webmanifest`
  - `sw.js`
  - `icon.svg`
  - `assets/` (all images)

## Cloudflare Git deployment
Use the repository root as the project root.
Build command can be left blank for this plain static app.
Deploy command: `npx wrangler deploy`

The `wrangler.toml` file tells Cloudflare to upload everything inside `public/` as static assets.

## Important after redeploying
The service-worker cache name is now `cbcora-v09`. This forces browsers that used the previous build to refresh to the updated asset map.

## v1.1 updates
- Profile age is calculated automatically from Date of Birth.
- Home privacy card replaced with a medical Disclaimer card.
- Home CBC overview defaults to the latest 3 saved tests.
- Trend range can be changed to latest 5, all saved tests, or a custom range using saved CBC upload/test dates.
- Combined trend lines use higher-contrast colors for easier differentiation, with maroon alert markers for out-of-range results.
