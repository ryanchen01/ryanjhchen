# Ryan Chen

Personal website built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3003.

## Production

```sh
npm run lint
npm run build
```

The site exports static files to `out/`, ready for any static hosting provider. Both the homepage and `/ten-and-twins/privacy/` work without a server.

To redeploy on the existing Nginx host after pulling changes:

```sh
./scripts/redeploy.sh
```

Run with Node.js/npm available and an account with write access to `/var/www`.
The script installs locked dependencies, lints, builds, and atomically switches
`/var/www/ryanjhchen` to a new release. It verifies the homepage and privacy page
through Nginx on port 3003 and restores the previous release if verification fails.
Only the active release and the immediately previous release are retained in
`/var/www` for rollback; older releases are removed after verification succeeds.
Nginx needs no restart.
The script deploys the current working tree; it does not pull or commit changes.

## Content

- Edit the introduction in `app/page.tsx`.
- Add catalog entries in `lib/apps.ts` and their icons in `public/apps/`.
- Add a privacy page at `app/<app-slug>/privacy/page.tsx` for each app.
- Ten & Twin's icon and privacy policy come from its iOS project. The policy covers local game storage and optional AdMob rewarded ads and is effective October 5, 2026, at `/ten-and-twins/privacy/`.

No App Store link is included because one has not been provided.
