// Consumer Wallet Management Page JavaScript

(function() {
  'use strict';

  // --- Sidebar Toggle (Mobile) ---
  const sidebarToggle = document.getElementById('cwm-sidebar-toggle');
  const sidebar = document.getElementById('cwm-sidebar');
  const sidebarOverlay = document.getElementById('cwm-sidebar-overlay');

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('visible');
    sidebarToggle.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('visible');
    sidebarToggle.setAttribute('aria-expanded', 'false');
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

  // Close sidebar on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // --- FAQ Accordion ---
  const accordionItems = document.querySelectorAll('.cwm-accordion-item');
  
  accordionItems.forEach(function(item) {
    const trigger = item.querySelector('.cwm-accordion-trigger');
    const panel = item.querySelector('.cwm-accordion-panel');
    
    if (trigger && panel) {
      trigger.addEventListener('click', function() {
        const isOpen = item.classList.contains('open');
        
        // Close all other items
        accordionItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            const otherPanel = otherItem.querySelector('.cwm-accordion-panel');
            const otherTrigger = otherItem.querySelector('.cwm-accordion-trigger');
            if (otherPanel) otherPanel.style.maxHeight = '0';
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });
        
        if (isOpen) {
          item.classList.remove('open');
          panel.style.maxHeight = '0';
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
      
      // Keyboard support
      trigger.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    }
  });

  // --- Table of Contents Active State ---
  const tocLinks = document.querySelectorAll('.cwm-toc-list li a');
  const sections = document.querySelectorAll('.cwm-section-heading, .cwm-faq-heading');
  
  function updateActiveTOC() {
    let current = '';
    
    sections.forEach(function(section) {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 120) {
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

  // --- Scroll to Top Button ---
  const scrollTopBtn = document.getElementById('cwm-scroll-top');
  
  function handleScroll() {
    if (scrollTopBtn) {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
    updateActiveTOC();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Balance Toggle (Eye Icon) ---
  const balanceToggle = document.getElementById('cwm-balance-toggle');
  const balanceAmount = document.getElementById('cwm-balance-amount');
  let balanceVisible = true;
  const actualBalance = '$2,458.50';

  if (balanceToggle && balanceAmount) {
    balanceToggle.addEventListener('click', function() {
      balanceVisible = !balanceVisible;
      if (balanceVisible) {
        balanceAmount.textContent = actualBalance;
        balanceToggle.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        balanceToggle.setAttribute('aria-label', 'Hide balance');
      } else {
        balanceAmount.textContent = '••••••';
        balanceToggle.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        balanceToggle.setAttribute('aria-label', 'Show balance');
      }
    });
  }

  // --- Smooth Scroll for TOC Links ---
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- In-page anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Initial check
  handleScroll();

})();