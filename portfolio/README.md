# Lyndsi Williams – Portfolio

Personal portfolio built with React + TypeScript, styled with MUI and custom CSS, and bundled with Vite.

## Tech
- React 18, TypeScript 5, React Router 7
- Vite 5 (dev server + build)
- MUI 5, Emotion
- Image optimization via vite-plugin-image-optimizer

## Prereqs
- Node 22.x
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
- `npm run lint` – run ESLint
- `npm run format` – check code formatting with Prettier
- `npm run format:write` – auto-format code with Prettier

## Project Structure
- `src/` React app
- `public/` static assets (manifest, icons)
- `index.html` Vite entry

## Notes
- Path aliases: `@components`, `@pages`, `@styles`, `@images`, `@downloadableContent`
- Modal-heavy pages use React.lazy + Suspense for code splitting
- Pre-commit hooks via Husky run lint + build checks
- Images optimized at build time (~75% compression)
