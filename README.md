<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Kourashi Systems — Autonomous Aerospace Systems</title>

  <!-- Defence-safe metadata -->
  <meta name="description" content="Kourashi Systems is an Australian engineer-led aerospace company developing prototype autonomous aircraft systems with a focus on testing, validation, and systems integration." />
  <meta name="theme-color" content="#ffffff" />

  <!-- Inter font -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">

  <style>
    /* =====================================================
       KOURASHI SYSTEMS — SINGLE-FILE ARCHITECTURE
       White / charcoal defence-industrial aesthetic
       ===================================================== */

    /* ---------- THEME TOKENS ---------- */
    :root {
      --bg: #ffffff;
      --panel: #f6f7f8;
      --text: #1c1f23;
      --muted: #5f6670;
      --accent: #2b6fff;
      --border: rgba(0,0,0,0.08);

      --radius: 10px;
      --max-width: 1200px;
      --pad: 28px;

      --ease: cubic-bezier(.2,.8,.2,1);
      --shadow-soft: 0 6px 18px rgba(0,0,0,0.06);
    }

    html,body { margin:0; padding:0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
    }

    /* ---------- LAYOUT ---------- */
    .container {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 64px var(--pad);
    }

    section { position: relative; }

    h1,h2,h3,h4 { margin: 0 0 10px 0; letter-spacing: -0.01em; }
    p { margin: 0; }
    .muted { color: var(--muted); }

    /* ---------- HEADER ---------- */
    header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 50;
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--border);
      transition: transform 0.4s var(--ease);
    }

    header.hidden {
      transform: translateY(-100%);
    }

    .header-inner {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 14px var(--pad);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .brand {
      font-weight: 800;
      text-decoration: none;
      color: var(--text);
    }

    nav a {
      margin-left: 18px;
      text-decoration: none;
      color: var(--muted);
      font-weight: 500;
    }

    nav a:hover { color: var(--text); }

    /* ---------- HERO ---------- */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
    }

    .hero h1 {
      font-size: clamp(2.2rem, 3.5vw, 3.4rem);
    }

    .btn {
      display: inline-block;
      margin-top: 18px;
      padding: 12px 18px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
    }

    .btn-primary {
      background: var(--accent);
      color: #fff;
    }

    .hero-visual {
      background: linear-gradient(180deg,#f3f4f6,#fff);
      border-radius: var(--radius);
      padding: 20px;
      box-shadow: var(--shadow-soft);
    }

    /* ---------- REVEAL ---------- */
    .reveal {
      opacity: 0;
      transform: translateY(14px);
      transition: 0.6s var(--ease);
    }

    .reveal.visible {
      opacity: 1;
      transform: none;
    }

    /* ---------- TECHNOLOGY EXPLORER ---------- */
    .tech-grid {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 24px;
      margin-top: 32px;
    }

    .tech-list button {
      width: 100%;
      padding: 12px;
      margin-bottom: 8px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: #fff;
      text-align: left;
      cursor: pointer;
      font-weight: 600;
    }

    .tech-list button.active {
      border-color: var(--accent);
      color: var(--accent);
    }

    .tech-panel {
      background: var(--panel);
      border-radius: var(--radius);
      padding: 24px;
    }

    /* ---------- PROTOTYPE ---------- */
    .prototype {
      background: var(--panel);
      border-radius: var(--radius);
      padding: 28px;
      margin-top: 32px;
    }

    .proto-state {
      display: none;
    }

    .proto-state.active {
      display: block;
    }

    /* ---------- FOOTER ---------- */
    footer {
      border-top: 1px solid var(--border);
      padding: 28px;
      text-align: center;
      font-size: 0.9rem;
      color: var(--muted);
    }

    /* ---------- RESPONSIVE ---------- */
    @media(max-width:900px){
      .hero-grid { grid-template-columns: 1fr; }
      .tech-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>

<body>

<header id="site-header">
  <div class="header-inner">
    <a class="brand" href="#hero">Kourashi Systems</a>
    <nav>
      <a href="#technology">Technology</a>
      <a href="#prototype">Prototype</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </div>
</header>

<main>

<!-- HERO -->
<section id="hero" class="hero">
  <div class="container hero-grid">
    <div class="reveal">
      <h1>Prototype Autonomous Aerospace Systems</h1>
      <p class="muted">
        Australian engineer-led development of autonomous aircraft systems,
        focused on disciplined testing, validation, and systems integration.
      </p>
      <a href="#technology" class="btn btn-primary">Explore Technology</a>
    </div>

    <div class="hero-visual reveal">
      <svg viewBox="0 0 600 300" width="100%" height="100%">
        <rect width="600" height="300" rx="10" fill="#e9ebee"/>
        <path d="M40 170 C160 90, 320 80, 520 120" stroke="#9aa0a6" stroke-width="4" fill="none"/>
      </svg>
    </div>
  </div>
</section>

<!-- TECHNOLOGY -->
<section id="technology">
  <div class="container">
    <div class="reveal">
      <h2>Technology Explorer</h2>
      <p class="muted">Prototype-stage systems under active development and test.</p>
    </div>

    <div class="tech-grid reveal">
      <div class="tech-list" id="techList"></div>
      <div class="tech-panel" id="techPanel"></div>
    </div>
  </div>
</section>

<!-- PROTOTYPE -->
<section id="prototype">
  <div class="container">
    <div class="reveal">
      <h2>Prototype Aircraft</h2>
      <p class="muted">Single prototype platform used for flight testing and subsystem validation.</p>
    </div>

    <div class="prototype reveal">
      <button onclick="showProto(0)">Current State</button>
      <button onclick="showProto(1)">Future Iteration</button>

      <div id="proto0" class="proto-state active">
        <p class="muted">
          Baseline airframe validating flight dynamics, avionics integration,
          and autonomous control behaviour within defined envelopes.
        </p>
      </div>

      <div id="proto1" class="proto-state">
        <p class="muted">
          Planned incremental upgrades based on flight test data,
          including expanded autonomy and system robustness.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="container reveal">
    <h2>About</h2>
    <p class="muted">
      Kourashi Systems is an early-stage Australian aerospace company.
      We prioritise engineering discipline, conservative claims,
      and measured progress from prototype to validated capability.
    </p>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <div class="container reveal">
    <h2>Contact</h2>
    <p class="muted">Partnership and technical inquiries.</p>
    <p><a href="mailto:hello@example.com">hello@example.com</a></p>
  </div>
</section>

</main>

<footer>
  © <span id="year"></span> Kourashi Systems — Australia
</footer>

<script>
/* =====================================================
   SINGLE-FILE INTERACTION LAYER
   ===================================================== */

document.getElementById("year").textContent = new Date().getFullYear();

/* Sticky header hide/show */
let lastScroll = 0;
const header = document.getElementById("site-header");

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 120) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScroll = current;
});

/* Reveal on scroll */
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  });
},{ threshold: 0.1 });

reveals.forEach(r => io.observe(r));

/* Technology Explorer Data */
const TECH = [
  {
    name: "Autonomy",
    text: "Prototype autonomous flight software focused on stability, navigation, and contingency handling."
  },
  {
    name: "Flight Controls",
    text: "Conventional fixed-wing control laws under incremental expansion through flight testing."
  },
  {
    name: "Airframe",
    text: "Test-oriented airframe designed for modification, instrumentation, and rapid iteration."
  },
  {
    name: "Communications",
    text: "Line-of-sight telemetry and command systems suitable for test and development operations."
  },
  {
    name: "Power",
    text: "Electrical power systems sized for prototype testing with safety margins."
  }
];

const techList = document.getElementById("techList");
const techPanel = document.getElementById("techPanel");

function selectTech(i){
  [...techList.children].forEach(b => b.classList.remove("active"));
  techList.children[i].classList.add("active");
  techPanel.innerHTML = `<h3>${TECH[i].name}</h3><p class="muted">${TECH[i].text}</p>`;
}

TECH.forEach((t,i)=>{
  const btn = document.createElement("button");
  btn.textContent = t.name;
  btn.onclick = ()=>selectTech(i);
  techList.appendChild(btn);
});

selectTech(0);

/* Prototype toggle */
function showProto(i){
  document.querySelectorAll(".proto-state").forEach(s=>s.classList.remove("active"));
  document.getElementById("proto"+i).classList.add("active");
}
</script>

</body>
</html>
