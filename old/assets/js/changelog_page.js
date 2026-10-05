// Changelog & Release Notes Page JavaScript

(function() {
  'use strict';

  // ========== Data ==========
  const changelogData = [
    {
      version: 'v2.3.0',
      date: '2025-03-08',
      walletType: 'both',
      latest: true,
      tags: ['new-feature', 'improvement'],
      changes: [
        { type: 'added', text: 'Biometric authentication support for NFC payments on both wallets' },
        { type: 'added', text: 'Multi-language support: Spanish, French, Portuguese, and Arabic' },
        { type: 'changed', text: 'Redesigned transaction history with advanced filtering and export options' },
        { type: 'changed', text: 'Improved onboarding flow with interactive tutorials' },
        { type: 'fixed', text: 'Fixed accessibility issues with screen reader navigation in payment flows' }
      ]
    },
    {
      version: 'v2.2.1',
      date: '2025-02-22',
      walletType: 'merchant',
      latest: false,
      tags: ['bug-fix', 'security'],
      changes: [
        { type: 'fixed', text: 'Resolved QR code generation timeout on older Android devices' },
        { type: 'fixed', text: 'Fixed incorrect currency formatting in transaction receipts' },
        { type: 'security', text: 'Updated TLS certificate pinning for enhanced API security' },
        { type: 'fixed', text: 'Corrected push notification delays for payment confirmations' }
      ]
    },
    {
      version: 'v2.2.0',
      date: '2025-02-10',
      walletType: 'consumer',
      latest: false,
      tags: ['new-feature', 'improvement'],
      changes: [
        { type: 'added', text: 'P2P transfers now support scheduled and recurring payments' },
        { type: 'added', text: 'New wallet top-up methods: bank transfer and debit card' },
        { type: 'changed', text: 'Improved payment confirmation screen with merchant details and map location' },
        { type: 'added', text: 'Added transaction receipt sharing via WhatsApp, SMS, and email' }
      ]
    },
    {
      version: 'v2.1.2',
      date: '2025-01-28',
      walletType: 'merchant',
      latest: false,
      tags: ['bug-fix'],
      changes: [
        { type: 'fixed', text: 'Fixed NFC payment reader not responding after sleep mode' },
        { type: 'fixed', text: 'Resolved settlement report calculation discrepancy' },
        { type: 'fixed', text: 'Corrected timezone display in transaction timestamps' }
      ]
    },
    {
      version: 'v2.1.0',
      date: '2025-01-15',
      walletType: 'both',
      latest: false,
      tags: ['new-feature', 'breaking-change'],
      changes: [
        { type: 'added', text: 'Dynamic QR codes with customizable payment amounts and descriptions' },
        { type: 'added', text: 'Real-time payment status tracking with live notifications' },
        { type: 'removed', text: 'Deprecated v1 API endpoints — please migrate to v2 APIs before March 1st' },
        { type: 'changed', text: 'Updated minimum OS requirements: iOS 15+ and Android 10+' },
        { type: 'added', text: 'Dark mode support across all screens' }
      ]
    },
    {
      version: 'v2.0.3',
      date: '2025-01-05',
      walletType: 'consumer',
      latest: false,
      tags: ['security', 'bug-fix'],
      changes: [
        { type: 'security', text: 'Patched vulnerability in session token refresh mechanism' },
        { type: 'fixed', text: 'Fixed wallet balance not updating after P2P transfer completion' },
        { type: 'security', text: 'Enhanced encryption for stored payment credentials' }
      ]
    },
    {
      version: 'v2.0.0',
      date: '2024-12-15',
      walletType: 'both',
      latest: false,
      tags: ['new-feature', 'improvement', 'breaking-change'],
      changes: [
        { type: 'added', text: 'Complete UI redesign with new royal blue brand identity' },
        { type: 'added', text: 'NFC tap-to-pay support for both merchant and consumer wallets' },
        { type: 'added', text: 'New merchant dashboard with sales analytics and insights' },
        { type: 'changed', text: 'Migrated to new secure payment processing infrastructure' },
        { type: 'removed', text: 'Removed legacy payment method integrations (v1 card processing)' },
        { type: 'added', text: 'KYC verification streamlined with document scanning' }
      ]
    },
    {
      version: 'v1.8.0',
      date: '2024-11-20',
      walletType: 'merchant',
      latest: false,
      tags: ['new-feature', 'improvement'],
      changes: [
        { type: 'added', text: 'Batch transaction export in CSV, PDF, and Excel formats' },
        { type: 'changed', text: 'Improved QR code scanning speed by 40% with new camera engine' },
        { type: 'added', text: 'Customizable notification preferences per transaction type' }
      ]
    }
  ];

  // ========== State ==========
  let activeWalletFilter = 'all';
  let activeTagFilters = new Set();

  // ========== DOM References ==========
  const walletSelect = document.getElementById('cl_filter_wallet');
  const tagFilterBtns = document.querySelectorAll('.tag-filter-btn');
  const timelineContainer = document.getElementById('cl_entry_list');
  const emptyState = document.getElementById('cl_empty_state');
  const resultsCount = document.getElementById('cl_results_count');
  const activeFiltersBar = document.getElementById('cl_active_filters');
  const clearFiltersBtn = document.getElementById('cl_clear_filters');
  const header = document.querySelector('.changelog-header');
  const scrollTopBtn = document.getElementById('scroll_to_top');

  // ========== Initialize ==========
  function init() {
    // Wait for I18n to be ready
    if (window.I18n && typeof I18n.init === 'function') {
      I18n.init().then(() => {
        renderEntries(changelogData);
        bindEvents();
        updateResultsCount(changelogData.length);
      });
    } else {
      renderEntries(changelogData);
      bindEvents();
      updateResultsCount(changelogData.length);
    }
  }

  // ========== Event Binding ==========
  function bindEvents() {
    // Wallet type filter
    if (walletSelect) {
      walletSelect.addEventListener('change', handleFilterChange);
    }

    // Tag filter buttons
    tagFilterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const tag = this.dataset.tag;
        if (activeTagFilters.has(tag)) {
          activeTagFilters.delete(tag);
          this.classList.remove('active');
          this.setAttribute('aria-pressed', 'false');
        } else {
          activeTagFilters.add(tag);
          this.classList.add('active');
          this.setAttribute('aria-pressed', 'true');
        }
        handleFilterChange();
      });
    });

    // Clear filters
    if (clearFiltersBtn) {
      clearFiltersBtn.addEventListener('click', clearAllFilters);
    }

    // Empty state reset
    const emptyResetBtn = document.getElementById('cl_empty_reset');
    if (emptyResetBtn) {
      emptyResetBtn.addEventListener('click', clearAllFilters);
    }

    // Scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll to top button
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ========== Scroll Handler ==========
  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    // Header shadow
    if (header) {
      if (scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll to top button
    if (scrollTopBtn) {
      if (scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  // ========== Filter Logic ==========
  function handleFilterChange() {
    activeWalletFilter = walletSelect ? walletSelect.value : 'all';

    const filtered = changelogData.filter(entry => {
      // Wallet type filter
      if (activeWalletFilter !== 'all') {
        if (entry.walletType !== activeWalletFilter && entry.walletType !== 'both') {
          return false;
        }
      }

      // Tag filters
      if (activeTagFilters.size > 0) {
        const hasMatchingTag = entry.tags.some(tag => activeTagFilters.has(tag));
        if (!hasMatchingTag) return false;
      }

      return true;
    });

    renderEntries(filtered);
    updateResultsCount(filtered.length);
    updateActiveFiltersBar();
  }

  function clearAllFilters() {
    activeWalletFilter = 'all';
    activeTagFilters.clear();

    if (walletSelect) walletSelect.value = 'all';

    tagFilterBtns.forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });

    renderEntries(changelogData);
    updateResultsCount(changelogData.length);
    updateActiveFiltersBar();
  }

  function updateActiveFiltersBar() {
    if (!activeFiltersBar) return;

    const hasFilters = activeWalletFilter !== 'all' || activeTagFilters.size > 0;
    if (hasFilters) {
      activeFiltersBar.classList.remove('hidden');
    } else {
      activeFiltersBar.classList.add('hidden');
    }
  }

  function updateResultsCount(count) {
    if (!resultsCount) return;
    const total = changelogData.length;
    if (count === total) {
      resultsCount.innerHTML = I18n.t('changelog.ui.showing_releases_html', { count: total });
    } else {
      resultsCount.innerHTML = I18n.t('changelog.ui.showing_of_releases_html', { count: count, total: total });
    }
  }

  // ========== Render ==========
  function renderEntries(entries) {
    if (!timelineContainer) return;

    if (entries.length === 0) {
      timelineContainer.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      const timelineLine = document.querySelector('.timeline-line');
      if (timelineLine) timelineLine.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    const timelineLine = document.querySelector('.timeline-line');
    if (timelineLine) timelineLine.style.display = '';

    let html = '';
    entries.forEach(function(entry, index) {
      const isLatest = index === 0 && entry.latest;
      html += renderEntry(entry, isLatest);
    });

    timelineContainer.innerHTML = html;
  }

  function renderEntry(entry, isLatest) {
    const walletLabel = getWalletLabel(entry.walletType);
    const walletIcon = getWalletIcon(entry.walletType);
    const formattedDate = formatDate(entry.date);
    const latestClass = isLatest ? ' latest' : '';
    const latestBadge = isLatest ? ' <span class="latest-label">' + I18n.t('changelog.ui.latest') + '</span>' : '';

    let tagsHtml = '';
    entry.tags.forEach(function(tag) {
      tagsHtml += '<span class="change-tag ' + tag + '">' + getTagIcon(tag) + ' ' + formatTagLabel(tag) + '</span>';
    });

    let changesHtml = '';
    entry.changes.forEach(function(change, changeIndex) {
      // Get localized text from I18n if available, otherwise fallback to hardcoded text
      const localizedText = I18n.t('changelog.entries.' + entry.version.replace(/\./g, '_') + '.' + changeIndex) || change.text;
      changesHtml += '<li class="change-item"><span class="change-icon ' + change.type + '">' + getChangeIcon(change.type) + '</span><span>' + localizedText + '</span></li>';
    });

    return '<article class="release-entry' + latestClass + '" role="article" aria-label="Release ' + entry.version + '">' +
      '<div class="timeline-dot" aria-hidden="true"></div>' +
      '<div class="entry-card" id="cl_entry_card_' + entry.version.replace(/\./g, '_') + '">' +
        '<div class="entry-header">' +
          '<div class="entry-header-left">' +
            '<span class="version-badge" id="cl_version_badge_' + entry.version.replace(/\./g, '_') + '">' + entry.version + '</span>' +
            latestBadge +
            '<span class="wallet-badge ' + entry.walletType + '">' + walletIcon + ' ' + walletLabel + '</span>' +
          '</div>' +
          '<span class="release-date" id="cl_date_' + entry.version.replace(/\./g, '_') + '"><i class="fa fa-calendar-o" aria-hidden="true"></i> ' + formattedDate + '</span>' +
        '</div>' +
        '<div class="entry-tags" id="cl_tags_' + entry.version.replace(/\./g, '_') + '">' + tagsHtml + '</div>' +
        '<ul class="changes-list" id="cl_changes_list_' + entry.version.replace(/\./g, '_') + '">' + changesHtml + '</ul>' +
      '</div>' +
    '</article>';
  }

  // ========== Helpers ==========
  function formatDate(dateStr) {
    var d = new Date(dateStr + 'T00:00:00');
    // Use current language for date formatting
    var currentLang = localStorage.getItem('mpay_locale') || 'en';
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    
    // Map internal codes to valid BCP 47 tags if necessary
    var localeMap = { 'en': 'en-US', 'es': 'es-ES', 'nl': 'nl-NL', 'it': 'it-IT', 'fr': 'fr-FR' };
    var locale = localeMap[currentLang] || currentLang;
    
    return d.toLocaleDateString(locale, options);
  }

  function getWalletLabel(type) {
    switch (type) {
      case 'merchant': return I18n.t('changelog.ui.merchant');
      case 'consumer': return I18n.t('changelog.ui.consumer');
      case 'both': return I18n.t('changelog.ui.both_wallets');
      default: return type;
    }
  }

  function getWalletIcon(type) {
    switch (type) {
      case 'merchant': return '<i class="fa fa-briefcase" aria-hidden="true"></i>';
      case 'consumer': return '<i class="fa fa-user" aria-hidden="true"></i>';
      case 'both': return '<i class="fa fa-exchange" aria-hidden="true"></i>';
      default: return '';
    }
  }

  function getTagIcon(tag) {
    switch (tag) {
      case 'new-feature': return '<i class="fa fa-star" aria-hidden="true"></i>';
      case 'bug-fix': return '<i class="fa fa-bug" aria-hidden="true"></i>';
      case 'improvement': return '<i class="fa fa-arrow-up" aria-hidden="true"></i>';
      case 'breaking-change': return '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
      case 'security': return '<i class="fa fa-shield" aria-hidden="true"></i>';
      default: return '';
    }
  }

  function formatTagLabel(tag) {
    switch (tag) {
      case 'new-feature': return I18n.t('changelog.ui.tag_new_feature');
      case 'bug-fix': return I18n.t('changelog.ui.tag_bug_fix');
      case 'improvement': return I18n.t('changelog.ui.tag_improvement');
      case 'breaking-change': return I18n.t('changelog.ui.tag_breaking_change');
      case 'security': return I18n.t('changelog.ui.tag_security');
      default: return tag;
    }
  }

  function getChangeIcon(type) {
    switch (type) {
      case 'added': return '<i class="fa fa-plus" aria-hidden="true"></i>';
      case 'fixed': return '<i class="fa fa-wrench" aria-hidden="true"></i>';
      case 'changed': return '<i class="fa fa-pencil" aria-hidden="true"></i>';
      case 'removed': return '<i class="fa fa-minus" aria-hidden="true"></i>';
      case 'security': return '<i class="fa fa-lock" aria-hidden="true"></i>';
      default: return '<i class="fa fa-circle" aria-hidden="true"></i>';
    }
  }

  // ========== Run ==========
  init();

})();