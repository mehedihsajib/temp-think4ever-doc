// Admin Dashboard JavaScript
(function() {
  'use strict';

  // Sample data
  const dashboardData = {
    pendingComments: 7,
    totalComments: 142,
    feedbackCount: 38,
    recentComments: [
      {
        id: 1,
        author: 'Sarah Chen',
        initials: 'SC',
        post: 'Getting Started with QR Payments',
        text: 'This guide was really helpful! However, I noticed that step 3 might be outdated since the latest app update changed the menu layout...',
        time: '12 min ago'
      },
      {
        id: 2,
        author: 'James Miller',
        initials: 'JM',
        post: 'NFC Payment Setup Guide',
        text: 'Can you add more details about which NFC-enabled devices are supported? I tried with my Samsung Galaxy S21 and it worked great.',
        time: '45 min ago'
      },
      {
        id: 3,
        author: 'Priya Patel',
        initials: 'PP',
        post: 'Consumer Wallet Management',
        text: 'The withdrawal process documentation is unclear. It says 1-3 business days but mine took over a week. Please clarify.',
        time: '1 hour ago'
      },
      {
        id: 4,
        author: 'Alex Thompson',
        initials: 'AT',
        post: 'Merchant Account Verification',
        text: 'Great documentation! Just a small typo in paragraph 2 where it says "KYC verication" instead of "KYC verification".',
        time: '2 hours ago'
      },
      {
        id: 5,
        author: 'Maria Garcia',
        initials: 'MG',
        post: 'P2P Transfer Guide',
        text: 'Is there a limit on how many P2P transfers you can make per day? The docs mention a daily limit but don\'t specify the amount.',
        time: '3 hours ago'
      }
    ],
    recentFeedback: [
      {
        id: 1,
        type: 'bug',
        title: 'QR scanner not working on iOS 17.2',
        time: '30 min ago'
      },
      {
        id: 2,
        type: 'feature',
        title: 'Add biometric authentication option',
        time: '2 hours ago'
      },
      {
        id: 3,
        type: 'general',
        title: 'Documentation is very well organized',
        time: '4 hours ago'
      },
      {
        id: 4,
        type: 'bug',
        title: 'Transaction history shows wrong timezone',
        time: '5 hours ago'
      }
    ]
  };

  // Initialize dashboard
  function initDashboard() {
    renderStats();
    renderRecentComments();
    renderRecentFeedback();
    setupSidebar();
    setupRefresh();
    updateLastUpdated();
  }

  // Render stat cards
  function renderStats() {
    const pendingEl = document.getElementById('ad_pending_comments_value');
    const totalEl = document.getElementById('ad_total_comments_value');
    const feedbackEl = document.getElementById('ad_feedback_count_value');

    if (pendingEl) animateCounter(pendingEl, 0, dashboardData.pendingComments, 800);
    if (totalEl) animateCounter(totalEl, 0, dashboardData.totalComments, 1000);
    if (feedbackEl) animateCounter(feedbackEl, 0, dashboardData.feedbackCount, 900);

    // Update sidebar badge
    const sidebarBadge = document.getElementById('sidebar-pending-badge');
    if (sidebarBadge) sidebarBadge.textContent = dashboardData.pendingComments;
  }

  // Animate counter
  function animateCounter(el, start, end, duration) {
    const startTime = performance.now();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      el.textContent = end;
      return;
    }

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // Render recent comments
  function renderRecentComments() {
    const container = document.getElementById('ad_recent_comments');
    if (!container) return;

    if (dashboardData.recentComments.length === 0) {
      container.innerHTML = '<div class="empty-state"><i class="fa fa-comments"></i><p>No pending comments</p></div>';
      return;
    }

    let html = '';
    dashboardData.recentComments.forEach(function(comment) {
      html += '<li class="pending-comment-item" data-comment-id="' + comment.id + '">' +
        '<div class="comment-avatar" aria-hidden="true">' + comment.initials + '</div>' +
        '<div class="comment-content">' +
          '<div class="comment-meta">' +
            '<span class="comment-author">' + escapeHtml(comment.author) + '</span>' +
            '<span class="comment-post">on <a href="#">' + escapeHtml(comment.post) + '</a></span>' +
            '<span class="comment-time">' + comment.time + '</span>' +
          '</div>' +
          '<div class="comment-text">' + escapeHtml(comment.text) + '</div>' +
        '</div>' +
        '<div class="comment-actions">' +
          '<button class="comment-action-btn comment-action-btn--approve" title="Approve comment" aria-label="Approve comment by ' + escapeHtml(comment.author) + '" onclick="adminDashboard.approveComment(' + comment.id + ')">' +
            '<i class="fa fa-check"></i>' +
          '</button>' +
          '<button class="comment-action-btn comment-action-btn--reject" title="Reject comment" aria-label="Reject comment by ' + escapeHtml(comment.author) + '" onclick="adminDashboard.rejectComment(' + comment.id + ')">' +
            '<i class="fa fa-times"></i>' +
          '</button>' +
        '</div>' +
      '</li>';
    });

    container.innerHTML = html;
  }

  // Render recent feedback
  function renderRecentFeedback() {
    const container = document.getElementById('ad_recent_feedback');
    if (!container) return;

    let html = '';
    dashboardData.recentFeedback.forEach(function(fb) {
      const iconClass = fb.type === 'bug' ? 'fa-bug' : fb.type === 'feature' ? 'fa-lightbulb' : 'fa-comment';
      const iconBg = 'activity-icon--' + fb.type;
      const tagClass = 'activity-tag--' + fb.type;
      const tagLabel = fb.type.charAt(0).toUpperCase() + fb.type.slice(1);

      html += '<li class="activity-item">' +
        '<div class="activity-icon ' + iconBg + '" aria-hidden="true"><i class="fa ' + iconClass + '"></i></div>' +
        '<div class="activity-content">' +
          '<div class="activity-title">' + escapeHtml(fb.title) + '</div>' +
          '<div class="activity-desc">' + fb.time + '</div>' +
        '</div>' +
        '<span class="activity-tag ' + tagClass + '">' + tagLabel + '</span>' +
      '</li>';
    });

    container.innerHTML = html;
  }

  // Setup sidebar
  function setupSidebar() {
    const toggle = document.getElementById('admin-sidebar-toggle');
    const sidebar = document.getElementById('admin-sidebar');
    const overlay = document.getElementById('admin-sidebar-overlay');

    if (toggle && sidebar) {
      toggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('open');
        const isOpen = sidebar.classList.contains('open');
        toggle.setAttribute('aria-expanded', isOpen);
      });
    }

    if (overlay) {
      overlay.addEventListener('click', function() {
        if (sidebar) sidebar.classList.remove('open');
        overlay.classList.remove('open');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    }

    // Escape key to close sidebar
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      }
    });
  }

  // Setup refresh
  function setupRefresh() {
    const refreshBtn = document.getElementById('admin-refresh-btn');
    if (refreshBtn) {
      refreshBtn.addEventListener('click', function() {
        refreshBtn.classList.add('refreshing');
        refreshBtn.disabled = true;

        setTimeout(function() {
          refreshBtn.classList.remove('refreshing');
          refreshBtn.disabled = false;
          updateLastUpdated();
          // Re-render with potentially updated data
          renderStats();
          renderRecentComments();
          renderRecentFeedback();
        }, 1200);
      });
    }
  }

  // Update last updated time
  function updateLastUpdated() {
    const el = document.getElementById('last-updated');
    if (el) {
      const now = new Date();
      el.textContent = 'Last updated: ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }

  // Approve comment
  function approveComment(id) {
    const item = document.querySelector('[data-comment-id="' + id + '"]');
    if (item) {
      item.style.opacity = '0.5';
      item.style.transition = 'opacity 0.3s ease';
      setTimeout(function() {
        item.remove();
        dashboardData.pendingComments--;
        dashboardData.totalComments++;
        dashboardData.recentComments = dashboardData.recentComments.filter(function(c) { return c.id !== id; });
        const pendingEl = document.getElementById('ad_pending_comments_value');
        const totalEl = document.getElementById('ad_total_comments_value');
        if (pendingEl) pendingEl.textContent = dashboardData.pendingComments;
        if (totalEl) totalEl.textContent = dashboardData.totalComments;
        const badge = document.getElementById('sidebar-pending-badge');
        if (badge) badge.textContent = dashboardData.pendingComments;
        const headerBadge = document.querySelector('.header-badge');
        if (headerBadge) headerBadge.textContent = dashboardData.pendingComments;
        if (dashboardData.recentComments.length === 0) {
          var container = document.getElementById('ad_recent_comments');
          if (container) container.innerHTML = '<div class="empty-state"><i class="fa fa-check-circle"></i><p>All comments moderated!</p></div>';
        }
      }, 300);
    }
  }

  // Reject comment
  function rejectComment(id) {
    var item = document.querySelector('[data-comment-id="' + id + '"]');
    if (item) {
      item.style.opacity = '0.5';
      item.style.background = '#fef2f2';
      item.style.transition = 'all 0.3s ease';
      setTimeout(function() {
        item.remove();
        dashboardData.pendingComments--;
        dashboardData.recentComments = dashboardData.recentComments.filter(function(c) { return c.id !== id; });
        var pendingEl = document.getElementById('ad_pending_comments_value');
        if (pendingEl) pendingEl.textContent = dashboardData.pendingComments;
        var badge = document.getElementById('sidebar-pending-badge');
        if (badge) badge.textContent = dashboardData.pendingComments;
        var headerBadge = document.querySelector('.header-badge');
        if (headerBadge) headerBadge.textContent = dashboardData.pendingComments;
        if (dashboardData.recentComments.length === 0) {
          var container = document.getElementById('ad_recent_comments');
          if (container) container.innerHTML = '<div class="empty-state"><i class="fa fa-check-circle"></i><p>All comments moderated!</p></div>';
        }
      }, 300);
    }
  }

  // Escape HTML
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // Expose functions globally
  window.adminDashboard = {
    approveComment: approveComment,
    rejectComment: rejectComment
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDashboard);
  } else {
    initDashboard();
  }
})();