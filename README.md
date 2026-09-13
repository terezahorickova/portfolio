# Tereza Horičková — Portfolio

Astro site for Product, Research, Graphics, Interests and About.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build production site to `./dist/`            |
| `npm run preview`   | Preview the production build locally          |

## Deployment

Pushing to `main` builds and deploys automatically to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The site is
served at `https://terezahorickova.github.io/portfolio/`.

`astro.config.mjs` sets `base: '/portfolio'` only when running in CI
(`GITHUB_ACTIONS=true`), so local dev still runs at `/`.
