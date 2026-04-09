// Merchant Docs Home - Page Specific JavaScript

(function() {
  'use strict';

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById('mdSidebarToggle');
  const sidebar = document.getElementById('mdHomeSidebar');
  const sidebarOverlay = document.getElementById('mdSidebarOverlay');

  function openSidebar() {
    if (sidebar && sidebarOverlay) {
      sidebar.classList.add('open');
      sidebarOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      sidebar.querySelector('a')?.focus();
    }
  }

  function closeSidebar() {
    if (sidebar && sidebarOverlay) {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Active sidebar link
  const sidebarLinks = document.querySelectorAll('.md-sidebar-nav a');
  sidebarLinks.forEach(function(link) {
    if (link.dataset.page === 'merchant_docs_home') {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Navigation card clicks
  const navCards = document.querySelectorAll('.md-nav-card[data-navigate]');
  navCards.forEach(function(card) {
    card.addEventListener('click', function() {
      const page = this.dataset.navigate;
      if (page && typeof load_page === 'function') {
        load_page(page);
      }
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const page = this.dataset.navigate;
        if (page && typeof load_page === 'function') {
          load_page(page);
        }
      }
    });
  });

  // Getting started card
  const gsCard = document.getElementById('mdHomeGettingStartedLink');
  if (gsCard) {
    gsCard.addEventListener('click', function() {
      if (typeof load_page === 'function') {
        load_page('merchant_getting_started');
      }
    });
    gsCard.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (typeof load_page === 'function') {
          load_page('merchant_getting_started');
        }
      }
    });
  }

  // Prev/Next navigation
  const prevNextCards = document.querySelectorAll('.md-prev-next-card[data-navigate]');
  prevNextCards.forEach(function(card) {
    card.addEventListener('click', function() {
      const page = this.dataset.navigate;
      if (page && typeof load_page === 'function') {
        load_page(page);
      }
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const page = this.dataset.navigate;
        if (page && typeof load_page === 'function') {
          load_page(page);
        }
      }
    });
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById('mdScrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Sidebar nav click handlers (close sidebar on mobile after nav)
  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.dataset.page;
      if (page && typeof load_page === 'function') {
        load_page(page);
      }
      // Close sidebar on mobile
      if (window.innerWidth < 768) {
        closeSidebar();
      }
    });
  });

  // Keyboard navigation for sidebar sections (collapsible)
  const sidebarSections = document.querySelectorAll('.md-sidebar-section-label');
  sidebarSections.forEach(function(label) {
    label.addEventListener('click', function() {
      const section = this.closest('.md-sidebar-section');
      const nav = section?.querySelector('.md-sidebar-nav');
      if (nav) {
        const isHidden = nav.style.display === 'none';
        nav.style.display = isHidden ? '' : 'none';
        this.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
      }
    });
  });

})();