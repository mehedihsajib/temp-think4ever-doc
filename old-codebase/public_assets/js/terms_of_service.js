/* Terms of Service Page JavaScript */
(function() {
  'use strict';

  // Header scroll shadow
  const header = document.querySelector('.tos-header');
  const progressBar = document.querySelector('.tos-progress-bar');
  const scrollTopBtn = document.querySelector('.tos-scroll-top');

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    
    // Header shadow
    if (header) {
      if (scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Progress bar
    if (progressBar) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(progress, 100) + '%';
    }

    // Scroll to top button
    if (scrollTopBtn) {
      if (scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scroll to top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Print button
  const printBtn = document.querySelector('.tos-print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      window.print();
    });
  }

  // Smooth scroll for ToC links
  const tocLinks = document.querySelectorAll('.tos-toc-list a');
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without jumping
        history.pushState(null, '', '#' + targetId);
      }
    });
  });

  // Anchor link click
  const anchorLinks = document.querySelectorAll('.anchor-link');
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetEl = document.querySelector(href);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', href);
        // Copy link to clipboard
        const fullUrl = window.location.origin + window.location.pathname + href;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(fullUrl);
        }
      }
    });
  });

  // Highlight active ToC item on scroll
  const sections = document.querySelectorAll('.tos-section[id]');
  function highlightToc() {
    const scrollY = window.scrollY + 100;
    let currentId = '';
    sections.forEach(function(section) {
      if (section.offsetTop <= scrollY) {
        currentId = section.id;
      }
    });
    tocLinks.forEach(function(link) {
      const href = link.getAttribute('href').substring(1);
      if (href === currentId) {
        link.style.background = 'rgba(37, 99, 235, 0.08)';
        link.style.fontWeight = '600';
      } else {
        link.style.background = 'transparent';
        link.style.fontWeight = '400';
      }
    });
  }
  window.addEventListener('scroll', highlightToc, { passive: true });
  highlightToc();

  // Scroll to hash on load
  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(function() {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }
})();