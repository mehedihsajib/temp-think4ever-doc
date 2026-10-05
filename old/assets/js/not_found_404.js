// 404 Page JavaScript
(function() {
  'use strict';

  // Search functionality
  const searchInput = document.getElementById('nf_search');
  const searchBtn = document.getElementById('nf_search_btn');

  function performSearch() {
    const query = searchInput ? searchInput.value.trim() : '';
    if (query.length > 0) {
      load_page('search_results');
    }
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
      }
    });

    // Auto-focus search on page load after a brief delay
    setTimeout(function() {
      searchInput.focus();
    }, 600);
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      performSearch();
    });
  }

  // Keyboard shortcut: Ctrl+K or Cmd+K to focus search
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  // Add subtle parallax to particles on mouse move (desktop only)
  const visual = document.querySelector('.not-found-visual');
  const particles = document.querySelectorAll('.not-found-particle');

  if (visual && particles.length > 0 && window.matchMedia('(min-width: 769px)').matches) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        particles.forEach(function(particle, i) {
          const factor = (i + 1) * 4;
          particle.style.transform = 'translate(' + (x * factor) + 'px, ' + (y * factor) + 'px)';
        });
      });
    }
  }
})();