# Lyndsi Williams – Portfolio

Personal portfolio built with React + TypeScript, styled with MUI and custom CSS, and bundled with Vite.

## Tech
- React 18, TypeScript 5, React Router 6
- Vite 5 (dev server + build)
- MUI 5, Emotion

## Prereqs
- Node >= 18 (recommended: 20+)
- npm >= 9

## Getting Started
```bash
npm install
npm run dev   # http://localhost:3000
```

## Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – type-check then build to `build/`
- `npm run preview` – serve the production build locally
- `npm test` – run tests (configured for Vitest)

## Project Structure
- `src/` React app
- `public/` static assets (manifest, icons)
- `index.html` Vite entry

## Notes
- Path aliases: `@components`, `@pages`, `@styles`, `@images`, `@downloadableContent`
- Modal-heavy pages use React.lazy + Suspense for code splitting
