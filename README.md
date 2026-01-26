<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Australian Aerospace & Defence Systems</title>

  <!-- FONT -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg: #0b0d10;
      --panel: #12151b;
      --border: #1e2430;
      --text: #e6e6e6;
      --muted: #9aa0a6;
      --accent: #5eead4;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Inter', system-ui, sans-serif;
    }

    body {
      background: var(--bg);
      color: var(--text);
      overflow-x: hidden;
    }

    /* ---------- NAVBAR ---------- */
    nav {
      position: fixed;
      top: 0;
      width: 100%;
      padding: 20px 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(11,13,16,0.7);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
      z-index: 1000;
    }

    nav span {
      font-weight: 600;
      letter-spacing: 0.05em;
      font-size: 0.9rem;
    }

    /* ---------- SECTIONS ---------- */
    section {
      padding: 120px 10%;
      border-bottom: 1px solid var(--border);
    }

    h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      letter-spacing: -0.03em;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      letter-spacing: -0.02em;
    }

    p {
      color: var(--muted);
      max-width: 700px;
      line-height: 1.7;
    }

    /* ---------- HERO ---------- */
    #hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }

    .hero-inner {
      opacity: 0;
      transform: translateY(40px);
      transition: 1s ease;
    }

    .hero-inner.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ---------- TECH MODULES ---------- */
    .tech-grid {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: 40px;
      margin-top: 40px;
    }

    .tech-list button {
      display: block;
      width: 100%;
      margin-bottom: 12px;
      padding: 14px 18px;
      background: transparent;
      border: 1px solid var(--border);
      color: var(--text);
      text-align: left;
      cursor: pointer;
      transition: 0.3s ease;
    }

    .tech-list button:hover,
    .tech-list button.active {
      border-color: var(--accent);
      color: var(--accent);
    }

    .tech-panel {
      background: var(--panel);
      border: 1px solid var(--border);
      padding: 30px;
      min-height: 180px;
      animation: fadeIn 0.4s ease;
    }

    /* ---------- PROTOTYPE ---------- */
    .prototype-box {
      margin-top: 40px;
      padding: 40px;
      background: linear-gradient(145deg, #10141c, #0b0d10);
      border: 1px solid var(--border);
      position: relative;
    }

    .hotspot {
      position: absolute;
      width: 14px;
      height: 14px;
      background: var(--accent);
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 0 15px var(--accent);
    }

    .tooltip {
      position: absolute;
      background: #0f131a;
      border: 1px solid var(--border);
      padding: 12px;
      font-size: 0.85rem;
      max-width: 200px;
      display: none;
    }

    /* ---------- FOOTER ---------- */
    footer {
      padding: 40px 10%;
      font-size: 0.8rem;
      color: var(--muted);
    }

    /* ---------- ANIMATIONS ---------- */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>

<body>

  <!-- NAV -->
  <nav>
    <span>AUSTRALIAN AEROSPACE SYSTEMS</span>
    <span>DEFENCE & AUTONOMY</span>
  </nav>

  <!-- HERO -->
  <section id="hero">
    <div class="hero-inner">
      <h1>Next-Generation Autonomous Aerospace Systems</h1>
      <p style="margin-top:20px;">
        An Australian aerospace and defence startup developing prototype-stage
        autonomous aircraft with a focus on systems engineering, rapid iteration,
        and sovereign capability.
      </p>
    </div>
  </section>

  <!-- TECHNOLOGY -->
  <section>
    <h2>Technology</h2>

    <div class="tech-grid">
      <div class="tech-list">
        <button class="active" onclick="selectTech('autonomy', this)">Autonomy</button>
        <button onclick="selectTech('airframe', this)">Airframe</button>
        <button onclick="selectTech('avionics', this)">Avionics</button>
        <button onclick="selectTech('power', this)">Power & Propulsion</button>
      </div>

      <div class="tech-panel" id="tech-panel">
        Prototype-level autonomous flight logic focused on stability, safety,
        and deterministic behaviour rather than over-automation.
      </div>
    </div>
  </section>

  <!-- PROTOTYPE -->
  <section>
    <h2>Prototype Aircraft</h2>
    <p>
      Our current aircraft is a constrained test platform designed to validate
      autonomy, control laws, and systems integration through disciplined flight
      testing.
    </p>

    <div class="prototype-box">
      <div class="hotspot" style="top:40%; left:30%;" onclick="showTip(event, 'Flight control surfaces under active iteration.')"></div>
      <div class="hotspot" style="top:55%; left:55%;" onclick="showTip(event, 'Electric propulsion selected for reliability and simplicity.')"></div>
      <div class="tooltip" id="tooltip"></div>
    </div>
  </section>

  <!-- ABOUT -->
  <section>
    <h2>About</h2>
    <p>
      We are an engineer-led Australian startup focused on long-term aerospace and
      defence capability development. Our approach prioritises testing, iteration,
      and systems discipline over speculative claims.
    </p>
  </section>

  <!-- CONTACT -->
  <section>
    <h2>Contact</h2>
    <p>Partnership and technical enquiries:</p>
    <p style="margin-top:10px;">contact@yourcompany.com</p>
  </section>

  <footer>
    © <span id="year"></span> Australian Aerospace Systems — Australia
  </footer>

  <script>
    // HERO REVEAL
    window.addEventListener('load', () => {
      document.querySelector('.hero-inner').classList.add('visible');
      document.getElementById('year').textContent = new Date().getFullYear();
    });

    // TECH MODULE SWITCH
    const techContent = {
      autonomy: "Prototype-level autonomous flight logic focused on stability, safety, and deterministic behaviour rather than over-automation.",
      airframe: "Fixed-wing airframe optimised for rapid modification, repair, and test-flight learning cycles.",
      avionics: "Custom avionics stack integrating sensing, control, and telemetry for development-stage experimentation.",
      power: "Electric propulsion architecture prioritising reliability, maintainability, and repeatable test results."
    };

    function selectTech(key, btn) {
      document.getElementById('tech-panel').textContent = techContent[key];
      document.querySelectorAll('.tech-list button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }

    // TOOLTIP
    function showTip(e, text) {
      const tip = document.getElementById('tooltip');
      tip.textContent = text;
      tip.style.display = 'block';
      tip.style.left = e.pageX + 'px';
      tip.style.top = e.pageY + 'px';
    }

    document.body.addEventListener('click', (e) => {
      if (!e.target.classList.contains('hotspot')) {
        document.getElementById('tooltip').style.display = 'none';
      }
    });
  </script>

</body>
</html>
