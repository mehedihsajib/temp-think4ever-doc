/* Consumer Troubleshooting Page JavaScript */

(function() {
  'use strict';

  // Sidebar toggle
  const sidebar = document.getElementById('ctr_sidebar');
  const sidebarToggle = document.getElementById('ctr_sidebar_toggle');
  const sidebarOverlay = document.getElementById('ctr_sidebar_overlay');

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('visible');
      const isOpen = sidebar.classList.contains('open');
      sidebarToggle.setAttribute('aria-expanded', isOpen);
      sidebarToggle.innerHTML = isOpen ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
    });
  }

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('visible');
      sidebarToggle.setAttribute('aria-expanded', 'false');
      sidebarToggle.innerHTML = '<i class="fa fa-bars"></i>';
    });
  }

  // Issue card expand/collapse
  const issueCards = document.querySelectorAll('.ctr-issue-card');
  issueCards.forEach(function(card) {
    const header = card.querySelector('.ctr-issue-header');
    if (header) {
      header.addEventListener('click', function() {
        const isExpanded = card.classList.contains('expanded');
        card.classList.toggle('expanded');
        header.setAttribute('aria-expanded', !isExpanded);
        const body = card.querySelector('.ctr-issue-body');
        if (body) {
          body.setAttribute('aria-hidden', isExpanded);
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
  const faqItems = document.querySelectorAll('.ctr-faq-item');
  faqItems.forEach(function(item) {
    const question = item.querySelector('.ctr-faq-question');
    if (question) {
      question.addEventListener('click', function() {
        const isExpanded = item.classList.contains('expanded');
        // Close all other FAQs
        faqItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('expanded');
            const q = otherItem.querySelector('.ctr-faq-question');
            if (q) q.setAttribute('aria-expanded', 'false');
            const a = otherItem.querySelector('.ctr-faq-answer');
            if (a) a.setAttribute('aria-hidden', 'true');
          }
        });
        item.classList.toggle('expanded');
        question.setAttribute('aria-expanded', !isExpanded);
        const answer = item.querySelector('.ctr-faq-answer');
        if (answer) {
          answer.setAttribute('aria-hidden', isExpanded);
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

  // Error code filter tabs
  const filterTabs = document.querySelectorAll('.ctr-filter-tab');
  const tableRows = document.querySelectorAll('.ctr-table tbody tr');
  filterTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      filterTabs.forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      tableRows.forEach(function(row) {
        if (filter === 'all') {
          row.style.display = '';
        } else {
          const severity = row.getAttribute('data-severity');
          row.style.display = severity === filter ? '' : 'none';
        }
      });
    });
  });

  // Search/filter issues
  const searchInput = document.getElementById('ctr_search_input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase().trim();
      issueCards.forEach(function(card) {
        const title = card.querySelector('.ctr-issue-title');
        const summary = card.querySelector('.ctr-issue-summary');
        const titleText = title ? title.textContent.toLowerCase() : '';
        const summaryText = summary ? summary.textContent.toLowerCase() : '';
        const bodyText = card.querySelector('.ctr-issue-body') ? card.querySelector('.ctr-issue-body').textContent.toLowerCase() : '';
        if (query === '' || titleText.includes(query) || summaryText.includes(query) || bodyText.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
      faqItems.forEach(function(item) {
        const questionText = item.querySelector('.ctr-faq-question span') ? item.querySelector('.ctr-faq-question span').textContent.toLowerCase() : '';
        const answerText = item.querySelector('.ctr-faq-answer') ? item.querySelector('.ctr-faq-answer').textContent.toLowerCase() : '';
        if (query === '' || questionText.includes(query) || answerText.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // Diagnostic tool
  const diagnosticBtn = document.getElementById('ctr_diagnostic_btn');
  const diagnosticItems = document.querySelectorAll('.ctr-diagnostic-item');

  if (diagnosticBtn) {
    diagnosticBtn.addEventListener('click', function() {
      diagnosticBtn.disabled = true;
      const runningText = window.I18n ? window.I18n.t('troubleshooting.diagnostic.running') : 'Running...';
      diagnosticBtn.innerHTML = `<i class="fa fa-spinner fa-spin"></i> ${runningText}`;

      // Reset all items
      diagnosticItems.forEach(function(item) {
        item.className = 'ctr-diagnostic-item';
        item.querySelector('.check-icon').innerHTML = '<i class="fa fa-circle"></i>';
      });

      // Simulate sequential checks
      let index = 0;
      function runCheck() {
        if (index >= diagnosticItems.length) {
          diagnosticBtn.disabled = false;
          const btnText = window.I18n ? window.I18n.t('troubleshooting.diagnostic.btn') : 'Run Diagnostics';
          diagnosticBtn.innerHTML = `<i class="fa fa-play"></i> ${btnText}`;
          return;
        }
        const item = diagnosticItems[index];
        item.classList.add('running');
        item.querySelector('.check-icon').innerHTML = '<i class="fa fa-spinner fa-spin"></i>';

        setTimeout(function() {
          item.classList.remove('running');
          // Simulate random pass/fail (mostly passing)
          const passed = Math.random() > 0.2;
          if (passed) {
            item.classList.add('passed');
            item.querySelector('.check-icon').innerHTML = '<i class="fa fa-check"></i>';
          } else {
            item.classList.add('failed');
            item.querySelector('.check-icon').innerHTML = '<i class="fa fa-times"></i>';
          }
          index++;
          runCheck();
        }, 600 + Math.random() * 400);
      }
      runCheck();
    });
  }

  // TOC active state on scroll
  const tocLinks = document.querySelectorAll('.ctr-toc-link');
  const sections = [];
  tocLinks.forEach(function(link) {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const target = document.getElementById(targetId.substring(1));
      if (target) sections.push({ el: target, link: link });
    }
  });

  function updateTocActive() {
    let current = null;
    sections.forEach(function(s) {
      const rect = s.el.getBoundingClientRect();
      if (rect.top <= 100) {
        current = s;
      }
    });
    tocLinks.forEach(function(l) { l.classList.remove('active'); });
    if (current) current.link.classList.add('active');
  }

  window.addEventListener('scroll', updateTocActive);
  updateTocActive();

  // Smooth scroll for TOC links
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.getElementById(targetId.substring(1));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

})();