<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Joseph Alkourashi | Aerospace Engineering</title>
  <meta name="description" content="Aerospace engineering portfolio – aircraft, autonomous systems, and defence technology." />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Custom Tailwind config -->
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

  <!-- Interactivity -->
  <script defer>
    function toggleMenu() {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    }

    function revealOnScroll() {
      document.querySelectorAll('[data-reveal]').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
  </script>
</head>
<body class="bg-charcoal text-white font-sans">

<!-- ================= NAV ================= -->
<header class="fixed top-0 w-full z-50 bg-charcoal/80 backdrop-blur border-b border-white/5">
  <nav class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
    <div class="text-lg font-semibold tracking-widest">JOSEPH ALKOURASHI</div>
    <div class="hidden md:flex gap-10 text-sm uppercase tracking-widest text-steel">
      <a href="#home" class="hover:text-white">Home</a>
      <a href="#mission" class="hover:text-white">Mission</a>
      <a href="#projects" class="hover:text-white">Projects</a>
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
      <a href="#capabilities">Capabilities</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</header>

<!-- ================= HERO ================= -->
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
        <li>• RC & Fixed-Wing Aircraft Design</li>
        <li>• Aerodynamic & Stability Analysis</li>
        <li>• MATLAB / Simulink Modelling</li>
        <li>• CAD (Fusion 360)</li>
      </ul>
    </div>
  </div>
</section>

<!-- ================= MISSION ================= -->
<section id="mission" class="py-40 bg-charcoalLight">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
    <div data-reveal class="opacity-0 translate-y-10 transition duration-700">
      <p class="uppercase tracking-widest text-accent text-sm mb-4">Mission</p>
      <h2 class="text-4xl md:text-5xl font-bold">Engineering the Future of Flight</h2>
      <p class="mt-6 text-steel">My work focuses on aircraft systems, autonomy, and aerospace design — from first principles to physical implementation.</p>
    </div>
    <div data-reveal class="opacity-0 translate-y-10 transition duration-700 delay-150 grid grid-cols-2 gap-6">
      <div class="border border-white/10 p-6">Systems Thinking</div>
      <div class="border border-white/10 p-6">Defence Awareness</div>
      <div class="border border-white/10 p-6">Physics-Driven Design</div>
      <div class="border border-white/10 p-6">Real Hardware</div>
    </div>
  </div>
</section>

<!-- ================= PROJECTS ================= -->
<section id="projects" class="py-40">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl md:text-5xl font-bold mb-16">Selected Projects</h2>
    <div class="grid md:grid-cols-3 gap-10">
      <div data-reveal class="opacity-0 translate-y-10 transition duration-700 bg-charcoalLight border border-white/10 p-8">
        <h3 class="text-xl font-semibold">RC Trainer Aircraft</h3>
        <p class="text-steel mt-3">Complete aircraft design cycle including sizing, aerodynamics, CAD, and build readiness.</p>
      </div>
      <div data-reveal class="opacity-0 translate-y-10 transition duration-700 delay-150 bg-charcoalLight border border-white/10 p-8">
        <h3 class="text-xl font-semibold">Aerodynamic Analysis Tools</h3>
        <p class="text-steel mt-3">MATLAB-based performance, lift/drag, and stability estimation tools.</p>
      </div>
      <div data-reveal class="opacity-0 translate-y-10 transition duration-700 delay-300 bg-charcoalLight border border-white/10 p-8">
        <h3 class="text-xl font-semibold">Autonomous UAV Concepts</h3>
        <p class="text-steel mt-3">Conceptual UAV designs with autonomy and defence applications.</p>
      </div>
    </div>
  </div>
</section>

<!-- ================= CAPABILITIES ================= -->
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
      <div class="border border-white/10 p-6">Technical Reporting</div>
      <div class="border border-white/10 p-6">Systems Integration</div>
    </div>
  </div>
</section>

<!-- ================= CONTACT ================= -->
<section id="contact" class="py-40">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="text-4xl md:text-5xl font-bold mb-8">Contact</h2>
    <p class="text-steel mb-10">Open to internships, engineering collaboration, and aerospace discussion.</p>
    <div class="space-y-2 text-sm">
      <p>Email: your.email@example.com</p>
      <p>GitHub: github.com/yourusername</p>
      <p>LinkedIn: linkedin.com/in/yourname</p>
    </div>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer class="border-t border-white/5 py-10 text-center text-steel text-xs">
  © 2026 Joseph Alkourashi · GitHub Pages
</footer>

</body>
</html>
