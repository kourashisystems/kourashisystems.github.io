<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Kourashi Systems</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- =========================================================
     KOURASHI SYSTEMS – GITHUB PAGES HOMEPAGE
     Single-file, animated, fully functional buttons
     Inspired by high-end aerospace / defense layouts
========================================================== -->

<style>

/* =========================================================
   DESIGN TOKENS
========================================================== */
:root {
  --bg-dark: #050507;
  --bg-light: #0e1016;
  --bg-panel: #141826;
  --fg-main: #ffffff;
  --fg-muted: #9aa0a6;
  --accent: #4f8cff;
  --border: rgba(255,255,255,0.08);
  --radius: 12px;
  --transition: 0.35s cubic-bezier(.4,0,.2,1);
  --max-width: 1300px;
}

/* =========================================================
   RESET
========================================================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg-dark);
  color: var(--fg-main);
  line-height: 1.6;
}

/* =========================================================
   GLOBAL
========================================================== */
a {
  color: inherit;
  text-decoration: none;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 40px;
}

section {
  padding: 120px 0;
  position: relative;
}

h1, h2, h3 {
  font-weight: 800;
  letter-spacing: -0.03em;
}

p {
  color: var(--fg-muted);
  max-width: 750px;
}

/* =========================================================
   NAVBAR
========================================================== */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  backdrop-filter: blur(10px);
  background: rgba(5,5,7,0.7);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
}

.nav-logo {
  font-weight: 900;
  letter-spacing: 0.05em;
}

.nav-links a {
  margin-left: 28px;
  font-size: 0.95rem;
  color: var(--fg-muted);
}

.nav-links a:hover {
  color: var(--fg-main);
}

/* =========================================================
   HERO
========================================================== */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 60% 40%, rgba(79,140,255,0.25), transparent 60%),
    linear-gradient(180deg, #050507, #0b0e18);
}

.hero h1 {
  font-size: clamp(3.5rem, 7vw, 6rem);
  line-height: 0.95;
  margin-bottom: 30px;
}

.hero h1 span {
  display: block;
}

.hero-actions {
  margin-top: 40px;
}

.button {
  display: inline-block;
  padding: 14px 26px;
  border-radius: 999px;
  font-weight: 600;
  transition: var(--transition);
  cursor: pointer;
}

.button.primary {
  background: var(--fg-main);
  color: #000;
}

.button.secondary {
  border: 1px solid var(--border);
  margin-left: 14px;
}

.button:hover {
  transform: translateY(-2px);
}

/* =========================================================
   FEATURE SECTION
========================================================== */
.split {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 80px;
  align-items: center;
}

.image-box {
  height: 360px;
  border-radius: var(--radius);
  background:
    linear-gradient(135deg, rgba(255,255,255,0.1), transparent),
    #1a1f33;
  position: relative;
  overflow: hidden;
}

.image-box::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(79,140,255,0.35), transparent 60%);
}

/* =========================================================
   PRINCIPLES
========================================================== */
.principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 40px;
}

.principle {
  padding: 30px;
  background: var(--bg-panel);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: var(--transition);
}

.principle:hover {
  transform: translateY(-6px);
  border-color: rgba(79,140,255,0.4);
}

/* =========================================================
   CAPABILITIES
========================================================== */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.card {
  background: var(--bg-panel);
  border-radius: var(--radius);
  padding: 40px 30px;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,255,255,0.25);
}

/* =========================================================
   CTA
========================================================== */
.cta {
  background:
    radial-gradient(circle at center, rgba(79,140,255,0.2), transparent 60%),
    #050507;
  text-align: center;
}

.cta h2 {
  font-size: 3rem;
  margin-bottom: 20px;
}

/* =========================================================
   FOOTER
========================================================== */
footer {
  padding: 80px 0;
  background: #000;
  border-top: 1px solid var(--border);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
  gap: 40px;
  color: var(--fg-muted);
}

/* =========================================================
   ANIMATIONS
========================================================== */
.fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease;
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}

</style>
</head>

<body>

<!-- =========================================================
     NAV
========================================================== -->
<nav>
  <div class="container nav-inner">
    <div class="nav-logo">KOURASHI SYSTEMS</div>
    <div class="nav-links">
      <a href="#about">About</a>
      <a href="#principles">Principles</a>
      <a href="#capabilities">Capabilities</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</nav>

<!-- =========================================================
     HERO
========================================================== -->
<section class="hero">
  <div class="container">
    <h1 class="fade-up">
      <span>INNOVATE</span>
      <span>ENGINEER</span>
      <span>DOMINATE</span>
    </h1>
    <p class="fade-up">
      Advanced systems engineering, autonomous architectures, and
      precision-driven technology development.
    </p>
    <div class="hero-actions fade-up">
      <a class="button primary" href="#capabilities">Explore Systems</a>
      <a class="button secondary" href="#contact">Initiate Contact</a>
    </div>
  </div>
</section>

<!-- =========================================================
     ABOUT
========================================================== -->
<section id="about">
  <div class="container split">
    <div class="fade-up">
      <h2>Building the Future of Systems Engineering</h2>
      <p>
        Kourashi Systems develops robust, scalable, and mathematically grounded
        solutions across software, automation, and engineered platforms.
      </p>
    </div>
    <div class="image-box fade-up"></div>
  </div>
</section>

<!-- =========================================================
     PRINCIPLES
========================================================== -->
<section id="principles">
  <div class="container">
    <h2 class="fade-up">Operating Principles</h2>
    <div class="principles">
      <div class="principle fade-up">
        <h3>Security First</h3>
        <p>Designed with defense-grade reliability and threat modeling.</p>
      </div>
      <div class="principle fade-up">
        <h3>Innovation</h3>
        <p>Continuous research-driven development.</p>
      </div>
      <div class="principle fade-up">
        <h3>Performance</h3>
        <p>Optimized systems with measurable outcomes.</p>
      </div>
      <div class="principle fade-up">
        <h3>Precision</h3>
        <p>Engineering decisions grounded in data and analysis.</p>
      </div>
    </div>
  </div>
</section>

<!-- =========================================================
     CAPABILITIES
========================================================== -->
<section id="capabilities">
  <div class="container">
    <h2 class="fade-up">Capabilities</h2>
    <div class="cards">
      <div class="card fade-up">
        <h3>Autonomous Systems</h3>
        <p>Control logic, AI-driven behavior, and reliability engineering.</p>
      </div>
      <div class="card fade-up">
        <h3>Software Architecture</h3>
        <p>Modular, scalable, production-grade platforms.</p>
      </div>
      <div class="card fade-up">
        <h3>Simulation & Modeling</h3>
        <p>Physics-backed and computational system models.</p>
      </div>
      <div class="card fade-up">
        <h3>Automation</h3>
        <p>End-to-end process automation and orchestration.</p>
      </div>
    </div>
  </div>
</section>

<!-- =========================================================
     CTA
========================================================== -->
<section class="cta" id="contact">
  <div class="container">
    <h2 class="fade-up">Ready to Transform?</h2>
    <p class="fade-up">
      Partner with Kourashi Systems to build next-generation technology.
    </p>
    <div class="fade-up">
      <a class="button primary" href="mailto:contact@kourashisystems.dev">Initiate Contact</a>
    </div>
  </div>
</section>

<!-- =========================================================
     FOOTER
========================================================== -->
<footer>
  <div class="container footer-grid">
    <div>
      <strong>Kourashi Systems</strong><br />
      Advanced Engineering Solutions
    </div>
    <div>
      Contact<br />
      contact@kourashisystems.dev
    </div>
    <div>
      © Kourashi Systems
    </div>
  </div>
</footer>

<!-- =========================================================
     SCRIPT
========================================================== -->
<script>
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
</script>

</body>
</html>
