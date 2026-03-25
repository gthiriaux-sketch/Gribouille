/**
 * components.js — Composants partagés injectés dans toutes les pages
 * Curseur personnalisé, header et footer sont définis ici une seule fois.
 */
(function () {

  /* ── Header ──────────────────────────────────────────────────────── */
  const HEADER_HTML = `
  <header id="site-header">
    <div class="container">
      <nav>
        <a href="index.html" class="nav-logo" aria-label="Gribouille Event Lab — accueil">
          <img src="img/logo-header.png" alt="Gribouille Event Lab logo" onerror="this.style.display='none'" />
        </a>
        <ul class="nav-links" id="navLinks">
          <li><a href="index.html">Accueil</a></li>
          <li><a href="about.html">À Propos</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="projects.html">Projets</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <button class="burger" id="burger" aria-label="Ouvrir le menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>`;

  /* ── Footer ──────────────────────────────────────────────────────── */
  const FOOTER_HTML = `
  <footer>
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="img/logo-footer.png" alt="Gribouille Event Lab" class="footer-logo-img" />
          <p>Scénographie immersive pour clubs, festivals &amp; événements. Du concept à l'installation — Bruxelles &amp; au-delà.</p>
        </div>
        <nav class="footer-nav" aria-label="Pied de page">
          <div class="fnc">
            <h4>Navigation</h4>
            <ul>
              <li><a href="index.html">Accueil</a></li>
              <li><a href="about.html">À Propos</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="projects.html">Projets</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="fnc">
            <h4>Réseaux</h4>
            <ul>
              <li><a href="https://instagram.com/gribouille_event_lab" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="mailto:contact@gribouille-eventlab.be">Email</a></li>
            </ul>
          </div>
          <div class="fnc">
            <h4>Légal</h4>
            <ul>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Politique cookies</a></li>
              <li><a href="#">Conditions générales</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Gribouille Event Lab — Bruxelles, Belgique</span>
        <span>Conçu &amp; réalisé par Gribouille</span>
      </div>
    </div>
  </footer>`;

  /* ── Curseur personnalisé ─────────────────────────────────────────── */
  document.body.insertAdjacentHTML('afterbegin',
    '<div class="c-dot" id="cDot"></div><div class="c-ring" id="cRing"></div>'
  );

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
