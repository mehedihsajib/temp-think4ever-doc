// Merchant Settings & Configuration Page JavaScript

(function() {
  'use strict';

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById('msetSidebarToggle');
  const sidebar = document.getElementById('msetSidebar');
  const sidebarOverlay = document.getElementById('msetSidebarOverlay');

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('show');
      const isOpen = sidebar.classList.contains('open');
      sidebarToggle.setAttribute('aria-expanded', isOpen);
      sidebarToggle.innerHTML = isOpen ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('show');
      sidebarToggle.setAttribute('aria-expanded', 'false');
      sidebarToggle.innerHTML = '<i class="fa fa-bars"></i>';
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.merchant-settings-page .faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const answerContent = item.querySelector('.faq-answer-content');

    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(function(other) {
        if (other !== item && other.classList.contains('active')) {
          other.classList.remove('active');
          other.querySelector('.faq-answer').style.maxHeight = '0';
          other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = '0';
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answerContent.scrollHeight + 20 + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

  // Table of Contents active state tracking
  const tocLinks = document.querySelectorAll('.merchant-settings-page .toc-link');
  const sections = document.querySelectorAll('.merchant-settings-page .doc-section[id]');

  function updateTocActive() {
    let current = '';
    sections.forEach(function(section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) {
        current = section.id;
      }
    });

    tocLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateTocActive);
  updateTocActive();

  // Smooth scroll for TOC links
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('data-section');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Code copy buttons
  const copyButtons = document.querySelectorAll('.merchant-settings-page .code-copy-btn');
  copyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock.querySelector('pre').textContent;

      navigator.clipboard.writeText(code).then(function() {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa fa-check"></i> Copied!';
        btn.style.color = '#22c55e';
        btn.style.borderColor = '#22c55e';

        setTimeout(function() {
          btn.innerHTML = originalHTML;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }).catch(function() {
        btn.innerHTML = '<i class="fa fa-times"></i> Failed';
        setTimeout(function() {
          btn.innerHTML = '<i class="fa fa-copy"></i> Copy';
        }, 2000);
      });
    });
  });

  // Toggle switch interaction (visual demo only)
  const toggleSwitches = document.querySelectorAll('.merchant-settings-page .toggle-switch');
  toggleSwitches.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('on');
    });
  });

})();