# Global Forge Consulting — Website

## Tech stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Customize
- Update brand text: `components/site-data.ts`
- Replace logo:
  - Put your logo at `public/brand/logo.svg` (or png)
  - Update `components/Logo.tsx` to use it
- Colors:
  - Edit `tailwind.config.ts` under `theme.extend.colors.brand`

## Deploy
- Vercel (recommended): import repo and deploy
- Or build locally:
```bash
npm run build
npm start
```
