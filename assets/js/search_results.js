/* Search Results Page JavaScript */
(function() {
  'use strict';

  const uiText = {
    breadcrumbs: {
      think4ever: 'think4ever',
      documentation: 'Documentation',
      product: 'Product',
      strategy: 'Strategy',
      design: 'Design',
      development: 'Development',
      guides: 'Guides',
      launch: 'Launch',
      operations: 'Operations',
      blog: 'Blog',
      changelog: 'Changelog'
    },
    filters: {
      docs: 'Docs',
      guides: 'Guides',
      blog: 'Blog',
      changelog: 'Changelog'
    }
  };

  const allResults = [
    {
      id: 'r1',
      type: 'docs',
      breadcrumb: ['think4ever', 'documentation', 'product'],
      date: '2026-04-01',
      readTime: '5 min',
      page: 'manual_introduction',
      title: 'Introduction to think4ever',
      excerpt: 'Start with the core platform vision, how multi-agent systems fit together, and what teams can accomplish with think4ever.'
    },
    {
      id: 'r2',
      type: 'docs',
      breadcrumb: ['think4ever', 'documentation', 'product'],
      date: '2026-04-02',
      readTime: '4 min',
      page: 'manual_key_features',
      title: 'Key Platform Features',
      excerpt: 'Explore the product capabilities that power orchestration, collaboration, automation, and scalable agent workflows.'
    },
    {
      id: 'r3',
      type: 'docs',
      breadcrumb: ['think4ever', 'documentation', 'product'],
      date: '2026-04-03',
      readTime: '6 min',
      page: 'manual_dashboard',
      title: 'Dashboard Overview',
      excerpt: 'Learn how the think4ever dashboard helps teams monitor projects, agents, and delivery progress in one place.'
    },
    {
      id: 'r4',
      type: 'guides',
      breadcrumb: ['think4ever', 'guides', 'launch'],
      date: '2026-04-04',
      readTime: '4 min',
      page: 'manual_create_project',
      title: 'Create a New Project',
      excerpt: 'Set up a new initiative, define scope, and create the foundation for collaborative AI execution.'
    },
    {
      id: 'r5',
      type: 'guides',
      breadcrumb: ['think4ever', 'guides', 'operations'],
      date: '2026-04-05',
      readTime: '5 min',
      page: 'manual_project_settings',
      title: 'Project Settings',
      excerpt: 'Configure project-level settings, collaboration preferences, and workspace controls for your team.'
    },
    {
      id: 'r6',
      type: 'blog',
      breadcrumb: ['think4ever', 'blog'],
      date: '2026-04-06',
      readTime: '3 min',
      page: 'blog_listing',
      title: 'Inside the think4ever Product Journey',
      excerpt: 'Read the latest platform stories, product updates, and ideas shaping our approach to multi-agent systems.'
    },
    {
      id: 'r7',
      type: 'guides',
      breadcrumb: ['think4ever', 'guides', 'strategy'],
      date: '2026-04-03',
      readTime: '4 min',
      page: 'manual_business_flow',
      title: 'Business Flow Mapping',
      excerpt: 'Understand how business processes are translated into orchestrated workflows and collaborative decision paths.'
    },
    {
      id: 'r8',
      type: 'changelog',
      breadcrumb: ['think4ever', 'changelog'],
      date: '2026-04-08',
      readTime: '2 min',
      page: 'changelog_page',
      title: 'Latest think4ever Changelog',
      excerpt: 'Review recent improvements, documentation changes, and product updates across the think4ever experience.'
    },
    {
      id: 'r9',
      type: 'docs',
      breadcrumb: ['think4ever', 'documentation', 'development'],
      date: '2026-04-05',
      readTime: '7 min',
      page: 'manual_source_code',
      title: 'Source Code Structure',
      excerpt: 'See how think4ever organizes code, delivery assets, and implementation details across the platform.'
    },
    {
      id: 'r10',
      type: 'guides',
      breadcrumb: ['think4ever', 'guides', 'design'],
      date: '2026-04-07',
      readTime: '6 min',
      page: 'manual_ui_design',
      title: 'UI Design Guidance',
      excerpt: 'Review interface structure, experience principles, and design decisions behind the think4ever product.'
    },
    {
      id: 'r11',
      type: 'blog',
      breadcrumb: ['think4ever', 'blog'],
      date: '2026-03-30',
      readTime: '5 min',
      page: 'blog_listing',
      title: 'Scaling Multi-Agent Collaboration',
      excerpt: 'Practical insights on team workflows, system orchestration, and what it takes to scale coordinated AI.'
    },
    {
      id: 'r12',
      type: 'docs',
      breadcrumb: ['think4ever', 'documentation', 'development'],
      date: '2026-04-02',
      readTime: '5 min',
      page: 'manual_database',
      title: 'Database and Data Objects',
      excerpt: 'Understand how structured data, schema decisions, and data objects support the think4ever platform.'
    }
  ];

  const recentSearches = ['multi-agent systems', 'project settings', 'dashboard overview', 'ui design', 'changelog'];

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
  const langWrapper = document.getElementById('langWrapper');
  const langBtn = document.getElementById('modernLangBtn');
  const langMenu = document.getElementById('modernLangMenu');
  const currentLangCode = document.getElementById('current-lang-code');

  // Initialize
  function init() {
    setupSearch();
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

    if (langBtn && langMenu) {
      langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isOpen = langMenu.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', String(isOpen));
      });

      document.addEventListener('click', function(e) {
        if (!langWrapper || !langWrapper.contains(e.target)) {
          langMenu.classList.remove('open');
          langBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
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

    // Filter by search query
    if (query) {
      results = results.filter(result => {
        const title = result.title.toLowerCase();
        const excerpt = result.excerpt.toLowerCase();
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
      resultCountEl.innerHTML = `<strong>${totalResults}</strong> results found for <span class="sr-query-text">"${escapeHtml(currentQuery)}"</span>`;
    } else {
      resultCountEl.innerHTML = `No results found for <span class="sr-query-text">"${escapeHtml(currentQuery)}"</span>`;
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
        const label = uiText.breadcrumbs[bc] || bc;
        if (i < result.breadcrumb.length - 1) {
          return `<span>${escapeHtml(label)}</span><span class="sr-bc-sep">/</span>`;
        }
        return `<span>${escapeHtml(label)}</span>`;
      }).join('');

      html += `
        <article class="sr-result-item sr-fade-in" style="animation-delay: ${idx * 50}ms" data-page="${result.page}" role="article">
          <div class="sr-result-item-header">
            <div class="sr-result-item-left">
              <div class="sr-result-breadcrumb">${breadcrumbHtml}</div>
              <a href="#" class="sr-result-title" onclick="event.preventDefault(); load_page('${result.page}')" role="link">${escapeHtml(result.title)}</a>
            </div>
            <span class="sr-result-type-badge type-${result.type}">
              ${escapeHtml(uiText.filters[result.type] || result.type)}
            </span>
          </div>
          <p class="sr-result-excerpt">${escapeHtml(result.excerpt)}</p>
          <div class="sr-result-meta">
            <span class="sr-result-meta-item"><i class="fa-regular fa-calendar" aria-hidden="true"></i> ${formatDate(result.date)}</span>
            <span class="sr-result-meta-item"><i class="fa-regular fa-clock" aria-hidden="true"></i> ${escapeHtml(result.readTime)} read</span>
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

    let html = `<h3 class="sr-recent-label">Recent searches</h3><div class="sr-recent-tags">`;
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

  window.changeLanguage = function(lang) {
    const safeLang = (lang || 'en').toLowerCase();
    localStorage.setItem('mpay_locale', safeLang);

    if (currentLangCode) {
      currentLangCode.textContent = safeLang.toUpperCase();
    }

    document.querySelectorAll('[data-lang-btn]').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === safeLang);
    });

    if (langMenu && langBtn) {
      langMenu.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    }
  };

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

  const storedLang = (localStorage.getItem('mpay_locale') || 'en').toLowerCase();
  window.changeLanguage(storedLang);

})();
