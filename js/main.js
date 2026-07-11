/* =========================================================
   LP AUDIO — Loukas Panagiotidis, Sound Recordist
   Vanilla JS + Three.js (r165, pinned via import map)
   ========================================================= */
import * as THREE from 'three';

/* ---------------------------------------------------------
   1. DATA — single source of truth (edit credits here)
--------------------------------------------------------- */
const CREDITS = [
  { t: "'Coconuts'", type: 'Feature Film', co: 'Palm Tree Worldwide', date: '06/2026 –' },
  { t: "'Night of the Screaming Terror'", type: 'Feature Film', co: 'JW Films', date: '04/2026 –' },
  { t: 'SoccerAid 2026 × EA Sports — Press EPK', type: 'Other', co: 'UNICEF · Hifen Studios', date: '04–05/2026' },
  { t: "'Pax English'", type: 'Documentary', co: 'RTP2 Channel · 7 Media', date: '03–04/2026' },
  { t: "'Again' — Cannes Festival", type: 'Short Film', co: 'Aqua Corvus', date: '03–04/2026' },
  { t: 'AstraZeneca — Lynparza', type: 'Commercial', co: 'Inspired Films', date: '02–03/2026' },
  { t: 'Anthony Nolan Campaign', type: 'Commercial', co: 'Raw London', date: '01–02/2026' },
  { t: 'RSPCA — Animal Welfare', type: 'Commercial', co: 'Inspired Films', date: '12/2025–01/2026' },
  { t: "'The Dreamer'", type: 'Feature Film', co: 'Palm Tree Worldwide', date: '11/2025–01/2026' },
  { t: 'Secure24 — CCTV Systems', type: 'Commercial', co: 'Title Productions', date: '10–11/2025' },
  { t: 'TikTok Live — Music Creator Showcase', type: 'Other', co: 'Hullabaloo', date: '10–11/2025' },
  { t: "'Down The Wooden Hill'", type: 'Feature Film', co: 'Teeny Weeny Films', date: '09–10/2025' },
  { t: 'Sam Ryder — Wembley Promo', type: 'Commercial', co: 'Lone Wolves Creative', date: '08–09/2025' },
  { t: "'Sentinel'", type: 'Feature Film', co: 'Hundy Gilbert Media', date: '08–09/2025' },
  { t: "'Million Dollar Listing UAE'", type: 'TV', co: 'Navigation Films · Amazon', date: '07–08/2025' },
  { t: "'Invite Only' — YouTube Series", type: 'TV', co: 'GRM Daily', date: '07–08/2025' },
  { t: "'The Soldier and The Sailor'", type: 'Feature Film', co: 'Palm Tree Worldwide', date: '06–07/2025' },
  { t: "'Counterflow'", type: 'Short Film', co: 'Red Films', date: '03–04/2025' },
  { t: 'Sweat Stash Clothing', type: 'Commercial', co: 'Middle-Kid Productions', date: '03–04/2025' },
  { t: "EE × Google Pixel — N. Ireland Women's Team", type: 'Commercial', co: 'Continuum Films', date: '01–02/2025' },
  { t: "'The Moon Is a Hologram'", type: 'Feature Film', co: 'Après Vague Productions', date: '09/2024–02/2025' },
  { t: "'Measure of Silence'", type: 'Documentary', co: 'Filmontary', date: '12/2024–01/2025' },
  { t: 'Craft of Movement — Echo', type: 'Commercial', co: 'Fresh Base Productions', date: '12/2024–01/2025' },
  { t: 'Action Medical Research — Champions of 2024', type: 'Documentary', co: 'Inspired Films', date: '11–12/2024' },
  { t: "'The Levels' — TV Pilot", type: 'TV', co: 'Amdani Productions', date: '11–12/2024' },
  { t: 'The Whiskey Investment VCL — Podcast', type: 'Other', co: 'VCL Vintners', date: '10–11/2024' },
  { t: "'Extra Geography' — EPK for Film4", type: 'Other', co: 'Brock Media', date: '10–11/2024' },
  { t: "'World War II: Endgame'", type: 'Documentary', co: 'Black Swan Productions', date: '09–10/2024' },
  { t: 'Bénir Clothing', type: 'Commercial', co: 'BlueBoredom LTD', date: '09–10/2024' },
  { t: 'SharkNinja — Black Friday', type: 'Commercial', co: 'Studio Danvers', date: '09–10/2024' },
  { t: "'One Cask at a Time'", type: 'Documentary', co: 'VCL Vintners', date: '07–09/2024' },
  { t: "'Double Standards'", type: 'Short Film', co: 'Green Bee Films', date: '07–08/2024' },
  { t: "'Room Craft Stories'", type: 'Documentary', co: 'Marina Bay Sands', date: '06–07/2024' },
  { t: "'Dark Skin Bruises Differently'", type: 'Short Film', co: 'Blank Page Pictures · dir. Susan Wokoma', date: '05–06/2024' },
  { t: 'Huel — Hot Savoury Pouches', type: 'Commercial', co: 'Diode Films', date: '05–06/2024' },
  { t: "'Death To Ponty'", type: 'Short Film', co: 'Blackbox Multimedia', date: '04–05/2024' },
  { t: "'Regal'", type: 'Short Film', co: 'Strange Interfade Films', date: '04–05/2024' },
  { t: "'The Beast of Riverside Hollow'", type: 'Feature Film', co: 'John Williams Films', date: '03–04/2024' },
  { t: "'The Moddey Dhoo'", type: 'Short Film', co: 'Great Guns', date: '03–04/2024' },
  { t: "'Emmerdale'", type: 'TV', co: 'ITV', date: '09/2023–02/2024' },
];

const FEATURED = [
  { t: 'Emmerdale', type: 'TV', co: 'ITV', note: 'Six months on the sound team of the ITV flagship series.' },
  { t: 'Million Dollar Listing UAE', type: 'TV', co: 'Amazon · Navigation Films', note: 'International TV series for Prime Video.' },
  { t: 'SoccerAid 2026', type: 'Other', co: 'UNICEF × EA Sports', note: 'Press EPK with the biggest names in football.' },
  { t: "'Again'", type: 'Short Film', co: 'Aqua Corvus', note: 'Short film selected for the Cannes Festival.' },
  { t: 'EE × Google Pixel', type: 'Commercial', co: 'Continuum Films', note: "N. Ireland Women's Team national campaign." },
  { t: "'Extra Geography'", type: 'Other', co: 'Film4 · Brock Media', note: 'EPK for a Film4 production.' },
  { t: "'The Dreamer'", type: 'Feature Film', co: 'Palm Tree Worldwide', note: 'One of 10+ features recorded start to finish.' },
  { t: 'RSPCA', type: 'Commercial', co: 'Inspired Films', note: 'National TV commercial for the animal welfare charity.' },
];

const TYPE_CLASS = {
  'Feature Film': 'type-feature',
  'TV': 'type-tv',
  'Documentary': 'type-doc',
  'Commercial': 'type-commercial',
  'Short Film': 'type-short',
  'Other': 'type-other',
};

/* ---------------------------------------------------------
   2. THREE.JS — cartoon boom operator
--------------------------------------------------------- */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const wrap = document.getElementById('canvasWrap');
const canvas = document.getElementById('scene');

const COLORS = {
  skin: 0xf0b489,
  beard: 0x3d2b1f,
  jacket: 0x2b2b33,
  sleeve: 0x232329,
  trousers: 0x3a3f4a,
  boots: 0x17130f,
  cap: 0xff4d2e,
  headphones: 0x17130f,
  earpad: 0x2e5bff,
  bag: 0x2e5bff,
  bagDark: 0x1d3db8,
  pole: 0x8a8f98,
  windshield: 0xb9b3a7,
  hands: 0xf0b489,
  ring: 0xff4d2e,
};

let renderer, scene, camera, character, headGroup, boomRig, rings = [], pupils = [];
let heroVisible = true;
const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

function makeToonMaterial(color) {
  const gradientMap = new THREE.DataTexture(new Uint8Array([90, 170, 255]), 3, 1, THREE.RedFormat);
  gradientMap.minFilter = THREE.NearestFilter;
  gradientMap.magFilter = THREE.NearestFilter;
  gradientMap.needsUpdate = true;
  return new THREE.MeshToonMaterial({ color, gradientMap });
}
const mats = {};
function mat(name) {
  if (!mats[name]) mats[name] = makeToonMaterial(COLORS[name]);
  return mats[name];
}
const outlineMat = new THREE.MeshBasicMaterial({ color: 0x17130f, side: THREE.BackSide });

function addOutline(mesh, thickness = 1.05) {
  const outline = new THREE.Mesh(mesh.geometry, outlineMat);
  outline.scale.setScalar(thickness);
  mesh.add(outline);
  return mesh;
}

/** Cylinder connecting two points (for limbs & pole). */
function limb(from, to, radius, material, outline = true) {
  const dir = new THREE.Vector3().subVectors(to, from);
  const len = dir.length();
  const geo = new THREE.CylinderGeometry(radius, radius, len, 14);
  const m = new THREE.Mesh(geo, material);
  m.position.copy(from).add(to).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  if (outline) addOutline(m, 1 + 0.06 / Math.max(radius * 4, 0.4));
  return m;
}

function sphere(r, material, x = 0, y = 0, z = 0, outline = true) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 18), material);
  m.position.set(x, y, z);
  if (outline) addOutline(m);
  return m;
}

function box(w, h, d, material, x = 0, y = 0, z = 0, outline = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  if (outline) addOutline(m);
  return m;
}

function buildCharacter() {
  const g = new THREE.Group();
  const V = (x, y, z) => new THREE.Vector3(x, y, z);

  /* --- legs & boots --- */
  g.add(limb(V(-0.28, 0.12, 0), V(-0.28, 1.05, 0), 0.16, mat('trousers')));
  g.add(limb(V(0.28, 0.12, 0), V(0.28, 1.05, 0), 0.16, mat('trousers')));
  g.add(box(0.34, 0.22, 0.52, mat('boots'), -0.28, 0.11, 0.06));
  g.add(box(0.34, 0.22, 0.52, mat('boots'), 0.28, 0.11, 0.06));

  /* --- torso (jacket) --- */
  const torso = box(1.04, 1.15, 0.62, mat('jacket'), 0, 1.62, 0);
  g.add(torso);
  // collar
  g.add(box(0.7, 0.14, 0.5, mat('sleeve'), 0, 2.22, 0.02));

  /* --- sound bag on chest --- */
  const bag = box(0.72, 0.5, 0.34, mat('bag'), 0, 1.52, 0.48);
  g.add(bag);
  // bag face + knobs & faders (the 633!)
  g.add(box(0.6, 0.36, 0.05, mat('bagDark'), 0, 1.52, 0.67, false));
  for (let i = 0; i < 4; i++) {
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.05, 10), mat('windshield'));
    knob.rotation.x = Math.PI / 2;
    knob.position.set(-0.21 + i * 0.14, 1.6, 0.71);
    g.add(knob);
  }
  for (let i = 0; i < 4; i++) {
    g.add(box(0.02, 0.12, 0.02, mat('cap'), -0.21 + i * 0.14, 1.42, 0.71, false));
  }
  // bag strap
  g.add(limb(V(-0.34, 1.7, 0.5), V(-0.1, 2.25, -0.1), 0.045, mat('boots'), false));
  g.add(limb(V(0.34, 1.7, 0.5), V(0.1, 2.25, -0.1), 0.045, mat('boots'), false));

  /* --- head group (pivots at neck) --- */
  headGroup = new THREE.Group();
  headGroup.position.set(0, 2.62, 0);
  const head = sphere(0.42, mat('skin'), 0, 0, 0);
  headGroup.add(head);
  // beard — flattened sphere on lower front
  const beard = sphere(0.34, mat('beard'), 0, -0.16, 0.16, false);
  beard.scale.set(1.05, 0.85, 0.9);
  headGroup.add(beard);
  // nose
  headGroup.add(sphere(0.09, mat('skin'), 0, 0.02, 0.42, false));
  // eyes
  [-0.16, 0.16].forEach((x) => {
    const eye = sphere(0.085, new THREE.MeshBasicMaterial({ color: 0xffffff }), x, 0.12, 0.36, false);
    const pupil = sphere(0.04, new THREE.MeshBasicMaterial({ color: 0x17130f }), 0, 0, 0.06, false);
    eye.add(pupil);
    pupils.push(pupil);
    headGroup.add(eye);
  });
  // cap
  const capTop = new THREE.Mesh(new THREE.SphereGeometry(0.43, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2.6), mat('cap'));
  capTop.position.y = 0.13;
  headGroup.add(addOutline(capTop, 1.04));
  const brim = box(0.5, 0.05, 0.3, mat('cap'), 0, 0.3, 0.45);
  brim.rotation.x = 0.12;
  headGroup.add(brim);
  // headphones — band + ear cups
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.045, 10, 24, Math.PI), mat('headphones'));
  band.position.y = 0.06;
  band.rotation.z = Math.PI; // arc over the top
  headGroup.add(band);
  [-0.44, 0.44].forEach((x) => {
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.1, 16), mat('earpad'));
    cup.rotation.z = Math.PI / 2;
    cup.position.set(x, 0, 0);
    headGroup.add(addOutline(cup, 1.08));
  });
  g.add(headGroup);

  /* --- boom rig: pole + windshield + arms + hands (sways as one) --- */
  boomRig = new THREE.Group();
  const poleStart = V(-0.55, 1.95, 0.3);
  const poleEnd = V(0.3, 3.75, 0.15);
  boomRig.add(limb(poleStart, poleEnd, 0.035, mat('pole'), false));
  const poleDir = new THREE.Vector3().subVectors(poleEnd, poleStart).normalize();
  // hands gripping the pole
  const lerp = (a, b, t) => new THREE.Vector3().lerpVectors(a, b, t);
  const handL = lerp(poleStart, poleEnd, 0.08);
  const handR = lerp(poleStart, poleEnd, 0.3);
  boomRig.add(sphere(0.13, mat('hands'), handL.x, handL.y, handL.z));
  boomRig.add(sphere(0.13, mat('hands'), handR.x, handR.y, handR.z));
  // arms from shoulders to hands
  boomRig.add(limb(V(-0.52, 2.05, 0), handL, 0.13, mat('sleeve')));
  boomRig.add(limb(V(0.52, 2.05, 0), handR, 0.13, mat('sleeve')));
  g.add(boomRig);

  /* --- sound rings pulsing from the pole tip --- */
  const micTip = poleEnd.clone().add(poleDir.clone().multiplyScalar(0.1));
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.28, 0.025, 8, 32),
      new THREE.MeshBasicMaterial({ color: COLORS.ring, transparent: true, opacity: 0 })
    );
    ring.position.copy(micTip);
    ring.userData.offset = i / 3;
    rings.push(ring);
    g.add(ring);
  }

  /* --- ground shadow --- */
  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.95, 32),
    new THREE.MeshBasicMaterial({ color: 0x17130f, transparent: true, opacity: 0.14 })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.01;
  shadow.scale.set(1.25, 1, 1);
  g.add(shadow);

  return g;
}

function initThree() {
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch (e) {
    document.getElementById('canvasFallback').hidden = false;
    canvas.hidden = true;
    return false;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
  camera.position.set(0, 2.2, 7.9);
  camera.lookAt(0, 1.95, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 1.6);
  key.position.set(3, 6, 5);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x2e5bff, 0.5);
  rim.position.set(-4, 3, -3);
  scene.add(rim);

  character = buildCharacter();
  character.position.y = -0.15;
  scene.add(character);

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = wrap;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(wrap);
  resize();
  return true;
}

function animate(time) {
  requestAnimationFrame(animate);
  if (!heroVisible || document.hidden) return;

  const t = time * 0.001;

  // ease pointer
  pointer.x += (pointer.tx - pointer.x) * 0.06;
  pointer.y += (pointer.ty - pointer.y) * 0.06;

  // whole-body turn + idle bob
  character.rotation.y = pointer.x * 0.32;
  character.position.y = -0.15 + Math.sin(t * 1.4) * 0.045;

  // head tracks cursor
  headGroup.rotation.y = pointer.x * 0.55;
  headGroup.rotation.x = -pointer.y * 0.3;
  pupils.forEach((p) => {
    p.position.x = pointer.x * 0.03;
    p.position.y = pointer.y * 0.02;
  });

  // boom sway
  boomRig.rotation.z = Math.sin(t * 0.9) * 0.035;
  boomRig.rotation.x = Math.cos(t * 0.7) * 0.02;

  // sound rings
  rings.forEach((ring) => {
    const p = (t * 0.35 + ring.userData.offset) % 1;
    const s = 0.6 + p * 3.2;
    ring.scale.setScalar(s);
    ring.material.opacity = (1 - p) * 0.55;
  });

  renderer.render(scene, camera);
}

if (initThree()) {
  renderer.render(scene, camera); // initial frame — shows even in background tabs
  if (!reducedMotion) {
    window.addEventListener('pointermove', (e) => {
      pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
    }, { passive: true });
    new IntersectionObserver((entries) => {
      heroVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 }).observe(wrap);
    requestAnimationFrame(animate);
  }
}

/* ---------------------------------------------------------
   3. PAGE LOGIC
--------------------------------------------------------- */

/* Loader */
const loader = document.getElementById('loader');
function dismissLoader() {
  loader.classList.add('is-done');
  setTimeout(() => loader.remove(), 800);
}
window.addEventListener('load', () => setTimeout(dismissLoader, 500));
setTimeout(dismissLoader, 2500); // fallback if load never fires

/* B/W mode toggle (Patrappa homage) */
document.getElementById('bwToggle').addEventListener('click', () => {
  document.body.classList.toggle('bw-mode');
});

/* Marquee — duplicate for seamless loop */
const track = document.getElementById('marqueeTrack');
track.innerHTML += track.innerHTML;

/* Featured work cards */
const workGrid = document.getElementById('workGrid');
workGrid.innerHTML = FEATURED.map((w) => `
  <article class="work-card reveal">
    <span class="work-card-type ${TYPE_CLASS[w.type]}">${w.type === 'Other' ? 'Special' : w.type}</span>
    <h3>${w.t}</h3>
    <div class="work-card-co">${w.co}</div>
    <p class="work-card-note">${w.note}</p>
  </article>`).join('');

/* Full credits list */
const creditsList = document.getElementById('creditsList');
creditsList.innerHTML = CREDITS.map((c) => `
  <li class="credit-row" data-type="${c.type}">
    <span class="credit-title">${c.t}</span>
    <span class="credit-type">${c.type}</span>
    <span class="credit-co">${c.co}</span>
    <span class="credit-date">${c.date}</span>
  </li>`).join('');

/* Credit filters */
document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('is-active'));
  btn.classList.add('is-active');
  const f = btn.dataset.filter;
  document.querySelectorAll('.credit-row').forEach((row) => {
    row.classList.toggle('is-hidden', f !== 'all' && row.dataset.type !== f);
  });
});

/* Reveal on scroll */
const revealTargets = document.querySelectorAll('.work-card, .service-card, .kit-card, .about-stats, .section-title');
revealTargets.forEach((el) => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealTargets.forEach((el) => revealObserver.observe(el));

/* Blend-mode cursor (Glenn Catteeuw reference) */
const cursorEl = document.getElementById('cursor');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
if (finePointer && !reducedMotion) {
  document.body.classList.add('has-cursor');
  const cur = { x: innerWidth / 2, y: innerHeight / 2, tx: innerWidth / 2, ty: innerHeight / 2 };
  window.addEventListener('pointermove', (e) => { cur.tx = e.clientX; cur.ty = e.clientY; }, { passive: true });
  window.addEventListener('pointerdown', () => cursorEl.classList.add('is-pressed'));
  window.addEventListener('pointerup', () => cursorEl.classList.remove('is-pressed'));
  document.addEventListener('mouseover', (e) => {
    cursorEl.classList.toggle('is-hovering', !!e.target.closest('a, button, .work-card, .credit-row'));
  });
  (function cursorLoop() {
    cur.x += (cur.tx - cur.x) * 0.2;
    cur.y += (cur.ty - cur.y) * 0.2;
    cursorEl.style.transform = `translate(${cur.x}px, ${cur.y}px) translate(-50%, -50%)`;
    requestAnimationFrame(cursorLoop);
  })();
} else {
  cursorEl.remove();
}

/* Animated counters */
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    counterObserver.unobserve(el);
    const target = parseInt(el.dataset.count, 10);
    const start = performance.now();
    const dur = 1200;
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  });
}, { threshold: 0.5 });
counters.forEach((el) => counterObserver.observe(el));
