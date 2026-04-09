/* Admin Comment Moderation - Page Specific JavaScript */

(function() {
  'use strict';

  // Sample data
  const commentsData = [
    {
      id: 1,
      author: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      avatar: 'SJ',
      avatarColor: 'av-blue',
      postTitle: 'Getting Started with QR Payments',
      postId: 1,
      rating: 5,
      excerpt: 'This is an excellent guide! I was able to set up QR payments for my store within minutes. The step-by-step instructions were very clear and easy to follow.',
      fullComment: 'This is an excellent guide! I was able to set up QR payments for my store within minutes. The step-by-step instructions were very clear and easy to follow. I especially appreciated the troubleshooting section at the end, as I did run into a minor issue with my camera permissions. Overall, a fantastic resource for new merchants!',
      status: 'pending',
      date: '2025-01-15T14:32:00'
    },
    {
      id: 2,
      author: 'Michael Chen',
      email: 'mchen@techfirm.com',
      avatar: 'MC',
      avatarColor: 'av-green',
      postTitle: 'NFC Payment Security Best Practices',
      postId: 2,
      rating: 4,
      excerpt: 'Great overview of NFC security. Would love to see more details about encryption standards used in the MPay Network.',
      fullComment: 'Great overview of NFC security. Would love to see more details about encryption standards used in the MPay Network. I noticed the article mentions AES-256 but doesn\'t go into detail about the key exchange protocol. Could you provide more technical details for developers who want to integrate with your API? Also, a comparison with other payment networks\' security implementations would be very helpful.',
      status: 'pending',
      date: '2025-01-15T11:18:00'
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      email: 'emily.r@gmail.com',
      avatar: 'ER',
      avatarColor: 'av-purple',
      postTitle: 'MPay Wallet v2.5 Release Notes',
      postId: 3,
      rating: 3,
      excerpt: 'The new features are nice but I\'m experiencing some lag when switching between tabs. Hope this gets fixed soon.',
      fullComment: 'The new features are nice but I\'m experiencing some lag when switching between tabs. Hope this gets fixed soon. Specifically, when I switch from the Wallet tab to the Transactions tab, there\'s about a 2-second delay on my Pixel 7. I\'m running Android 14. The new UI looks great though, and the P2P transfer feature is a game changer!',
      status: 'pending',
      date: '2025-01-14T09:45:00'
    },
    {
      id: 4,
      author: 'David Kim',
      email: 'dkim@startup.io',
      avatar: 'DK',
      avatarColor: 'av-orange',
      postTitle: 'How to Set Up P2P Transfers',
      postId: 4,
      rating: 5,
      excerpt: 'Clear and concise instructions. Sent my first P2P transfer within 2 minutes of reading this article!',
      fullComment: 'Clear and concise instructions. Sent my first P2P transfer within 2 minutes of reading this article! The screenshots really helped me understand each step. One suggestion: it would be helpful to mention the transfer limits for different account verification levels right at the beginning of the guide.',
      status: 'approved',
      date: '2025-01-13T16:22:00'
    },
    {
      id: 5,
      author: 'SpamBot3000',
      email: 'totally-real@spam.net',
      avatar: 'SB',
      avatarColor: 'av-pink',
      postTitle: 'Getting Started with QR Payments',
      postId: 1,
      rating: 1,
      excerpt: 'Buy cheap products at www.definitely-not-spam.com! Best deals online! Click here now for amazing offers!!!',
      fullComment: 'Buy cheap products at www.definitely-not-spam.com! Best deals online! Click here now for amazing offers!!! Free shipping on all orders over $10. Use code SPAM2025 for 50% off! Visit now!!!',
      status: 'rejected',
      date: '2025-01-13T08:03:00'
    },
    {
      id: 6,
      author: 'Lisa Wang',
      email: 'lwang@merchant.co',
      avatar: 'LW',
      avatarColor: 'av-teal',
      postTitle: 'Merchant Account Verification Guide',
      postId: 5,
      rating: 4,
      excerpt: 'Very helpful guide. The KYC process was straightforward. Took about 24 hours for my verification to complete.',
      fullComment: 'Very helpful guide. The KYC process was straightforward. Took about 24 hours for my verification to complete. The only thing I\'d suggest is adding information about what types of business documents are accepted for different countries. I initially uploaded the wrong document format and had to resubmit.',
      status: 'approved',
      date: '2025-01-12T13:55:00'
    },
    {
      id: 7,
      author: 'James Taylor',
      email: 'jtaylor@mail.com',
      avatar: 'JT',
      avatarColor: 'av-blue',
      postTitle: 'NFC Payment Security Best Practices',
      postId: 2,
      rating: 5,
      excerpt: 'As a security professional, I can confirm these are solid recommendations. Well-researched article with practical advice.',
      fullComment: 'As a security professional, I can confirm these are solid recommendations. Well-researched article with practical advice. I particularly appreciate the section on tokenization and how MPay handles sensitive card data. The recommendation to use device biometrics as an additional layer is spot on. Would love to see a follow-up article on fraud detection algorithms.',
      status: 'pending',
      date: '2025-01-12T10:30:00'
    },
    {
      id: 8,
      author: 'Ana Martinez',
      email: 'ana.m@business.com',
      avatar: 'AM',
      avatarColor: 'av-orange',
      postTitle: 'How to Set Up P2P Transfers',
      postId: 4,
      rating: 2,
      excerpt: 'Instructions are outdated. The UI has changed since this was written. Some buttons are in different locations now.',
      fullComment: 'Instructions are outdated. The UI has changed since this was written. Some buttons are in different locations now. For example, the "Send Money" button is now in the bottom navigation bar, not the top right corner as shown in the screenshots. Please update this guide to reflect the latest version of the app.',
      status: 'pending',
      date: '2025-01-11T17:12:00'
    },
    {
      id: 9,
      author: 'Robert Brown',
      email: 'rbrown@corp.com',
      avatar: 'RB',
      avatarColor: 'av-green',
      postTitle: 'MPay Wallet v2.5 Release Notes',
      postId: 3,
      rating: 4,
      excerpt: 'Love the new dark mode! Finally! The transaction history redesign is also a great improvement.',
      fullComment: 'Love the new dark mode! Finally! The transaction history redesign is also a great improvement. I\'ve been waiting for dark mode since the app launched. The new biometric login flow is also much smoother than before. Great work, team!',
      status: 'approved',
      date: '2025-01-11T14:08:00'
    },
    {
      id: 10,
      author: 'Priya Patel',
      email: 'priya@devshop.in',
      avatar: 'PP',
      avatarColor: 'av-purple',
      postTitle: 'Merchant Account Verification Guide',
      postId: 5,
      rating: 3,
      excerpt: 'Decent guide but missing information about international merchant accounts. Would be helpful to add that section.',
      fullComment: 'Decent guide but missing information about international merchant accounts. Would be helpful to add that section. Specifically, I\'d like to know about supported currencies, cross-border transaction fees, and any additional documentation required for merchants operating in multiple countries.',
      status: 'pending',
      date: '2025-01-10T09:20:00'
    }
  ];

  const blogPosts = [
    { id: 1, title: 'Getting Started with QR Payments' },
    { id: 2, title: 'NFC Payment Security Best Practices' },
    { id: 3, title: 'MPay Wallet v2.5 Release Notes' },
    { id: 4, title: 'How to Set Up P2P Transfers' },
    { id: 5, title: 'Merchant Account Verification Guide' }
  ];

  let currentFilter = 'all';
  let currentPostFilter = 'all';
  let searchQuery = '';
  let selectedIds = new Set();
  let currentPage = 1;
  const perPage = 10;

  // Initialize
  function init() {
    populatePostFilter();
    bindEvents();
    renderAll();
  }

  function populatePostFilter() {
    const select = document.getElementById('acm_filter_post');
    if (!select) return;
    blogPosts.forEach(post => {
      const opt = document.createElement('option');
      opt.value = post.id;
      opt.textContent = post.title;
      select.appendChild(opt);
    });
  }

  function bindEvents() {
    // Filters
    const statusFilter = document.getElementById('acm_filter_status');
    const postFilter = document.getElementById('acm_filter_post');
    const searchInput = document.getElementById('acm_search');

    if (statusFilter) {
      statusFilter.addEventListener('change', function() {
        currentFilter = this.value;
        currentPage = 1;
        selectedIds.clear();
        renderAll();
      });
    }

    if (postFilter) {
      postFilter.addEventListener('change', function() {
        currentPostFilter = this.value;
        currentPage = 1;
        selectedIds.clear();
        renderAll();
      });
    }

    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          searchQuery = this.value.toLowerCase().trim();
          currentPage = 1;
          selectedIds.clear();
          renderAll();
        }, 300);
      });
    }

    // Select all checkbox
    document.addEventListener('change', function(e) {
      if (e.target.id === 'acm_select_all') {
        const filtered = getFilteredComments();
        const pageComments = getPaginatedComments(filtered);
        if (e.target.checked) {
          pageComments.forEach(c => selectedIds.add(c.id));
        } else {
          pageComments.forEach(c => selectedIds.delete(c.id));
        }
        renderTable(filtered);
        updateBulkBar();
      }
      if (e.target.classList.contains('comment-checkbox')) {
        const id = parseInt(e.target.dataset.id);
        if (e.target.checked) {
          selectedIds.add(id);
        } else {
          selectedIds.delete(id);
        }
        updateSelectAll();
        updateBulkBar();
      }
    });

    // Bulk actions
    document.getElementById('acm_bulk_approve')?.addEventListener('click', function() {
      if (selectedIds.size === 0) return;
      bulkAction('approved');
    });

    document.getElementById('acm_bulk_reject')?.addEventListener('click', function() {
      if (selectedIds.size === 0) return;
      bulkAction('rejected');
    });

    // Modal close
    document.addEventListener('click', function(e) {
      if (e.target.classList.contains('acm-modal-overlay')) {
        closeAllModals();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeAllModals();
      }
    });

    // Sidebar toggle
    const sidebarToggle = document.getElementById('admin_sidebar_toggle');
    const sidebar = document.getElementById('admin_sidebar');
    const overlay = document.getElementById('admin_sidebar_overlay');

    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      });
    }
  }

  function getFilteredComments() {
    return commentsData.filter(c => {
      if (currentFilter !== 'all' && c.status !== currentFilter) return false;
      if (currentPostFilter !== 'all' && c.postId !== parseInt(currentPostFilter)) return false;
      if (searchQuery) {
        return c.author.toLowerCase().includes(searchQuery) ||
               c.email.toLowerCase().includes(searchQuery) ||
               c.excerpt.toLowerCase().includes(searchQuery);
      }
      return true;
    });
  }

  function getPaginatedComments(filtered) {
    const start = (currentPage - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }

  function renderAll() {
    const filtered = getFilteredComments();
    renderStats();
    renderTable(filtered);
    renderPagination(filtered);
    updateBulkBar();
  }

  function renderStats() {
    const pending = commentsData.filter(c => c.status === 'pending').length;
    const approved = commentsData.filter(c => c.status === 'approved').length;
    const rejected = commentsData.filter(c => c.status === 'rejected').length;
    const total = commentsData.length;

    document.getElementById('stat_pending').textContent = pending;
    document.getElementById('stat_approved').textContent = approved;
    document.getElementById('stat_rejected').textContent = rejected;
    document.getElementById('stat_total').textContent = total;
  }

  function renderTable(filtered) {
    const tbody = document.getElementById('acm_table_body');
    if (!tbody) return;

    const pageComments = getPaginatedComments(filtered);

    if (pageComments.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8">
            <div class="acm-empty-state">
              <i class="fa-regular fa-comments"></i>
              <h3>No comments found</h3>
              <p>Try adjusting your filters or search query.</p>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = pageComments.map(comment => {
      const isChecked = selectedIds.has(comment.id) ? 'checked' : '';
      return `
        <tr class="${selectedIds.has(comment.id) ? 'selected' : ''}" data-comment-id="${comment.id}">
          <td class="checkbox-cell">
            <input type="checkbox" class="comment-checkbox" data-id="${comment.id}" ${isChecked} aria-label="Select comment by ${comment.author}">
          </td>
          <td>
            <div class="acm-author-cell">
              <div class="acm-author-avatar ${comment.avatarColor}">${comment.avatar}</div>
              <div class="acm-author-info">
                <span class="acm-author-name">${escapeHtml(comment.author)}</span>
                <span class="acm-author-email">${escapeHtml(comment.email)}</span>
              </div>
            </div>
          </td>
          <td>
            <span class="acm-post-title" title="${escapeHtml(comment.postTitle)}">${escapeHtml(comment.postTitle)}</span>
          </td>
          <td>
            <div class="acm-rating">${renderStars(comment.rating)}</div>
          </td>
          <td>
            <span class="acm-comment-excerpt" title="${escapeHtml(comment.excerpt)}">${escapeHtml(comment.excerpt)}</span>
          </td>
          <td>
            <span class="acm-status-badge ${comment.status}">
              <i class="fa-solid ${getStatusIcon(comment.status)}"></i>
              ${capitalize(comment.status)}
            </span>
          </td>
          <td>
            <span class="acm-date">${formatDate(comment.date)}</span>
          </td>
          <td>
            <div class="acm-actions">
              <button class="acm-action-btn view" onclick="ACM.viewComment(${comment.id})" title="View Details" aria-label="View comment details">
                <i class="fa-solid fa-eye"></i>
              </button>
              ${comment.status !== 'approved' ? `<button class="acm-action-btn approve" onclick="ACM.approveComment(${comment.id})" title="Approve" aria-label="Approve comment">
                <i class="fa-solid fa-check"></i>
              </button>` : ''}
              ${comment.status !== 'rejected' ? `<button class="acm-action-btn reject" onclick="ACM.rejectComment(${comment.id})" title="Reject" aria-label="Reject comment">
                <i class="fa-solid fa-xmark"></i>
              </button>` : ''}
              <button class="acm-action-btn delete" onclick="ACM.confirmDelete(${comment.id})" title="Delete" aria-label="Delete comment">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  function renderPagination(filtered) {
    const totalPages = Math.ceil(filtered.length / perPage);
    const info = document.getElementById('acm_pagination_info');
    const controls = document.getElementById('acm_pagination_controls');

    if (info) {
      const start = filtered.length === 0 ? 0 : (currentPage - 1) * perPage + 1;
      const end = Math.min(currentPage * perPage, filtered.length);
      info.textContent = `Showing ${start}–${end} of ${filtered.length} comments`;
    }

    if (controls) {
      let html = '';
      html += `<button class="acm-page-btn" onclick="ACM.goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} aria-label="Previous page"><i class="fa-solid fa-chevron-left"></i></button>`;

      for (let i = 1; i <= totalPages; i++) {
        if (totalPages > 7) {
          if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="acm-page-btn ${i === currentPage ? 'active' : ''}" onclick="ACM.goToPage(${i})" aria-label="Page ${i}">${i}</button>`;
          } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span style="padding:0 4px;color:#94a3b8">...</span>`;
          }
        } else {
          html += `<button class="acm-page-btn ${i === currentPage ? 'active' : ''}" onclick="ACM.goToPage(${i})" aria-label="Page ${i}">${i}</button>`;
        }
      }

      html += `<button class="acm-page-btn" onclick="ACM.goToPage(${currentPage + 1})" ${currentPage === totalPages || totalPages === 0 ? 'disabled' : ''} aria-label="Next page"><i class="fa-solid fa-chevron-right"></i></button>`;

      controls.innerHTML = html;
    }
  }

  function updateBulkBar() {
    const bar = document.getElementById('acm_bulk_bar');
    const count = document.getElementById('acm_selected_count');
    if (bar) {
      if (selectedIds.size > 0) {
        bar.classList.remove('hidden');
        if (count) count.textContent = `${selectedIds.size} comment${selectedIds.size > 1 ? 's' : ''} selected`;
      } else {
        bar.classList.add('hidden');
      }
    }
  }

  function updateSelectAll() {
    const selectAll = document.getElementById('acm_select_all');
    if (!selectAll) return;
    const filtered = getFilteredComments();
    const pageComments = getPaginatedComments(filtered);
    const allSelected = pageComments.length > 0 && pageComments.every(c => selectedIds.has(c.id));
    selectAll.checked = allSelected;
  }

  function viewComment(id) {
    const comment = commentsData.find(c => c.id === id);
    if (!comment) return;

    const modal = document.getElementById('acm_comment_detail_modal');
    if (!modal) return;

    document.getElementById('modal_author_name').textContent = comment.author;
    document.getElementById('modal_author_email').textContent = comment.email;
    document.getElementById('modal_post_title').textContent = comment.postTitle;
    document.getElementById('modal_date').textContent = formatDate(comment.date);
    document.getElementById('modal_rating').innerHTML = renderStars(comment.rating) + `<span>${comment.rating}/5</span>`;
    document.getElementById('modal_status').innerHTML = `<span class="acm-status-badge ${comment.status}"><i class="fa-solid ${getStatusIcon(comment.status)}"></i> ${capitalize(comment.status)}</span>`;
    document.getElementById('modal_comment_text').textContent = comment.fullComment;

    // Configure action buttons
    const approveBtn = document.getElementById('modal_approve_btn');
    const rejectBtn = document.getElementById('modal_reject_btn');
    const deleteBtn = document.getElementById('modal_delete_btn');

    approveBtn.style.display = comment.status !== 'approved' ? 'inline-flex' : 'none';
    rejectBtn.style.display = comment.status !== 'rejected' ? 'inline-flex' : 'none';

    approveBtn.onclick = function() { approveComment(id); closeAllModals(); };
    rejectBtn.onclick = function() { rejectComment(id); closeAllModals(); };
    deleteBtn.onclick = function() { closeAllModals(); confirmDelete(id); };

    modal.classList.add('active');
    modal.querySelector('.modal-close').focus();
  }

  function approveComment(id) {
    const comment = commentsData.find(c => c.id === id);
    if (comment) {
      comment.status = 'approved';
      renderAll();
      showToast('success', `Comment by ${comment.author} has been approved.`);
    }
  }

  function rejectComment(id) {
    const comment = commentsData.find(c => c.id === id);
    if (comment) {
      comment.status = 'rejected';
      renderAll();
      showToast('warning', `Comment by ${comment.author} has been rejected.`);
    }
  }

  function confirmDelete(id) {
    const comment = commentsData.find(c => c.id === id);
    if (!comment) return;

    const modal = document.getElementById('acm_delete_confirm_modal');
    if (!modal) return;

    document.getElementById('delete_confirm_author').textContent = comment.author;

    const confirmBtn = document.getElementById('delete_confirm_btn');
    confirmBtn.onclick = function() {
      deleteComment(id);
      closeAllModals();
    };

    modal.classList.add('active');
  }

  function deleteComment(id) {
    const idx = commentsData.findIndex(c => c.id === id);
    if (idx > -1) {
      const comment = commentsData[idx];
      commentsData.splice(idx, 1);
      selectedIds.delete(id);
      renderAll();
      showToast('error', `Comment by ${comment.author} has been permanently deleted.`);
    }
  }

  function bulkAction(status) {
    let count = 0;
    selectedIds.forEach(id => {
      const comment = commentsData.find(c => c.id === id);
      if (comment) {
        comment.status = status;
        count++;
      }
    });
    selectedIds.clear();
    renderAll();
    const action = status === 'approved' ? 'approved' : 'rejected';
    showToast(status === 'approved' ? 'success' : 'warning', `${count} comment${count > 1 ? 's' : ''} ${action}.`);
  }

  function closeAllModals() {
    document.querySelectorAll('.acm-modal-overlay').forEach(m => {
      m.classList.remove('active');
    });
  }

  function goToPage(page) {
    const filtered = getFilteredComments();
    const totalPages = Math.ceil(filtered.length / perPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    selectedIds.clear();
    renderAll();
    document.querySelector('.acm-table-container')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Utility functions
  function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      html += `<i class="fa-solid fa-star ${i <= rating ? 'active' : ''}"></i>`;
    }
    return html;
  }

  function getStatusIcon(status) {
    switch(status) {
      case 'pending': return 'fa-clock';
      case 'approved': return 'fa-circle-check';
      case 'rejected': return 'fa-circle-xmark';
      default: return 'fa-circle';
    }
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return d.toLocaleDateString('en-US', options);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function showToast(type, message) {
    const container = document.getElementById('acm_toast_container');
    if (!container) return;

    const icons = {
      success: 'fa-circle-check',
      error: 'fa-circle-xmark',
      warning: 'fa-triangle-exclamation'
    };

    const toast = document.createElement('div');
    toast.className = `acm-toast ${type}`;
    toast.innerHTML = `<i class="fa-solid ${icons[type]}"></i><span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Expose API
  window.ACM = {
    viewComment,
    approveComment,
    rejectComment,
    confirmDelete,
    deleteComment,
    goToPage
  };

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();