/* ════════════════════════════════════════════════════════
   shared.js — Gribouille Event Lab
   Comportements interactifs communs à toutes les pages.
   Chaque bloc est nommé pour être facile à trouver/désactiver.
════════════════════════════════════════════════════════ */

/* ── 2. HEADER COLLANT — rétrécit au scroll ──────────── */
(function initStickyHeader() {
  const hdr = document.getElementById('site-header');
  if (!hdr) return;
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', scrollY > 60);
  }, { passive: true });
})();


/* ── 3. NAVIGATION MOBILE ────────────────────────────── */
(function initMobileNav() {
  const burger   = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  if (!burger || !navLinks) return;

  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
})();


/* ── 4. SCROLL REVEAL ────────────────────────────────────
   Éléments .reveal / .reveal-left / .reveal-right / .reveal-stagger
   s'animent à l'entrée dans le viewport.
────────────────────────────────────────────────────── */
(function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .1 });

  document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-stagger'
  ).forEach(el => obs.observe(el));
})();


/* ── 5. TICKER — rendu depuis ticker-data.js + localStorage ── */
(function initTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;

  let items = typeof TICKER_DEFAULTS !== 'undefined' ? TICKER_DEFAULTS.slice() : [];
  try {
    const saved = localStorage.getItem('gribouille_ticker');
    if (saved) items = JSON.parse(saved);
  } catch(e) {}

  if (!items.length) return;

  function esc(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  const html = items.map(t =>
    `<span class="ticker-item">${esc(t)}<span class="ticker-star">★</span></span>`
  ).join('');
  track.innerHTML = html + html; // duplication pour boucle infinie

  // Calcul durée : scrollWidth/2 pixels ÷ vitesse px/s = durée en secondes
  const pxPerSec = typeof TICKER_SPEED !== 'undefined' ? TICKER_SPEED : 100;
  setTimeout(function() {
    const halfWidth = track.scrollWidth / 2;
    if (!halfWidth) return;
    const dur = halfWidth / pxPerSec;
    track.style.setProperty('--ticker-duration', dur + 's');
  }, 50);
})();


/* ── 6. ROUGH.JS — gribouillis sur page-canvas ───────────
   Utilisé sur les pages intérieures (About, Services, Projects).
   Pour la Home, voir index.html (canvas différent : #hero-canvas).
────────────────────────────────────────────────────── */
function drawPageScribbles(seed) {
  const canvas = document.getElementById('page-canvas');
  if (!canvas || typeof rough === 'undefined') return;

  const parent = document.querySelector('.page-hero');
  if (!parent) return;

  canvas.width  = parent.offsetWidth;
  canvas.height = parent.offsetHeight;

  const rc = rough.canvas(canvas);
  const w  = canvas.width;
  const h  = canvas.height;
  const opt = { stroke: '#12021E', strokeWidth: 1.1, roughness: 3.2, seed: seed || 77 };

  rc.line(0,     h * .12, w * .4,  h * .18, opt);
  rc.line(w * .6, h * .05, w,      h * .16, opt);
  rc.line(0,     h * .80, w * .3,  h * .95, opt);
  rc.line(w * .7, h * .75, w,      h * .88, opt);
  rc.ellipse(w * .5, h * .5, w * .88, h * .72, { ...opt, roughness: 2.8 });
  rc.rectangle(w * .04, h * .06, w * .92, h * .88, { ...opt, roughness: 3.2 });
}

if (document.getElementById('page-canvas')) {
  window.addEventListener('load',   () => drawPageScribbles());
  window.addEventListener('resize', () => drawPageScribbles());
}


/* ── 7. ACCORDÉON FAQ (Services uniquement) ──────────── */
(function initFaq() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      /* Fermer tous */
      faqItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });

      /* Ouvrir celui cliqué si il était fermé */
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();


/* ── 8. FILTRE PROJETS (Projects uniquement) ──────────── */
(function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards  = document.querySelectorAll('.proj-card');
  const projCount  = document.getElementById('projCount');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      let visible = 0;
      projCards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hidden', !match);
        if (match) visible++;
      });

      if (projCount) projCount.textContent = visible;
    });
  });
})();


/* ── 9. FORMULAIRE CONTACT (Home uniquement) ──────────
   → Pour changer l'endpoint, modifier CONTACT_FORM_ENDPOINT ci-dessous.
────────────────────────────────────────────────────── */
const CONTACT_FORM_ENDPOINT = 'https://formspree.io/f/myknrdbl';

(function initContactForm() {
  const form    = document.getElementById('contactForm');
  const formMsg = document.getElementById('form-msg');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    formMsg.style.display = 'block';
    formMsg.style.color   = 'var(--accent)';
    formMsg.textContent   = 'Envoi en cours…';

    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (res.ok) {
        formMsg.style.color = '#2d8a4e';
        formMsg.textContent = '✓ Message envoyé — on vous répond très vite !';
        form.reset();
      } else {
        throw new Error('server');
      }
    } catch {
      formMsg.style.color = '#c0392b';
      formMsg.textContent = '✗ Une erreur est survenue. Réessayez ou envoyez un email directement.';
    }
  });
})();
