<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Joseph Alkourashi | Aerospace Engineering</title>
  <meta name="description" content="Aerospace engineering portfolio – aircraft, autonomous systems, and defence technology." />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Tailwind config -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            charcoal: '#0b0d10',
            charcoalLight: '#12151a',
            steel: '#9ca3af',
            accent: '#38bdf8'
          }
        }
      }
    }
  </script>

  <style>
    html { scroll-behavior: smooth; }
  </style>

  <!-- Interactivity JS -->
  <script defer>
    function toggleMenu() {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    }

    function revealOnScroll() {
      document.querySelectorAll('[data-reveal]').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 120) {
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }

    function openModal(id) {
      document.getElementById(id).classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    function animateCounters() {
      document.querySelectorAll('[data-counter]').forEach(counter => {
        const target = +counter.dataset.counter;
        let current = 0;
        const step = Math.max(1, Math.floor(target / 60));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          counter.textContent = current;
        }, 20);
      });
    }

    window.addEventListener('scroll', () => {
      revealOnScroll();
      const metrics = document.getElementById('metrics');
      if (metrics && metrics.getBoundingClientRect().top < window.innerHeight - 120 && !metrics.dataset.done) {
        metrics.dataset.done = 'true';
        animateCounters();
      }
    });

    window.addEventListener('load', revealOnScroll);
  </script>
</head>
<body class="bg-charcoal text-white font-sans">

<!-- NAV -->
<header class="fixed top-0 w-full z-50 bg-charcoal/80 backdrop-blur border-b border-white/5">
  <nav class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
    <div class="text-lg font-semibold tracking-widest">JOSEPH ALKOURASHI</div>
    <div class="hidden md:flex gap-10 text-sm uppercase tracking-widest text-steel">
      <a href="#home" class="hover:text-white">Home</a>
      <a href="#mission" class="hover:text-white">Mission</a>
      <a href="#projects" class="hover:text-white">Projects</a>
      <a href="#systems" class="hover:text-white">Systems</a>
      <a href="#capabilities" class="hover:text-white">Capabilities</a>
      <a href="#contact" class="hover:text-white">Contact</a>
    </div>
    <button class="md:hidden text-xl" onclick="toggleMenu()">☰</button>
  </nav>
  <div id="mobileMenu" class="hidden bg-charcoalLight border-t border-white/5">
    <div class="flex flex-col p-6 gap-4 uppercase tracking-widest text-sm">
      <a href="#home">Home</a>
      <a href="#mission">Mission</a>
      <a href="#projects">Projects</a>
      <a href="#systems">Systems</a>
      <a href="#capabilities">Capabilities</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</header>

<!-- HERO -->
<section id="home" class="min-h-screen flex items-center pt-24">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
    <div>
      <p class="uppercase tracking-widest text-accent text-sm">Aerospace Engineering</p>
      <h1 class="text-5xl md:text-7xl font-bold leading-tight mt-6">Autonomous.<br/>Precise.<br/>Engineered.</h1>
      <p class="mt-8 text-steel max-w-xl">Designing aircraft and aerospace systems with a focus on performance, autonomy, and defence-grade engineering.</p>
      <div class="mt-12 flex gap-4">
        <a href="#projects" class="px-8 py-4 bg-white text-black font-semibold">View Projects</a>
        <a href="#contact" class="px-8 py-4 border border-white/20">Contact</a>
      </div>
    </div>
    <div class="bg-charcoalLight border border-white/10 rounded-xl p-8">
      <p class="uppercase tracking-widest text-steel text-xs">Current Focus</p>
      <ul class="mt-4 space-y-3 text-sm">
        <li>• Fixed-wing aircraft design</li>
        <li>• Aerodynamic & stability analysis</li>
        <li>• MATLAB / Simulink modelling</li>
        <li>• CAD (Fusion 360)</li>
      </ul>
    </div>
  </div>
</section>

<!-- MISSION -->
<section id="mission" class="py-40 bg-charcoalLight">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
    <div data-reveal class="opacity-0 translate-y-10 transition duration-700">
      <p class="uppercase tracking-widest text-accent text-sm mb-4">Mission</p>
      <h2 class="text-4xl md:text-5xl font-bold">Engineering the Future of Flight</h2>
      <p class="mt-6 text-steel">From first principles to flight-ready systems, my work focuses on aircraft, autonomy, and defence-aware engineering.</p>
    </div>
    <div data-reveal class="opacity-0 translate-y-10 transition duration-700 delay-150 grid grid-cols-2 gap-6">
      <div class="border border-white/10 p-6">Systems Thinking</div>
      <div class="border border-white/10 p-6">Physics-Driven Design</div>
      <div class="border border-white/10 p-6">Hardware Validation</div>
      <div class="border border-white/10 p-6">Technical Rigor</div>
    </div>
  </div>
</section>

<!-- METRICS -->
<section id="metrics" class="py-32">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
    <div>
      <div class="text-5xl font-bold" data-counter="120">0</div>
      <p class="mt-2 text-steel">Hours CAD & Design</p>
    </div>
    <div>
      <div class="text-5xl font-bold" data-counter="35">0</div>
      <p class="mt-2 text-steel">MATLAB Scripts</p>
    </div>
    <div>
      <div class="text-5xl font-bold" data-counter="4">0</div>
      <p class="mt-2 text-steel">Aircraft Concepts</p>
    </div>
    <div>
      <div class="text-5xl font-bold" data-counter="1">0</div>
      <p class="mt-2 text-steel">Flight Vehicle Built</p>
    </div>
  </div>
</section>

<!-- PROJECTS -->
<section id="projects" class="py-40 bg-charcoalLight">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-bold mb-16">Selected Projects</h2>
    <div class="grid md:grid-cols-3 gap-10">
      <div data-reveal class="opacity-0 translate-y-10 transition duration-700 bg-charcoal border border-white/10 p-8 cursor-pointer" onclick="openModal('modal-rc')">
        <h3 class="text-xl font-semibold">RC Trainer Aircraft</h3>
        <p class="text-steel mt-3">End-to-end aircraft design and build.</p>
        <p class="mt-4 text-accent text-sm">View details →</p>
      </div>
      <div data-reveal class="opacity-0 translate-y-10 transition duration-700 delay-150 bg-charcoal border border-white/10 p-8 cursor-pointer" onclick="openModal('modal-aero')">
        <h3 class="text-xl font-semibold">Aerodynamic Tools</h3>
        <p class="text-steel mt-3">Performance and stability analysis.</p>
        <p class="mt-4 text-accent text-sm">View details →</p>
      </div>
      <div data-reveal class="opacity-0 translate-y-10 transition duration-700 delay-300 bg-charcoal border border-white/10 p-8">
        <h3 class="text-xl font-semibold">Autonomous UAV Concepts</h3>
        <p class="text-steel mt-3">Defence-oriented conceptual systems.</p>
      </div>
    </div>
  </div>
</section>

<!-- SYSTEMS TIMELINE -->
<section id="systems" class="py-40">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-bold mb-16">System Development Flow</h2>
    <div class="space-y-8">
      <div class="border-l border-white/10 pl-6">Requirements → Constraints → Trade Studies</div>
      <div class="border-l border-white/10 pl-6">Aerodynamics → Stability → Control</div>
      <div class="border-l border-white/10 pl-6">CAD → Manufacturing → Assembly</div>
      <div class="border-l border-white/10 pl-6">Ground Testing → Flight Testing</div>
    </div>
  </div>
</section>

<!-- CAPABILITIES -->
<section id="capabilities" class="py-40 bg-charcoalLight">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-bold mb-16">Capabilities</h2>
    <div class="grid md:grid-cols-4 gap-6">
      <div class="border border-white/10 p-6">Aircraft Aerodynamics</div>
      <div class="border border-white/10 p-6">Flight Stability & Control</div>
      <div class="border border-white/10 p-6">CAD & Manufacturing</div>
      <div class="border border-white/10 p-6">MATLAB / Simulink</div>
      <div class="border border-white/10 p-6">Autonomous Systems</div>
      <div class="border border-white/10 p-6">Engineering Mathematics</div>
      <div class="border border-white/10 p-6">Technical Documentation</div>
      <div class="border border-white/10 p-6">Systems Integration</div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-40">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="text-4xl md:text-5xl font-bold mb-8">Contact</h2>
    <p class="text-steel mb-10">Open to internships, research, and aerospace collaboration.</p>
    <div class="space-y-2 text-sm">
      <p>Email: your.email@example.com</p>
      <p>GitHub: github.com/yourusername</p>
      <p>LinkedIn: linkedin.com/in/yourname</p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="border-t border-white/5 py-10 text-center text-steel text-xs">© 2026 Joseph Alkourashi · GitHub Pages</footer>

<!-- MODALS -->
<div id="modal-rc" class="hidden fixed inset-0 bg-black/80 flex items-center justify-center p-6">
  <div class="bg-charcoalLight max-w-xl w-full p-8 border border-white/10">
    <h3 class="text-2xl font-bold mb-4">RC Trainer Aircraft</h3>
    <p class="text-steel">Requirements, sizing, aero analysis, CAD, and build preparation.</p>
    <button class="mt-6 text-accent" onclick="closeModal('modal-rc')">Close</button>
  </div>
</div>

<div id="modal-aero" class="hidden fixed inset-0 bg-black/80 flex items-center justify-center p-6">
  <div class="bg-charcoalLight max-w-xl w-full p-8 border border-white/10">
    <h3 class="text-2xl font-bold mb-4">Aerodynamic Tools</h3>
    <p class="text-steel">MATLAB scripts for lift, drag, envelopes, and stability margins.</p>
    <button class="mt-6 text-accent" onclick="closeModal('modal-aero')">Close</button>
  </div>
</div>

</body>
</html>
