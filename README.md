<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Apex Aerospace Systems</title>

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Tailwind config -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            charcoal: '#0b0d10',
            charcoal2: '#12151b',
            accent: '#6ee7ff'
          },
          fontFamily: {
            mono: ['ui-monospace', 'SFMono-Regular']
          }
        }
      }
    }
  </script>

  <style>
    /* GLOBAL */
    html { scroll-behavior: smooth; }
    body { background:#0b0d10; }

    /* SCROLL REVEAL */
    .reveal { opacity:0; transform:translateY(30px); transition:all .8s ease }
    .reveal.active { opacity:1; transform:none }

    /* GRID BACKDROP */
    .grid-bg {
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
    }
  </style>
</head>

<body class="text-gray-200 font-mono">

<!-- NAV -->
<header class="fixed top-0 w-full z-50 backdrop-blur bg-black/40 border-b border-white/10">
  <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <span class="text-lg tracking-widest">APEX AEROSPACE</span>
    <nav class="hidden md:flex gap-8 text-sm">
      <a href="#about" class="hover:text-accent">About</a>
      <a href="#systems" class="hover:text-accent">Systems</a>
      <a href="#projects" class="hover:text-accent">Projects</a>
      <a href="#metrics" class="hover:text-accent">Metrics</a>
      <a href="#contact" class="hover:text-accent">Contact</a>
    </nav>
    <button id="menuBtn" class="md:hidden">☰</button>
  </div>
</header>

<!-- MOBILE MENU -->
<div id="mobileMenu" class="hidden fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center gap-8 text-xl">
  <a onclick="toggleMenu()" href="#about">About</a>
  <a onclick="toggleMenu()" href="#systems">Systems</a>
  <a onclick="toggleMenu()" href="#projects">Projects</a>
  <a onclick="toggleMenu()" href="#metrics">Metrics</a>
  <a onclick="toggleMenu()" href="#contact">Contact</a>
</div>

<!-- HERO -->
<section class="h-screen flex items-center justify-center grid-bg">
  <div class="text-center reveal">
    <h1 class="text-5xl md:text-7xl mb-6">Autonomous<br/>Aerospace Systems</h1>
    <p class="max-w-xl mx-auto text-gray-400 mb-10">Designing, simulating, and building aircraft systems with a defence-grade engineering mindset.</p>
    <a href="#projects" class="px-8 py-3 border border-white/20 hover:bg-white/10 transition">View Systems</a>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="py-32 max-w-6xl mx-auto px-6">
  <div class="reveal">
    <h2 class="text-3xl mb-6">Mission</h2>
    <p class="text-gray-400 leading-relaxed">
      Apex Aerospace develops experimental aircraft platforms with an emphasis on
      aerodynamic efficiency, stability, control, and manufacturability. All work
      follows structured systems engineering principles inspired by modern defence programs.
    </p>
  </div>
</section>

<!-- SYSTEMS -->
<section id="systems" class="py-32 bg-charcoal2">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-3xl mb-12 reveal">Core Systems</h2>
    <div class="grid md:grid-cols-3 gap-10">
      <div class="border border-white/10 p-6 reveal">
        <h3 class="mb-4">Aerodynamics</h3>
        <p class="text-gray-400">Airfoil selection, Reynolds analysis, lift/drag modelling, XFOIL validation.</p>
      </div>
      <div class="border border-white/10 p-6 reveal">
        <h3 class="mb-4">Stability & Control</h3>
        <p class="text-gray-400">Static margins, tail volume coefficients, longitudinal & lateral dynamics.</p>
      </div>
      <div class="border border-white/10 p-6 reveal">
        <h3 class="mb-4">Structures</h3>
        <p class="text-gray-400">Foam-composite structures, load paths, FEA-informed design decisions.</p>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="py-32 max-w-7xl mx-auto px-6">
  <h2 class="text-3xl mb-12 reveal">Featured Platforms</h2>
  <div class="grid md:grid-cols-2 gap-12">
    <div onclick="openModal('p1')" class="cursor-pointer border border-white/10 p-8 reveal hover:bg-white/5">
      <h3 class="mb-3">RC Trainer Aircraft</h3>
      <p class="text-gray-400">High-wing, stable training platform designed from first principles.</p>
    </div>
    <div onclick="openModal('p2')" class="cursor-pointer border border-white/10 p-8 reveal hover:bg-white/5">
      <h3 class="mb-3">Autonomous Testbed</h3>
      <p class="text-gray-400">Concept UAV platform for future autonomy integration.</p>
    </div>
  </div>
</section>

<!-- METRICS -->
<section id="metrics" class="py-32 bg-charcoal2">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <h2 class="text-3xl mb-16 reveal">Engineering Output</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12">
      <div class="reveal"><div class="text-5xl counter" data-target="120">0</div><p>CAD Hours</p></div>
      <div class="reveal"><div class="text-5xl counter" data-target="35">0</div><p>MATLAB Scripts</p></div>
      <div class="reveal"><div class="text-5xl counter" data-target="4">0</div><p>Aircraft Concepts</p></div>
      <div class="reveal"><div class="text-5xl counter" data-target="1">0</div><p>Built Prototype</p></div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-32 max-w-4xl mx-auto px-6 text-center">
  <h2 class="text-3xl mb-6 reveal">Contact</h2>
  <p class="text-gray-400 mb-8">Engineering collaboration & technical discussion.</p>
  <a href="mailto:youremail@example.com" class="border px-8 py-3 hover:bg-white/10 transition">Get in Touch</a>
</section>

<!-- PROJECT MODALS -->
<div id="modal" class="hidden fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
  <div class="max-w-2xl border border-white/10 p-8 relative">
    <button onclick="closeModal()" class="absolute top-4 right-4">✕</button>
    <div id="modalContent"></div>
  </div>
</div>

<script>
  /* MOBILE MENU */
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn.onclick = toggleMenu;
  function toggleMenu(){ mobileMenu.classList.toggle('hidden') }

  /* SCROLL REVEAL */
  const reveals = document.querySelectorAll('.reveal');
  window.addEventListener('scroll', () => {
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if(top < window.innerHeight - 100) el.classList.add('active');
    })
  })

  /* COUNTERS */
  const counters = document.querySelectorAll('.counter');
  let counterStarted = false;
  window.addEventListener('scroll', () => {
    if(counterStarted) return;
    const metrics = document.getElementById('metrics').getBoundingClientRect().top;
    if(metrics < window.innerHeight){
      counterStarted = true;
      counters.forEach(counter => {
        const target = +counter.dataset.target;
        let val = 0;
        const step = target / 100;
        const interval = setInterval(() => {
          val += step;
          counter.innerText = Math.floor(val);
          if(val >= target){ counter.innerText = target; clearInterval(interval) }
        }, 20)
      })
    }
  })

  /* MODALS */
  function openModal(id){
    const content = {
      p1:`<h3 class='text-xl mb-4'>RC Trainer Aircraft</h3><p class='text-gray-400'>Designed using classical aerodynamic theory, sized via wing loading and power-to-weight trade studies. Built as a physical prototype.</p>`,
      p2:`<h3 class='text-xl mb-4'>Autonomous Testbed</h3><p class='text-gray-400'>Conceptual UAV platform designed to support future autonomy and sensor integration.</p>`
    }
    document.getElementById('modalContent').innerHTML = content[id];
    document.getElementById('modal').classList.remove('hidden');
  }
  function closeModal(){ document.getElementById('modal').classList.add('hidden') }
</script>

</body>
</html>
