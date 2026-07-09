# LP Audio — Website Plan
Sound recordist portfolio for **Loukas Panagiotidis (AMPS, MSc)** — playful comic style inspired by patrappa.wtf, with a Three.js boom-operator character.

## 1. Research findings

### What the best sound recordist sites have (from ScreenSkills guidance + top working sites like jonocary.com)
1. **Instant clarity** — name, role ("Sound Mixer / PSC Sound Recordist"), location, availability, above the fold.
2. **Credits list** — the #1 hiring signal. Recent first, with production type (Feature / TV / Doc / Commercial), company, broadcaster.
3. **Kit list** — producers check this before calling. Recorders, wireless, lavs, booms, timecode, IEM/comms.
4. **Showreel / portfolio links** — Vimeo, SoundCloud, Linktree.
5. **About / bio** — short, personable, states affiliations (AMPS), qualifications (MSc), driving licence, travel readiness.
6. **Services** — location sound, post, sound design/ADR, Atmos, podcast, game audio.
7. **Frictionless contact** — tel: and mailto: links visible everywhere, CV download.

### Patrappa reference (awwwards) — what to borrow
- Playful comic/illustration aesthetic, bold flat colors, chunky typography.
- Character as the hero of the page (ours: a boom operator, left side of hero).
- Loading animation intro.
- Black & white mode transition (fun toggle).
- Built with WebGL/React — we replicate the *feel* with vanilla Three.js.

### 2026 Three.js best practice
- One strong idea executed cleanly, not stacked effects.
- Performance budget: clamp pixelRatio ≤ 2, pause rendering off-screen/hidden tab, respect `prefers-reduced-motion`, no heavy model downloads (character from primitives ≈ 0 KB assets).

## 2. Stack decision
**Vanilla JS + Three.js (ES modules via CDN import map). No build step.**
- Deploys anywhere static (Netlify / GitHub Pages / Vercel) by dragging a folder.
- No npm/toolchain to maintain; Loukas or you can edit text directly.
- Three.js pinned to a specific version (r165) to avoid CDN breaking changes.

## 3. Site structure (one page, anchored nav)
1. **Loader** — quick "LP AUDIO" bounce, then reveal.
2. **Hero** — 3D character (cartoon boom op: cap, headphones, beard, sound bag, boom mic with windshield) on the left; name, title, CTA on the right. Character head/eyes track the cursor; sound rings pulse from the mic; idle bob.
3. **Marquee strip** — LOCATION SOUND • BOOM OP • DOLBY ATMOS • TIMECODE SYNC…
4. **About** — bio, AMPS/MSc badges, portfolio links (Linktree, Vimeo, SoundCloud).
5. **Selected work** — 8 highlight cards (Emmerdale/ITV, Million Dollar Listing UAE/Amazon, SoccerAid 2026/EA-UNICEF, 'Again'/Cannes, EE × Google Pixel, Film4 EPK…).
6. **Full credits** — complete chronological list from CV, filterable by type.
7. **Services** — 6 cards from CV skills.
8. **Kit list** — from CV equipment section.
9. **Education & certs** — MSc, BA First-Class, Avid, Dante, LLCM.
10. **Contact** — email, phone, socials.
Plus: sticky nav, B/W mode toggle, footer.

## 4. Bug-avoidance decisions (made up front)
- **Pinned CDN versions + import map** → no "latest" breakage.
- **Character from primitives + MeshToonMaterial + outline hulls** → no GLTF loading failures, no CORS, no 404s.
- **Canvas in a sized container, ResizeObserver** → no stretched/blurry canvas bugs.
- **All CV data in one JS array** → credits rendered from data, single source of truth, easy edits.
- **Graceful degradation**: if WebGL unavailable → static illustrated fallback; `prefers-reduced-motion` → animations off.
- **B/W mode via CSS variables + filter** (affects canvas too) → one mechanism, no double theming.
- **No localStorage dependency**, works from `file://` for previewing.

## 5. Verification
Syntax-check JS, review render loop for leaks (ring geometries disposed), open in browser and check console + responsive layout.
