// ---------- i18n ----------
let LANG = localStorage.getItem('lang') || 'es';

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
  document.documentElement.lang = LANG;
}

// ---------- panel renderers ----------
function renderChips(list) {
  return `<div class="chip-row">${list.map(s => `<span class="chip">${tField(s)}</span>`).join('')}</div>`;
}

function renderExperiencia() {
  const c = CONTENT.experiencia;
  const jobs = c.trabajos.map(job => `
    <div class="job">
      <div class="job-head">
        <div>
          <div class="job-cargo">${tField(job.cargo)}</div>
          <div class="job-empresa">${job.empresa}</div>
        </div>
        <div class="job-meta">
          <div class="job-periodo">${job.periodo}</div>
          <div class="job-ubicacion">${tField(job.ubicacion)}</div>
        </div>
      </div>
      <ul class="job-logros">${job.logros.map(l => `<li>${tField(l)}</li>`).join('')}</ul>
      ${renderChips(job.stack)}
    </div>
  `).join('');

  const edu = c.educacion;
  const logros = c.logros.map(l => `
    <div class="logro">
      <div class="logro-titulo">${tField(l.titulo)} <span class="logro-anio">${l.año}</span></div>
      <div class="logro-detalle">${tField(l.detalle)}</div>
    </div>
  `).join('');

  return `
    <h2 class="panel-title">${tField(c.titulo)}</h2>
    <div class="jobs">${jobs}</div>
    <div class="panel-secondary">
      <div class="edu-block">
        <div class="panel-subtitle">${tField(c.educacionTitulo)}</div>
        <div class="edu-programa">${tField(edu.programa)}</div>
        <div class="edu-institucion">${edu.institucion} · ${edu.periodo}</div>
      </div>
      <div class="logros-block">
        <div class="panel-subtitle">${tField(c.logrosTitulo)}</div>
        ${logros}
      </div>
    </div>
  `;
}

function renderProyectos() {
  const c = CONTENT.proyectos;
  const cards = c.lista.map(p => `
    <div class="project-card">
      <div class="project-media"><span class="project-media-label">${tField(c.placeholderImg)}</span></div>
      <div class="project-body">
        <div class="project-head">
          <div class="project-name">${tField(p.nombre)}</div>
          <div class="project-status">${tField(p.estado)}</div>
        </div>
        <div class="project-pitch">${tField(p.pitch)}</div>
        <div class="project-detail"><span class="project-detail-label">${tField(c.labels.problema)}</span>${tField(p.problema)}</div>
        <div class="project-detail"><span class="project-detail-label">${tField(c.labels.solucion)}</span>${tField(p.solucion)}</div>
        <div class="project-detail"><span class="project-detail-label">${tField(c.labels.resultado)}</span>${tField(p.resultado)}</div>
        ${renderChips(p.stack)}
        <div class="project-links">
          ${p.repo ? `<a class="project-link" href="https://${p.repo}" target="_blank" rel="noopener">${tField(c.verRepo)} ↗</a>` : ''}
          ${p.demo ? `<a class="project-link" href="https://${p.demo}" target="_blank" rel="noopener">${tField(c.verDemo)} ↗</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
  return `<h2 class="panel-title">${tField(c.titulo)}</h2><div class="project-grid">${cards}</div>`;
}

function renderStack() {
  const c = CONTENT.stack;
  const groups = c.categorias.map(cat => `
    <div class="stack-group">
      <div class="stack-group-title">${tField(cat.nombre)}</div>
      ${renderChips(cat.items)}
    </div>
  `).join('');
  return `<h2 class="panel-title">${tField(c.titulo)}</h2><div class="stack-groups">${groups}</div>`;
}

function renderContacto() {
  const c = CONTENT.contacto;
  const l = c.labels;
  return `
    <h2 class="panel-title">${tField(c.titulo)}</h2>
    <p class="contact-intro">${tField(c.intro)}</p>
    <div class="contact-grid">
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
    <div class="contact-cta-row">
      <a class="btn btn-primary" href="${c.pitchUrl}" target="_blank" rel="noopener">${tField(c.pitchLabel)}</a>
      <a class="btn btn-ghost" href="assets/hv-juan-esteban-ruiz-ome.pdf" download>${tField(c.ctaHv)}</a>
    </div>
  `;
}

const PANEL_RENDERERS = {
  experiencia: renderExperiencia,
  proyectos: renderProyectos,
  stack: renderStack,
  contacto: renderContacto
};

// ---------- panel system ----------
const panelBackdrop = document.getElementById('panelBackdrop');
const panelEl = document.getElementById('panel');
const panelInner = document.getElementById('panelInner');
const panelCloseBtn = document.getElementById('panelClose');
let currentPanel = null;
let lastFocusedNavItem = null;

function openPanel(name) {
  const renderer = PANEL_RENDERERS[name];
  if (!renderer) { closePanel(); return; }
  currentPanel = name;
  panelInner.innerHTML = renderer();
  panelInner.scrollTop = 0;
  panelBackdrop.classList.add('open');
  panelEl.classList.add('open');
  document.body.classList.add('panel-open');
  panelCloseBtn.focus();
}

function closePanel() {
  if (!currentPanel) return;
  panelBackdrop.classList.remove('open');
  panelEl.classList.remove('open');
  document.body.classList.remove('panel-open');
  currentPanel = null;
  if (lastFocusedNavItem) lastFocusedNavItem.focus();
}

panelBackdrop.addEventListener('click', closePanel);
panelCloseBtn.addEventListener('click', closePanel);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && currentPanel) closePanel();
});

// ---------- navbar (tap to select, drag to slide, opens panels) ----------
const nav = document.getElementById('navbar');
const indicator = document.getElementById('nav-indicator');
const items = Array.from(nav.querySelectorAll('.nav-item'));

function moveIndicator(el, instant) {
  if (instant) indicator.style.transition = 'none';
  indicator.style.width = el.offsetWidth + 'px';
  indicator.style.transform = `translateX(${el.offsetLeft - 6}px)`;
  if (instant) requestAnimationFrame(() => { indicator.style.transition = ''; });
}

function activeItem() {
  return nav.querySelector('.nav-item.active') || items[0];
}

function setActive(item) {
  items.forEach(i => i.classList.remove('active'));
  item.classList.add('active');
}

function setIndicatorX(leftPx) {
  indicator.style.transform = `translateX(${leftPx}px)`;
}

function indicatorBounds(widthPx) {
  const first = items[0];
  const last = items[items.length - 1];
  return {
    min: first.offsetLeft - 6,
    max: (last.offsetLeft + last.offsetWidth) - widthPx - 6
  };
}

function nearestItemToX(leftPx, widthPx) {
  const pillCenter = leftPx + 6 + widthPx / 2;
  let best = items[0];
  let bestDist = Infinity;
  items.forEach(item => {
    const itemCenter = item.offsetLeft + item.offsetWidth / 2;
    const dist = Math.abs(itemCenter - pillCenter);
    if (dist < bestDist) { bestDist = dist; best = item; }
  });
  return best;
}

function activatePanelFor(item) {
  lastFocusedNavItem = item;
  const panelName = item.dataset.panel;
  if (panelName === 'inicio') closePanel();
  else openPanel(panelName);
}

let dragState = null;

function onPointerDown(e) {
  if (dragState) return;
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
    const navRect = nav.getBoundingClientRect();
    const indRect = indicator.getBoundingClientRect();
    dragState.baseLeft = indRect.left - navRect.left - 6;
    dragState.width = indRect.width;
    nav.classList.add('dragging');
    indicator.style.transition = 'none';
    indicator.style.width = dragState.width + 'px';
  }

  const { min, max } = indicatorBounds(dragState.width);
  let left = dragState.baseLeft + dx;
  if (left < min) {
    left = min - (min - left) * 0.35;
  } else if (left > max) {
    left = max + (left - max) * 0.35;
  }
  setIndicatorX(left);

  const nearest = nearestItemToX(left, dragState.width);
  if (nearest !== dragState.liveActive) {
    dragState.liveActive = nearest;
    setActive(nearest);
    const icon = nearest.querySelector('svg');
    if (icon) {
      icon.classList.remove('pulse');
      void icon.offsetWidth;
      icon.classList.add('pulse');
    }
  }
}

function endDrag(e) {
  if (!dragState || e.pointerId !== dragState.pointerId) return;
  nav.releasePointerCapture(e.pointerId);
  nav.classList.remove('dragging');

  if (!dragState.moved) {
    const tapTarget = dragState.downTarget;
    setActive(tapTarget);
    moveIndicator(tapTarget);
    activatePanelFor(tapTarget);
  } else {
    setActive(dragState.liveActive);
    indicator.style.transition = '';
    moveIndicator(dragState.liveActive);
    activatePanelFor(dragState.liveActive);
  }
  dragState = null;
}

nav.addEventListener('pointerdown', onPointerDown);
nav.addEventListener('pointermove', onPointerMove);
nav.addEventListener('pointerup', endDrag);
nav.addEventListener('pointercancel', endDrag);

nav.addEventListener('click', (e) => {
  if (e.detail !== 0) return; // real mouse/touch taps are handled by pointer events above
  const item = e.target.closest('.nav-item');
  if (!item) return;
  setActive(item);
  moveIndicator(item);
  activatePanelFor(item);
});

window.addEventListener('load', () => moveIndicator(activeItem(), true));
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => moveIndicator(activeItem(), true));
}
window.addEventListener('resize', () => { if (!dragState) moveIndicator(activeItem(), true); });

// ---------- hero signals (rendered, not static, so they re-render on lang switch) ----------
function renderSignals() {
  const el = document.getElementById('signals');
  el.innerHTML = CONTENT.hero.senales.map(s => `
    <div>
      <div class="signal-num">${s.num}</div>
      <div class="signal-label">${tField(s.label)}</div>
    </div>
  `).join('');
}

document.querySelectorAll('[data-open-panel]').forEach(btn => {
  btn.addEventListener('click', () => openPanel(btn.dataset.openPanel));
});

// ---------- language switch ----------
const langButtons = document.querySelectorAll('.lang-btn');

function setLang(lang) {
  LANG = lang;
  localStorage.setItem('lang', lang);
  langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyI18n();
  renderSignals();
  if (currentPanel) openPanel(currentPanel);
  moveIndicator(activeItem(), true);
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ---------- init ----------
langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === LANG));
applyI18n();
renderSignals();
