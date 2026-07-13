// Merchant Getting Started - Page Specific JS

(function() {
  'use strict';

  // Sidebar toggle
  const sidebarToggle = document.getElementById('mgsSidebarToggle');
  const sidebar = document.getElementById('mgsSidebar');
  const sidebarOverlay = document.getElementById('mgsSidebarOverlay');

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    sidebarToggle.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
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

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.mgs-faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.mgs-faq-question');
    const answer = item.querySelector('.mgs-faq-answer');
    const answerInner = item.querySelector('.mgs-faq-answer-inner');

    question.addEventListener('click', function() {
      const isOpen = item.classList.contains('open');

      // Close all other items
      faqItems.forEach(function(other) {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.mgs-faq-question').setAttribute('aria-expanded', 'false');
          other.querySelector('.mgs-faq-answer').style.maxHeight = '0';
        }
      });

      // Toggle this item
      if (isOpen) {
        item.classList.remove('open');
        question.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = '0';
      } else {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answerInner.scrollHeight + 'px';
      }
    });

    // Keyboard: Enter and Space
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });

  // Screenshot Modal
  const modal = document.getElementById('mgsScreenshotModal');
  const modalClose = document.getElementById('mgsModalClose');
  const modalCaption = document.getElementById('mgsModalCaption');
  const screenshots = document.querySelectorAll('.mgs-screenshot');

  function openModal(caption) {
    if (modal && modalCaption) {
      modalCaption.textContent = caption;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (modalClose) modalClose.focus();
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  screenshots.forEach(function(ss) {
    ss.addEventListener('click', function() {
      const caption = ss.querySelector('.mgs-screenshot-caption').textContent;
      openModal(caption);
    });
    ss.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        ss.click();
      }
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // TOC active state on scroll
  const tocLinks = document.querySelectorAll('.mgs-toc-list a');
  const sections = [];

  tocLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.getElementById(href.substring(1));
      if (target) {
        sections.push({ link: link, target: target });
      }
    }
  });

  function updateTOC() {
    let current = '';
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    sections.forEach(function(s) {
      const rect = s.target.getBoundingClientRect();
      if (rect.top <= 120) {
        current = s.link.getAttribute('href');
      }
    });

    tocLinks.forEach(function(link) {
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateTOC, { passive: true });
  updateTOC();

  // Smooth scroll for TOC and anchor links
  document.querySelectorAll('.mgs-toc-list a, a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.getElementById(href.substring(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, null, href);
        }
      }
    });
  });

  // Code copy buttons
  document.querySelectorAll('.mgs-code-copy').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const codeBlock = btn.closest('.mgs-code-block');
      const code = codeBlock.querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(function() {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function() {
          btn.textContent = originalText;
        }, 2000);
      }).catch(function() {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(function() {
          btn.textContent = originalText;
        }, 2000);
      });
    });
  });

})();