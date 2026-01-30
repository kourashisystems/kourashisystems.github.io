<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Apex Aerospace Systems</title>

<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          charcoal: '#111111',
          accent: '#1f2937'
        },
        fontFamily: {
          mono: ['ui-monospace','SFMono-Regular','Menlo']
        }
      }
    }
  }
</script>

<style>
html{scroll-behavior:smooth}
body{background:#ffffff;color:#111111}
.reveal{opacity:0;transform:translateY(40px);transition:all .9s ease}
.reveal.active{opacity:1;transform:none}
.grid-bg{background-image:linear-gradient(rgba(0,0,0,.04)1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.04)1px,transparent 1px);background-size:60px 60px}
input,select{border:1px solid #111;padding:6px}
canvas{background:#fff}
</style>
</head>

<body class="font-mono">

<!-- NAV -->
<header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b">
<div class="max-w-7xl mx-auto px-6 py-4 flex justify-between">
<span class="tracking-widest">APEX AEROSPACE</span>
<nav class="hidden md:flex gap-8 text-sm">
<a href="#mission">Mission</a>
<a href="#capabilities">Capabilities</a>
<a href="#physics">Physics</a>
<a href="#visuals">Visuals</a>
<a href="#platforms">Platforms</a>
<a href="#contact">Contact</a>
</nav>
<button id="menuBtn" class="md:hidden">☰</button>
</div>
</header>

<div id="mobileMenu" class="hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 text-xl">
<a onclick="toggleMenu()" href="#mission">Mission</a>
<a onclick="toggleMenu()" href="#capabilities">Capabilities</a>
<a onclick="toggleMenu()" href="#physics">Physics</a>
<a onclick="toggleMenu()" href="#visuals">Visuals</a>
<a onclick="toggleMenu()" href="#platforms">Platforms</a>
<a onclick="toggleMenu()" href="#contact">Contact</a>
</div>

<!-- HERO -->
<section class="h-screen flex items-center justify-center grid-bg">
<div class="text-center reveal">
<h1 class="text-6xl mb-6">Autonomous Aerospace Systems</h1>
<p class="max-w-xl mx-auto text-gray-600 mb-10">White-paper aesthetic. Defence-grade systems engineering. Physics-first design.</p>
</div>
</section>

<!-- MISSION -->
<section id="mission" class="py-32 max-w-6xl mx-auto px-6">
<div class="reveal">
<h2 class="text-3xl mb-6">Mission</h2>
<p class="text-gray-700">Design and validate experimental aircraft platforms using aerodynamic theory, stability analysis, control laws, and hardware testing. Every system is treated as a first-principles engineering problem.</p>
</div>
</section>

<!-- CAPABILITIES -->
<section id="capabilities" class="py-32 bg-gray-50">
<div class="max-w-7xl mx-auto px-6">
<h2 class="text-3xl mb-12 reveal">Capabilities</h2>
<div class="grid md:grid-cols-3 gap-10">
<div class="border p-6 reveal"><h3>Aerodynamics</h3><p class="text-gray-600">Lift, drag, Reynolds effects, airfoil analysis</p></div>
<div class="border p-6 reveal"><h3>Stability</h3><p class="text-gray-600">Static margin, tail volume, neutral point</p></div>
<div class="border p-6 reveal"><h3>Control</h3><p class="text-gray-600">Control surface sizing, authority, response</p></div>
</div>
</div>
</section>

<!-- PHYSICS TOOLS -->
<section id="physics" class="py-32 max-w-7xl mx-auto px-6">
<h2 class="text-3xl mb-12 reveal">Physics & Engineering Tools</h2>

<!-- AERO -->
<div class="grid md:grid-cols-2 gap-12 mb-20">
<div class="border p-6 reveal">
<h3 class="mb-4">Lift Calculator</h3>
<label>Velocity (m/s)</label>
<input id="v" type="number" value="15" class="w-full mb-2" />
<label>Wing Area (m²)</label>
<input id="S" type="number" value="0.8" class="w-full mb-2" />
<label>CL</label>
<input id="CL" type="number" value="0.6" class="w-full mb-4" />
<button onclick="calcLift()" class="border px-4 py-2">Compute Lift</button>
</div>
<div class="border p-6 reveal">
<h3>Lift Output (N)</h3>
<div id="liftOut" class="text-4xl">—</div>
</div>
</div>

<!-- STABILITY -->
<div class="grid md:grid-cols-2 gap-12 mb-20">
<div class="border p-6 reveal">
<h3 class="mb-4">Static Margin</h3>
<label>CG Location (% MAC)</label>
<input id="cg" type="number" value="30" class="w-full mb-2" />
<label>Neutral Point (% MAC)</label>
<input id="np" type="number" value="40" class="w-full mb-4" />
<button onclick="calcSM()" class="border px-4 py-2">Compute SM</button>
</div>
<div class="border p-6 reveal">
<h3>Static Margin</h3>
<div id="smOut" class="text-4xl">—</div>
</div>
</div>

<!-- REYNOLDS -->
<div class="grid md:grid-cols-2 gap-12">
<div class="border p-6 reveal">
<h3 class="mb-4">Reynolds Number</h3>
<label>Velocity (m/s)</label>
<input id="rv" type="number" value="15" class="w-full mb-2" />
<label>Chord (m)</label>
<input id="c" type="number" value="0.25" class="w-full mb-4" />
<button onclick="calcRe()" class="border px-4 py-2">Compute Re</button>
</div>
<div class="border p-6 reveal">
<h3>Re</h3>
<div id="reOut" class="text-4xl">—</div>
</div>
</div>
</section>

<!-- VISUALS -->
<section id="visuals" class="py-32 bg-gray-50">
<div class="max-w-7xl mx-auto px-6">
<h2 class="text-3xl mb-12 reveal">Visual Systems</h2>

<svg viewBox="0 0 800 300" class="w-full border mb-12 reveal">
<line x1="50" y1="150" x2="750" y2="150" stroke="#111" stroke-width="2" />
<circle cx="200" cy="150" r="10" fill="#111" />
<circle cx="400" cy="150" r="10" fill="#111" />
<circle cx="600" cy="150" r="10" fill="#111" />
<text x="170" y="190">Propulsion</text>
<text x="360" y="190">Avionics</text>
<text x="560" y="190">Control</text>
</svg>

<canvas id="plot" width="700" height="300" class="border reveal"></canvas>
</div>
</section>

<!-- PLATFORMS -->
<section id="platforms" class="py-32 max-w-7xl mx-auto px-6">
<h2 class="text-3xl mb-12 reveal">Platforms</h2>
<div class="grid md:grid-cols-2 gap-12">
<div class="border p-8 reveal"><h3>Trainer Aircraft</h3><p class="text-gray-600">High-wing, stable, manually flown test platform.</p></div>
<div class="border p-8 reveal"><h3>Autonomous Testbed</h3><p class="text-gray-600">Designed for future autonomy, sensing, and control.</p></div>
</div>
</section>

<!-- CONTACT -->
<section id="contact" class="py-32 max-w-4xl mx-auto px-6 text-center">
<h2 class="text-3xl mb-6 reveal">Contact</h2>
<p class="text-gray-600 mb-8">Engineering collaboration only.</p>
<a href="mailto:you@example.com" class="border px-8 py-3 hover:bg-black hover:text-white">Get in Touch</a>
</section>

<script>
const menuBtn=document.getElementById('menuBtn');
const mobileMenu=document.getElementById('mobileMenu');
menuBtn.onclick=()=>mobileMenu.classList.toggle('hidden');

const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
reveals.forEach(el=>{
const top=el.getBoundingClientRect().top;
if(top<window.innerHeight-100)el.classList.add('active');
});
});

function calcLift(){
const rho=1.225;
const v=+vInput.value;
const Sval=+S.value;
const cl=+CL.value;
const L=0.5*rho*v*v*Sval*cl;
liftOut.innerText=L.toFixed(1);
}

function calcSM(){
const sm=(np.value-cg.value)/100;
smOut.innerText=sm.toFixed(2);
}

function calcRe(){
const nu=1.5e-5;
const Re=rv.value*c.value/nu;
reOut.innerText=Math.round(Re);
}

const ctx=document.getElementById('plot').getContext('2d');
ctx.beginPath();
ctx.moveTo(0,150);
for(let x=0;x<700;x++){
const y=150-50*Math.sin(x/80);
ctx.lineTo(x,y);
}
ctx.stroke();
</script>

</body>
</html>
