// Privacy Policy Page JavaScript

(function() {
  'use strict';

  // Header scroll shadow
  const header = document.querySelector('.pp-header');
  const scrollTopBtn = document.querySelector('.pp-scroll-top');

  function handleScroll() {
    const scrollY = window.scrollY;
    if (header) {
      header.classList.toggle('scrolled', scrollY > 10);
    }
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle('visible', scrollY > 300);
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Scroll to top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll for TOC links
  const tocLinks = document.querySelectorAll('.pp-toc-list a');
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without jumping
        history.pushState(null, null, '#' + targetId);
      }
    });
  });

  // Mobile TOC toggle
  const tocToggle = document.querySelector('.pp-toc-toggle');
  const tocList = document.querySelector('.pp-toc-list');
  if (tocToggle && tocList) {
    tocToggle.addEventListener('click', function() {
      tocList.classList.toggle('show');
      tocToggle.classList.toggle('expanded');
      const isExpanded = tocList.classList.contains('show');
      tocToggle.setAttribute('aria-expanded', isExpanded);
      tocToggle.querySelector('span').textContent = isExpanded ? 'Hide sections' : 'Show sections';
    });
  }

  // Print functionality
  const printBtn = document.querySelector('.pp-print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', function() {
      window.print();
    });
  }

  // Active TOC link tracking on scroll
  const sections = document.querySelectorAll('.pp-section-title[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-100px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        tocLinks.forEach(function(link) {
          link.style.fontWeight = '';
          link.style.color = '';
          link.style.background = '';
        });
        const activeLink = document.querySelector('.pp-toc-list a[href="#' + id + '"]');
        if (activeLink) {
          activeLink.style.fontWeight = '600';
          activeLink.style.color = '#2563eb';
          activeLink.style.background = 'rgba(37, 99, 235, 0.06)';
        }
      }
    });
  }, observerOptions);

  sections.forEach(function(section) {
    observer.observe(section);
  });

  // Keyboard accessibility for skip link
  const skipLink = document.querySelector('.pp-skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      e.preventDefault();
      const main = document.getElementById('pp-main-content');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
      }
    });
  }
})();