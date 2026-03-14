# void challenge

A single-page marketing landing page built with React, TypeScript, Vite, and Tailwind CSS.

This project appears to be a Figma-to-React conversion focused on a branded promotional/gaming landing page with reusable sections, shared UI primitives, and content stored in a central data file.

## Stack

- React 19
- TypeScript 5
- Vite 7
- Tailwind CSS 4 via `@tailwindcss/vite`
- `clsx` for conditional class names
- npm as the package manager

## Requirements

- Node.js 20+ recommended
- npm 10+ recommended

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

By default, Vite will print the local URL in the terminal, usually:

```text
http://localhost:5173
```

## Available Scripts

Run the local dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
.
├── public/
│   └── images/             Static image assets used by the landing page
├── src/
│   ├── components/
│   │   ├── cards/          Reusable card components
│   │   ├── layout/         Header, footer, container, layout helpers
│   │   ├── sections/       Page sections assembled in App.tsx
│   │   └── ui/             Buttons, icons, section heading, shared UI
│   ├── data/
│   │   └── siteContent.ts  Main page copy, labels, features, pricing, links
│   ├── types/
│   │   └── ui.ts           Shared UI and content-related TypeScript types
│   ├── App.tsx             Main page composition
│   ├── index.css           Global styles and Tailwind entry
│   └── main.tsx            React app bootstrap
├── index.html              Vite HTML entry
├── package.json            Scripts and dependencies
├── tsconfig.json           TypeScript config
├── vercel.json             SPA routing config for Vercel
└── vite.config.ts          Vite config
```

## How the App Is Organized

The page is assembled in `src/App.tsx` using these sections:

- `HeroSection`
- `SolutionSection`
- `JourneySection`
- `BenefitsSection`
- `BackofficeSection`
- `CapabilitiesSection`
- `PricingSection`
- `GamesSection`
- `PerformanceSection`
- `CtaSection`

Shared layout pieces such as the header and footer live in `src/components/layout`.

## Where to Update Content

Most text and repeated content blocks are centralized in:

`src/data/siteContent.ts`

This is the main place to update:

- navigation labels
- hero stats
- solution features
- journey steps
- benefit cards
- backoffice features
- pricing plans
- CTA/contact links

## Where to Update UI

Update sections:

- `src/components/sections/*`

Update shared UI primitives:

- `src/components/ui/Button.tsx`
- `src/components/ui/SectionHeading.tsx`
- `src/components/ui/Icons.tsx`

Update layout wrappers:

- `src/components/layout/*`

## Icons

The project uses a shared icon registry in:

`src/components/ui/Icons.tsx`

If you add a new icon:

1. Add the SVG definition to `iconDefinitions`
2. Add the icon name to `src/types/ui.ts` if the icon is used by content data
3. Use the icon with `<Icon name="your-icon-name" />`

The icon system renders icons inside a consistent `24x24` SVG wrapper, so custom icons can keep their own native viewBox while still displaying consistently across the app.

## Images and Static Assets

Static images are stored in:

`public/images`

Current assets include:

- `solution.png`
- `gameAlbum.png`
- `gamePronostics.png`
- `gameQuiz.png`
- `gameTombola.png`

To add a new image:

1. Place it inside `public/images`
2. Reference it with a root-relative path such as `/images/your-image.png`

## Type Safety

The project uses strict TypeScript settings. Notable config choices:

- `strict: true`
- `moduleResolution: "Bundler"`
- `jsx: "react-jsx"`
- `noEmit: true`

Type errors will fail the production build because `npm run build` runs `tsc` before Vite builds the app.

## Build Output

Production files are generated in:

`dist/`

This folder is safe to regenerate with:

```bash
npm run build
```

## Deployment

This project can be deployed as a static single-page app.

The repository already includes a `vercel.json` file with SPA routing behavior, so Vercel is a natural deployment target. Other static hosts should also work as long as they serve the built `dist/` output and support SPA fallback routing when needed.

## Recommended Workflow

1. Install dependencies with `npm install`
2. Run the app with `npm run dev`
3. Edit content in `src/data/siteContent.ts`
4. Edit layout or visuals in `src/components/**`
5. Verify production output with `npm run build`
6. Preview with `npm run preview` before deploying

## Notes

- No environment variables are currently required
- No backend server is included in this repository
- The app is currently a frontend-only landing page
