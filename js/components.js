/**
 * components.js — Composants partagés injectés dans toutes les pages
 * Curseur personnalisé, header et footer sont définis ici une seule fois.
 */
(function () {

  /* ── Header ──────────────────────────────────────────────────────── */
  const _hdrDefaults = {
    logo: 'img/media/Logo/multi-noir.webp',
    links: [
      { label: 'Accueil', href: 'index.html' },
      { label: 'À Propos', href: 'about.html' },
      { label: 'Services', href: 'services.html' },
      { label: 'Projets', href: 'projects.html' },
      { label: 'Contact', href: 'contact.html' },
    ],
  };
  const _hdrData = (typeof LAYOUT_DEFAULTS !== 'undefined' && LAYOUT_DEFAULTS.header) ? LAYOUT_DEFAULTS.header : {};
  const _hdr = {
    logo:  _hdrData.logo  || _hdrDefaults.logo,
    links: (_hdrData.links && _hdrData.links.length) ? _hdrData.links : _hdrDefaults.links,
  };
  const HEADER_HTML = `
  <header id="site-header">
    <div class="container">
      <nav>
        <a href="index.html" class="nav-logo" aria-label="Gribouille Event Lab — accueil">
          <img src="${_hdr.logo}" alt="Gribouille Event Lab logo" onerror="this.style.display='none'" />
        </a>
        <ul class="nav-links" id="navLinks">
          ${(_hdr.links || []).map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('\n          ')}
        </ul>
        <button class="burger" id="burger" aria-label="Ouvrir le menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>`;

  /* ── Footer ──────────────────────────────────────────────────────── */
  const _ftrDefaults = {
    logo: 'img/media/Logo/multi-blanc.webp',
    tagline: "Scénographie immersive pour clubs, festivals & événements. Du concept à l'installation — Bruxelles & au-delà.",
    copyright: '© 2025 Gribouille Event Lab — Bruxelles, Belgique',
    socials: [
      { label: 'Instagram', href: 'https://instagram.com/gribouille_event_lab' },
      { label: 'Email', href: 'mailto:contact@gribouille-eventlab.be' },
    ],
    legal: [
      { label: 'Politique de confidentialité', href: 'politique-confidentialite.html' },
      { label: 'Politique cookies', href: 'politique-cookies.html' },
      { label: 'Conditions générales', href: 'conditions-generales.html' },
    ],
  };
  const _ftrData = (typeof LAYOUT_DEFAULTS !== 'undefined' && LAYOUT_DEFAULTS.footer) ? LAYOUT_DEFAULTS.footer : {};
  const _ftr = {
    logo:      _ftrData.logo      || _ftrDefaults.logo,
    tagline:   _ftrData.tagline   || _ftrDefaults.tagline,
    copyright: _ftrData.copyright || _ftrDefaults.copyright,
    socials:   (_ftrData.socials  && _ftrData.socials.length)  ? _ftrData.socials  : _ftrDefaults.socials,
    legal:     (_ftrData.legal    && _ftrData.legal.length)    ? _ftrData.legal    : _ftrDefaults.legal,
  };
  const _hdrLinks = (_hdr.links || []);
  const FOOTER_HTML = `
  <footer>
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="${_ftr.logo}" alt="Gribouille Event Lab" class="footer-logo-img" />
          <p>${_ftr.tagline}</p>
        </div>
        <nav class="footer-nav" aria-label="Pied de page">
          <div class="fnc">
            <h4>Navigation</h4>
            <ul>
              ${_hdrLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('\n              ')}
            </ul>
          </div>
          <div class="fnc">
            <h4>Réseaux</h4>
            <ul>
              ${(_ftr.socials || []).map(s => `<li><a href="${s.href}" ${s.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${s.label}</a></li>`).join('\n              ')}
            </ul>
          </div>
          <div class="fnc">
            <h4>Légal</h4>
            <ul>
              ${(_ftr.legal || []).map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('\n              ')}
            </ul>
          </div>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>${_ftr.copyright}</span>
        <span>Conçu &amp; réalisé par Gribouille</span>
      </div>
    </div>
  </footer>`;

  /* ── Curseur personnalisé (desktop uniquement) ───────────────────── */
  const _isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
  if (!_isTouchDevice) {
    document.body.insertAdjacentHTML('afterbegin',
      '<div class="c-dot" id="cDot"></div><div class="c-ring" id="cRing"></div>'
    );
    const _cDot  = document.getElementById('cDot');
    const _cRing = document.getElementById('cRing');
    document.addEventListener('mousemove', function (e) {
      _cDot.style.left  = e.clientX + 'px';
      _cDot.style.top   = e.clientY + 'px';
      _cRing.style.left = e.clientX + 'px';
      _cRing.style.top  = e.clientY + 'px';
    });
  }

  /* ── Injection header ────────────────────────────────────────────── */
  const headerRoot = document.getElementById('header-root');
  if (headerRoot) {
    headerRoot.insertAdjacentHTML('afterend', HEADER_HTML);
    headerRoot.remove();
  }

  /* ── Injection footer ────────────────────────────────────────────── */
  const footerRoot = document.getElementById('footer-root');
  if (footerRoot) {
    footerRoot.insertAdjacentHTML('afterend', FOOTER_HTML);
    footerRoot.remove();
  }

  /* ── Favicon dynamique ───────────────────────────────────────────── */
  if (typeof LAYOUT_DEFAULTS !== 'undefined' && LAYOUT_DEFAULTS.favicon) {
    let faviconEl = document.querySelector("link[rel~='icon']");
    if (!faviconEl) {
      faviconEl = document.createElement('link');
      faviconEl.rel = 'icon';
      document.head.appendChild(faviconEl);
    }
    faviconEl.href = LAYOUT_DEFAULTS.favicon;
  }

  /* ── Lien actif selon la page courante ───────────────────────────── */
  const page = location.pathname.split('/').pop() || 'index.html';
  // project-detail.html → on considère "Projets" comme actif
  const activeHref = page === 'project-detail.html' ? 'projects.html' : page;

  document.querySelectorAll('#navLinks a').forEach(function (link) {
    if (link.getAttribute('href') === activeHref) {
      link.classList.add('active');
    }
  });

})();
