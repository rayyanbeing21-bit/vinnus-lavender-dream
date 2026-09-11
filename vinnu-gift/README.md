# For Vinnu — Private Digital Gift

A soft, intimate website made as a personal gift. Not a template.

## How to run

```bash
cd vinnu-gift
npm install
npm install framer-motion
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where to add Vinnu's photos

1. Put your images in `public/photos/`
2. Name them `photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`, `photo-4.jpg` (or `.webp`)
3. Open `src/components/Memories.tsx` and update each `src` field from `.svg` to `.jpg` / `.webp`
4. Optionally edit the captions next to each photo

Recommended: 4:5 aspect ratio, under ~400KB each.

## Where to change the messages

| Section | File | What to edit |
|---------|------|--------------|
| Landing | `src/components/Hero.tsx` | "Hey, you." / "I made you a little something." |
| Note | `src/components/LittleNote.tsx` | The `lines` array |
| Reminders | `src/components/Reminders.tsx` | The `cards` array |
| Star messages | `src/components/Universe.tsx` | The `messages` array |
| Letter | `src/components/Letter.tsx` | The `letterBody` string |
| Mood replies | `src/components/Mood.tsx` | The `moods` array |
| Surprise | `src/components/Surprise.tsx` | The staged text lines |
| Final | `src/components/FinalScreen.tsx` | Closing lines |

## Where to add background music

1. Place an mp3 at `public/audio/background.mp3`
2. The music button (bottom-right ♫) is already wired
3. Default is **OFF** — she has to tap to start
4. Logic lives in `src/components/MusicControl.tsx`

## Where to change colors

Primary palette is in `src/app/globals.css` under `:root`:

```css
--bg-deep: #0d0817;
--bg-dark: #160d25;
--violet-primary: #6d4aff;
--violet-soft: #9b7bff;
--lavender: #c9b8ff;
--lavender-soft: #e9e1ff;
```

Most components also use these hex values directly for fine control.

## How to deploy

**Vercel (easiest):**

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com](https://vercel.com).

**Other options:** Netlify, Cloudflare Pages — any host that supports Next.js.

After deploy, share the private link only with her.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Framer Motion
- Google fonts: Manrope + Cormorant Garamond

## Notes

- Mobile-first
- `prefers-reduced-motion` respected
- No autoplay audio
- `robots: noindex` so it stays private from search engines
