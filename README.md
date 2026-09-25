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

## Content

- Edit the introduction in `app/page.tsx`.
- Add catalog entries in `lib/apps.ts` and their icons in `public/apps/`.
- Add a privacy page at `app/<app-slug>/privacy/page.tsx` for each app.
- Ten & Twins' icon and privacy policy come from its iOS project. The policy is effective September 25, 2026, at `/ten-and-twins/privacy/`.

No App Store link is included because one has not been provided.
