// Merchant Troubleshooting Page JavaScript

(function() {
  'use strict';

  // =========================================
  // Issue Accordion
  // =========================================
  function initIssueAccordions() {
    const issueHeaders = document.querySelectorAll('.issue-header');
    issueHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        const card = this.closest('.issue-card');
        const isOpen = card.classList.contains('open');
        const body = card.querySelector('.issue-body');
        
        // Toggle current
        card.classList.toggle('open');
        this.setAttribute('aria-expanded', !isOpen);
        body.setAttribute('aria-hidden', isOpen);
      });

      header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  // =========================================
  // FAQ Accordion
  // =========================================
  function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        const item = this.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        const answer = item.querySelector('.faq-answer');

        item.classList.toggle('open');
        this.setAttribute('aria-expanded', !isOpen);
        answer.setAttribute('aria-hidden', isOpen);
      });

      question.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  // =========================================
  // Error Table Search/Filter
  // =========================================
  function initErrorTableSearch() {
    const searchInput = document.getElementById('errorTableSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      const rows = document.querySelectorAll('.error-table tbody tr.error-row');
      const noResults = document.querySelector('.no-results-row');
      let visibleCount = 0;

      rows.forEach(function(row) {
        const text = row.textContent.toLowerCase();
        const match = text.includes(query);
        row.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? '' : 'none';
      }
    });
  }

  // =========================================
  // Diagnostic Tool
  // =========================================
  function initDiagnosticTool() {
    const select = document.getElementById('diagnosticSelect');
    const resultDiv = document.getElementById('diagnosticResult');
    if (!select || !resultDiv) return;

    const solutions = {
      'payment_failed': {
        title: '<i class="fa-solid fa-circle-check" style="color:#22c55e"></i> Payment Failure Troubleshooting',
        content: '<p>Follow these steps to resolve payment failures:</p><ul><li>Verify your internet connection is stable</li><li>Ensure the customer\'s wallet has sufficient funds</li><li>Check that your merchant account is in good standing</li><li>Try regenerating the QR code</li><li>If using NFC, ensure the device is held within 4cm range</li></ul><p>If the issue persists, note the error code and contact support.</p>'
      },
      'qr_not_scanning': {
        title: '<i class="fa-solid fa-circle-check" style="color:#22c55e"></i> QR Code Scanning Issues',
        content: '<p>To fix QR scanning problems:</p><ul><li>Ensure adequate lighting on the QR code</li><li>Clean your device camera lens</li><li>Hold the device 15-30cm from the QR code</li><li>Check that the QR code has not expired (codes expire after 5 minutes)</li><li>Try regenerating a new QR code from the payment screen</li><li>Restart the app if the camera appears frozen</li></ul>'
      },
      'nfc_not_working': {
        title: '<i class="fa-solid fa-circle-check" style="color:#22c55e"></i> NFC Connection Issues',
        content: '<p>To resolve NFC problems:</p><ul><li>Confirm NFC is enabled in your device settings</li><li>Remove any thick phone case that may block the NFC signal</li><li>Hold devices back-to-back, within 4cm distance</li><li>Keep devices steady for at least 2 seconds</li><li>Ensure both devices have NFC hardware support</li><li>Restart NFC by toggling it off and on in Settings</li></ul>'
      },
      'login_issues': {
        title: '<i class="fa-solid fa-circle-check" style="color:#22c55e"></i> Login & Authentication Issues',
        content: '<p>To resolve login problems:</p><ul><li>Double-check your email and password</li><li>Use the "Forgot Password" feature to reset credentials</li><li>Ensure your account is verified (check email for verification link)</li><li>Clear the app cache and try again</li><li>Check if your account has been suspended by contacting support</li><li>Ensure you\'re using the Merchant app (not Consumer)</li></ul>'
      },
      'slow_performance': {
        title: '<i class="fa-solid fa-circle-check" style="color:#22c55e"></i> App Performance Issues',
        content: '<p>To improve app performance:</p><ul><li>Ensure you have the latest version of the MPay Merchant app</li><li>Close other background apps to free memory</li><li>Check available storage space (need at least 100MB free)</li><li>Restart your device</li><li>Connect to a stronger Wi-Fi or mobile data signal</li><li>Clear the app cache in Settings > Storage > Clear Cache</li></ul>'
      },
      'transaction_missing': {
        title: '<i class="fa-solid fa-circle-check" style="color:#22c55e"></i> Missing Transaction Issues',
        content: '<p>If a transaction is not appearing:</p><ul><li>Pull down to refresh the transaction list</li><li>Check your date filters — the transaction may be outside the current view</li><li>Transactions may take up to 30 seconds to appear</li><li>Check the "Pending" tab for processing transactions</li><li>Verify with the customer that the payment was completed on their end</li><li>If still missing after 5 minutes, contact support with the expected amount and time</li></ul>'
      }
    };

    select.addEventListener('change', function() {
      const key = this.value;
      if (key && solutions[key]) {
        resultDiv.innerHTML = '<h5>' + solutions[key].title + '</h5>' + solutions[key].content;
        resultDiv.classList.add('show');
      } else {
        resultDiv.classList.remove('show');
      }
    });
  }

  // =========================================
  // Table of Contents - Active Tracking
  // =========================================
  function initTOCTracking() {
    const tocLinks = document.querySelectorAll('.toc-list a');
    const sections = [];

    tocLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          sections.push({ el: section, link: link });
        }
      }
    });

    if (sections.length === 0) return;

    function updateActive() {
      let current = sections[0];
      sections.forEach(function(s) {
        if (s.el.getBoundingClientRect().top <= 120) {
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

  // =========================================
  // Mobile Sidebar
  // =========================================
  function initMobileSidebar() {
    const sidebar = document.getElementById('mtrSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const toggleBtn = document.getElementById('sidebarToggle');

    if (!sidebar || !toggleBtn) return;

    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', function() {
      if (sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeSidebar);
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        closeSidebar();
      }
    });
  }

  // =========================================
  // Smooth scroll for anchor links
  // =========================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        const id = this.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // =========================================
  // Initialize Everything
  // =========================================
  function init() {
    initIssueAccordions();
    initFAQAccordion();
    initErrorTableSearch();
    initDiagnosticTool();
    initTOCTracking();
    initMobileSidebar();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();