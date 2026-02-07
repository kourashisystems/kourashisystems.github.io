<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Aurora Aerospace — Autonomous Aerospace Systems (placeholder)</title>
  <meta name="description" content="Engineer-led Australian aerospace startup focused on autonomous flight, aerospace systems engineering and defence-oriented design. One prototype aircraft." />
  <!-- Inter font (modern sans-serif). Using display=swap for performance -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <meta name="theme-color" content="#0b0b0d" />
  <style>
    /* ===============================================
       Inline CSS: single-file site (dark, minimal, fast)
       Comments explain structure and how to extend later.
       =============================================== */

    /* ========== Design tokens ========== */
    :root{
      --bg:#08080a;              /* near-black */
      --panel:#0e0f12;           /* slightly lighter panels */
      --muted:#9aa0a6;           /* muted text */
      --text:#eef0f2;            /* main text */
      --accent:#62b0ff;          /* interactive accent */
      --glass: rgba(255,255,255,0.02);
      --radius:10px;
      --max-width:1200px;
      --container-padding:28px;
      --transition: 300ms cubic-bezier(.2,.9,.2,1);
      --soft-glow: 0 6px 20px rgba(96,160,255,0.06);
      --divider: rgba(255,255,255,0.04);
    }

    /* ========== Base ========== */
    html,body{height:100%}
    body{
      margin:0;
      background: linear-gradient(180deg, var(--bg) 0%, #060606 100%);
      color:var(--text);
      font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      line-height:1.45;
      font-size:16px;
    }

    /* Container helper */
    .container {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 48px var(--container-padding);
    }

    /* Small utilities */
    .muted { color:var(--muted); font-weight:300; }
    .small { font-size:0.9rem; color:var(--muted); }

    /* ========== Header ========== */
    .site-header {
      position:sticky;
      top:0;
      z-index:80;
      backdrop-filter: blur(6px);
      border-bottom: 1px solid var(--divider);
      background: linear-gradient(180deg, rgba(8,8,10,0.55), rgba(8,8,10,0.35));
    }
    .header-inner {
      display:flex;
      gap:24px;
      align-items:center;
      justify-content:space-between;
      max-width:var(--max-width);
      margin:0 auto;
      padding:14px var(--container-padding);
    }
    .brand-link { color:var(--text); text-decoration:none; display:flex; align-items:baseline; gap:8px; }
    .logo { font-weight:800; font-size:1.05rem; letter-spacing: -0.02em; }
    .logo-sub { color:var(--muted); font-size:0.9rem; margin-left:4px; }

    .nav-list { display:flex; gap:18px; align-items:center; list-style:none; margin:0; padding:0; }
    .nav-list a { color:var(--muted); text-decoration:none; font-weight:500; font-size:0.95rem; padding:8px; border-radius:6px; transition: color var(--transition), background var(--transition); }
    .nav-list a:hover, .nav-list a:focus { color:var(--text); background:var(--glass); outline:none; }
    .cta-link { color:var(--text); background: linear-gradient(90deg, rgba(98,176,255,0.08), rgba(98,176,255,0.04)); padding:6px 10px; border-radius:6px; }

    .nav-toggle { display:none; background:none; border:0; color:var(--text); cursor:pointer; }

    /* ========== HERO ========== */
    .fullscreen { min-height: calc(100vh - 72px); display:flex; align-items:center; }
    .hero-inner { display:grid; grid-template-columns: 1fr 520px; gap:48px; align-items:center; }
    .hero-title { font-size: clamp(2.1rem, 3.2vw, 3.6rem); margin:0 0 12px 0; line-height:1.03; font-weight:800; letter-spacing:-0.01em; }
    .hero-sub { color:var(--muted); margin:0 0 18px 0; max-width:54ch; }

    .hero-ctas { display:flex; gap:12px; margin-top:8px; }
    .btn { border-radius:8px; padding:12px 18px; text-decoration:none; display:inline-block; font-weight:600; transition: transform var(--transition), box-shadow var(--transition); color:inherit; }
    .btn-primary { background:linear-gradient(90deg,var(--accent), #47a8ff); color:#06101a; box-shadow: var(--soft-glow); }
    .btn-ghost { background:transparent; color:var(--text); border:1px solid rgba(255,255,255,0.04); }

    .image-placeholder { width:100%; border-radius:12px; overflow:hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.03); }

    /* ========== Sections ========== */
    .section { padding: 48px 0; }
    .muted-bg { background: linear-gradient(180deg, rgba(255,255,255,0.01), transparent); }
    .section-header { margin-bottom:18px; }
    .section-header h2 { font-size:1.25rem; margin:0 0 6px 0; font-weight:700; }
    .section-lead { color:var(--muted); margin:0; }

    .tech-grid { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:20px; margin-top:18px; }
    .card { background:var(--panel); padding:18px; border-radius:10px; border:1px solid rgba(255,255,255,0.02); box-shadow: var(--soft-glow); }
    .card h3 { margin:0 0 8px 0; font-size:1rem; }
    .card p { margin:0; color:var(--muted); }

    .cap-grid { display:grid; grid-template-columns: repeat(3, 1fr); gap:18px; margin-top:18px; }
    .cap-item { background:transparent; border:1px solid rgba(255,255,255,0.02); padding:18px; border-radius:8px; min-height:84px; }

    .showcase-grid { display:grid; grid-template-columns: 1fr 1fr; gap:18px; margin-top:18px; }
    .showcase-card { background:var(--panel); padding:0; border-radius:10px; overflow:hidden; border:1px solid rgba(255,255,255,0.02); display:flex; gap:12px; align-items:flex-start; }
    .showcase-card figcaption { padding:18px; color:var(--muted); }
    .showcase-visual { width:50%; min-height:160px; display:flex; align-items:center; justify-content:center; background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent); }

    .about-columns { display:grid; grid-template-columns: 2fr 1fr; gap:20px; align-items:start; }
    .about-facts ul { list-style:none; padding:0; margin:0; color:var(--muted); font-weight:500; }

    .contact-grid { display:grid; grid-template-columns: 1fr 360px; gap:18px; }
    .contact-form { background:var(--panel); padding:18px; border-radius:10px; border:1px solid rgba(255,255,255,0.02); display:flex; flex-direction:column; gap:12px; }
    .contact-form label { display:flex; flex-direction:column; gap:8px; font-size:0.95rem; color:var(--muted); }
    .contact-form input, .contact-form textarea { background:transparent; border:1px solid rgba(255,255,255,0.03); padding:10px; color:var(--text); border-radius:8px; outline:none; }
    .contact-form input:focus, .contact-form textarea:focus { border-color:var(--accent); box-shadow: 0 6px 18px rgba(98,176,255,0.06); }

    /* Footer */
    .site-footer { border-top:1px solid var(--divider); padding:22px 0; margin-top:32px; }
    .footer-inner { display:flex; justify-content:space-between; gap:12px; align-items:center; max-width:var(--max-width); margin:0 auto; padding:0 var(--container-padding); }
    .footer-links a { color:var(--muted); margin-left:12px; text-decoration:none; }

    /* Divider and reveal */
    .divider { height:1px; background:var(--divider); margin:28px 0; }
    .reveal { opacity:0; transform: translateY(8px); transition: opacity 520ms ease, transform 520ms ease; }
    .reveal.is-visible { opacity:1; transform: translateY(0); }

    /* ========== Responsive adjustments ========== */
    @media (max-width: 980px){
      .hero-inner{ grid-template-columns: 1fr; gap:28px; }
      .tech-grid{ grid-template-columns: 1fr; }
      .cap-grid{ grid-template-columns: repeat(2, 1fr); }
      .showcase-grid{ grid-template-columns: 1fr; }
      .about-columns{ grid-template-columns: 1fr; }
      .contact-grid{ grid-template-columns: 1fr; }
      .nav-list{ display:none; }
      .nav-toggle{ display:block; }
      .container { padding: 28px; }
      .showcase-visual{ width:100% }
    }

    /* Mobile nav open state */
    .nav-list.mobile-open { display:flex; position:absolute; top:64px; right:28px; flex-direction:column; gap:12px; background:linear-gradient(180deg, rgba(8,8,10,0.95), rgba(8,8,10,0.92)); padding:12px; border-radius:8px; box-shadow:var(--soft-glow); }

    /* Accessibility focus ring */
    a:focus, button:focus, input:focus, textarea:focus { outline: 3px solid rgba(98,176,255,0.12); outline-offset:2px; }
  </style>
</head>
<body class="theme-dark">
  <!-- ============================
       Header / navigation
       Keep markup semantic and accessible
       ============================ -->
  <header class="site-header" role="banner">
    <div class="header-inner">
      <a href="#hero" class="brand-link" aria-label="Aurora Aerospace — Home">
        <strong class="logo">Aurora</strong>
        <span class="logo-sub">Aerospace</span>
      </a>

      <nav id="main-nav" class="nav" aria-label="Primary navigation">
        <ul class="nav-list" role="menubar" aria-hidden="false">
          <li role="none"><a role="menuitem" href="#technology">Technology</a></li>
          <li role="none"><a role="menuitem" href="#capabilities">Capabilities</a></li>
          <li role="none"><a role="menuitem" href="#prototype">Prototype</a></li>
          <li role="none"><a role="menuitem" href="#about">About</a></li>
          <li role="none"><a role="menuitem" href="#contact" class="cta-link">Contact</a></li>
        </ul>
      </nav>

      <!-- Mobile nav toggle for narrow screens -->
      <button id="nav-toggle" class="nav-toggle" aria-expanded="false" aria-controls="main-nav" aria-label="Open menu">
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" aria-hidden="true"><rect width="20" height="2" rx="1" fill="currentColor"/><rect y="5" width="20" height="2" rx="1" fill="currentColor"/><rect y="10" width="20" height="2" rx="1" fill="currentColor"/></svg>
      </button>
    </div>
  </header>

  <main>
    <!-- HERO: full-screen, concise technical tone -->
    <section id="hero" class="fullscreen" aria-label="Hero">
      <div class="container hero-inner">
        <div class="hero-copy reveal">
          <h1 class="hero-title">Next‑Generation Autonomous Aerospace Systems</h1>
          <p class="hero-sub">
            Australian-based, engineer‑led. Focused on autonomous flight, aerospace systems engineering and reliable platforms for defence partners.
            One prototype aircraft is currently in active development.
          </p>
          <div class="hero-ctas">
            <a href="#technology" class="btn btn-primary">Our Technology</a>
            <a href="#contact" class="btn btn-ghost">Contact</a>
          </div>
        </div>

        <div class="hero-media reveal" aria-hidden="true">
          <!-- Inline SVG placeholder for prototype render (small and fast) -->
          <div class="image-placeholder" role="img" aria-label="Prototype aircraft placeholder">
            <svg viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0" stop-color="#151518" />
                  <stop offset="1" stop-color="#0b0b0d" />
                </linearGradient>
                <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="10" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              <rect width="1200" height="600" fill="url(#g)"/>
              <g transform="translate(150,180) scale(0.9)" fill="none" stroke="#9aa0a6" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" filter="url(#soft)" opacity="0.95">
                <path d="M80 160 C220 120, 420 110, 650 120 C780 115, 880 90, 1040 60" stroke-opacity="0.12"/>
                <path d="M80 160 C220 140, 420 130, 650 140 C780 135, 880 120, 1040 100" />
                <path d="M220 160 L260 130 L340 130 L380 160" stroke-opacity="0.12"/>
                <rect x="560" y="120" width="260" height="14" rx="6" fill="#9aa0a6" opacity="0.06"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- TECHNOLOGY -->
    <section id="technology" class="section muted-bg" aria-labelledby="technology-heading">
      <div class="container section-inner">
        <header class="section-header reveal">
          <h2 id="technology-heading">Technology</h2>
          <p class="section-lead">Concise technical overview of the prototype and its core systems.</p>
        </header>

        <div class="tech-grid">
          <article class="card reveal" aria-hidden="false">
            <h3>Prototype Airframe</h3>
            <p>One flight-test prototype validating modular avionics, structural behaviour and aerodynamics. Designed for iterative modification and instrumentation.</p>
          </article>

          <article class="card reveal">
            <h3>Autonomy Stack</h3>
            <p>Deterministic control loops, sensor-fusion state estimation and mission managers designed with test harnesses for repeatable validation.</p>
          </article>

          <article class="card reveal">
            <h3>Systems Engineering</h3>
            <p>Model-driven design, requirement traceability and hardware-in-the-loop integration to reduce risk across development cycles.</p>
          </article>

          <article class="card reveal">
            <h3>Testing & Safety</h3>
            <p>Incremental flight test plan, redundancy on critical channels and documented failure-mode analyses. Safety-first engineering practices.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section id="capabilities" class="section" aria-labelledby="capabilities-heading">
      <div class="container section-inner">
        <header class="section-header reveal">
          <h2 id="capabilities-heading">Capabilities</h2>
          <p class="section-lead">Primary focus areas and technical competencies.</p>
        </header>

        <div class="cap-grid">
          <div class="cap-item reveal">
            <h4>Autonomous Flight</h4>
            <p class="muted">Robust autonomy for navigation, mission execution and contingency handling.</p>
          </div>

          <div class="cap-item reveal">
            <h4>Aerospace Systems Engineering</h4>
            <p class="muted">Design for maintainability, integration testing and lifecycle planning.</p>
          </div>

          <div class="cap-item reveal">
            <h4>Rapid Prototyping</h4>
            <p class="muted">Short iteration cycles to convert concepts into flight-testable hardware.</p>
          </div>

          <div class="cap-item reveal">
            <h4>Defence‑Oriented Design</h4>
            <p class="muted">Security, resilience and interoperability considered from first principles.</p>
          </div>

          <div class="cap-item reveal">
            <h4>Safety & Reliability</h4>
            <p class="muted">Verification, redundancy and structured testing to reduce operational risk.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROTOTYPE SHOWCASE -->
    <section id="prototype" class="section muted-bg" aria-labelledby="prototype-heading">
      <div class="container section-inner">
        <header class="section-header reveal">
          <h2 id="prototype-heading">Prototype Showcase</h2>
          <p class="section-lead">Current state, iteration cadence and planned high-level milestones.</p>
        </header>

        <div class="showcase-grid">
          <figure class="showcase-card reveal">
            <div class="showcase-visual" aria-hidden="true">
              <!-- Inline SVG small visual -->
              <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <rect width="600" height="360" rx="8" fill="#0e0e10"/>
                <g transform="translate(30,60)" stroke="#9aa0a6" fill="none" stroke-width="3">
                  <path d="M10 180 C120 70, 240 50, 420 70 C520 80, 560 95, 580 115" stroke-opacity="0.12"/>
                  <path d="M10 180 C120 90, 240 80, 420 100 C520 110, 560 125, 580 145"/>
                </g>
              </svg>
            </div>
            <figcaption>
              <strong>Prototype 1</strong>
              <p class="muted">Single prototype in active test. Validating autonomy, flight dynamics and avionics integration.</p>
            </figcaption>
          </figure>

          <figure class="showcase-card reveal">
            <div class="showcase-visual" style="display:flex;align-items:center;justify-content:center;padding:12px;">
              <div class="small muted">Add renders or photos here</div>
            </div>
            <figcaption>
              <strong>Iteration & Roadmap</strong>
              <p class="muted">Tight, test-driven cycles to mature subsystems. Operational details shared with partners under appropriate agreements.</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section" aria-labelledby="about-heading">
      <div class="container section-inner">
        <header class="section-header reveal">
          <h2 id="about-heading">About</h2>
          <p class="section-lead">Engineer‑led, mission-driven and based in Australia.</p>
        </header>

        <div class="about-columns">
          <div class="about-text reveal">
            <p class="muted">We are an early-stage Australian aerospace startup building sovereign capability in autonomous systems. Our team comprises engineers focused on rigorous systems engineering, repeatable testing and incremental progress. We partner with organisations that require technical credibility and measured delivery.</p>
          </div>

          <aside class="about-facts reveal" aria-hidden="true">
            <ul>
              <li><strong>Location:</strong> Australia</li>
              <li><strong>Stage:</strong> Prototype development</li>
              <li><strong>Focus:</strong> Autonomy · Aerospace Systems · Rapid iteration</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section muted-bg" aria-labelledby="contact-heading">
      <div class="container section-inner">
        <header class="section-header reveal">
          <h2 id="contact-heading">Contact</h2>
          <p class="section-lead">For partnership, engineering engagements or investor inquiries.</p>
        </header>

        <div class="contact-grid">
          <form id="contact-form" class="contact-form reveal" aria-label="Contact form">
            <!-- Minimal form: no backend by default. Mail client fallback. -->
            <label>
              <span class="small">Name</span>
              <input type="text" name="name" id="name" required placeholder="Full name" autocomplete="name">
            </label>

            <label>
              <span class="small">Email</span>
              <input type="email" name="email" id="email" required placeholder="email@example.com" autocomplete="email">
            </label>

            <label>
              <span class="small">Message</span>
              <textarea name="message" id="message" rows="5" required placeholder="Brief inquiry or note"></textarea>
            </label>

            <div style="display:flex;align-items:center;gap:12px;justify-content:flex-start;">
              <button type="submit" class="btn btn-primary">Send</button>
              <div class="small muted">Or email: <a href="mailto:hello@example.com" style="color:var(--muted)">hello@example.com</a></div>
            </div>
          </form>

          <div class="contact-info reveal" aria-hidden="true" style="background:var(--panel);padding:18px;border-radius:10px;border:1px solid rgba(255,255,255,0.02);">
            <h4>Secure-by-design contact</h4>
            <p class="muted">This site does not collect or store messages. For sensitive inquiries, use official channels and ensure appropriate clearances.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <div style="display:flex;flex-direction:column;gap:4px;">
        <div><strong>Aurora</strong> Aerospace</div>
        <div class="muted">Australia</div>
      </div>

      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
        <nav class="footer-links" aria-label="Footer links">
          <a href="#technology">Technology</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div class="small muted">© <span id="year"></span> Aurora Aerospace — All rights reserved</div>
      </div>
    </div>
  </footer>

  <!-- ========== Inline JS: minimal, performant, commented ========== -->
  <script>
    // scripts: mobile nav, smooth scroll, reveal animations, contact mailto fallback
    (function () {
      'use strict';

      // Set year in footer
      var yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      var navToggle = document.getElementById('nav-toggle');
      var nav = document.getElementById('main-nav');
      if (navToggle && nav) {
        navToggle.addEventListener('click', function () {
          var expanded = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', String(!expanded));
          // nav-list is a child; toggle a class to show it on mobile
          var list = nav.querySelector('.nav-list');
          if (!list) return;
          if (!expanded) {
            list.classList.add('mobile-open');
            list.setAttribute('aria-hidden', 'false');
          } else {
            list.classList.remove('mobile-open');
            list.setAttribute('aria-hidden', 'true');
          }
        });
      }

      // Smooth scrolling for internal links (native when available)
      document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
          var href = this.getAttribute('href');
          if (!href || href === '#') return;
          var targetId = href.slice(1);
          var target = document.getElementById(targetId);
          if (target) {
            e.preventDefault();
            // close mobile nav if open
            var list = nav && nav.querySelector('.nav-list');
            if (list && list.classList.contains('mobile-open')) {
              list.classList.remove('mobile-open');
              if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
            }
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      // IntersectionObserver for reveal animations (efficient)
      var reveals = document.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window && reveals.length) {
        var obs = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
        reveals.forEach(function (el) { obs.observe(el); });
      } else {
        // Fallback: reveal all if IntersectionObserver not supported
        reveals.forEach(function (el) { el.classList.add('is-visible'); });
      }

      // Contact form: mailto fallback (no server). Replace email in production.
      var form = document.getElementById('contact-form');
      if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var name = (document.getElementById('name') || {}).value || '';
          var email = (document.getElementById('email') || {}).value || '';
          var message = (document.getElementById('message') || {}).value || '';
          if (!name.trim() || !email.trim() || !message.trim()) {
            alert('Please complete all fields before sending.');
            return;
          }
          var recipient = 'hello@example.com'; // TODO: replace with real address
          var subject = encodeURIComponent('Website inquiry — ' + name);
          var body = encodeURIComponent('Name: ' + name + '\\nEmail: ' + email + '\\n\\n' + message);
          // Use mail client as fallback — for production, integrate a secure backend or form provider.
          window.location.href = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;
        });
      }

    })();
  </script>
</body>
</html>
