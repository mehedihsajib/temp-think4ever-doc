/* Merchant NFC Payments Page JavaScript */
(function() {
  'use strict';

  // Sidebar toggle for mobile
  const sidebar = document.getElementById('mnfc_sidebar');
  const sidebarToggle = document.getElementById('mnfc-sidebar-toggle');
  const sidebarOverlay = document.getElementById('mnfc-sidebar-overlay');

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('visible');
      document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('visible');
      document.body.style.overflow = '';
    });
  }

  // Troubleshooting accordion
  const troubleItems = document.querySelectorAll('.merchant-nfc-page .trouble-item');
  troubleItems.forEach(function(item) {
    const header = item.querySelector('.trouble-header');
    if (header) {
      header.addEventListener('click', function() {
        const isOpen = item.classList.contains('open');
        // Close all others
        troubleItems.forEach(function(t) { t.classList.remove('open'); });
        if (!isOpen) {
          item.classList.add('open');
        }
      });
      header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });
    }
  });

  // FAQ accordion
  const faqItems = document.querySelectorAll('.merchant-nfc-page .faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(function(f) { f.classList.remove('open'); });
        if (!isOpen) {
          item.classList.add('open');
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

  // Code copy buttons
  const copyButtons = document.querySelectorAll('.merchant-nfc-page .code-copy-btn');
  copyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock.querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(function() {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fa fa-check"></i> Copied!';
        btn.style.color = '#22c55e';
        setTimeout(function() {
          btn.innerHTML = original;
          btn.style.color = '';
        }, 2000);
      }).catch(function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fa fa-check"></i> Copied!';
        setTimeout(function() { btn.innerHTML = original; }, 2000);
      });
    });
  });

  // Table of Contents active state on scroll
  const tocLinks = document.querySelectorAll('.merchant-nfc-page .toc-list a');
  const sections = [];

  tocLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.getElementById(href.substring(1));
      if (target) sections.push({ el: target, link: link });
    }
  });

  function updateToc() {
    const scrollPos = window.scrollY + 120;
    let current = null;
    sections.forEach(function(s) {
      if (s.el.offsetTop <= scrollPos) {
        current = s;
      }
    });
    tocLinks.forEach(function(l) { l.classList.remove('active'); });
    if (current) current.link.classList.add('active');
  }

  window.addEventListener('scroll', updateToc, { passive: true });
  updateToc();

  // Scroll to top button
  const scrollTopBtn = document.getElementById('mnfc-scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('.merchant-nfc-page a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const id = this.getAttribute('href').substring(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();