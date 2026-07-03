# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro check` | Type-check `.astro` files |

## Stack

- **Astro 6** — file-based routing under `src/pages/`. Each `.astro` file is a route.
- **Tailwind CSS 4** — via `@tailwindcss/vite` plugin (no `tailwind.config` needed).
- **GSAP 3** — import directly: `import gsap from 'gsap'`. Use inside `<script>` tags or framework components.
- **Fonts** — Cinzel (headlines) and Cormorant (body text), loaded via Google Fonts. Available as `font-cinzel` and `font-cormorant` Tailwind utilities.
- **astro-icon + Iconify (Lucide set)** — use `<Icon name="lucide:icon-name" />` in `.astro` files. Registered as an Astro integration in `astro.config.mjs`.

## Styling Rules

- **Never write vanilla CSS. Ever.** Always use Tailwind v4 utility classes.
- Break down every style into the smallest composable Tailwind classes — never write a CSS block where a class will do.
- All custom classes and `@utility` definitions go in `src/styles/global.css`.

## Mobile

- Mobile is **landscape-first**. The site is designed for horizontal orientation on mobile.
- A fullscreen rotate prompt (`src/components/RotatePrompt.astro`) is shown on portrait mobile via `portrait:flex landscape:hidden`. It must be included in every page/layout.
- Do not design or optimize for portrait mobile layouts.

## Architecture

- `src/pages/` — routes. `index.astro` is the homepage.
- `src/components/` — shared components (not yet created; conventional location).
- `public/` — static assets served as-is.
- `astro.config.mjs` — registers the `astro-icon` integration and Tailwind Vite plugin.
- TypeScript strict mode is enabled via `astro/tsconfigs/strict`.
