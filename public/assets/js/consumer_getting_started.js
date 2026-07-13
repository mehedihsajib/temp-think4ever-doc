/* Consumer Getting Started Page JS */
(function() {
  'use strict';

  // Accordion functionality
  const accordionItems = document.querySelectorAll('.cgs-accordion-item');
  accordionItems.forEach(function(item) {
    const trigger = item.querySelector('.cgs-accordion-trigger');
    const panel = item.querySelector('.cgs-accordion-panel');
    const panelInner = item.querySelector('.cgs-accordion-panel-inner');

    if (trigger && panel && panelInner) {
      trigger.addEventListener('click', function() {
        const isOpen = item.classList.contains('open');

        // Close all other items
        accordionItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
            const otherPanel = otherItem.querySelector('.cgs-accordion-panel');
            const otherTrigger = otherItem.querySelector('.cgs-accordion-trigger');
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
          panel.style.maxHeight = panelInner.scrollHeight + 'px';
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

  // TOC active tracking
  const tocLinks = document.querySelectorAll('.cgs-toc-link');
  const sections = [];

  tocLinks.forEach(function(link) {
    const targetId = link.getAttribute('data-target');
    if (targetId) {
      const section = document.getElementById(targetId);
      if (section) {
        sections.push({ element: section, link: link });
      }
    }
  });

  function updateTocActive() {
    let activeSection = null;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionTop = sections[i].element.getBoundingClientRect().top + scrollTop - 100;
      if (scrollTop >= sectionTop) {
        activeSection = sections[i];
        break;
      }
    }

    tocLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    if (activeSection) {
      activeSection.link.classList.add('active');
    }
  }

  // Smooth scroll for TOC links
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById('cgsScrollTop');
  function updateScrollTop() {
    if (window.scrollY > 300) {
      scrollTopBtn && scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn && scrollTopBtn.classList.remove('visible');
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Combined scroll handler
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateTocActive();
        updateScrollTop();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial call
  updateTocActive();
  updateScrollTop();

  // Close sidebar on nav click (mobile)
  const sidebarLinks = document.querySelectorAll('.cgs-nav-link');
  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        sidebar && sidebar.classList.remove('open');
        overlay && overlay.classList.remove('show');
        if (sidebarToggle) {
          sidebarToggle.setAttribute('aria-expanded', 'false');
          sidebarToggle.innerHTML = '<i class="fa fa-bars"></i>';
        }
      }
    });
  });

})();