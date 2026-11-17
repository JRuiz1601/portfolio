// Variante "suave": misma lógica de navegación, galerías, lightbox y pitch que ../app.js,
// con renderizado narrativo por capítulos. Datos: ../content.js · Tono: story.js · Logos: logos.js

// ---------- i18n ----------
let LANG = 'es';
try { LANG = localStorage.getItem('lang') || 'es'; } catch (e) {}

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function tField(field) {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  return field[LANG] ?? field.es ?? '';
}

function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o || {})[k], obj);
}

// Los assets viven en la raíz del sitio; esta variante está una carpeta abajo.
const asset = p => (p && !/^(https?:)?\/\//.test(p) && !p.startsWith('../')) ? '../' + p : p;

function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const path = el.getAttribute('data-i18n');
    const val = getPath(STORY, path) ?? getPath(CONTENT, path);
    el.textContent = tField(val);
  });
  document.querySelectorAll('[data-hv]').forEach(a => a.setAttribute('href', asset(tField(CONTENT.hvUrl))));
  document.documentElement.lang = LANG;
  document.title = tField(CONTENT.meta.title);
}

// ---------- logos e iconos ----------
function logoSvg(slug, cls = 'logo') {
  const l = LOGOS[slug];
  if (!l) return '';
  return `<svg class="${cls}" viewBox="0 0 24 24" role="img" aria-label="${l.t}" style="--brand:${l.c}"><path d="${l.d}" fill="currentColor"/></svg>`;
}

function slugFor(item) {
  if (typeof item === 'string') return LOGO_FOR[item];
  return LOGO_FOR[item.es] || LOGO_FOR[item.en];
}

function orgBadge(key, cls = 'org-badge') {
  const o = key && STORY.orgs[key];
  if (!o) return '';
  return `<span class="${cls} org-${key}"><img src="${o.img}" alt="${o.nombre}" loading="lazy"></span>`;
}

const ICONS = {
  receipt: '<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  chart: '<circle cx="7" cy="15" r="2.4"/><circle cx="16.5" cy="8" r="2.4"/><circle cx="17" cy="17" r="1.8"/><circle cx="9" cy="6.5" r="1.6"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  cap: '<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0z"/><path d="M12 18v4"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  nodes: '<circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="12" cy="19" r="2.5"/><path d="M7 7.5l3.5 9M17 7.5l-3.5 9M7.5 6h9"/>',
  server: '<rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
  cube: '<path d="M21 16V8l-9-5-9 5v8l9 5z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
  badge: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8"/>'
};
const icon = (name, cls = 'ico') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

// ---------- section renderers ----------
function renderChips(list) {
  return `<div class="chip-row">${list.map(s => {
    const slug = slugFor(s);
    return `<span class="chip${slug ? ' has-logo' : ''}">${slug ? logoSvg(slug, 'chip-logo') : ''}${tField(s)}</span>`;
  }).join('')}</div>`;
}

function chapterHead(key) {
  const c = STORY.capitulos[key];
  return `
    <header class="chapter-head reveal">
      <span class="chapter-kicker">${tField(c.kicker)}</span>
      <h2 class="chapter-title">${tField(c.titulo).split(' ').map((w, i) => `<span class="cw" style="--i:${i}">${w}</span>`).join(' ')}</h2>
      <p class="chapter-intro">${tField(c.intro)}</p>
    </header>`;
}

function renderExperiencia() {
  const c = CONTENT.experiencia;
  const jobs = c.trabajos.map((job, i) => `
    <article class="job reveal">
      <div class="job-rail">${orgBadge(STORY.trabajosOrg[i], 'job-logo') || '<span class="job-dot"></span>'}</div>
      <div class="job-body">
        <div class="job-when">${tField(job.periodo)} · ${tField(job.ubicacion)}</div>
        <h3 class="job-title">${tField(job.cargo)} <span class="job-at">${LANG === 'en' ? 'at' : 'en'} ${tField(job.empresa)}</span></h3>
        ${STORY.trabajosLead[i] ? `<p class="job-lead">${tField(STORY.trabajosLead[i])}</p>` : ''}
        <details class="job-more">
          <summary><span>${tField(STORY.comoLoHice)}</span><span class="job-more-icon" aria-hidden="true"></span></summary>
          <ul class="job-logros">${job.logros.map(l => `<li>${tField(l)}</li>`).join('')}</ul>
        </details>
        ${renderChips(job.stack)}
      </div>
    </article>
  `).join('');

  const edu = c.educacion;
  const logroIcon = ['trophy', 'badge'];
  const logros = c.logros.map((l, i) => `
    <div class="aside-item reveal" style="--i:${i + 1}">
      <span class="aside-icon">${icon(logroIcon[i] || 'badge')}</span>
      <div class="aside-title">${tField(l.titulo)}</div>
      <div class="aside-detail">${tField(l.detalle)}</div>
      <div class="aside-when">${l.año}</div>
    </div>
  `).join('');

  return `
    ${chapterHead('experiencia')}
    <div class="timeline" data-fx="through"><span class="timeline-fill" aria-hidden="true"></span>${jobs}</div>
    <div class="along reveal">
      <div class="along-title">${tField(STORY.tambien)}</div>
      <div class="along-grid">
        <div class="aside-item reveal" style="--i:0">
          ${orgBadge('icesi', 'aside-icon aside-org')}
          <div class="aside-title">${tField(edu.programa)}</div>
          <div class="aside-detail">${edu.institucion}</div>
          <div class="aside-when">${tField(edu.periodo)}</div>
        </div>
        ${logros}
      </div>
    </div>
  `;
}

function renderGallery(p, pIdx) {
  if (!p.media || !p.media.length) return '';
  const c = CONTENT.proyectos;
  const slides = p.media.map((m, i) => `
    <button class="slide" type="button" data-project="${pIdx}" data-media="${i}" aria-label="${tField(c.ampliar)}: ${tField(m.alt)}"
      style="${m.bg ? `background:${m.bg};` : ''}">
      <img src="${asset(m.src)}" alt="${tField(m.alt)}" loading="lazy" decoding="async" class="${m.fit === 'contain' ? 'fit-contain' : ''}">
    </button>
  `).join('');
  const multi = p.media.length > 1;
  return `
    <div class="gallery" data-gallery>
      <div class="gallery-stage">
        <div class="gallery-track">${slides}</div>
        <div class="gallery-caption"><span class="gallery-caption-text">${tField(p.media[0].alt)}</span>${multi ? `<span class="gallery-count">1/${p.media.length}</span>` : ''}</div>
        ${multi ? `
          <button class="gallery-arrow prev" type="button" aria-label="${tField(CONTENT.lightbox.anterior)}">‹</button>
          <button class="gallery-arrow next" type="button" aria-label="${tField(CONTENT.lightbox.siguiente)}">›</button>
          <div class="gallery-dots">${p.media.map((_, i) => `<span class="dot${i === 0 ? ' on' : ''}"></span>`).join('')}</div>
        ` : ''}
      </div>
      ${multi ? `<div class="gallery-thumbs">${p.media.map((m, i) => `
        <button class="thumb${i === 0 ? ' on' : ''}${m.fit === 'contain' ? ' fit-contain' : ''}" type="button" data-thumb="${i}" aria-label="${tField(m.alt)}"${m.bg ? ` style="background:${m.bg}"` : ''}>
          <img src="${asset(m.src)}" alt="" loading="lazy" decoding="async">
        </button>`).join('')}
      </div>` : ''}
    </div>`;
}

function renderLogoStage(slugs) {
  if (!slugs || !slugs.length) return '';
  return `
    <div class="logo-stage" aria-hidden="true">
      ${slugs.map((s, i) => `<span class="logo-orb" style="--i:${i}">${logoSvg(s, 'orb-logo')}<span class="orb-name">${LOGOS[s].t}</span></span>`).join('')}
    </div>`;
}

function renderProyectos() {
  const c = CONTENT.proyectos;
  const s = STORY.pasos;
  const stories = c.lista.map((p, idx) => {
    const hasMedia = p.media && p.media.length;
    const org = STORY.proyectosOrg[idx];
    const steps = [
      ['problema', p.problema],
      ['solucion', p.solucion],
      ...(p.analitica ? [['analitica', p.analitica]] : []),
      ['resultado', p.resultado]
    ];
    return `
    <article class="story reveal ${hasMedia ? 'has-media' : 'no-media'}" data-fx="enter">
      <div class="story-head">
        <span class="story-num">${String(idx + 1).padStart(2, '0')}</span>
        ${orgBadge(org, 'story-org')}
        <div class="story-meta">
          <span>${tField(p.contexto)}</span>
          <span class="story-dot">·</span>
          <span>${tField(p.periodo)}</span>
          <span class="story-status">${tField(p.estado)}</span>
        </div>
      </div>
      <h3 class="story-name">${tField(p.nombre)}</h3>
      <p class="story-pitch">${tField(p.pitch)}</p>
      ${hasMedia ? renderGallery(p, idx) : renderLogoStage(STORY.proyectosVisual[idx])}
      <ol class="steps steps-${steps.length}">
        ${steps.map(([k, v], i) => `
          <li class="step step-${k} reveal" style="--i:${i}">
            <span class="step-label"><span class="step-n">${i + 1}</span>${tField(s[k])}</span>
            <p>${tField(v)}</p>
          </li>`).join('')}
      </ol>
      <div class="story-foot">
        <div class="story-stack"><span class="story-stack-label">${tField(STORY.conQue)}</span>${renderChips(p.stack)}</div>
        ${(p.repo || p.demo) ? `<div class="story-links">
          ${p.repo ? `<a class="pill-link" href="https://${p.repo}" target="_blank" rel="noopener">${logoSvg('github', 'pill-logo')}${tField(c.verRepo)} ↗</a>` : ''}
          ${p.demo ? `<a class="pill-link" href="https://${p.demo}" target="_blank" rel="noopener">${icon('globe', 'pill-logo')}${p.demo} ↗</a>` : ''}
        </div>` : ''}
      </div>
    </article>`;
  }).join('');
  return `${chapterHead('proyectos')}<div class="stories">${stories}</div>`;
}

// Tecnologías sin logo de marca: un ícono de concepto según la palabra
function conceptIcon(name) {
  const n = name.toLowerCase();
  if (/sql|datos|data|model/.test(n)) return 'db';
  if (/api|integra/.test(n)) return 'plug';
  if (/agente|agent/.test(n)) return 'spark';
  if (/k-means|pca|forest/.test(n)) return 'chart';
  if (/distribu|patron|patrón|pattern/.test(n)) return 'nodes';
  if (/vps|despliegue|deploy/.test(n)) return 'server';
  return 'cube';
}

function renderStack() {
  const c = CONTENT.stack;
  const groups = c.categorias.map(cat => `
    <div class="stack-group reveal">
      <div class="stack-group-title">${tField(cat.nombre)}</div>
      <div class="tiles">
        ${cat.items.map((item, idx) => {
          const slug = slugFor(item);
          const name = tField(item);
          return `<div class="tile${slug ? '' : ' tile-text'} reveal" style="--i:${idx}">
            ${slug ? logoSvg(slug, 'tile-logo') : `<span class="tile-mono">${icon(conceptIcon(name))}</span>`}
            <span class="tile-name">${name}</span>
          </div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
  return `${chapterHead('stack')}<div class="stack-groups">${groups}</div>`;
}

function renderContacto() {
  const c = CONTENT.contacto;
  const l = c.labels;
  const h = STORY.hvCard;
  const otherLang = LANG === 'es' ? 'en' : 'es';
  let rowI = 0;
  const row = (mark, label, value, href, ext) => {
    const inner = `<span class="contact-mark">${mark}</span><span class="contact-text"><span class="contact-label">${label}</span><span class="contact-value">${value}</span></span>`;
    rowI++;
    return href
      ? `<a class="contact-row reveal" style="--i:${rowI}" href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''}>${inner}<span class="contact-arrow" aria-hidden="true">↗</span></a>`
      : `<div class="contact-row reveal" style="--i:${rowI}">${inner}</div>`;
  };
  return `
    ${chapterHead('contacto')}

    <a class="hv-hero reveal" data-fx="enter" href="${asset(tField(CONTENT.hvUrl))}" download data-hv>
      <span class="hv-hero-text">
        <span class="hv-hero-kicker">${tField(h.kicker)}</span>
        <span class="hv-hero-title">${tField(h.titulo)}</span>
        <span class="hv-hero-copy">${tField(h.texto)}</span>
        <span class="hv-hero-btn">
          <span class="hv-hero-btn-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/></svg></span>
          ${tField(h.boton)} <span class="hv-hero-lang">· ${tField(h.idioma)}</span>
        </span>
      </span>
      <span class="hv-hero-paper">
        <img src="${tField(h.preview)}" alt="${tField(h.alt)}" loading="lazy">
      </span>
    </a>
    <a class="hv-other reveal" href="${asset(CONTENT.hvUrl[otherLang])}" download>${tField(h.otro)} <span>${otherLang.toUpperCase()} ↓</span></a>

    <div class="contact-layout">
      <div class="contact-main reveal">
        <a class="contact-email" href="mailto:${c.email}">${logoSvg('gmail', 'email-logo')}<span>${c.email}</span></a>
        <div class="contact-grid">
          ${row(logoSvg('whatsapp', 'mark-logo'), 'WhatsApp · ' + tField(l.telefono), c.telefono, `https://wa.me/${c.telefono.replace(/\D/g, '')}`, true)}
          ${row(logoSvg('linkedin', 'mark-logo'), tField(l.linkedin), c.linkedin.replace('linkedin.com', ''), `https://${c.linkedin}`, true)}
          ${row(logoSvg('github', 'mark-logo'), tField(l.github), c.github.replace('github.com/', '@'), `https://${c.github}`, true)}
          ${row(logoSvg('youtube', 'mark-logo'), 'Pitch', tField(c.pitchLabel), c.pitchUrl, true).replace('<a class="contact-row', '<a data-open-pitch class="contact-row')}
          ${row(icon('pin', 'mark-ico'), tField(l.ciudad), c.ciudad)}
          ${row(icon('globe', 'mark-ico'), tField(l.idiomas), tField(c.idiomas))}
        </div>
      </div>
    </div>
  `;
}

const SECTION_RENDERERS = {
  experiencia: renderExperiencia,
  proyectos: renderProyectos,
  stack: renderStack,
  contacto: renderContacto
};

function renderSections(markRevealed) {
  Object.entries(SECTION_RENDERERS).forEach(([id, fn]) => {
    document.getElementById(id).innerHTML = fn();
  });
  setupReveal(markRevealed);
  setupGalleries();
  refreshScrollFx();
}

// Un solo logro destacado (Global Hack), en vez de la fila de cifras
function renderSignals() {
  const el = document.getElementById('signals');
  const l = CONTENT.experiencia.logros[0];
  const m = STORY.manifiesto;
  el.innerHTML = `
    <article class="highlight reveal" data-fx="enter">
      <span class="highlight-glow" aria-hidden="true"></span>
      <div class="highlight-side">
        <span class="highlight-trophy">${icon('trophy')}</span>
        <div class="highlight-num">3<sup>${LANG === 'en' ? 'rd' : '.er'}</sup></div>
        <div class="highlight-place">${tField(m.destacadoPuesto)}</div>
      </div>
      <div class="highlight-body">
        <span class="highlight-kicker">${tField(m.destacadoKicker)}</span>
        <h3 class="highlight-title">Global Hack 2025</h3>
        <p class="highlight-detail">${tField(l.detalle)}</p>
      </div>
    </article>`;
}

function renderMarquee() {
  const el = document.getElementById('marquee');
  if (!el) return;
  const set = STORY.franjaLogos.map(s => `<span class="mq-item">${logoSvg(s, 'mq-logo')}<span>${LOGOS[s].t}</span></span>`).join('');
  el.innerHTML = `<div class="mq-track"><div class="mq-set">${set}</div><div class="mq-set" aria-hidden="true">${set}</div></div>`;
}

// ---------- manifesto: las palabras se encienden mientras haces scroll ----------
const manifestoEl = document.getElementById('manifestoText');
let manifestoWords = [];
let manifestoQueued = false;

function renderManifesto() {
  const norm = w => w.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z]/g, '');
  const enfasis = new Set(STORY.manifiesto.enfasis.map(norm));
  manifestoEl.innerHTML = tField(STORY.manifiesto.texto).split(/\s+/)
    .map(w => `<span class="w${enfasis.has(norm(w)) ? ' em' : ''}">${w}</span>`).join(' ');
  manifestoWords = Array.from(manifestoEl.querySelectorAll('.w'));
  updateManifesto();
}

function updateManifesto() {
  manifestoQueued = false;
  if (!manifestoWords.length) return;
  if (REDUCED_MOTION) { manifestoWords.forEach(w => w.classList.add('lit')); return; }
  const r = manifestoEl.getBoundingClientRect();
  const vh = window.innerHeight;
  // 0 cuando el párrafo asoma por abajo, 1 cuando su final pasa por el 40% de la pantalla
  const progress = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.45)));
  const n = Math.round(progress * manifestoWords.length);
  manifestoWords.forEach((w, i) => w.classList.toggle('lit', i < n));
}

window.addEventListener('scroll', () => {
  if (!manifestoQueued) { manifestoQueued = true; requestAnimationFrame(updateManifesto); }
}, { passive: true });
window.addEventListener('resize', updateManifesto);

// ---------- animaciones ligadas al scroll ----------
// Cada elemento con data-fx recibe --p (0 → 1) según su posición en pantalla, y el CSS
// traduce ese número en movimiento suave. Sin librerías: un solo rAF por frame.
const fxRoot = document.documentElement;
const heroEl = document.getElementById('inicio');
let fxEls = [];
let fxQueued = false;

function refreshScrollFx() {
  fxEls = Array.from(document.querySelectorAll('[data-fx]'));
  updateScrollFx();
}

function updateScrollFx() {
  fxQueued = false;
  const vh = window.innerHeight;
  const y = window.scrollY;
  const max = Math.max(1, document.documentElement.scrollHeight - vh);
  fxRoot.style.setProperty('--sy', y.toFixed(1));
  fxRoot.style.setProperty('--read', (y / max).toFixed(4));
  if (REDUCED_MOTION) { fxEls.forEach(el => el.style.setProperty('--p', 1)); return; }

  const hh = heroEl.offsetHeight || vh;
  heroEl.style.setProperty('--hp', Math.max(0, Math.min(1, y / (hh * 0.85))).toFixed(4));

  for (const el of fxEls) {
    const r = el.getBoundingClientRect();
    if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) continue;
    let p;
    if (el.dataset.fx === 'through') p = (vh * 0.62 - r.top) / Math.max(1, r.height);
    else p = (vh - r.top) / (vh * 0.75);
    el.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(4));
  }
}

window.addEventListener('scroll', () => {
  if (!fxQueued) { fxQueued = true; requestAnimationFrame(updateScrollFx); }
}, { passive: true });
window.addEventListener('resize', updateScrollFx);

// ---------- scroll reveal ----------
let revealObserver = null;

function setupReveal(markRevealed) {
  const els = document.querySelectorAll('.reveal');
  if (markRevealed || REDUCED_MOTION || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(el => revealObserver.observe(el));
}

// ---------- project galleries ----------
function setupGalleries() {
  document.querySelectorAll('[data-gallery]').forEach(g => {
    const track = g.querySelector('.gallery-track');
    const slides = Array.from(track.children);
    const dots = Array.from(g.querySelectorAll('.dot'));
    const thumbs = Array.from(g.querySelectorAll('.thumb'));
    const count = g.querySelector('.gallery-count');
    const caption = g.querySelector('.gallery-caption-text');
    const prev = g.querySelector('.gallery-arrow.prev');
    const next = g.querySelector('.gallery-arrow.next');
    let current = 0;

    const sync = () => {
      const i = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
      if (i === current) return;
      current = Math.max(0, Math.min(slides.length - 1, i));
      dots.forEach((d, k) => d.classList.toggle('on', k === current));
      thumbs.forEach((t, k) => t.classList.toggle('on', k === current));
      if (count) count.textContent = `${current + 1}/${slides.length}`;
      caption.textContent = slides[current].querySelector('img').alt;
    };
    track.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });

    const show = target => track.scrollTo({ left: target * track.clientWidth, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
    const go = dir => show((current + dir + slides.length) % slides.length);
    thumbs.forEach((t, k) => t.addEventListener('click', () => show(k)));
    if (prev) prev.addEventListener('click', () => go(-1));
    if (next) next.addEventListener('click', () => go(1));
  });
}

// ---------- lightbox ----------
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCaption = document.getElementById('lbCaption');
let lbList = null;
let lbIndex = 0;
let lbReturnFocus = null;

function lbShow() {
  const m = lbList[lbIndex];
  lbImg.src = asset(m.src);
  lbImg.alt = tField(m.alt);
  lbCaption.textContent = `${tField(m.alt)}${lbList.length > 1 ? `  ·  ${lbIndex + 1}/${lbList.length}` : ''}`;
  lb.classList.toggle('single', lbList.length < 2);
}

function lbOpen(list, idx) {
  lbList = list;
  lbIndex = idx;
  lbReturnFocus = document.activeElement;
  lbShow();
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lb-open');
  document.getElementById('lbClose').focus();
}

function lbClose() {
  if (!lb.classList.contains('open')) return;
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lb-open');
  if (lbReturnFocus) lbReturnFocus.focus({ preventScroll: true });
}

function lbStep(dir) {
  if (!lbList || lbList.length < 2) return;
  lbIndex = (lbIndex + dir + lbList.length) % lbList.length;
  lbShow();
}

document.addEventListener('click', e => {
  const slide = e.target.closest('.slide');
  if (!slide) return;
  const p = CONTENT.proyectos.lista[+slide.dataset.project];
  lbOpen(p.media, +slide.dataset.media);
});
document.getElementById('lbClose').addEventListener('click', lbClose);
document.getElementById('lbPrev').addEventListener('click', () => lbStep(-1));
document.getElementById('lbNext').addEventListener('click', () => lbStep(1));
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-figure')) lbClose(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') lbClose();
  if (e.key === 'ArrowLeft') lbStep(-1);
  if (e.key === 'ArrowRight') lbStep(1);
});
let lbTouchX = null;
lb.addEventListener('touchstart', e => { lbTouchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', e => {
  if (lbTouchX == null) return;
  const dx = e.changedTouches[0].clientX - lbTouchX;
  if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1);
  lbTouchX = null;
});

// ---------- pitch video ----------
const videoModal = document.getElementById('videoModal');
const videoFrame = document.getElementById('videoFrame');
let videoReturnFocus = null;

function openPitch() {
  videoReturnFocus = document.activeElement;
  const id = CONTENT.pitchVideoId;
  videoFrame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1"
    title="${tField(CONTENT.contacto.pitchLabel)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
  videoModal.classList.add('open');
  videoModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lb-open');
  document.getElementById('videoClose').focus();
}

function closePitch() {
  if (!videoModal.classList.contains('open')) return;
  videoModal.classList.remove('open');
  videoModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lb-open');
  // Removing the iframe stops playback.
  setTimeout(() => { if (!videoModal.classList.contains('open')) videoFrame.innerHTML = ''; }, 300);
  if (videoReturnFocus) videoReturnFocus.focus({ preventScroll: true });
}

document.addEventListener('click', e => {
  const trigger = e.target.closest('[data-open-pitch]');
  if (!trigger) return;
  e.preventDefault();
  openPitch();
});
document.getElementById('videoClose').addEventListener('click', closePitch);
videoModal.addEventListener('click', e => { if (e.target === videoModal) closePitch(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePitch(); });

// ---------- navbar + continuous scroll ----------
const nav = document.getElementById('navbar');
const indicator = document.getElementById('nav-indicator');
const items = Array.from(nav.querySelectorAll('.nav-item'));
const sections = items.map(i => document.getElementById(i.dataset.target));
const isMobileNav = () => window.matchMedia('(max-width: 720px)').matches;

const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = v => Math.max(0, Math.min(1, v));
const smoothstep = t => t * t * (3 - 2 * t);

function itemGeom(item) {
  return { left: item.offsetLeft - 6, width: item.offsetWidth };
}

function setIndicator(left, width) {
  indicator.style.transform = `translateX(${left}px)`;
  if (width != null) indicator.style.width = width + 'px';
}

function moveIndicator(el, instant) {
  if (instant) indicator.style.transition = 'none';
  else indicator.style.transition = '';
  const g = itemGeom(el);
  setIndicator(g.left, g.width);
  if (instant) requestAnimationFrame(() => { indicator.style.transition = ''; });
}

function activeItem() {
  return nav.querySelector('.nav-item.active') || items[0];
}

function setActive(item) {
  if (item.classList.contains('active')) return;
  items.forEach(i => i.classList.remove('active'));
  item.classList.add('active');
  // keep the active icon visible when the mobile navbar overflows
  if (isMobileNav() && nav.scrollWidth > nav.clientWidth) {
    const l = item.offsetLeft - 12;
    const r = item.offsetLeft + item.offsetWidth + 12;
    if (l < nav.scrollLeft || r > nav.scrollLeft + nav.clientWidth) {
      nav.scrollTo({ left: l, behavior: 'smooth' });
    }
  }
}

function pulseIcon(item) {
  const icon = item.querySelector('svg');
  if (!icon) return;
  icon.classList.remove('pulse');
  void icon.offsetWidth;
  icon.classList.add('pulse');
}

// Scroll position (px) where each section "starts", clamped to what the page can actually scroll to.
function sectionStops() {
  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const stops = sections.map((s, i) => {
    if (i === 0) return 0;
    const margin = parseFloat(getComputedStyle(s).scrollMarginTop) || 0;
    return Math.min(maxY, Math.max(0, s.getBoundingClientRect().top + window.scrollY - margin));
  });
  for (let i = 1; i < stops.length; i++) stops[i] = Math.max(stops[i], stops[i - 1]);
  return stops;
}

// Fractional nav index for the current scroll: the pill rests on a section while you read it,
// and glides to the next item as that next section rises into view.
function scrollToFraction(y, stops) {
  const n = stops.length;
  for (let i = 0; i < n - 1; i++) {
    const a = stops[i];
    const b = stops[i + 1];
    if (y < b) {
      const seg = b - a;
      if (seg <= 0) continue;
      const win = Math.min(window.innerHeight * 0.55, seg);
      const t = smoothstep(clamp01((y - (b - win)) / win));
      return i + t;
    }
  }
  return n - 1;
}

function pillForFraction(f) {
  const i = Math.min(items.length - 1, Math.floor(f));
  const t = f - i;
  const a = itemGeom(items[i]);
  const b = itemGeom(items[Math.min(items.length - 1, i + 1)]);
  return { left: lerp(a.left, b.left, t), width: lerp(a.width, b.width, t) };
}

let dragState = null;
let navLock = null;          // { index, until } while a tap/drag-triggered scroll is running
let spyQueued = false;

function spy() {
  spyQueued = false;
  if (dragState || navLock) return;
  const f = scrollToFraction(window.scrollY, sectionStops());
  const { left, width } = pillForFraction(f);
  indicator.style.transition = 'none';
  setIndicator(left, width);
  const nearest = items[Math.round(f)];
  if (!nearest.classList.contains('active')) setActive(nearest);
}

function queueSpy() {
  if (!spyQueued) { spyQueued = true; requestAnimationFrame(spy); }
}

window.addEventListener('scroll', queueSpy, { passive: true });

function releaseLock() {
  if (!navLock) return;
  clearTimeout(navLock.timer);
  navLock = null;
  indicator.style.transition = '';
  queueSpy();
}

// User takes the wheel back mid-animation: hand control to the scroll-spy right away.
['wheel', 'touchstart', 'keydown'].forEach(ev => window.addEventListener(ev, e => {
  if (!navLock) return;
  if (ev === 'touchstart' && nav.contains(e.target)) return;
  if (ev === 'keydown' && !['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(e.key)) return;
  releaseLock();
}, { passive: true }));

if ('onscrollend' in window) window.addEventListener('scrollend', () => { if (navLock && !dragState) releaseLock(); });

function goToSection(index, { fromDrag = false } = {}) {
  const item = items[index];
  setActive(item);
  moveIndicator(item, false);
  const y = sectionStops()[index];
  const distance = Math.abs(window.scrollY - y);

  if (navLock) clearTimeout(navLock.timer);
  navLock = { index };
  if (distance < 2) { navLock.timer = setTimeout(releaseLock, 520); return; }

  window.scrollTo({ top: y, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
  // Fallback for browsers without `scrollend`.
  navLock.timer = setTimeout(releaseLock, Math.min(1600, 450 + distance * 0.25));
  if (history.replaceState) history.replaceState(null, '', index === 0 ? location.pathname : '#' + sections[index].id);
}

// --- live scrubbing while dragging the glass pill ---
let scrub = null; // { target, raf }

function scrubTo(y) {
  if (!scrub) scrub = { target: y, raf: 0 };
  scrub.target = y;
  if (scrub.raf) return;
  const step = () => {
    if (!scrub) return;
    const cur = window.scrollY;
    const next = cur + (scrub.target - cur) * 0.22;
    window.scrollTo({ top: Math.abs(scrub.target - next) < 0.5 ? scrub.target : next, behavior: 'instant' });
    if (Math.abs(scrub.target - window.scrollY) > 0.5 && dragState) scrub.raf = requestAnimationFrame(step);
    else scrub.raf = 0;
  };
  scrub.raf = requestAnimationFrame(step);
}

function stopScrub() {
  if (scrub && scrub.raf) cancelAnimationFrame(scrub.raf);
  scrub = null;
}

function fractionForPill(left, width) {
  const center = left + 6 + width / 2;
  const centers = items.map(it => it.offsetLeft + it.offsetWidth / 2);
  if (center <= centers[0]) return 0;
  for (let i = 0; i < centers.length - 1; i++) {
    if (center < centers[i + 1]) return i + (center - centers[i]) / (centers[i + 1] - centers[i]);
  }
  return centers.length - 1;
}

function indicatorBounds(widthPx) {
  const first = items[0];
  const last = items[items.length - 1];
  return {
    min: first.offsetLeft - 6,
    max: (last.offsetLeft + last.offsetWidth) - widthPx - 6
  };
}

function onPointerDown(e) {
  if (dragState) return;
  if (e.pointerType === 'mouse' && e.button !== 0) return;
  const downTarget = e.target.closest('.nav-item') || activeItem();
  nav.setPointerCapture(e.pointerId);
  dragState = {
    pointerId: e.pointerId,
    startClientX: e.clientX,
    moved: false,
    baseLeft: 0,
    width: 0,
    liveActive: activeItem(),
    downTarget
  };
}

function onPointerMove(e) {
  if (!dragState || e.pointerId !== dragState.pointerId) return;
  const dx = e.clientX - dragState.startClientX;

  if (!dragState.moved) {
    if (Math.abs(dx) < 6) return;
    dragState.moved = true;
    if (navLock) { clearTimeout(navLock.timer); navLock = null; }
    const navRect = nav.getBoundingClientRect();
    const indRect = indicator.getBoundingClientRect();
    dragState.baseLeft = indRect.left - navRect.left - 6 + nav.scrollLeft;
    dragState.width = indRect.width;
    dragState.stops = sectionStops();
    nav.classList.add('dragging');
    indicator.style.transition = 'none';
    indicator.style.width = dragState.width + 'px';
  }

  const { min, max } = indicatorBounds(dragState.width);
  let left = dragState.baseLeft + dx;
  if (left < min) left = min - (min - left) * 0.35;
  else if (left > max) left = max + (left - max) * 0.35;
  setIndicator(left);

  // Scrub the page continuously with the pill so the sections flow by under your finger.
  const f = Math.max(0, Math.min(items.length - 1, fractionForPill(left, dragState.width)));
  const i = Math.floor(f);
  const stops = dragState.stops;
  const y = i >= stops.length - 1 ? stops[stops.length - 1] : lerp(stops[i], stops[i + 1], f - i);
  scrubTo(y);

  const nearest = items[Math.round(f)];
  if (nearest !== dragState.liveActive) {
    dragState.liveActive = nearest;
    setActive(nearest);
    pulseIcon(nearest);
  }
}

function endDrag(e) {
  if (!dragState || e.pointerId !== dragState.pointerId) return;
  if (nav.hasPointerCapture(e.pointerId)) nav.releasePointerCapture(e.pointerId);
  nav.classList.remove('dragging');
  stopScrub();

  const wasDrag = dragState.moved;
  const target = wasDrag ? dragState.liveActive : dragState.downTarget;
  dragState = null;
  if (e.type === 'pointercancel' && !wasDrag) { queueSpy(); return; }
  indicator.style.transition = '';
  goToSection(items.indexOf(target), { fromDrag: wasDrag });
}

nav.addEventListener('pointerdown', onPointerDown);
nav.addEventListener('pointermove', onPointerMove);
nav.addEventListener('pointerup', endDrag);
nav.addEventListener('pointercancel', endDrag);

// Keyboard activation (Enter/Space) fires click with detail 0; pointer taps are handled above.
nav.addEventListener('click', e => {
  if (e.detail !== 0) return;
  const item = e.target.closest('.nav-item');
  if (item) goToSection(items.indexOf(item));
});

// In-page links (hero CTAs, scroll hint) use the same smooth path as the navbar.
document.addEventListener('click', e => {
  const link = e.target.closest('[data-scroll-to]');
  if (!link) return;
  const idx = items.findIndex(i => i.dataset.target === link.dataset.scrollTo);
  if (idx < 0) return;
  e.preventDefault();
  goToSection(idx);
});

function resync() {
  if (dragState) return;
  if (navLock) moveIndicator(items[navLock.index], true);
  else spy();
}

window.addEventListener('load', resync);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(resync);
window.addEventListener('resize', resync);
nav.addEventListener('scroll', () => { if (!dragState) resync(); }, { passive: true });

// ---------- language switch ----------
const langButtons = document.querySelectorAll('.lang-btn');

function setLang(lang) {
  LANG = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  // Keep the reader anchored on the same section when the text reflows.
  const anchor = sections[items.indexOf(activeItem())];
  const offset = anchor.getBoundingClientRect().top;
  applyI18n();
  renderSignals();
  renderMarquee();
  renderManifesto();
  renderSections(true);
  window.scrollTo({ top: window.scrollY + anchor.getBoundingClientRect().top - offset, behavior: 'instant' });
  resync();
}

langButtons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

// ---------- init ----------
langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === LANG));
STORY.ajustarContenido(CONTENT);
applyI18n();
renderSignals();
renderMarquee();
renderManifesto();
renderSections(false);

if (location.hash) {
  const idx = items.findIndex(i => '#' + i.dataset.target === location.hash);
  if (idx > 0) requestAnimationFrame(() => window.scrollTo({ top: sectionStops()[idx], behavior: 'instant' }));
}
resync();
