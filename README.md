# Crisis Management Wrapped 2025 — Anjali Edition

Front-end–only, birthday-wrapped microsite built with **Next.js (App Router) + TypeScript + Tailwind + Framer Motion**. Everything runs locally, uses placeholder data/photos, and has zero tracking or auth.

## Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000
```

If you prefer, swap `npm` for `pnpm` or `yarn`. This repo is frontend-only—no backend, no analytics.

## Swap in real content

1. **Photos**  
   - Replace the placeholder SVGs in `public/photos/` with real JPG/PNG files of the three of you.  
   - Keep the same filenames or update the paths in `data/wrappedData.ts`.
2. **Text & stats**  
   - Edit `data/wrappedData.ts` for vibe meters, iconic moments, superlatives, and time/energy beats.  
   - The tone should stay loving, silly, and non-roasty.
3. **Love letter**  
   - Replace `public/letters/love-letter.txt` with the real note from Joy & Socrates. The site fetches this file directly—no builds or uploads required.
4. **Hero / copy tweaks**  
   - Most text lives directly in the components inside `components/`. Everything is TypeScript + JSX; edit freely.
5. **Downloadable card**  
   - The finale section uses `html-to-image` to export a PNG locally. Customize the content inside `components/BirthdayFinale.tsx`.

## Design notes

- Dark-mode base with warm gradients (pink/purple/orange/gold), big friendly type, soft glassmorphism, and floating sparkles.  
- Respectful of reduced motion: animations pause/limit if the OS prefers reduced motion.  
- Keyboard friendly and readable text sizes.

## Easter eggs

- Click the floating heart (bottom-right) for confetti.  
- Type `CRISIS` anywhere on the page to trigger sparkles.  
- Hover photos to reveal captions.

## Data model (placeholder)

- `vibeStats`: friendly meters (not rankings).  
- `photos`: polaroid-style gallery data (src, alt, caption).  
- `iconicMoments`: Wrapped-style carousel items with quotes.  
- `superlatives`: soft, everyone-wins cards.  
- `timeEnergy`: cozy time windows and notes.

## Deployment (optional)

- Static-friendly: run `npm run build` then host on Vercel/Netlify/any static host.  
- No environment variables needed.  
- All assets are local and can stay that way.

## What’s inside

- `app/` — App Router entry + layout, global styles.  
- `components/` — Section components (hero, photos, vibes, moments, superlatives, time/energy, matchmaking nod, love letter, finale, easter eggs).  
- `data/wrappedData.ts` — Placeholder content to replace (vibes, moments, superlatives, time windows, chat receipts).
- `public/photos` — Swap with real images.  
- `public/letters/love-letter.txt` — Replace with the real note.

Enjoy, and happy birthday Anjali! 🎂💕

