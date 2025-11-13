// Small site helpers
document.addEventListener('DOMContentLoaded', function() {
  // Update footer year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Smooth scroll for navigation links (except recipes and drinks, handled in recipes-large.js)
  document.querySelectorAll('a[href^="#"]:not(a[href="#recipes"]):not(a[href="#drinks"])').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
