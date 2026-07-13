// Consumer Wallet Docs Home - Page JavaScript

(function() {
  'use strict';

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById('cdSidebarToggle');
  const sidebar = document.getElementById('cdHomeSidebar');
  const overlay = document.getElementById('cdSidebarOverlay');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (overlay) overlay.classList.add('active');
    if (sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    if (sidebarToggle) sidebarToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
      closeSidebar();
      if (sidebarToggle) sidebarToggle.focus();
    }
  });

  // Set active state on sidebar nav
  const sidebarLinks = document.querySelectorAll('.cd-sidebar-nav a');
  sidebarLinks.forEach(function(link) {
    if (link.getAttribute('data-page') === 'consumer_docs_home') {
      link.classList.add('active');
    }
  });

  // Doc card click handlers
  const docCards = document.querySelectorAll('.cd-doc-card');
  docCards.forEach(function(card) {
    card.addEventListener('click', function() {
      const target = this.getAttribute('data-navigate');
      if (target && typeof load_page === 'function') {
        load_page(target);
      }
    });

    // Keyboard support for cards
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const target = this.getAttribute('data-navigate');
        if (target && typeof load_page === 'function') {
          load_page(target);
        }
      }
    });
  });

  // Close sidebar on nav link click (mobile)
  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        closeSidebar();
      }
    });
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeSidebar();
    }
  });
})();