// Admin Feedback Viewer - Page Specific JavaScript

(function() {
  'use strict';

  // Sample feedback data
  const feedbackData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      category: 'Bug Report',
      subject: 'QR code scanner not working on Android 14',
      message: 'When I try to scan a QR code on my Pixel 8 running Android 14, the scanner freezes after about 5 seconds. I have tried restarting the app and clearing the cache but the issue persists.\n\nDevice: Pixel 8\nOS: Android 14\nApp Version: 2.3.1\n\nSteps to reproduce:\n1. Open the app\n2. Tap on "Scan QR Code"\n3. Point camera at any QR code\n4. Scanner freezes after ~5 seconds',
      rating: 2,
      status: 'New',
      date: '2025-01-15T10:30:00Z',
      walletType: 'Consumer Wallet',
      attachment: { name: 'screenshot_error.png', size: '245 KB' }
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@business.com',
      category: 'Feature Request',
      subject: 'Add batch payment processing for merchants',
      message: 'It would be very helpful to have a batch payment processing feature where merchants can process multiple payments at once. This would save a lot of time for businesses that handle many transactions daily.\n\nSuggested features:\n- CSV upload for batch payments\n- Queue management\n- Batch status tracking\n- Email notifications for each processed payment',
      rating: 4,
      status: 'Read',
      date: '2025-01-14T14:22:00Z',
      walletType: 'Merchant Wallet',
      attachment: null
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@gmail.com',
      category: 'General',
      subject: 'Great app, love the NFC feature!',
      message: 'Just wanted to say I love using the NFC payment feature. It\'s so convenient and fast. The app design is also very clean and easy to navigate. Keep up the great work!',
      rating: 5,
      status: 'Responded',
      date: '2025-01-13T09:15:00Z',
      walletType: 'Consumer Wallet',
      attachment: null,
      response: 'Thank you so much for the kind feedback, Emily! We\'re glad you enjoy the NFC feature. Stay tuned for more improvements!'
    },
    {
      id: 4,
      name: 'David Park',
      email: 'david.park@startup.io',
      category: 'Bug Report',
      subject: 'Transaction history not loading for December',
      message: 'The transaction history page shows a blank screen when I select December 2024. All other months work fine. This started happening after the latest update.',
      rating: 3,
      status: 'New',
      date: '2025-01-12T16:45:00Z',
      walletType: 'Merchant Wallet',
      attachment: { name: 'screen_recording.mp4', size: '1.2 MB' }
    },
    {
      id: 5,
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      category: 'Feature Request',
      subject: 'Multi-currency support for international transfers',
      message: 'Please add multi-currency support. I frequently transfer money internationally and having to use a separate app is inconvenient. Currency conversion with real-time rates would be amazing.',
      rating: 4,
      status: 'Read',
      date: '2025-01-11T11:30:00Z',
      walletType: 'Consumer Wallet',
      attachment: null
    },
    {
      id: 6,
      name: 'James Miller',
      email: 'j.miller@shop.com',
      category: 'Bug Report',
      subject: 'NFC payment timeout too short',
      message: 'The NFC payment timeout is too short for my older POS terminal. By the time my device connects, the payment session has already expired. Can this be configurable?',
      rating: 3,
      status: 'Responded',
      date: '2025-01-10T08:20:00Z',
      walletType: 'Merchant Wallet',
      attachment: null,
      response: 'Thank you for the report, James. We are looking into making the NFC timeout configurable in the next update (v2.4). Stay tuned!'
    },
    {
      id: 7,
      name: 'Anna Fischer',
      email: 'anna.f@email.de',
      category: 'General',
      subject: 'Documentation is very helpful',
      message: 'The getting started guide was really easy to follow. I was able to set up my merchant account in under 10 minutes. The screenshots and step-by-step instructions are excellent.',
      rating: 5,
      status: 'Archived',
      date: '2025-01-09T13:10:00Z',
      walletType: 'Merchant Wallet',
      attachment: null
    },
    {
      id: 8,
      name: 'Robert Kim',
      email: 'rkim@email.com',
      category: 'Bug Report',
      subject: 'App crashes when adding a new card',
      message: 'The consumer wallet app crashes immediately when I try to add a new payment card. This happens every time and I cannot add any payment methods at all.\n\nDevice: iPhone 15 Pro\nOS: iOS 17.2\nApp Version: 2.3.0',
      rating: 1,
      status: 'New',
      date: '2025-01-08T17:55:00Z',
      walletType: 'Consumer Wallet',
      attachment: { name: 'crash_log.txt', size: '12 KB' }
    },
    {
      id: 9,
      name: 'Priya Sharma',
      email: 'priya.s@gmail.com',
      category: 'Feature Request',
      subject: 'Dark mode support',
      message: 'Would love to see dark mode support in both the merchant and consumer apps. Using the app at night in a dimly lit store is hard on the eyes with the current white theme.',
      rating: 4,
      status: 'Read',
      date: '2025-01-07T20:30:00Z',
      walletType: 'General',
      attachment: null
    },
    {
      id: 10,
      name: 'Carlos Mendez',
      email: 'carlos.m@business.mx',
      category: 'General',
      subject: 'P2P transfer experience',
      message: 'The P2P transfer feature works great but I wish there was a way to schedule recurring transfers to my family members.',
      rating: 4,
      status: 'New',
      date: '2025-01-06T12:15:00Z',
      walletType: 'Consumer Wallet',
      attachment: null
    },
    {
      id: 11,
      name: 'Tom Wilson',
      email: 'tom.w@store.com',
      category: 'Bug Report',
      subject: 'Export CSV generates empty file',
      message: 'When I try to export my transaction history to CSV, the downloaded file is completely empty. The transactions are visible in the app but the export function seems broken.',
      rating: 2,
      status: 'Responded',
      date: '2025-01-05T09:45:00Z',
      walletType: 'Merchant Wallet',
      attachment: null,
      response: 'We identified the CSV export bug and a fix has been deployed in version 2.3.2. Please update your app and try again.'
    },
    {
      id: 12,
      name: 'Maya Patel',
      email: 'maya.p@gmail.com',
      category: 'Feature Request',
      subject: 'Biometric authentication for large transfers',
      message: 'For security purposes, it would be great to require Face ID or fingerprint for transfers above a certain amount. Currently there is no additional verification for large amounts.',
      rating: 5,
      status: 'Archived',
      date: '2025-01-04T15:20:00Z',
      walletType: 'Consumer Wallet',
      attachment: null
    }
  ];

  let currentPage = 1;
  const itemsPerPage = 8;
  let filteredData = [...feedbackData];
  let selectedIds = new Set();
  let currentDetailId = null;

  // Initialize
  function init() {
    renderStats();
    applyFilters();
    bindEvents();
  }

  // Calculate stats
  function getStats() {
    return {
      new: feedbackData.filter(f => f.status === 'New').length,
      read: feedbackData.filter(f => f.status === 'Read').length,
      responded: feedbackData.filter(f => f.status === 'Responded').length,
      archived: feedbackData.filter(f => f.status === 'Archived').length
    };
  }

  function renderStats() {
    const stats = getStats();
    const newEl = document.getElementById('stat-new');
    const readEl = document.getElementById('stat-read');
    const respondedEl = document.getElementById('stat-responded');
    const archivedEl = document.getElementById('stat-archived');
    if (newEl) newEl.textContent = stats.new;
    if (readEl) readEl.textContent = stats.read;
    if (respondedEl) respondedEl.textContent = stats.responded;
    if (archivedEl) archivedEl.textContent = stats.archived;
  }

  // Apply filters
  function applyFilters() {
    const categoryFilter = document.getElementById('afv_filter_category');
    const statusFilter = document.getElementById('afv_filter_status');
    const ratingFilter = document.getElementById('afv_filter_rating');
    const searchInput = document.getElementById('afv_search');

    const category = categoryFilter ? categoryFilter.value : '';
    const status = statusFilter ? statusFilter.value : '';
    const rating = ratingFilter ? ratingFilter.value : '';
    const search = searchInput ? searchInput.value.toLowerCase().trim() : '';

    filteredData = feedbackData.filter(item => {
      if (category) {
        if (category === 'Merchant Wallet' && item.walletType !== 'Merchant Wallet') return false;
        if (category === 'Consumer Wallet' && item.walletType !== 'Consumer Wallet') return false;
        if (category === 'General' && item.category !== 'General' && item.walletType !== 'General') return false;
        if (category === 'Bug Report' && item.category !== 'Bug Report') return false;
        if (category === 'Feature Request' && item.category !== 'Feature Request') return false;
      }
      if (status && item.status !== status) return false;
      if (rating && item.rating !== parseInt(rating)) return false;
      if (search) {
        const hay = (item.name + ' ' + item.email + ' ' + item.subject + ' ' + item.message).toLowerCase();
        if (!hay.includes(search)) return false;
      }
      return true;
    });

    currentPage = 1;
    selectedIds.clear();
    renderTable();
    renderPagination();
    updateBulkActions();
  }

  // Render table
  function renderTable() {
    const tbody = document.getElementById('feedback-tbody');
    const tableInfo = document.getElementById('table-info');
    if (!tbody) return;

    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, filteredData.length);
    const pageItems = filteredData.slice(start, end);

    if (tableInfo) {
      tableInfo.innerHTML = 'Showing <strong>' + (filteredData.length > 0 ? start + 1 : 0) + '-' + end + '</strong> of <strong>' + filteredData.length + '</strong> feedback submissions';
    }

    if (pageItems.length === 0) {
      tbody.innerHTML = '<tr><td colspan="8"><div class="feedback-empty"><i class="fa-regular fa-comment-dots"></i><h3>No feedback found</h3><p>Try adjusting your filters or search query.</p></div></td></tr>';
      return;
    }

    tbody.innerHTML = pageItems.map(item => {
      const isUnread = item.status === 'New' ? ' unread' : '';
      const checked = selectedIds.has(item.id) ? ' checked' : '';
      return '<tr class="feedback-row' + isUnread + '" data-id="' + item.id + '">' +
        '<td class="td-checkbox"><input type="checkbox" aria-label="Select feedback from ' + item.name + '"' + checked + ' data-select-id="' + item.id + '"></td>' +
        '<td><div class="feedback-name">' + escapeHtml(item.name) + '</div><div class="feedback-email">' + escapeHtml(item.email) + '</div></td>' +
        '<td>' + getCategoryBadge(item) + '</td>' +
        '<td><a class="feedback-subject feedback-subject-link" data-detail-id="' + item.id + '" href="javascript:void(0)" title="' + escapeHtml(item.subject) + '">' + escapeHtml(item.subject) + '</a></td>' +
        '<td>' + renderStars(item.rating) + '</td>' +
        '<td>' + getStatusBadge(item.status) + '</td>' +
        '<td><div class="date-meta">' + formatDate(item.date) + '</div></td>' +
        '<td><div class="table-actions">' +
          '<button class="btn-ghost" title="View details" data-detail-id="' + item.id + '" aria-label="View details"><i class="fa-solid fa-eye"></i></button>' +
          '<button class="btn-ghost" title="Archive" data-archive-id="' + item.id + '" aria-label="Archive"><i class="fa-solid fa-box-archive"></i></button>' +
        '</div></td>' +
      '</tr>';
    }).join('');

    // Update select all checkbox
    const selectAll = document.getElementById('select-all-checkbox');
    if (selectAll) {
      const visibleIds = pageItems.map(i => i.id);
      selectAll.checked = visibleIds.length > 0 && visibleIds.every(id => selectedIds.has(id));
      selectAll.indeterminate = visibleIds.some(id => selectedIds.has(id)) && !visibleIds.every(id => selectedIds.has(id));
    }
  }

  function getCategoryBadge(item) {
    const catClass = {
      'Bug Report': 'badge-bug',
      'Feature Request': 'badge-feature',
      'General': 'badge-general'
    };
    const walletClass = {
      'Merchant Wallet': 'badge-merchant',
      'Consumer Wallet': 'badge-consumer',
      'General': 'badge-general'
    };
    let html = '<span class="badge ' + (catClass[item.category] || 'badge-general') + '">' + escapeHtml(item.category) + '</span>';
    if (item.walletType !== 'General') {
      html += ' <span class="badge ' + (walletClass[item.walletType] || 'badge-general') + '" style="margin-top:4px;display:inline-flex">' + (item.walletType === 'Merchant Wallet' ? 'Merchant' : 'Consumer') + '</span>';
    }
    return html;
  }

  function getStatusBadge(status) {
    const cls = {
      'New': 'badge-new',
      'Read': 'badge-read',
      'Responded': 'badge-responded',
      'Archived': 'badge-archived'
    };
    const icons = {
      'New': 'fa-circle',
      'Read': 'fa-eye',
      'Responded': 'fa-check',
      'Archived': 'fa-box-archive'
    };
    return '<span class="badge ' + (cls[status] || 'badge-general') + '"><i class="fa-solid ' + (icons[status] || '') + '" style="font-size:0.5rem"></i> ' + status + '</span>';
  }

  function renderStars(rating) {
    let html = '<span class="rating-stars">';
    for (let i = 1; i <= 5; i++) {
      html += '<i class="fa-solid fa-star' + (i > rating ? ' empty' : '') + '"></i>';
    }
    html += '<span class="rating-value">' + rating + '.0</span></span>';
    return html;
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  }

  function formatDateTime(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) + ' at ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Render pagination
  function renderPagination() {
    const container = document.getElementById('afv_pagination');
    const info = document.getElementById('pagination-info');
    if (!container) return;

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, filteredData.length);

    if (info) {
      info.textContent = filteredData.length > 0 ? 'Showing ' + start + '-' + end + ' of ' + filteredData.length + ' results' : 'No results';
    }

    let html = '<button class="pagination-btn" data-page="prev" aria-label="Previous page"' + (currentPage <= 1 ? ' disabled' : '') + '><i class="fa-solid fa-chevron-left"></i></button>';

    for (let i = 1; i <= totalPages; i++) {
      if (totalPages > 7 && i > 2 && i < totalPages - 1 && Math.abs(i - currentPage) > 1) {
        if (i === 3 || i === totalPages - 2) {
          html += '<span style="padding:0 4px;color:#94a3b8">…</span>';
        }
        continue;
      }
      html += '<button class="pagination-btn' + (i === currentPage ? ' active' : '') + '" data-page="' + i + '" aria-label="Page ' + i + '">' + i + '</button>';
    }

    html += '<button class="pagination-btn" data-page="next" aria-label="Next page"' + (currentPage >= totalPages ? ' disabled' : '') + '><i class="fa-solid fa-chevron-right"></i></button>';

    container.innerHTML = html;
  }

  // Open detail modal
  function openDetailModal(id) {
    const item = feedbackData.find(f => f.id === id);
    if (!item) return;
    currentDetailId = id;

    const modal = document.getElementById('afv_detail_modal');
    if (!modal) return;

    // Populate modal
    document.getElementById('modal-detail-name').textContent = item.name;
    document.getElementById('modal-detail-email').textContent = item.email;
    document.getElementById('modal-detail-email').href = 'mailto:' + item.email;
    document.getElementById('modal-detail-category').innerHTML = getCategoryBadge(item);
    document.getElementById('modal-detail-date').textContent = formatDateTime(item.date);
    document.getElementById('modal-detail-rating').innerHTML = renderStars(item.rating);
    document.getElementById('modal-detail-status').innerHTML = getStatusBadge(item.status);
    document.getElementById('modal-detail-subject').textContent = item.subject;
    document.getElementById('modal-detail-message').textContent = item.message;

    // Attachment
    const attachEl = document.getElementById('modal-attachment-section');
    if (item.attachment) {
      attachEl.style.display = 'block';
      document.getElementById('modal-attachment-name').textContent = item.attachment.name;
      document.getElementById('modal-attachment-size').textContent = item.attachment.size;
    } else {
      attachEl.style.display = 'none';
    }

    // Previous response
    const responseDisplay = document.getElementById('modal-prev-response');
    if (item.response) {
      responseDisplay.style.display = 'block';
      document.getElementById('modal-prev-response-text').textContent = item.response;
    } else {
      responseDisplay.style.display = 'none';
    }

    // Response textarea
    document.getElementById('modal-response-textarea').value = '';

    // Update action buttons
    const markReadBtn = document.getElementById('afv_mark_read');
    if (item.status === 'New') {
      markReadBtn.style.display = 'inline-flex';
    } else {
      markReadBtn.style.display = 'none';
    }

    const archiveBtn = document.getElementById('afv_archive_btn');
    if (item.status === 'Archived') {
      archiveBtn.textContent = 'Unarchive';
      archiveBtn.innerHTML = '<i class="fa-solid fa-box-open"></i> Unarchive';
    } else {
      archiveBtn.innerHTML = '<i class="fa-solid fa-box-archive"></i> Archive';
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Focus the close button
    setTimeout(() => {
      const closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }, 100);
  }

  function closeDetailModal() {
    const modal = document.getElementById('afv_detail_modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
    currentDetailId = null;
  }

  // Update bulk actions visibility
  function updateBulkActions() {
    const bulkBar = document.getElementById('bulk-actions-bar');
    if (bulkBar) {
      bulkBar.style.display = selectedIds.size > 0 ? 'flex' : 'none';
    }
    const selectedCount = document.getElementById('selected-count');
    if (selectedCount) {
      selectedCount.textContent = selectedIds.size + ' selected';
    }
  }

  // Export to CSV
  function exportCSV() {
    const headers = ['Name', 'Email', 'Category', 'Wallet Type', 'Subject', 'Message', 'Rating', 'Status', 'Date'];
    const rows = filteredData.map(item => [
      item.name,
      item.email,
      item.category,
      item.walletType,
      item.subject,
      item.message.replace(/\n/g, ' '),
      item.rating,
      item.status,
      formatDate(item.date)
    ]);

    let csv = headers.join(',') + '\n';
    rows.forEach(row => {
      csv += row.map(val => '"' + String(val).replace(/"/g, '""') + '"').join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'feedback_export_' + new Date().toISOString().slice(0, 10) + '.csv';
    a.click();
    URL.revokeObjectURL(url);

    showToast('Feedback exported to CSV successfully!', 'success');
  }

  // Toast notification
  function showToast(message, type) {
    const existing = document.querySelector('.afv-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'afv-toast afv-toast-' + type;
    toast.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:300;background:' + (type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#2563eb') + ';color:#fff;padding:12px 20px;border-radius:8px;font-size:0.875rem;font-weight:600;box-shadow:0 10px 30px rgba(0,0,0,0.2);transform:translateY(20px);opacity:0;transition:all 300ms ease;';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.transform = 'translateY(20px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // Bind events
  function bindEvents() {
    // Filters
    const filters = ['afv_filter_category', 'afv_filter_status', 'afv_filter_rating'];
    filters.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('change', applyFilters);
    });

    // Search with debounce
    const searchInput = document.getElementById('afv_search');
    let searchTimer;
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(applyFilters, 300);
      });
    }

    // Clear filters
    const clearBtn = document.getElementById('clear-filters-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        document.getElementById('afv_filter_category').value = '';
        document.getElementById('afv_filter_status').value = '';
        document.getElementById('afv_filter_rating').value = '';
        document.getElementById('afv_search').value = '';
        applyFilters();
      });
    }

    // Export
    const exportBtn = document.getElementById('afv_export_btn');
    if (exportBtn) exportBtn.addEventListener('click', exportCSV);

    // Table delegation
    const tableBody = document.getElementById('feedback-tbody');
    if (tableBody) {
      tableBody.addEventListener('click', function(e) {
        const detailBtn = e.target.closest('[data-detail-id]');
        if (detailBtn) {
          openDetailModal(parseInt(detailBtn.getAttribute('data-detail-id')));
          return;
        }

        const archiveBtn = e.target.closest('[data-archive-id]');
        if (archiveBtn) {
          const id = parseInt(archiveBtn.getAttribute('data-archive-id'));
          const item = feedbackData.find(f => f.id === id);
          if (item) {
            item.status = item.status === 'Archived' ? 'Read' : 'Archived';
            renderStats();
            applyFilters();
            showToast('Feedback ' + (item.status === 'Archived' ? 'archived' : 'unarchived') + '.', 'success');
          }
          return;
        }
      });

      tableBody.addEventListener('change', function(e) {
        if (e.target.hasAttribute('data-select-id')) {
          const id = parseInt(e.target.getAttribute('data-select-id'));
          if (e.target.checked) {
            selectedIds.add(id);
          } else {
            selectedIds.delete(id);
          }
          updateBulkActions();
          // Update select all
          const start = (currentPage - 1) * itemsPerPage;
          const end = Math.min(start + itemsPerPage, filteredData.length);
          const pageItems = filteredData.slice(start, end);
          const selectAll = document.getElementById('select-all-checkbox');
          if (selectAll) {
            const visibleIds = pageItems.map(i => i.id);
            selectAll.checked = visibleIds.every(vid => selectedIds.has(vid));
            selectAll.indeterminate = visibleIds.some(vid => selectedIds.has(vid)) && !visibleIds.every(vid => selectedIds.has(vid));
          }
        }
      });
    }

    // Select all checkbox
    const selectAll = document.getElementById('select-all-checkbox');
    if (selectAll) {
      selectAll.addEventListener('change', function() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = Math.min(start + itemsPerPage, filteredData.length);
        const pageItems = filteredData.slice(start, end);

        pageItems.forEach(item => {
          if (selectAll.checked) {
            selectedIds.add(item.id);
          } else {
            selectedIds.delete(item.id);
          }
        });

        renderTable();
        updateBulkActions();
      });
    }

    // Pagination
    const paginationContainer = document.getElementById('afv_pagination');
    if (paginationContainer) {
      paginationContainer.addEventListener('click', function(e) {
        const btn = e.target.closest('[data-page]');
        if (!btn || btn.disabled) return;

        const totalPages = Math.ceil(filteredData.length / itemsPerPage);
        const page = btn.getAttribute('data-page');

        if (page === 'prev') {
          if (currentPage > 1) currentPage--;
        } else if (page === 'next') {
          if (currentPage < totalPages) currentPage++;
        } else {
          currentPage = parseInt(page);
        }

        renderTable();
        renderPagination();
      });
    }

    // Modal close
    const modalOverlay = document.getElementById('afv_detail_modal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) closeDetailModal();
      });
    }

    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeDetailModal);

    const modalCancelBtn = document.getElementById('modal-cancel-btn');
    if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeDetailModal);

    // Mark as Read in modal
    const markReadBtn = document.getElementById('afv_mark_read');
    if (markReadBtn) {
      markReadBtn.addEventListener('click', function() {
        if (currentDetailId) {
          const item = feedbackData.find(f => f.id === currentDetailId);
          if (item && item.status === 'New') {
            item.status = 'Read';
            renderStats();
            applyFilters();
            closeDetailModal();
            showToast('Feedback marked as read.', 'success');
          }
        }
      });
    }

    // Archive in modal
    const archiveModalBtn = document.getElementById('afv_archive_btn');
    if (archiveModalBtn) {
      archiveModalBtn.addEventListener('click', function() {
        if (currentDetailId) {
          const item = feedbackData.find(f => f.id === currentDetailId);
          if (item) {
            item.status = item.status === 'Archived' ? 'Read' : 'Archived';
            renderStats();
            applyFilters();
            closeDetailModal();
            showToast('Feedback ' + item.status.toLowerCase() + '.', 'success');
          }
        }
      });
    }

    // Send response in modal
    const sendResponseBtn = document.getElementById('modal-send-response-btn');
    if (sendResponseBtn) {
      sendResponseBtn.addEventListener('click', function() {
        const textarea = document.getElementById('modal-response-textarea');
        if (!textarea || !textarea.value.trim()) {
          showToast('Please enter a response message.', 'error');
          textarea.focus();
          return;
        }
        if (currentDetailId) {
          const item = feedbackData.find(f => f.id === currentDetailId);
          if (item) {
            item.response = textarea.value.trim();
            item.status = 'Responded';
            renderStats();
            applyFilters();
            closeDetailModal();
            showToast('Response sent successfully!', 'success');
          }
        }
      });
    }

    // Bulk actions
    const bulkArchiveBtn = document.getElementById('bulk-archive-btn');
    if (bulkArchiveBtn) {
      bulkArchiveBtn.addEventListener('click', function() {
        selectedIds.forEach(id => {
          const item = feedbackData.find(f => f.id === id);
          if (item) item.status = 'Archived';
        });
        selectedIds.clear();
        renderStats();
        applyFilters();
        showToast('Selected feedback archived.', 'success');
      });
    }

    const bulkReadBtn = document.getElementById('bulk-read-btn');
    if (bulkReadBtn) {
      bulkReadBtn.addEventListener('click', function() {
        selectedIds.forEach(id => {
          const item = feedbackData.find(f => f.id === id);
          if (item && item.status === 'New') item.status = 'Read';
        });
        selectedIds.clear();
        renderStats();
        applyFilters();
        showToast('Selected feedback marked as read.', 'success');
      });
    }

    // Keyboard: Escape closes modal
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeDetailModal();
        closeSidebar();
      }
    });

    // Mobile sidebar toggle
    const hamburger = document.getElementById('admin-hamburger-btn');
    if (hamburger) {
      hamburger.addEventListener('click', toggleSidebar);
    }

    const sidebarOverlay = document.getElementById('admin-sidebar-overlay');
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', closeSidebar);
    }
  }

  function toggleSidebar() {
    const sidebar = document.querySelector('.admin-sidebar');
    const overlay = document.getElementById('admin-sidebar-overlay');
    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
  }

  function closeSidebar() {
    const sidebar = document.querySelector('.admin-sidebar');
    const overlay = document.getElementById('admin-sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  }

  // Run init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();