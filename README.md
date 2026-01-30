<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Apex Aerospace Systems</title>

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Tailwind Config -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            charcoal: '#111111',
            lightbg: '#ffffff',
            accent: '#1f2937'
          },
          fontFamily: {
            mono: ['ui-monospace', 'SFMono-Regular', 'Menlo']
          }
        }
      }
    }
  </script>

  <style>
    html { scroll-behavior: smooth; }
    body { background: #ffffff; color: #111111; }

    /* GRID BACKDROP */
    .grid-bg {
      background-image:
        linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    /* SCROLL REVEAL */
    .reveal { opacity: 0; transform: translateY(40px); transition: all 0.9s ease; }
    .reveal.active { opacity: 1; transform: none; }

    /* TERMINAL */
    .terminal {
      background: #f5f5f5;
      border: 1px solid #ccc;
      font-size: 0.9rem;
    }

    /* SLIDER */
    input[type=range]::-webkit-slider-thumb {
      appearance: none;
      width: 14px;
      height: 14px;
      background: #111;
      cursor: pointer;
    }
  </style>
</head>

<body class="font-mono">

<!-- NAV -->
<header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-black/10">
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <span class="tracking-widest">APEX AEROSPACE</span>
    <nav class="hidden md:flex gap-8 text-sm">
      <a href="#about">About</a>
      <a href="#systems">Systems</a>
      <a href="#projects">Projects</a>
      <a href="#tools">Tools</a>
      <a href="#data">Data</a>
      <a href="#contact">Contact</a>
    </nav>
    <button id="menuBtn" class="md:hidden">☰</button>
  </div>
</header>

<!-- MOBILE MENU -->
<div id="mobileMenu" class="hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl">
  <a onclick="toggleMenu()" href="#about">About</a>
  <a onclick="toggleMenu()" href="#systems">Systems</a>
  <a onclick="toggleMenu()" href="#projects">Projects</a>
  <a onclick="toggleMenu()" href="#tools">Tools</a>
  <a onclick="toggleMenu()" href="#data">Data</a>
  <a onclick="toggleMenu()" href="#contact">Contact</a>
</div>

<!-- HERO -->
<section class="h-screen flex items-center justify-center grid-bg">
  <div class="text-center reveal">
    <h1 class="text-6xl mb-6">Autonomous Aerospace Systems</h1>
    <p class="max-w-xl mx-auto text-gray-600 mb-10">Charcoal-on-white engineering platform for experimental aircraft, autonomy, and systems design.</p>
    <a href="#projects" class="px-8 py-3 border border-black hover:bg-black hover:text-white transition">View Work</a>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="py-32 max-w-6xl mx-auto px-6">
  <div class="reveal">
    <h2 class="text-3xl mb-6">Mission</h2>
    <p class="text-gray-700 leading-relaxed">Apex Aerospace focuses on experimental aircraft platforms built from first principles. All work follows structured systems engineering: requirements, trade studies, modelling, prototyping, and test.</p>
  </div>
</section>

<!-- SYSTEMS -->
<section id="systems" class="py-32 bg-gray-50">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-3xl mb-12 reveal">Core Systems</h2>
    <div class="grid md:grid-cols-3 gap-10">
      <div class="border p-6 reveal">
        <h3 class="mb-4">Aerodynamics</h3>
        <p class="text-gray-600">Airfoil analysis, Reynolds scaling, lift-drag modelling.</p>
      </div>
      <div class="border p-6 reveal">
        <h3 class="mb-4">Stability & Control</h3>
        <p class="text-gray-600">Static margins, dynamic modes, control authority sizing.</p>
      </div>
      <div class="border p-6 reveal">
        <h3 class="mb-4">Structures</h3>
        <p class="text-gray-600">Load paths, material selection, mass optimisation.</p>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="py-32 max-w-7xl mx-auto px-6">
  <h2 class="text-3xl mb-12 reveal">Projects</h2>
  <div class="grid md:grid-cols-2 gap-12">
    <div class="border p-8 reveal hover:bg-gray-50">
      <h3 class="mb-3">RC Trainer Aircraft</h3>
      <p class="text-gray-600">High-wing trainer designed using classical aircraft sizing methods.</p>
    </div>
    <div class="border p-8 reveal hover:bg-gray-50">
      <h3 class="mb-3">Autonomous Testbed</h3>
      <p class="text-gray-600">Concept UAV for autonomy, sensing, and control development.</p>
    </div>
  </div>
</section>

<!-- TOOLS -->
<section id="tools" class="py-32 bg-gray-50">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl mb-12 reveal">Engineering Tools</h2>
    <div class="grid md:grid-cols-2 gap-12">
      <div class="border p-6 reveal">
        <label>Velocity (m/s)</label>
        <input id="vel" type="range" min="5" max="40" value="15" class="w-full mb-4" />
        <label>Wing Area (m²)</label>
        <input id="area" type="range" min="0.3" max="2" step="0.1" value="0.8" class="w-full mb-4" />
        <button onclick="computeLift()" class="border px-6 py-2">Compute Lift</button>
      </div>
      <div class="border p-6 reveal">
        <h3 class="mb-4">Lift Output (N)</h3>
        <div id="liftOut" class="text-4xl">—</div>
      </div>
    </div>
  </div>
</section>

<!-- DATA -->
<section id="data" class="py-32 max-w-6xl mx-auto px-6">
  <h2 class="text-3xl mb-12 reveal">Live Engineering Data</h2>
  <canvas id="plot" width="600" height="300" class="border reveal"></canvas>
</section>

<!-- TERMINAL -->
<section class="py-32 bg-gray-50">
  <div class="max-w-6xl mx-auto px-6">
    <h2 class="text-3xl mb-6 reveal">System Console</h2>
    <div class="terminal p-4 reveal">
      <p>> Initialising systems...</p>
      <p>> Aerodynamic model loaded</p>
      <p>> Control laws stable</p>
      <p>> Awaiting commands</p>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-32 max-w-4xl mx-auto px-6 text-center">
  <h2 class="text-3xl mb-6 reveal">Contact</h2>
  <p class="text-gray-600 mb-8">Technical collaboration & engineering discussion.</p>
  <a href="mailto:you@example.com" class="border px-8 py-3 hover:bg-black hover:text-white transition">Get in Touch</a>
</section>

<script>
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn.onclick = toggleMenu;
  function toggleMenu(){ mobileMenu.classList.toggle('hidden') }

  const reveals = document.querySelectorAll('.reveal');
  window.addEventListener('scroll', () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if(top < window.innerHeight - 100) el.classList.add('active');
    })
  })

  function computeLift(){
    const rho = 1.225;
    const v = document.getElementById('vel').value;
    const s = document.getElementById('area').value;
    const cl = 0.6;
    const L = 0.5 * rho * v * v * s * cl;
    document.getElementById('liftOut').innerText = L.toFixed(1);
  }

  const canvas = document.getElementById('plot');
  const ctx = canvas.getContext('2d');
  ctx.moveTo(0,150);
  ctx.lineTo(600,150);
  ctx.stroke();
</script>

</body>
</html>
