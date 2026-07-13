// Consumer Account Setup Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initSidebar();
  initFaqAccordion();
  initCodeCopy();
  initTocHighlight();
  initSmoothScroll();
});

// Sidebar toggle for mobile
function initSidebar() {
  const sidebar = document.getElementById('cas_sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const toggle = document.getElementById('mobile-menu-toggle');

  if (toggle) {
    toggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
      const isOpen = sidebar.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.innerHTML = isOpen ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="fa fa-bars"></i>';
      }
    });
  }

  // Close sidebar on nav click (mobile)
  const sidebarLinks = sidebar ? sidebar.querySelectorAll('a') : [];
  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.innerHTML = '<i class="fa fa-bars"></i>';
        }
      }
    });
  });
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function() {
        const isActive = item.classList.contains('active');
        // Close all items
        faqItems.forEach(function(faq) {
          faq.classList.remove('active');
          const btn = faq.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
        // Toggle current
        if (!isActive) {
          item.classList.add('active');
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
    }
  });
}

// Copy code buttons
function initCodeCopy() {
  const copyBtns = document.querySelectorAll('.code-copy-btn');
  copyBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const codeBlock = btn.closest('.code-block');
      const code = codeBlock ? codeBlock.querySelector('code') : null;
      if (code) {
        const text = code.textContent;
        navigator.clipboard.writeText(text).then(function() {
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          btn.style.color = '#22c55e';
          setTimeout(function() {
            btn.textContent = originalText;
            btn.style.color = '';
          }, 2000);
        }).catch(function() {
          // Fallback
          const textarea = document.createElement('textarea');
          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          btn.textContent = 'Copied!';
          setTimeout(function() {
            btn.textContent = 'Copy';
          }, 2000);
        });
      }
    });
  });
}

// Table of Contents highlight on scroll
function initTocHighlight() {
  const tocLinks = document.querySelectorAll('.cas-toc-list a');
  if (tocLinks.length === 0) return;

  const headings = [];
  tocLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const heading = document.getElementById(href.slice(1));
      if (heading) headings.push({ el: heading, link: link });
    }
  });

  function updateToc() {
    let currentIndex = 0;
    const scrollTop = window.scrollY + 120;
    headings.forEach(function(item, index) {
      if (item.el.offsetTop <= scrollTop) {
        currentIndex = index;
      }
    });
    tocLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    if (headings[currentIndex]) {
      headings[currentIndex].link.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateToc, { passive: true });
  updateToc();
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const target = document.getElementById(link.getAttribute('href').slice(1));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without scroll
        history.pushState(null, null, link.getAttribute('href'));
      }
    });
  });
}