// Intersection observer for fade-up elements
(function(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Smooth keyboard focus for accessible skip (enhancement placeholder)
  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Tab') document.body.classList.add('show-focus');
  });
})();