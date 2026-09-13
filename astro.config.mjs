// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project sites are served from https://<user>.github.io/<repo>/,
// so the build needs a `/portfolio` base — but local dev should stay at `/`.
// GITHUB_ACTIONS is set automatically by the deploy workflow.
const isCI = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: 'https://terezahorickova.github.io',
  base: isCI ? '/portfolio' : '/',
});
