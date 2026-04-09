/* Search Results Page JavaScript */
(function() {
  'use strict';

  // Sample data for search results
  const allResults = [
    {
      id: 'r1',
      type: 'merchant-docs',
      breadcrumb: ['merchant_wallet', 'qr_payments'],
      date: 'Mar 8, 2025',
      readTime: '5 min',
      page: 'merchant_qr_payments'
    },
    {
      id: 'r2',
      type: 'merchant-docs',
      breadcrumb: ['merchant_wallet', 'nfc_payments'],
      date: 'Mar 5, 2025',
      readTime: '4 min',
      page: 'merchant_nfc_payments'
    },
    {
      id: 'r3',
      type: 'consumer-docs',
      breadcrumb: ['consumer_wallet', 'making_payments'],
      date: 'Mar 6, 2025',
      readTime: '6 min',
      page: 'consumer_making_payments'
    },
    {
      id: 'r4',
      type: 'merchant-docs',
      breadcrumb: ['merchant_wallet', 'transactions'],
      date: 'Mar 3, 2025',
      readTime: '4 min',
      page: 'merchant_transactions'
    },
    {
      id: 'r5',
      type: 'consumer-docs',
      breadcrumb: ['consumer_wallet', 'wallet_management'],
      date: 'Mar 2, 2025',
      readTime: '5 min',
      page: 'consumer_wallet_management'
    },
    {
      id: 'r6',
      type: 'blog',
      breadcrumb: ['blog', 'product_updates'],
      date: 'Feb 28, 2025',
      readTime: '3 min',
      page: 'blog_post_detail'
    },
    {
      id: 'r7',
      type: 'consumer-docs',
      breadcrumb: ['consumer_wallet', 'p2p_transfers'],
      date: 'Mar 1, 2025',
      readTime: '4 min',
      page: 'consumer_p2p_transfers'
    },
    {
      id: 'r8',
      type: 'changelog',
      breadcrumb: ['changelog', 'v2_5_0'],
      date: 'Feb 25, 2025',
      readTime: '2 min',
      page: 'changelog_page'
    },
    {
      id: 'r9',
      type: 'merchant-docs',
      breadcrumb: ['merchant_wallet', 'account_setup'],
      date: 'Mar 7, 2025',
      readTime: '7 min',
      page: 'merchant_account_setup'
    },
    {
      id: 'r10',
      type: 'merchant-docs',
      breadcrumb: ['merchant_wallet', 'troubleshooting'],
      date: 'Mar 4, 2025',
      readTime: '6 min',
      page: 'merchant_troubleshooting'
    },
    {
      id: 'r11',
      type: 'blog',
      breadcrumb: ['blog', 'security'],
      date: 'Feb 20, 2025',
      readTime: '5 min',
      page: 'blog_post_detail'
    },
    {
      id: 'r12',
      type: 'consumer-docs',
      breadcrumb: ['consumer_wallet', 'settings_security'],
      date: 'Mar 1, 2025',
      readTime: '5 min',
      page: 'consumer_settings'
    }
  ];

  // These would typically be localized from the server or a database.
  // For this exercise, we will assume they are in English but UI labels are localized.
  const recentSearches = ['QR code payments', 'NFC setup', 'transaction history', 'wallet top-up', 'KYC verification'];

  let currentFilter = 'all';
  let currentQuery = '';
  let currentPage = 1;
  const resultsPerPage = 6;

  // DOM Elements
  const searchInput = document.getElementById('sr_search_input');
  const clearBtn = document.querySelector('.sr-clear-btn');
  const resultCountEl = document.getElementById('sr_result_count');
  const filterContainer = document.getElementById('sr_filter_type');
  const resultsList = document.getElementById('sr_results_list');
  const noResultsEl = document.getElementById('sr_no_results');
  const paginationEl = document.getElementById('sr_pagination');
  const metaBarEl = document.querySelector('.sr-meta-bar');
  const recentSearchesEl = document.getElementById('sr_recent_searches');

  // Initialize
  function init() {
    // Wait for I18n to be ready if it exists
    if (window.I18n && typeof I18n.init === 'function') {
      I18n.init().then(() => {
        setupSearch();
      });
    } else {
      setupSearch();
    }
  }

  function setupSearch() {
    // Check for URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const queryParam = urlParams.get('q') || '';

    if (queryParam) {
      searchInput.value = queryParam;
      currentQuery = queryParam;
      performSearch();
    } else {
      showInitialState();
    }

    bindEvents();
    renderRecentSearches();
    updateClearButton();
  }

  function bindEvents() {
    // Search input
    searchInput.addEventListener('input', function() {
      updateClearButton();
    });

    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        currentQuery = searchInput.value.trim();
        currentPage = 1;
        performSearch();
      }
      if (e.key === 'Escape') {
        searchInput.value = '';
        currentQuery = '';
        updateClearButton();
        showInitialState();
      }
    });

    // Search button
    document.querySelector('.sr-search-btn').addEventListener('click', function() {
      currentQuery = searchInput.value.trim();
      currentPage = 1;
      performSearch();
    });

    // Clear button
    clearBtn.addEventListener('click', function() {
      searchInput.value = '';
      currentQuery = '';
      updateClearButton();
      showInitialState();
      searchInput.focus();
    });

    // Filter buttons
    filterContainer.addEventListener('click', function(e) {
      const btn = e.target.closest('.sr-filter-btn');
      if (!btn) return;

      filterContainer.querySelectorAll('.sr-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      currentPage = 1;
      renderResults();
    });

    // Header scroll effect
    const header = document.querySelector('.sr-header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Global keyboard shortcut
    document.addEventListener('keydown', function(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    });
  }

  function updateClearButton() {
    if (searchInput.value.length > 0) {
      clearBtn.classList.add('visible');
    } else {
      clearBtn.classList.remove('visible');
    }
  }

  function showInitialState() {
    metaBarEl.style.display = 'none';
    noResultsEl.style.display = 'none';
    resultsList.innerHTML = '';
    paginationEl.style.display = 'none';
    if (recentSearchesEl) {
      recentSearchesEl.style.display = 'block';
    }
  }

  function performSearch() {
    if (!currentQuery) {
      showInitialState();
      return;
    }

    // Hide recent searches
    if (recentSearchesEl) {
      recentSearchesEl.style.display = 'none';
    }

    // Show loading
    showLoading();

    // Simulate search delay
    setTimeout(function() {
      renderResults();
    }, 400);

    // Save to recent searches
    saveRecentSearch(currentQuery);
  }

  // Listen for language changes to update dynamic content
  document.addEventListener('i18n:applied', function() {
    renderRecentSearches();
    if (currentQuery) {
      renderResults(); // Refresh existing results with new language
    }
  });

  function showLoading() {
    metaBarEl.style.display = 'none';
    noResultsEl.style.display = 'none';
    paginationEl.style.display = 'none';

    let skeletonHTML = '';
    for (let i = 0; i < 4; i++) {
      skeletonHTML += `
        <div class="sr-skeleton-item" aria-hidden="true">
          <div class="sr-skeleton-line w-40 h-10"></div>
          <div class="sr-skeleton-line w-60 h-16"></div>
          <div class="sr-skeleton-line w-100"></div>
          <div class="sr-skeleton-line w-80"></div>
        </div>`;
    }
    resultsList.innerHTML = skeletonHTML;
    resultsList.setAttribute('aria-busy', 'true');
  }

  function getFilteredResults() {
    let results = allResults;

    const query = currentQuery.toLowerCase().trim();

    // Filter by search query (check localized title and excerpt)
    if (query) {
      results = results.filter(result => {
        const title = I18n.t(`search.results.${result.id}.title`).toLowerCase();
        const excerpt = I18n.t(`search.results.${result.id}.excerpt`).toLowerCase();
        return title.includes(query) || excerpt.includes(query);
      });
    }

    // Filter by type
    if (currentFilter !== 'all') {
      results = results.filter(r => r.type === currentFilter);
    }

    return results;
  }

  function getFilterCounts() {
    const counts = { all: allResults.length };
    allResults.forEach(r => {
      counts[r.type] = (counts[r.type] || 0) + 1;
    });
    return counts;
  }

  function renderResults() {
    const filtered = getFilteredResults();
    const totalResults = filtered.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    // Clamp current page
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIdx = (currentPage - 1) * resultsPerPage;
    const pageResults = filtered.slice(startIdx, startIdx + resultsPerPage);

    // Update meta bar
    metaBarEl.style.display = 'flex';

    // Update result count
    if (totalResults > 0) {
      resultCountEl.innerHTML = I18n.t('search.results_found', { count: totalResults, query: escapeHtml(currentQuery) });
    } else {
      resultCountEl.innerHTML = I18n.t('search.results_none', { query: escapeHtml(currentQuery) });
    }

    // Update filter counts
    const counts = getFilterCounts();
    const filterBtns = filterContainer.querySelectorAll('.sr-filter-btn');
    filterBtns.forEach(btn => {
      const filter = btn.dataset.filter;
      const countEl = btn.querySelector('.sr-filter-count');
      if (countEl) {
        countEl.textContent = counts[filter] || 0;
      }
    });

    // Render results
    resultsList.setAttribute('aria-busy', 'false');

    if (totalResults === 0) {
      resultsList.innerHTML = '';
      noResultsEl.style.display = 'block';
      paginationEl.style.display = 'none';
      return;
    }

    noResultsEl.style.display = 'none';

    let html = '';
    pageResults.forEach(function(result, idx) {
      const breadcrumbHtml = result.breadcrumb.map((bc, i) => {
        const localizedBc = I18n.t('breadcrumb.' + bc);
        if (i < result.breadcrumb.length - 1) {
          return `<span>${escapeHtml(localizedBc)}</span><span class="sr-bc-sep">/</span>`;
        }
        return `<span>${escapeHtml(localizedBc)}</span>`;
      }).join('');

      const localizedTitle = I18n.t(`search.results.${result.id}.title`);
      const localizedExcerpt = I18n.t(`search.results.${result.id}.excerpt`);
      html += `
        <article class="sr-result-item sr-fade-in" style="animation-delay: ${idx * 50}ms" data-page="${result.page}" role="article">
          <div class="sr-result-item-header">
            <div class="sr-result-item-left">
              <div class="sr-result-breadcrumb">${breadcrumbHtml}</div>
              <a href="#" class="sr-result-title" onclick="event.preventDefault(); load_page('${result.page}')" role="link">${localizedTitle}</a>
            </div>
            <span class="sr-result-type-badge type-${result.type}">
              ${I18n.t('search.filters.' + (result.type === 'merchant-docs' ? 'merchant' : result.type === 'consumer-docs' ? 'consumer' : result.type))}
            </span>
          </div>
          <p class="sr-result-excerpt">${localizedExcerpt}</p>
          <div class="sr-result-meta">
            <span class="sr-result-meta-item"><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${formatDate(result.date)}</span>
            <span class="sr-result-meta-item"><i class="fa-regular fa-clock" aria-hidden="true"></i> ${I18n.t('search.meta.read_time', { count: parseInt(result.readTime) })}</span>
          </div>
          <span class="sr-result-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>
        </article>`;
    });

    resultsList.innerHTML = html;

    // Bind click events on result items
    resultsList.querySelectorAll('.sr-result-item').forEach(item => {
      item.addEventListener('click', function(e) {
        if (e.target.closest('.sr-result-title')) return;
        const page = this.dataset.page;
        if (page) load_page(page);
      });
    });

    // Render pagination
    if (totalPages > 1) {
      renderPagination(totalPages);
      paginationEl.style.display = 'flex';
    } else {
      paginationEl.style.display = 'none';
    }
  }

  function renderPagination(totalPages) {
    let html = '';

    // Previous button
    html += `<button class="sr-page-btn" data-page="prev" ${currentPage === 1 ? 'disabled' : ''} aria-label="Previous page"><i class="fa-solid fa-chevron-left"></i></button>`;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        html += `<button class="sr-page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}" aria-label="Page ${i}" ${i === currentPage ? 'aria-current="page"' : ''}>${i}</button>`;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        html += `<span class="sr-page-ellipsis">…</span>`;
      }
    }

    // Next button
    html += `<button class="sr-page-btn" data-page="next" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Next page"><i class="fa-solid fa-chevron-right"></i></button>`;

    paginationEl.innerHTML = html;

    // Bind pagination events
    paginationEl.querySelectorAll('.sr-page-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const pageVal = this.dataset.page;
        if (pageVal === 'prev' && currentPage > 1) {
          currentPage--;
        } else if (pageVal === 'next' && currentPage < totalPages) {
          currentPage++;
        } else if (pageVal !== 'prev' && pageVal !== 'next') {
          currentPage = parseInt(pageVal);
        }
        renderResults();
        // Scroll to top of results
        resultsList.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function renderRecentSearches() {
    if (!recentSearchesEl) return;

    if (recentSearches.length === 0) {
      recentSearchesEl.innerHTML = '';
      return;
    }

    let html = `<h3 class="sr-recent-label">${I18n.t('search.recent_label')}</h3><div class="sr-recent-tags">`;
    recentSearches.forEach(term => {
      html += `<button class="sr-recent-tag" data-term="${escapeHtml(term)}"><i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i> ${escapeHtml(term)}</button>`;
    });
    html += '</div>';

    recentSearchesEl.innerHTML = html;

    recentSearchesEl.querySelectorAll('.sr-recent-tag').forEach(tag => {
      tag.addEventListener('click', function() {
        const term = this.dataset.term;
        searchInput.value = term;
        currentQuery = term;
        currentPage = 1;
        currentFilter = 'all';
        // Reset active filter
        filterContainer.querySelectorAll('.sr-filter-btn').forEach(b => b.classList.remove('active'));
        filterContainer.querySelector('[data-filter="all"]').classList.add('active');
        updateClearButton();
        performSearch();
      });
    });
  }

  function saveRecentSearch(term) {
    // In a real app, save to localStorage
    if (!recentSearches.includes(term)) {
      recentSearches.unshift(term);
      if (recentSearches.length > 5) recentSearches.pop();
    }
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    
    // Use current language for date formatting
    const currentLang = localStorage.getItem('mpay_locale') || 'en';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    
    // Map internal codes to valid BCP 47 tags if necessary
    const localeMap = { 'en': 'en-US', 'es': 'es-ES', 'nl': 'nl-NL', 'it': 'it-IT', 'fr': 'fr-FR' };
    const locale = localeMap[currentLang] || currentLang;
    
    return d.toLocaleDateString(locale, options);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Initialize when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();