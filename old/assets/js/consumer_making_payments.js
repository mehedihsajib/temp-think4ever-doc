// Consumer Making Payments Page JS
(function() {
  'use strict';

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById('cmpSidebarToggle');
  const sidebar = document.getElementById('cmpSidebar');
  const overlay = document.getElementById('cmpSidebarOverlay');

  if (sidebarToggle && sidebar && overlay) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
      const isOpen = sidebar.classList.contains('open');
      sidebarToggle.setAttribute('aria-expanded', isOpen);
      sidebarToggle.innerHTML = isOpen ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
    });

    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      sidebarToggle.setAttribute('aria-expanded', 'false');
      sidebarToggle.innerHTML = '<i class="fa fa-bars"></i>';
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.cmp-faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.cmp-faq-question');
    if (question) {
      question.addEventListener('click', function() {
        const isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(function(fi) {
          fi.classList.remove('open');
          fi.querySelector('.cmp-faq-question').setAttribute('aria-expanded', 'false');
        });
        // Open clicked if was closed
        if (!isOpen) {
          item.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
        }
      });

      question.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    }
  });

  // Table of Contents active state on scroll
  const tocLinks = document.querySelectorAll('.cmp-toc-list a');
  const sections = document.querySelectorAll('.cmp-section-title[id]');

  function updateTOC() {
    let current = '';
    sections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) {
        current = section.getAttribute('id');
      }
    });
    tocLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateTOC, { passive: true });
  updateTOC();

  // Smooth scroll for TOC links
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      if (targetId) {
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Generate a simple visual QR code pattern
  const qrGrid = document.querySelector('.cmp-qr-code-display');
  if (qrGrid) {
    // Pre-defined pattern for visual representation
    const pattern = [
      1,1,1,1,1,0,1,1,1,1,1,
      1,0,0,0,1,0,1,0,0,0,1,
      1,0,1,0,1,0,1,0,1,0,1,
      1,0,0,0,1,0,1,0,0,0,1,
      1,1,1,1,1,0,1,1,1,1,1,
      0,0,0,0,0,0,0,0,0,0,0,
      1,0,1,0,1,1,1,0,1,0,1,
      0,0,0,0,0,0,1,0,0,0,1,
      1,0,1,1,1,0,1,0,1,0,1,
      0,0,0,0,1,0,1,0,0,0,1,
      1,1,1,0,1,0,1,1,1,1,1
    ];
    pattern.forEach(function(cell) {
      const div = document.createElement('div');
      div.className = 'cmp-qr-cell ' + (cell ? 'dark' : 'light');
      qrGrid.appendChild(div);
    });
  }

  // Active sidebar link
  const sidebarLinks = document.querySelectorAll('.cmp-sidebar-nav a');
  sidebarLinks.forEach(function(link) {
    if (link.getAttribute('data-page') === 'consumer_making_payments') {
      link.classList.add('active');
    }
  });

})();