<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Joseph Alkourashi | Aerospace Engineering</title>
  <meta name="description" content="Personal website of Joseph Alkourashi, Aerospace Engineering student." />

  <style>
    :root {
      --bg: #0f172a;        /* slate-900 */
      --card: #111827;      /* gray-900 */
      --text: #e5e7eb;      /* gray-200 */
      --muted: #9ca3af;     /* gray-400 */
      --accent: #38bdf8;    /* sky-400 */
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    body {
      background: linear-gradient(180deg, #020617, var(--bg));
      color: var(--text);
      line-height: 1.6;
    }

    header {
      padding: 4rem 1.5rem;
      text-align: center;
    }

    header h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      margin-bottom: 0.5rem;
    }

    header p {
      color: var(--muted);
      max-width: 600px;
      margin: 0.5rem auto 1.5rem;
    }

    nav a {
      margin: 0 0.75rem;
      color: var(--accent);
      text-decoration: none;
      font-weight: 500;
    }

    nav a:hover {
      text-decoration: underline;
    }

    main {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1.5rem 4rem;
      display: grid;
      gap: 2rem;
    }

    section {
      background: rgba(17, 24, 39, 0.8);
      border-radius: 1rem;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }

    section h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: var(--accent);
    }

    ul {
      list-style: none;
      padding-left: 0;
    }

    ul li {
      margin-bottom: 0.5rem;
    }

    .projects {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    .project {
      background: rgba(2, 6, 23, 0.8);
      border-radius: 0.75rem;
      padding: 1.25rem;
      border: 1px solid rgba(148, 163, 184, 0.15);
    }

    footer {
      text-align: center;
      padding: 2rem 1.5rem;
      color: var(--muted);
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

  <header>
    <h1>Joseph Alkourashi</h1>
    <p>Aerospace / Aerospace Systems Engineering student with interests in aircraft design, RC aircraft, and defence technology.</p>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>
        I'm an engineering student in Australia focused on aerospace systems, with hands-on experience in RC aircraft,
        CAD (Fusion 360), MATLAB, and basic C++/Python. I'm building practical projects to prepare for a career in
        aerospace and defence.
      </p>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div class="projects">
        <div class="project">
          <h3>RC Trainer Aircraft</h3>
          <p>Design and analysis of a stable RC trainer aircraft including aerodynamics, sizing, and CAD.</p>
        </div>
        <div class="project">
          <h3>Aerospace Calculations</h3>
          <p>MATLAB-based tools for lift, drag, performance estimation, and flight envelopes.</p>
        </div>
        <div class="project">
          <h3>Future Projects</h3>
          <p>Autonomous UAV concepts, control systems, and propulsion analysis.</p>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <ul>
        <li>Email: your.email@example.com</li>
        <li>GitHub: github.com/yourusername</li>
        <li>LinkedIn: linkedin.com/in/yourname</li>
      </ul>
    </section>
  </main>

  <footer>
    © 2026 Joseph Alkourashi · Built with GitHub Pages
  </footer>

</body>
</html>
