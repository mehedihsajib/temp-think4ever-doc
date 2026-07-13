// Merchant Transactions Page JavaScript

(function() {
  'use strict';

  // FAQ Accordion
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      if (question && answer) {
        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          // Close all others
          faqItems.forEach(other => {
            if (other !== item) {
              other.classList.remove('active');
              other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            }
          });

          // Toggle current
          item.classList.toggle('active', !isActive);
          question.setAttribute('aria-expanded', !isActive ? 'true' : 'false');
        });
      }
    });
  }

  // Code copy functionality
  function initCodeCopy() {
    const copyBtns = document.querySelectorAll('.code-copy-btn');

    copyBtns.forEach(btn => {
      btn.addEventListener('click', async () => {
        const codeBlock = btn.closest('.code-block-container').querySelector('.code-block');
        if (codeBlock) {
          try {
            await navigator.clipboard.writeText(codeBlock.textContent);
            btn.classList.add('copied');
            btn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> Copied';
            setTimeout(() => {
              btn.classList.remove('copied');
              btn.innerHTML = '<i class="fa fa-copy" aria-hidden="true"></i> Copy';
            }, 2000);
          } catch (err) {
            // Fallback
            const textArea = document.createElement('textarea');
            textArea.value = codeBlock.textContent;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999px';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            btn.classList.add('copied');
            btn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> Copied';
            setTimeout(() => {
              btn.classList.remove('copied');
              btn.innerHTML = '<i class="fa fa-copy" aria-hidden="true"></i> Copy';
            }, 2000);
          }
        }
      });
    });
  }

  // Mobile sidebar toggle
  function initMobileSidebar() {
    const sidebar = document.querySelector('.docs-sidebar');
    const toggleBtn = document.querySelector('.mobile-sidebar-toggle');
    const overlay = document.querySelector('.sidebar-overlay');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('active');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      });
    }
  }

  // Table of Contents active state tracking
  function initTocTracking() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('.doc-section-title');

    if (tocLinks.length === 0 || sections.length === 0) return;

    function updateActiveToc() {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          current = section.getAttribute('id');
        }
      });

      tocLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveToc, { passive: true });
    updateActiveToc();
  }

  // Smooth scroll for TOC links
  function initSmoothScroll() {
    const tocLinks = document.querySelectorAll('.toc-link');

    tocLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // Scroll to top button
  function initScrollToTop() {
    const btn = document.querySelector('.scroll-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active sidebar link
  function setActiveSidebarLink() {
    const links = document.querySelectorAll('.sidebar-nav-link');
    links.forEach(link => {
      link.classList.remove('active');
    });
    const activeLink = document.querySelector('.sidebar-nav-link[data-page="merchant_transactions"]');
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }

  // Initialize everything
  function init() {
    initFaqAccordion();
    initCodeCopy();
    initMobileSidebar();
    initTocTracking();
    initSmoothScroll();
    initScrollToTop();
    setActiveSidebarLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();