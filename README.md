<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Apex Aerospace</title>
  <!-- Tailwind CDN (OK for GitHub Pages demos/portfolios) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html, body { scroll-behavior: smooth; }
  </style>
</head>
<body class="bg-white text-black">

<!-- Header -->
<header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
  <nav class="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
    <div class="text-2xl font-bold tracking-tight">APEX AEROSPACE</div>
    <div class="hidden md:flex gap-8 text-sm uppercase tracking-wider">
      <a href="#home" class="hover:text-black/60">Home</a>
      <a href="#mission" class="hover:text-black/60">Mission</a>
      <a href="#capabilities" class="hover:text-black/60">Capabilities</a>
      <a href="#contact" class="hover:text-black/60">Contact</a>
    </div>
  </nav>
</header>

<!-- Hero -->
<section id="home" class="relative h-screen flex items-center">
  <img src="https://static.wixstatic.com/media/88c391_7022e2d86a2c47198b05ca4da730ea36~mv2.png" class="absolute inset-0 w-full h-full object-cover opacity-10" />
  <div class="relative max-w-7xl mx-auto px-8">
    <h1 class="text-[14vw] md:text-8xl font-bold leading-[0.85] tracking-tight">INNOVATE</h1>
    <h1 class="text-[14vw] md:text-8xl font-bold leading-[0.85] tracking-tight">EXPLORE</h1>
    <h1 class="text-[14vw] md:text-8xl font-bold leading-[0.85] tracking-tight">CONQUER</h1>
    <div class="mt-12 max-w-xl">
      <p class="text-sm uppercase tracking-widest text-black/50">// System Status: Online</p>
      <p class="text-lg mt-4 text-black/70">Redefining aerospace technology through autonomous systems, precision engineering, and innovation.</p>
      <a href="#mission" class="inline-block mt-8 px-8 py-4 bg-black text-white uppercase tracking-wider text-sm">Explore Mission →</a>
    </div>
  </div>
</section>

<!-- Mission -->
<section id="mission" class="py-32 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16">
  <div>
    <p class="uppercase tracking-widest text-black/40 mb-4">Mission Protocol</p>
    <h2 class="text-5xl font-bold leading-tight">Building the Future of Aerospace</h2>
    <p class="mt-6 text-black/60">We develop advanced aerospace and autonomous technologies focused on performance, security, and precision.</p>
  </div>
  <img src="https://static.wixstatic.com/media/88c391_a6ec62a859da4cb2bc36b5dd96453724~mv2.png" class="w-full rounded border border-black/10" />
</section>

<!-- Principles -->
<section class="border-t border-black/10 grid md:grid-cols-4">
  <div class="p-12 border-r border-black/10"><h3 class="font-bold">Security</h3><p class="text-sm text-black/60 mt-2">Defense-grade systems.</p></div>
  <div class="p-12 border-r border-black/10"><h3 class="font-bold">Innovation</h3><p class="text-sm text-black/60 mt-2">Next-gen aerospace tech.</p></div>
  <div class="p-12 border-r border-black/10"><h3 class="font-bold">Performance</h3><p class="text-sm text-black/60 mt-2">Optimised efficiency.</p></div>
  <div class="p-12"><h3 class="font-bold">Precision</h3><p class="text-sm text-black/60 mt-2">Engineered accuracy.</p></div>
</section>

<!-- Capabilities -->
<section id="capabilities" class="py-32 max-w-7xl mx-auto px-8">
  <h2 class="text-5xl font-bold mb-12">Capabilities</h2>
  <div class="grid md:grid-cols-4 gap-8">
    <div class="p-8 border border-black/10 hover:bg-black hover:text-white transition">Aerial Surveillance</div>
    <div class="p-8 border border-black/10 hover:bg-black hover:text-white transition">Ground Defense</div>
    <div class="p-8 border border-black/10 hover:bg-black hover:text-white transition">Orbital Systems</div>
    <div class="p-8 border border-black/10 hover:bg-black hover:text-white transition">Cyber Operations</div>
  </div>
</section>

<!-- CTA -->
<section class="py-32 bg-black text-white text-center">
  <h2 class="text-6xl font-bold mb-8">Ready to Transform?</h2>
  <p class="text-white/60 max-w-xl mx-auto">Partner with us to shape the future of aerospace engineering.</p>
  <div class="mt-12 flex justify-center gap-6">
    <a href="#contact" class="px-10 py-5 bg-white text-black uppercase font-bold">Contact</a>
    <a href="#capabilities" class="px-10 py-5 border border-white uppercase font-bold">View Systems</a>
  </div>
</section>

<!-- Footer -->
<footer id="contact" class="bg-black text-white/60 py-16">
  <div class="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
    <div>
      <h3 class="text-white font-bold mb-4">APEX AEROSPACE</h3>
      <p class="text-sm">Engineering the future of flight.</p>
    </div>
    <div>
      <h4 class="uppercase text-sm mb-4 text-white">Links</h4>
      <ul class="space-y-2 text-sm">
        <li><a href="#home">Home</a></li>
        <li><a href="#mission">Mission</a></li>
        <li><a href="#capabilities">Capabilities</a></li>
      </ul>
    </div>
    <div>
      <h4 class="uppercase text-sm mb-4 text-white">Contact</h4>
      <p class="text-sm">info@apexaerospace.com</p>
    </div>
  </div>
  <p class="text-center text-xs mt-12">© 2026 Apex Aerospace</p>
</footer>

</body>
</html>
