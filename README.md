# Portfolio

A personal portfolio site, built with React, TypeScript, Vite, and Tailwind
CSS — Chicago-themed, with a skyline silhouette in the hero section and a
Chicago-flag-inspired color palette (blue stripes, red stars).

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Customize it

Everything here is a placeholder — swap it out for your own content:

- **Name, tagline, bio** — [src/components/Hero.tsx](src/components/Hero.tsx)
  and [src/components/About.tsx](src/components/About.tsx)
- **Projects** — [src/data/projects.ts](src/data/projects.ts). Each entry
  is `{ title, description, tech, repoUrl?, liveUrl? }`; add/remove/edit
  entries and the grid in
  [src/components/Projects.tsx](src/components/Projects.tsx) updates
  automatically.
- **Contact links** — [src/components/Contact.tsx](src/components/Contact.tsx)
- **Skills list** — top of
  [src/components/About.tsx](src/components/About.tsx)
- **Colors** — CSS variables at the top of
  [src/index.css](src/index.css) (light theme in `:root`, dark theme in
  `:root[data-theme='dark']`)
- **Skyline background** —
  [src/components/ChicagoSkyline.tsx](src/components/ChicagoSkyline.tsx),
  an inline SVG silhouette; adjust building shapes/positions there.

Dark/light mode toggles from the nav and persists via `localStorage`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite — no config needed. Build command
   `npm run build`, output directory `dist`.
4. Deploy. Every push to `main` auto-deploys after that.
