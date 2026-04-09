/* Blog Listing Page JavaScript */

(function() {
  'use strict';

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Introducing MPay Network 2.0: A Complete Overhaul',
      excerpt: 'We are thrilled to announce the launch of MPay Network 2.0, featuring a completely redesigned interface, faster transaction processing, and enhanced security features for both merchants and consumers.',
      author: 'Sarah Chen',
      authorInitials: 'SC',
      date: '2025-03-10',
      readingTime: 8,
      tags: ['News', 'Updates'],
      rating: 4.8,
      featured: true,
      thumbnail: 'rocket'
    },
    {
      id: 2,
      title: 'How to Set Up QR Code Payments for Your Business',
      excerpt: 'A step-by-step guide on configuring QR code payments in the MPay Merchant Wallet. Learn best practices for display placement and transaction management.',
      author: 'Michael Torres',
      authorInitials: 'MT',
      date: '2025-03-07',
      readingTime: 12,
      tags: ['Tutorials', 'Merchant'],
      rating: 4.5,
      featured: false,
      thumbnail: 'qrcode'
    },
    {
      id: 3,
      title: '5 Tips for Secure Mobile Payments',
      excerpt: 'Protect your transactions with these essential security tips. From biometric authentication to transaction alerts, learn how to keep your MPay wallet secure.',
      author: 'Emily Nakamura',
      authorInitials: 'EN',
      date: '2025-03-04',
      readingTime: 5,
      tags: ['Tips', 'Consumer'],
      rating: 4.7,
      featured: false,
      thumbnail: 'shield'
    },
    {
      id: 4,
      title: 'NFC Payments: The Future of Contactless Commerce',
      excerpt: 'Explore how NFC tap-to-pay technology is revolutionizing the payment landscape. Learn about the technology behind MPay\'s NFC implementation.',
      author: 'David Park',
      authorInitials: 'DP',
      date: '2025-02-28',
      readingTime: 10,
      tags: ['News', 'Tutorials'],
      rating: 4.3,
      featured: false,
      thumbnail: 'wifi'
    },
    {
      id: 5,
      title: 'Merchant Dashboard: Understanding Your Analytics',
      excerpt: 'Dive deep into the MPay Merchant Dashboard analytics. Learn how to read transaction reports, identify trends, and optimize your payment operations.',
      author: 'Sarah Chen',
      authorInitials: 'SC',
      date: '2025-02-25',
      readingTime: 15,
      tags: ['Tutorials', 'Merchant'],
      rating: 4.6,
      featured: false,
      thumbnail: 'chart'
    },
    {
      id: 6,
      title: 'P2P Transfers Made Easy: Send Money in Seconds',
      excerpt: 'Learn how to use MPay\'s peer-to-peer transfer feature to send money to friends and family instantly. No fees, no hassle.',
      author: 'Emily Nakamura',
      authorInitials: 'EN',
      date: '2025-02-20',
      readingTime: 4,
      tags: ['Tips', 'Consumer'],
      rating: 4.9,
      featured: false,
      thumbnail: 'exchange'
    },
    {
      id: 7,
      title: 'MPay Network February Security Update',
      excerpt: 'Details on the latest security patches and improvements deployed across the MPay Network. Includes information on new two-factor authentication options.',
      author: 'David Park',
      authorInitials: 'DP',
      date: '2025-02-15',
      readingTime: 6,
      tags: ['Updates', 'News'],
      rating: 4.2,
      featured: false,
      thumbnail: 'lock'
    },
    {
      id: 8,
      title: 'Getting Started with MPay Consumer Wallet',
      excerpt: 'New to MPay? This beginner\'s guide walks you through downloading, installing, and making your first payment with the MPay Consumer Wallet.',
      author: 'Michael Torres',
      authorInitials: 'MT',
      date: '2025-02-10',
      readingTime: 7,
      tags: ['Tutorials', 'Consumer'],
      rating: 4.8,
      featured: false,
      thumbnail: 'mobile'
    },
    {
      id: 9,
      title: 'Understanding Transaction Fees and Limits',
      excerpt: 'A comprehensive breakdown of MPay Network\'s fee structure, transaction limits, and how to optimize your costs as a merchant or consumer.',
      author: 'Sarah Chen',
      authorInitials: 'SC',
      date: '2025-02-05',
      readingTime: 9,
      tags: ['Tips', 'Merchant'],
      rating: 4.4,
      featured: false,
      thumbnail: 'calculator'
    }
  ];

  const POSTS_PER_PAGE = 7;
  let currentPage = 1;
  let activeFilters = [];
  let sortBy = 'newest';

  // Icon map for thumbnails
  const iconMap = {
    rocket: 'fa-rocket',
    qrcode: 'fa-qrcode',
    shield: 'fa-shield-halved',
    wifi: 'fa-wifi',
    chart: 'fa-chart-line',
    exchange: 'fa-right-left',
    lock: 'fa-lock',
    mobile: 'fa-mobile-screen-button',
    calculator: 'fa-calculator'
  };

  // Initialize page
  function init() {
    bindEvents();
    renderPosts();
    setupScrollHeader();

    // Re-render when language changes
    document.addEventListener('i18n:applied', () => {
      renderPosts();
    });
  }

  function bindEvents() {
    // Tag filter buttons
    document.querySelectorAll('.tag-filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const tag = this.dataset.tag;
        if (tag === 'all') {
          activeFilters = [];
          document.querySelectorAll('.tag-filter-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
        } else {
          document.querySelector('.tag-filter-btn[data-tag="all"]').classList.remove('active');
          if (activeFilters.includes(tag)) {
            activeFilters = activeFilters.filter(t => t !== tag);
            this.classList.remove('active');
          } else {
            activeFilters.push(tag);
            this.classList.add('active');
          }
          if (activeFilters.length === 0) {
            document.querySelector('.tag-filter-btn[data-tag="all"]').classList.add('active');
          }
        }
        currentPage = 1;
        renderPosts();
      });
    });

    // Sidebar tag filters
    document.querySelectorAll('.sidebar-tag').forEach(tag => {
      tag.addEventListener('click', function() {
        const tagName = this.dataset.tag;
        // Sync with main filter
        document.querySelector('.tag-filter-btn[data-tag="all"]').classList.remove('active');
        document.querySelectorAll('.tag-filter-btn').forEach(b => b.classList.remove('active'));
        activeFilters = [tagName];
        const mainBtn = document.querySelector(`.tag-filter-btn[data-tag="${tagName}"]`);
        if (mainBtn) mainBtn.classList.add('active');
        // Sync sidebar tags
        document.querySelectorAll('.sidebar-tag').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentPage = 1;
        renderPosts();
      });
    });

    // Sort select
    const sortSelect = document.getElementById('blogSortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', function() {
        sortBy = this.value;
        currentPage = 1;
        renderPosts();
      });
    }

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('blogSidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('visible');
        document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
      });
    }

    if (overlay) {
      overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
      });
    }

    // Sidebar recent posts
    document.querySelectorAll('.sidebar-recent-item').forEach(item => {
      item.addEventListener('click', function() {
        load_page('blog_post_detail');
      });
    });
  }

  function getFilteredPosts() {
    let posts = [...blogPosts];

    // Filter by tags
    if (activeFilters.length > 0) {
      posts = posts.filter(post =>
        post.tags.some(tag => activeFilters.includes(tag))
      );
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        posts.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'rating':
        posts.sort((a, b) => b.rating - a.rating);
        break;
      case 'reading_time':
        posts.sort((a, b) => a.readingTime - b.readingTime);
        break;
    }

    return posts;
  }

  function renderPosts() {
    const filtered = getFilteredPosts();
    const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const paged = filtered.slice(start, start + POSTS_PER_PAGE);

    const grid = document.getElementById('blogPostGrid');
    const resultsInfo = document.getElementById('blogResultsInfo');
    const activeFiltersContainer = document.getElementById('activeFilters');

    // Update results info
    const showingText = window.I18n ? window.I18n.t('blog.results.showing', { count: paged.length, total: filtered.length }) : `Showing <strong>${paged.length}</strong> of <strong>${filtered.length}</strong> posts`;
    resultsInfo.innerHTML = showingText;

    // Update active filters display
    if (activeFilters.length > 0) {
      activeFiltersContainer.style.display = 'flex';
      const activeLabel = window.I18n ? window.I18n.t('blog.filters.active_label') : 'Active filters:';
      const clearAllLabel = window.I18n ? window.I18n.t('blog.filters.clear_all') : 'Clear all';
      
      let html = `<span class="active-filter-label">${activeLabel}</span>`;
      activeFilters.forEach(tag => {
        const localizedTag = window.I18n ? window.I18n.t(`blog.filters.${tag.toLowerCase()}`) : tag;
        html += `<span class="active-filter-chip">${localizedTag}<button onclick="window.blogRemoveFilter('${tag}')" aria-label="Remove ${tag} filter"><i class="fa-solid fa-xmark"></i></button></span>`;
      });
      html += `<button class="clear-all-filters" onclick="window.blogClearFilters()">${clearAllLabel}</button>`;
      activeFiltersContainer.innerHTML = html;
    } else {
      activeFiltersContainer.style.display = 'none';
    }

    // Render cards
    if (paged.length === 0) {
      const noPostsTitle = window.I18n ? window.I18n.t('blog.results.no_posts') : 'No posts found';
      const noPostsDesc = window.I18n ? window.I18n.t('blog.results.no_posts_desc') : 'Try adjusting your filters or browse all posts.';
      const showAllBtn = window.I18n ? window.I18n.t('blog.results.show_all') : 'Show all posts';

      grid.innerHTML = `
        <div class="blog-empty-state">
          <div class="blog-empty-icon"><i class="fa-solid fa-newspaper"></i></div>
          <h3 class="blog-empty-title">${noPostsTitle}</h3>
          <p class="blog-empty-text">${noPostsDesc}</p>
          <button class="blog-empty-btn" onclick="window.blogClearFilters()">
            <i class="fa-solid fa-arrow-rotate-left"></i> ${showAllBtn}
          </button>
        </div>
      `;
    } else {
      grid.innerHTML = paged.map((post, index) => createPostCard(post, index === 0 && currentPage === 1 && activeFilters.length === 0 && post.featured)).join('');
    }

    // Render pagination
    renderPagination(totalPages);
  }

  function createPostCard(post, isFeatured) {
    const iconClass = iconMap[post.thumbnail] || 'fa-newspaper';
    const dateFormatted = formatDate(post.date);
    const stars = renderStars(post.rating);

    // Get localized content
    const title = window.I18n ? window.I18n.t(`blog.data.p${post.id}.title`) : post.title;
    const excerpt = window.I18n ? window.I18n.t(`blog.data.p${post.id}.excerpt`) : post.excerpt;
    const featuredLabel = window.I18n ? window.I18n.t('blog.post.featured') : 'Featured';
    const minReadLabel = window.I18n ? window.I18n.t('blog.post.min_read', { min: post.readingTime }) : `${post.readingTime} min read`;

    return `
      <article class="blog-post-card${isFeatured ? ' featured' : ''}" tabindex="0" onclick="load_page('blog_post_detail')" role="link" aria-label="Read: ${title}">
        <div class="post-card-thumbnail">
          <i class="fa-solid ${iconClass} post-card-thumbnail-icon"></i>
          ${isFeatured ? `<span class="post-card-featured-badge">${featuredLabel}</span>` : ''}
        </div>
        <div class="post-card-body">
          <div class="post-card-tags">
            ${post.tags.map(tag => {
              const localizedTag = window.I18n ? window.I18n.t(`blog.filters.${tag.toLowerCase()}`) : tag;
              return `<span class="post-card-tag tag-${tag.toLowerCase()}">${localizedTag}</span>`;
            }).join('')}
          </div>
          <h3 class="post-card-title">${title}</h3>
          <p class="post-card-excerpt">${excerpt}</p>
          <div class="post-card-meta">
            <div class="post-card-author">
              <span class="post-card-avatar">${post.authorInitials}</span>
              <span class="post-card-author-name">${post.author}</span>
            </div>
            <span class="post-card-meta-separator"></span>
            <span class="post-card-date"><i class="fa-regular fa-calendar"></i>${dateFormatted}</span>
            <span class="post-card-meta-separator"></span>
            <span class="post-card-reading-time"><i class="fa-regular fa-clock"></i>${minReadLabel}</span>
            <div class="post-card-rating">
              ${stars}
              <span class="post-card-rating-value">${post.rating}</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderStars(rating) {
    let html = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        html += '<i class="fa-solid fa-star"></i>';
      } else if (i === fullStars && hasHalf) {
        html += '<i class="fa-solid fa-star-half-stroke"></i>';
      } else {
        html += '<i class="fa-regular fa-star empty"></i>';
      }
    }
    return html;
  }

  function renderPagination(totalPages) {
    const container = document.getElementById('blogPagination');
    if (totalPages <= 1) {
      container.innerHTML = '';
      return;
    }

    let html = '';

    // Prev button
    html += `<button class="pagination-btn${currentPage === 1 ? ' disabled' : ''}" ${currentPage > 1 ? `onclick="window.blogGoToPage(${currentPage - 1})"` : 'disabled'} aria-label="Previous page"><i class="fa-solid fa-chevron-left"></i></button>`;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        html += `<button class="pagination-btn${i === currentPage ? ' active' : ''}" onclick="window.blogGoToPage(${i})" aria-label="Page ${i}"${i === currentPage ? ' aria-current="page"' : ''}>${i}</button>`;
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        html += '<span class="pagination-ellipsis">…</span>';
      }
    }

    // Next button
    html += `<button class="pagination-btn${currentPage === totalPages ? ' disabled' : ''}" ${currentPage < totalPages ? `onclick="window.blogGoToPage(${currentPage + 1})"` : 'disabled'} aria-label="Next page"><i class="fa-solid fa-chevron-right"></i></button>`;

    container.innerHTML = html;
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    const locale = (window.I18n && window.I18n.getLocale()) || 'en';
    
    // Map internal codes to standard BCP 47
    const localeMap = {
      'en': 'en-US',
      'es': 'es-ES',
      'fr': 'fr-FR',
      'it': 'it-IT',
      'nl': 'nl-NL'
    };

    return d.toLocaleDateString(localeMap[locale] || 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function setupScrollHeader() {
    const header = document.querySelector('.blog-header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Expose functions for inline event handlers
  window.blogGoToPage = function(page) {
    currentPage = page;
    renderPosts();
    document.getElementById('blogMainContent').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  window.blogRemoveFilter = function(tag) {
    activeFilters = activeFilters.filter(t => t !== tag);
    document.querySelectorAll('.tag-filter-btn').forEach(b => b.classList.remove('active'));
    if (activeFilters.length === 0) {
      document.querySelector('.tag-filter-btn[data-tag="all"]').classList.add('active');
    } else {
      activeFilters.forEach(t => {
        const btn = document.querySelector(`.tag-filter-btn[data-tag="${t}"]`);
        if (btn) btn.classList.add('active');
      });
    }
    document.querySelectorAll('.sidebar-tag').forEach(t => {
      t.classList.toggle('active', activeFilters.includes(t.dataset.tag));
    });
    currentPage = 1;
    renderPosts();
  };

  window.blogClearFilters = function() {
    activeFilters = [];
    document.querySelectorAll('.tag-filter-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.tag-filter-btn[data-tag="all"]').classList.add('active');
    document.querySelectorAll('.sidebar-tag').forEach(t => t.classList.remove('active'));
    currentPage = 1;
    renderPosts();
  };

  // Keyboard navigation for post cards
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('blog-post-card')) {
      load_page('blog_post_detail');
    }
  });

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();