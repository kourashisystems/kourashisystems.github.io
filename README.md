<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Joseph Alkourashi | Aerospace Engineering</title>
  <meta name="description" content="Joseph Alkourashi – Aerospace / Aerospace Systems Engineering portfolio. Projects, skills, and research." />

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Simple JS for interactivity -->
  <script defer>
    function toggleMenu() {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    }

    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
  </script>

  <style>
    html { scroll-behavior: smooth; }
  </style>
</head>
<body class="bg-slate-950 text-slate-100">

<!-- ================= NAVBAR ================= -->
<header class="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
  <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <div class="font-bold text-xl tracking-tight">JOSEPH ALKOURASHI</div>
    <div class="hidden md:flex gap-8 text-sm uppercase tracking-widest">
      <button onclick="scrollToSection('home')">Home</button>
      <button onclick="scrollToSection('about')">About</button>
      <button onclick="scrollToSection('projects')">Projects</button>
      <button onclick="scrollToSection('skills')">Skills</button>
      <button onclick="scrollToSection('contact')">Contact</button>
    </div>
    <button class="md:hidden" onclick="toggleMenu()">☰</button>
  </nav>
  <div id="mobileMenu" class="hidden md:hidden bg-slate-900 border-t border-slate-800">
    <div class="flex flex-col p-6 gap-4">
      <button onclick="scrollToSection('home')">Home</button>
      <button onclick="scrollToSection('about')">About</button>
      <button onclick="scrollToSection('projects')">Projects</button>
      <button onclick="scrollToSection('skills')">Skills</button>
      <button onclick="scrollToSection('contact')">Contact</button>
    </div>
  </div>
</header>

<!-- ================= HERO ================= -->
<section id="home" class="min-h-screen flex items-center pt-24">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p class="uppercase tracking-widest text-sky-400 text-sm">Aerospace Engineering Portfolio</p>
      <h1 class="text-5xl md:text-7xl font-bold leading-tight mt-4">Designing<br/>Aircraft &<br/>Aerospace Systems</h1>
      <p class="mt-6 text-slate-400 max-w-xl">Aerospace / Aerospace Systems Engineering student with a strong focus on aircraft design, RC aircraft, aerodynamics, and defence technology.</p>
      <div class="mt-10 flex gap-4">
        <button onclick="scrollToSection('projects')" class="px-8 py-4 bg-sky-500 text-black font-semibold">View Projects</button>
        <button onclick="scrollToSection('contact')" class="px-8 py-4 border border-slate-600">Contact</button>
      </div>
    </div>
    <div class="border border-slate-800 rounded-xl p-6 bg-slate-900">
      <h3 class="text-sm uppercase tracking-widest text-slate-400">Current Focus</h3>
      <ul class="mt-4 space-y-2 text-slate-300">
        <li>• RC Trainer Aircraft Design & Build</li>
        <li>• Aerodynamic Sizing & Stability</li>
        <li>• CAD (Fusion 360)</li>
        <li>• MATLAB / Simulink Analysis</li>
      </ul>
    </div>
  </div>
</section>

<!-- ================= ABOUT ================= -->
<section id="about" class="py-32 bg-slate-900/40">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
    <div>
      <h2 class="text-4xl font-bold mb-6">About Me</h2>
      <p class="text-slate-300 mb-4">I'm an Australian aerospace engineering student with a strong interest in aircraft design, autonomous systems, and defence applications.</p>
      <p class="text-slate-400">My approach is practical and engineering-driven: derive equations, validate assumptions, model in MATLAB, and build real systems such as RC aircraft.</p>
    </div>
    <div class="grid grid-cols-2 gap-6">
      <div class="border border-slate-800 p-6 rounded-lg">University-Level Aerospace</div>
      <div class="border border-slate-800 p-6 rounded-lg">Hands-on RC Aircraft</div>
      <div class="border border-slate-800 p-6 rounded-lg">Defence Technology Interest</div>
      <div class="border border-slate-800 p-6 rounded-lg">Strong Maths & Physics</div>
    </div>
  </div>
</section>

<!-- ================= PROJECTS ================= -->
<section id="projects" class="py-32">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl font-bold mb-12">Featured Projects</h2>
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 class="font-semibold text-xl">RC Trainer Aircraft</h3>
        <p class="text-slate-400 mt-2">Full design cycle: requirements, sizing, aerodynamics, CAD, and build readiness.</p>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 class="font-semibold text-xl">Aerodynamic Analysis Tools</h3>
        <p class="text-slate-400 mt-2">MATLAB scripts for lift, drag, performance, and stability estimation.</p>
      </div>
      <div class="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <h3 class="font-semibold text-xl">Future UAV Concepts</h3>
        <p class="text-slate-400 mt-2">Conceptual design of autonomous and defence-focused UAV systems.</p>
      </div>
    </div>
  </div>
</section>

<!-- ================= SKILLS ================= -->
<section id="skills" class="py-32 bg-slate-900/40">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl font-bold mb-12">Technical Skills</h2>
    <div class="grid md:grid-cols-4 gap-6">
      <div class="border border-slate-800 p-6 rounded-lg">Aerodynamics</div>
      <div class="border border-slate-800 p-6 rounded-lg">Aircraft Stability</div>
      <div class="border border-slate-800 p-6 rounded-lg">Fusion 360 CAD</div>
      <div class="border border-slate-800 p-6 rounded-lg">MATLAB / Simulink</div>
      <div class="border border-slate-800 p-6 rounded-lg">Python & C++ Basics</div>
      <div class="border border-slate-800 p-6 rounded-lg">Control Systems</div>
      <div class="border border-slate-800 p-6 rounded-lg">Engineering Maths</div>
      <div class="border border-slate-800 p-6 rounded-lg">Technical Documentation</div>
    </div>
  </div>
</section>

<!-- ================= CONTACT ================= -->
<section id="contact" class="py-32">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="text-4xl font-bold mb-6">Get in Touch</h2>
    <p class="text-slate-400 mb-10">Interested in aerospace engineering, projects, or collaboration.</p>
    <div class="space-y-3">
      <p>Email: your.email@example.com</p>
      <p>GitHub: github.com/yourusername</p>
      <p>LinkedIn: linkedin.com/in/yourname</p>
    </div>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer class="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
  © 2026 Joseph Alkourashi · Built with GitHub Pages
</footer>

</body>
</html>
