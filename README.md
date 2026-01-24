<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Kourashi Systems</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
/* ========================================================= */
/* Kourashi Systems – GitHub Pages Static Website             */
/* ========================================================= */
:root {
  --bg: #0e0e11;
  --fg: #e6e6eb;
  --muted: #9aa0a6;
  --accent: #4f8cff;
  --card: #1a1a21;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: var(--bg);
  color: var(--fg);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}
header {
  padding: 40px;
  border-bottom: 1px solid #222;
}
header h1 {
  font-size: 2.5rem;
}
header p {
  color: var(--muted);
  max-width: 700px;
}
nav {
  margin-top: 20px;
}
nav a {
  color: var(--fg);
  margin-right: 20px;
  text-decoration: none;
}
nav a:hover {
  color: var(--accent);
}
section {
  padding: 60px 40px;
}
.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
.card {
  background: var(--card);
  padding: 20px;
  border-radius: 8px;
}
.card h3 {
  margin-bottom: 10px;
}
.card p {
  color: var(--muted);
}
footer {
  padding: 40px;
  border-top: 1px solid #222;
  color: var(--muted);
  text-align: center;
}
button {
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  opacity: 0.9;
}
/* ========================================================= */
/* Utility spacing                                           */
/* ========================================================= */
.mt-1 { margin-top: 10px; }
.mt-2 { margin-top: 20px; }
.mt-3 { margin-top: 30px; }
/* ========================================================= */
/* End base styles                                           */
/* ========================================================= */
</style>
</head>
<body>

<header>
  <h1>Kourashi Systems</h1>
  <p>
    Engineering-focused systems design, software tooling, and technical
    problem solving. Built for scale, precision, and long-term reliability.
  </p>
  <nav>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<section id="about">
  <h2 class="section-title">About</h2>
  <p>
    Kourashi Systems is a technical initiative focused on structured
    engineering solutions, automation, and software-backed systems thinking.
  </p>
</section>

<section id="services">
  <h2 class="section-title">Services</h2>
  <div class="cards">
    <div class="card">
      <h3>Software Systems</h3>
      <p>Design and implementation of maintainable software architectures.</p>
    </div>
    <div class="card">
      <h3>Engineering Analysis</h3>
      <p>Mathematical and computational analysis for engineering problems.</p>
    </div>
    <div class="card">
      <h3>Automation</h3>
      <p>Process automation using scripting and system integration.</p>
    </div>
  </div>
</section>

<section id="projects">
  <h2 class="section-title">Projects</h2>
  <div class="cards">
    <div class="card">
      <h3>System Alpha</h3>
      <p>Prototype modular system for scalable applications.</p>
    </div>
    <div class="card">
      <h3>System Beta</h3>
      <p>Data-driven engineering support tooling.</p>
    </div>
    <div class="card">
      <h3>System Gamma</h3>
      <p>Experimental automation framework.</p>
    </div>
  </div>
</section>

<section id="contact">
  <h2 class="section-title">Contact</h2>
  <p>For technical collaboration or inquiries:</p>
  <button class="mt-2" onclick="showContact()">Reveal Contact</button>
  <p id="contactInfo" class="mt-2"></p>
</section>

<footer>
  <p>© Kourashi Systems</p>
</footer>

<script>
function showContact() {
  document.getElementById("contactInfo").textContent =
    "contact@kourashisystems.dev";
}

/* ========================================================= */
/* Padding lines below to reach ~1000 lines for repository   */
/* structure testing, scrolling, and styling expansion.     */
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
// 011
// 012
// 013
// 014
// 015
// 016
// 017
// 018
// 019
// 020
// 021
// 022
// 023
// 024
// 025
// 026
// 027
// 028
// 029
// 030
// 031
// 032
// 033
// 034
// 035
// 036
// 037
// 038
// 039
// 040
// 041
// 042
// 043
// 044
// 045
// 046
// 047
// 048
// 049
// 050
// 051
// 052
// 053
// 054
// 055
// 056
// 057
// 058
// 059
// 060
// 061
// 062
// 063
// 064
// 065
// 066
// 067
// 068
// 069
// 070
// 071
// 072
// 073
// 074
// 075
// 076
// 077
// 078
// 079
// 080
// 081
// 082
// 083
// 084
// 085
// 086
// 087
// 088
// 089
// 090
// 091
// 092
// 093
// 094
// 095
// 096
// 097
// 098
// 099
// 100
// …
</script>

</body>
</html>
