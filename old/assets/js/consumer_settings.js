// Consumer Settings & Security Page JavaScript

(function() {
  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close all others
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });
        // Toggle current
        item.classList.toggle('open', !isOpen);
        question.setAttribute('aria-expanded', !isOpen);
      });

      question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    }
  });

  // Toggle switches
  const toggleSwitches = document.querySelectorAll('.toggle-switch');
  toggleSwitches.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      const isActive = toggle.classList.contains('active');
      toggle.setAttribute('aria-checked', isActive);
    });
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.click();
      }
    });
  });

  // Sidebar mobile toggle
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('docsSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('visible');
      const isOpen = sidebar.classList.contains('open');
      sidebarToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('visible');
      sidebarToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Table of Contents active tracking
  const tocLinks = document.querySelectorAll('.toc-link');
  const sections = document.querySelectorAll('.doc-section-title[id]');

  function updateActiveTocLink() {
    let currentSection = '';
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) {
        currentSection = section.id;
      }
    });

    tocLinks.forEach(link => {
      const href = link.getAttribute('data-target');
      link.classList.toggle('active', href === currentSection);
    });
  }

  window.addEventListener('scroll', updateActiveTocLink, { passive: true });
  updateActiveTocLink();

  // Smooth scroll for TOC links
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Close sidebar on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('visible');
      sidebarToggle.setAttribute('aria-expanded', 'false');
      sidebarToggle.focus();
    }
  });
})();