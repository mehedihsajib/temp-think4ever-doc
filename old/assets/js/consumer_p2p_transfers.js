// Consumer P2P Transfers - Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initSidebar();
  initFAQAccordion();
  initTOCHighlighting();
  initCopyButtons();
  initSmoothScroll();
});

function initSidebar() {
  const sidebar = document.getElementById('cp2p_sidebar');
  const toggle = document.getElementById('sidebarToggle');
  const overlay = document.getElementById('sidebarOverlay');

  if (toggle) {
    toggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });
  }

  // Close sidebar on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    }
  });
}

function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const inner = item.querySelector('.faq-answer-inner');

    question.addEventListener('click', function() {
      const isOpen = item.classList.contains('open');

      // Close all other items
      faqItems.forEach(function(otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          otherAnswer.style.maxHeight = '0';
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        answer.style.maxHeight = inner.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard accessibility
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
}

function initTOCHighlighting() {
  const tocLinks = document.querySelectorAll('.toc-list a');
  const sections = [];

  tocLinks.forEach(function(link) {
    const hash = link.getAttribute('href');
    if (hash && hash.startsWith('#')) {
      const section = document.querySelector(hash);
      if (section) {
        sections.push({ el: section, link: link });
      }
    }
  });

  if (sections.length === 0) return;

  function updateActive() {
    let current = sections[0];
    const scrollTop = window.scrollY + 120;

    sections.forEach(function(s) {
      if (s.el.offsetTop <= scrollTop) {
        current = s;
      }
    });

    tocLinks.forEach(function(l) { l.classList.remove('active'); });
    if (current) {
      current.link.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock.querySelector('pre').textContent;

      navigator.clipboard.writeText(code).then(function() {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.color = '#22c55e';
        setTimeout(function() {
          btn.textContent = originalText;
          btn.style.color = '';
        }, 2000);
      }).catch(function() {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        btn.textContent = 'Copied!';
        setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without page jump
        history.pushState(null, null, link.getAttribute('href'));
      }
    });
  });
}