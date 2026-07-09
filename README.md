# LP Audio — Loukas Panagiotidis, Sound Recordist

Playful comic-style portfolio with a Three.js cartoon boom operator (inspired by patrappa.wtf).
Vanilla JS + Three.js r165 via CDN import map — **no build step**.

## Preview locally
Just double-click `index.html`, or for best results run a tiny server:
```
cd lp-audio-website
python3 -m http.server 8000
```
then open http://localhost:8000

## Deploy (free)
- **Netlify**: drag the `lp-audio-website` folder onto app.netlify.com/drop
- **GitHub Pages**: push folder to a repo, enable Pages
- **Vercel**: `vercel` in the folder

## Editing content
- **Credits / featured work**: edit the `CREDITS` and `FEATURED` arrays at the top of `js/main.js`
- **Text/bio/kit**: edit `index.html` directly
- **Colors**: CSS variables at the top of `css/style.css`
- **Character**: `buildCharacter()` in `js/main.js` (colors in the `COLORS` object)

## Features
- 3D boom-op character: follows cursor (head + eyes), idle bob, boom sway, pulsing sound rings from the mic
- B/W mode toggle (nav circle button) — Patrappa homage
- Loading animation, marquee, filterable credits, animated counters, scroll reveals
- Respects `prefers-reduced-motion`; static fallback if WebGL unavailable
