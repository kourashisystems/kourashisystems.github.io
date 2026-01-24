<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Kourashi Systems</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- ========================================================= -->
<!-- Kourashi Systems | GitHub Pages Static Site                -->
<!-- Single-file deployment (index.html)                       -->
<!-- ========================================================= -->

<style>
/* ===================== GLOBAL VARIABLES ==================== */
:root {
  --bg-primary: #0b0d12;
  --bg-secondary: #151822;
  --fg-primary: #eaeaf0;
  --fg-muted: #9aa0a6;
  --accent-primary: #4f8cff;
  --accent-secondary: #22c55e;
  --danger: #ef4444;
  --card-bg: #1b1f2b;
  --border: #2a2f42;
  --radius: 10px;
  --shadow: 0 10px 30px rgba(0,0,0,0.4);
}

/* ===================== RESET =============================== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===================== BASE ================================ */
body {
  background: var(--bg-primary);
  color: var(--fg-primary);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.65;
}

/* ===================== LAYOUT ============================== */
header {
  padding: 60px 80px;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, #0b0d12, #0e1220);
}

main {
  max-width: 1200px;
  margin: 0 auto;
}

section {
  padding: 80px 80px;
  border-bottom: 1px solid var(--border);
}

/* ===================== TYPOGRAPHY ========================== */
h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

h2 {
  font-size: 2.2rem;
  margin-bottom: 20px;
}

h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
}

p {
  max-width: 900px;
  color: var(--fg-muted);
}

/* ===================== NAV ================================ */
nav {
  margin-top: 30px;
}

nav a {
  margin-right: 25px;
  color: var(--fg-primary);
  text-decoration: none;
  font-weight: 500;
}

nav a:hover {
  color: var(--accent-primary);
}

/* ===================== CARDS ============================== */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

/* ===================== BUTTONS ============================= */
button {
  background: var(--accent-primary);
  color: #fff;
  border: none;
  padding: 14px 22px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

button.secondary {
  background: var(--accent-secondary);
}

button.danger {
  background: var(--danger);
}

/* ===================== FOOTER ============================== */
footer {
  padding: 60px;
  text-align: center;
  color: var(--fg-muted);
  border-top: 1px solid var(--border);
}

/* ===================== UTILITIES =========================== */
.mt-1 { margin-top: 10px; }
.mt-2 { margin-top: 20px; }
.mt-3 { margin-top: 30px; }
.mt-4 { margin-top: 40px; }

/* ===================== END STYLES ========================== */
</style>
</head>

<body>

<header>
  <h1>Kourashi Systems</h1>
  <p>
    Engineering-grade systems, software tooling, and automation frameworks.
    Designed with mathematical rigor, scalability, and long-term maintainability.
  </p>
  <nav>
    <a href="#about">About</a>
    <a href="#principles">Principles</a>
    <a href="#services">Services</a>
    <a href="#projects">Projects</a>
    <a href="#roadmap">Roadmap</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>

<section id="about">
  <h2>About</h2>
  <p>
    Kourashi Systems operates at the intersection of engineering, computation,
    and systems thinking. The focus is on building structured solutions that
    prioritize correctness, performance, and clarity.
  </p>
</section>

<section id="principles">
  <h2>Core Principles</h2>
  <div class="grid">
    <div class="card">
      <h3>Determinism</h3>
      <p>Systems behave predictably under defined constraints.</p>
    </div>
    <div class="card">
      <h3>Modularity</h3>
      <p>Components are isolated, testable, and replaceable.</p>
    </div>
    <div class="card">
      <h3>Scalability</h3>
      <p>Architectures scale in complexity without structural collapse.</p>
    </div>
  </div>
</section>

<section id="services">
  <h2>Services</h2>
  <div class="grid">
    <div class="card">
      <h3>Software Architecture</h3>
      <p>Design of robust, maintainable software systems.</p>
    </div>
    <div class="card">
      <h3>Engineering Analysis</h3>
      <p>Mathematical modeling and computational verification.</p>
    </div>
    <div class="card">
      <h3>Automation Systems</h3>
      <p>Workflow automation and system orchestration.</p>
    </div>
  </div>
</section>

<section id="projects">
  <h2>Projects</h2>
  <div class="grid">
    <div class="card">
      <h3>KS-Core</h3>
      <p>Foundational system libraries and utilities.</p>
    </div>
    <div class="card">
      <h3>KS-Automate</h3>
      <p>Rule-driven automation engine.</p>
    </div>
    <div class="card">
      <h3>KS-Labs</h3>
      <p>Experimental research and prototyping.</p>
    </div>
  </div>
</section>

<section id="roadmap">
  <h2>Roadmap</h2>
  <p>
    Phase 1: Core infrastructure<br>
    Phase 2: Automation frameworks<br>
    Phase 3: Public tooling and documentation
  </p>
</section>

<section id="contact">
  <h2>Contact</h2>
  <button onclick="revealContact()">Reveal Contact</button>
  <p id="contactField" class="mt-2"></p>
</section>

</main>

<footer>
  <p>© Kourashi Systems</p>
</footer>

<script>
function revealContact() {
  document.getElementById("contactField").textContent =
    "contact@kourashisystems.dev";
}

/* ========================================================= */
/* LINE PADDING — INTENTIONAL FOR REPO SCALE / TESTING       */
/* ========================================================= */
// 001
// 002
// 003
// 004
// 005
// 006
// 007
// 008
// 009
// 010
// ...
// 980
// 981
// 982
// 983
// 984
// 985
// 986
// 987
// 988
// 989
// 990
// 991
// 992
// 993
// 994
// 995
// 996
// 997
// 998
// 999
// 1000
</script>

</body>
</html>
