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

function applyI18n(root = document) {
  root.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getPath(CONTENT, el.getAttribute('data-i18n'));
    el.textContent = tField(val);
  });
  document.querySelectorAll('[data-hv]').forEach(a => a.setAttribute('href', tField(CONTENT.hvUrl)));
  document.documentElement.lang = LANG;
  document.title = tField(CONTENT.meta.title);
}

// ---------- section renderers ----------
function renderChips(list) {
  return `<div class="chip-row">${list.map(s => `<span class="chip">${tField(s)}</span>`).join('')}</div>`;
}

function sectionHead(c) {
  return `
    <header class="section-head reveal">
      <span class="section-kicker">${c.kicker}</span>
      <h2 class="section-title">${tField(c.titulo)}</h2>
    </header>`;
}

function renderExperiencia() {
  const c = CONTENT.experiencia;
  const jobs = c.trabajos.map(job => `
    <article class="job reveal">
      <div class="job-side">
        <div class="job-periodo">${tField(job.periodo)}</div>
        <div class="job-ubicacion">${tField(job.ubicacion)}</div>
      </div>
      <div class="job-main">
        <div class="job-cargo">${tField(job.cargo)}</div>
        <div class="job-empresa">${tField(job.empresa)}</div>
        <ul class="job-logros">${job.logros.map(l => `<li>${tField(l)}</li>`).join('')}</ul>
        ${renderChips(job.stack)}
      </div>
    </article>
  `).join('');

  const edu = c.educacion;
  const logros = c.logros.map(l => `
    <div class="logro">
      <div class="logro-titulo">${tField(l.titulo)} <span class="logro-anio">${l.año}</span></div>
      <div class="logro-detalle">${tField(l.detalle)}</div>
    </div>
  `).join('');

  return `
    ${sectionHead(c)}
    <div class="jobs">${jobs}</div>
    <div class="secondary-grid">
      <div class="card-soft reveal">
        <div class="sub-title">${tField(c.educacionTitulo)}</div>
        <div class="edu-programa">${tField(edu.programa)}</div>
        <div class="edu-institucion">${edu.institucion}</div>
        <div class="edu-periodo">${tField(edu.periodo)}</div>
      </div>
      <div class="card-soft reveal">
        <div class="sub-title">${tField(c.logrosTitulo)}</div>
        <div class="logros-block">${logros}</div>
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
      <img src="${m.src}" alt="${tField(m.alt)}" loading="lazy" decoding="async" class="${m.fit === 'contain' ? 'fit-contain' : ''}">
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
          <img src="${m.src}" alt="" loading="lazy" decoding="async">
        </button>`).join('')}
      </div>` : ''}
    </div>`;
}

function renderProyectos() {
  const c = CONTENT.proyectos;
  const cards = c.lista.map((p, idx) => {
    const hasMedia = p.media && p.media.length;
    return `
    <article class="project-card reveal ${hasMedia ? '' : 'no-media'}">
      ${renderGallery(p, idx)}
      <div class="project-body">
        <div class="project-meta">
          <span class="project-context">${tField(p.contexto)}</span>
          <span class="project-periodo">${tField(p.periodo)}</span>
        </div>
        <div class="project-head">
          <h3 class="project-name">${tField(p.nombre)}</h3>
          <div class="project-status">${tField(p.estado)}</div>
        </div>
        <p class="project-pitch">${tField(p.pitch)}</p>
        <div class="project-details">
          <div class="project-detail"><span class="project-detail-label">${tField(c.labels.problema)}</span>${tField(p.problema)}</div>
          <div class="project-detail"><span class="project-detail-label">${tField(c.labels.solucion)}</span>${tField(p.solucion)}</div>
          ${p.analitica ? `<div class="project-detail project-detail-highlight"><span class="project-detail-label">${tField(c.labels.analitica)}</span>${tField(p.analitica)}</div>` : ''}
          <div class="project-detail"><span class="project-detail-label">${tField(c.labels.resultado)}</span>${tField(p.resultado)}</div>
        </div>
        ${renderChips(p.stack)}
        ${(p.repo || p.demo) ? `<div class="project-links">
          ${p.repo ? `<a class="project-link" href="https://${p.repo}" target="_blank" rel="noopener">${tField(c.verRepo)} ↗</a>` : ''}
          ${p.demo ? `<a class="project-link" href="https://${p.demo}" target="_blank" rel="noopener">${tField(c.verDemo)} · ${p.demo} ↗</a>` : ''}
        </div>` : ''}
      </div>
    </article>`;
  }).join('');
  return `${sectionHead(c)}<div class="project-grid">${cards}</div>`;
}

function renderStack() {
  const c = CONTENT.stack;
  const groups = c.categorias.map(cat => `
    <div class="stack-group card-soft reveal">
      <div class="stack-group-title">${tField(cat.nombre)}</div>
      ${renderChips(cat.items)}
    </div>
  `).join('');
  return `${sectionHead(c)}<div class="stack-groups">${groups}</div>`;
}

function renderContacto() {
  const c = CONTENT.contacto;
  const l = c.labels;
  return `
    ${sectionHead(c)}
    <p class="contact-intro reveal">${tField(c.intro)}</p>
    <div class="contact-grid reveal">
      <a class="contact-item" href="mailto:${c.email}">
        <span class="contact-label">${tField(l.email)}</span>
        <span class="contact-value">${c.email}</span>
      </a>
      <a class="contact-item" href="tel:${c.telefono.replace(/\s/g, '')}">
        <span class="contact-label">${tField(l.telefono)}</span>
        <span class="contact-value">${c.telefono}</span>
      </a>
      <a class="contact-item" href="https://${c.linkedin}" target="_blank" rel="noopener">
        <span class="contact-label">${tField(l.linkedin)}</span>
        <span class="contact-value">${c.linkedin}</span>
      </a>
      <a class="contact-item" href="https://${c.github}" target="_blank" rel="noopener">
        <span class="contact-label">${tField(l.github)}</span>
        <span class="contact-value">${c.github}</span>
      </a>
      <div class="contact-item">
        <span class="contact-label">${tField(l.ciudad)}</span>
        <span class="contact-value">${c.ciudad}</span>
      </div>
      <div class="contact-item">
        <span class="contact-label">${tField(l.idiomas)}</span>
        <span class="contact-value">${tField(c.idiomas)}</span>
      </div>
    </div>
    <div class="contact-cta-row reveal">
      <a class="btn btn-primary" href="${tField(CONTENT.hvUrl)}" download data-hv>${tField(c.ctaHv)}</a>
      <a class="btn btn-ghost" href="${c.pitchUrl}" target="_blank" rel="noopener" data-open-pitch>▶ ${tField(c.pitchLabel)}</a>
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
}

function renderSignals() {
  const el = document.getElementById('signals');
  el.innerHTML = CONTENT.hero.senales.map(s => `
    <div>
      <div class="signal-num">${s.num}</div>
      <div class="signal-label">${tField(s.label)}</div>
    </div>
  `).join('');
}

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
  lbImg.src = m.src;
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
  renderSections(true);
  window.scrollTo({ top: window.scrollY + anchor.getBoundingClientRect().top - offset, behavior: 'instant' });
  resync();
}

langButtons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

// ---------- init ----------
langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === LANG));
applyI18n();
renderSignals();
renderSections(false);

if (location.hash) {
  const idx = items.findIndex(i => '#' + i.dataset.target === location.hash);
  if (idx > 0) requestAnimationFrame(() => window.scrollTo({ top: sectionStops()[idx], behavior: 'instant' }));
}
resync();
