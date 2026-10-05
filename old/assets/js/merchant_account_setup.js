// Merchant Account Setup & Verification - Page JS

(function() {
  'use strict';

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');
      const answer = faqItem.querySelector('.faq-answer');
      const isOpen = faqItem.classList.contains('open');

      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(function(item) {
        item.classList.remove('open');
        const ans = item.querySelector('.faq-answer');
        ans.style.maxHeight = '0';
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        faqItem.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Sidebar toggle for mobile
  const sidebarToggle = document.getElementById('sidebarToggleBtn');
  const sidebar = document.getElementById('masSidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  if (sidebarToggle && sidebar && sidebarOverlay) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('visible');
      const isOpen = sidebar.classList.contains('open');
      sidebarToggle.setAttribute('aria-expanded', isOpen.toString());
      sidebarToggle.innerHTML = isOpen ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
    });

    sidebarOverlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('visible');
      sidebarToggle.setAttribute('aria-expanded', 'false');
      sidebarToggle.innerHTML = '<i class="fa fa-bars"></i>';
    });
  }

  // Code copy buttons
  const copyBtns = document.querySelectorAll('.code-copy-btn');
  copyBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const codeBlock = this.closest('.code-block');
      const code = codeBlock.querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(function() {
        btn.innerHTML = '<i class="fa fa-check"></i> Copied!';
        setTimeout(function() {
          btn.innerHTML = '<i class="fa fa-copy"></i> Copy';
        }, 2000);
      }).catch(function() {
        btn.innerHTML = '<i class="fa fa-times"></i> Failed';
        setTimeout(function() {
          btn.innerHTML = '<i class="fa fa-copy"></i> Copy';
        }, 2000);
      });
    });
  });

  // Table of Contents - active state on scroll
  const tocLinks = document.querySelectorAll('.toc-link');
  const sections = [];

  tocLinks.forEach(function(link) {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const target = document.querySelector(targetId);
      if (target) {
        sections.push({ link: link, target: target });
      }
    }
  });

  function updateTocActiveState() {
    let current = null;
    var scrollPos = window.scrollY + 100;

    sections.forEach(function(section) {
      if (section.target.offsetTop <= scrollPos) {
        current = section;
      }
    });

    tocLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    if (current) {
      current.link.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateTocActiveState);
  updateTocActiveState();

  // Smooth scroll for TOC links
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
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

  // Sidebar active link highlighting
  const currentPage = 'merchant_account_setup';
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(function(link) {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });

})();