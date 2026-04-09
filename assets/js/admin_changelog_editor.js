// Admin Changelog Editor - JavaScript

(function() {
  'use strict';

  // Sample data
  let changelogEntries = [
    {
      id: 1,
      version: 'v2.3.0',
      releaseDate: '2025-01-15',
      walletType: 'both',
      tags: ['feature', 'improvement'],
      description: '### New Features\n- Added biometric authentication for faster login\n- Introduced batch payment processing for merchants\n- New dashboard analytics with real-time charts\n\n### Improvements\n- Optimized QR code scanning speed by 40%\n- Enhanced transaction history search and filters\n- Improved app startup time',
      status: 'published',
      createdAt: '2025-01-14'
    },
    {
      id: 2,
      version: 'v2.2.1',
      releaseDate: '2025-01-05',
      walletType: 'merchant',
      tags: ['bugfix', 'security'],
      description: '### Bug Fixes\n- Fixed NFC payment timeout on certain Android devices\n- Resolved transaction history not loading for accounts with 10k+ transactions\n- Fixed currency formatting for international merchants\n\n### Security\n- Patched session token refresh vulnerability\n- Updated TLS certificate pinning',
      status: 'published',
      createdAt: '2025-01-04'
    },
    {
      id: 3,
      version: 'v2.2.0',
      releaseDate: '2024-12-20',
      walletType: 'consumer',
      tags: ['feature', 'improvement'],
      description: '### New Features\n- P2P transfer scheduling — send money at a future date\n- Added support for 12 new currencies\n- QR code favorites for frequent merchants\n\n### Improvements\n- Redesigned wallet balance card with spending insights\n- Faster top-up processing with instant confirmation',
      status: 'published',
      createdAt: '2024-12-19'
    },
    {
      id: 4,
      version: 'v2.1.0',
      releaseDate: '2024-12-01',
      walletType: 'both',
      tags: ['feature', 'breaking'],
      description: '### New Features\n- Multi-language support (EN, ES, FR, DE, AR)\n- Dark mode across all screens\n\n### Breaking Changes\n- API v1 endpoints deprecated — migrate to v2 by March 2025\n- Minimum OS requirement updated: iOS 15+, Android 10+',
      status: 'published',
      createdAt: '2024-11-30'
    },
    {
      id: 5,
      version: 'v2.4.0-beta',
      releaseDate: '2025-02-01',
      walletType: 'both',
      tags: ['feature', 'improvement', 'security'],
      description: '### New Features\n- Voice-activated payments (experimental)\n- Merchant loyalty program integration\n- Advanced fraud detection system\n\n### Improvements\n- Reduced app size by 25%\n\n### Security\n- Implemented certificate transparency logging',
      status: 'draft',
      createdAt: '2025-01-20'
    }
  ];

  let currentFilter = 'all';
  let searchQuery = '';
  let editingEntryId = null;

  // Initialize
  function init() {
    renderEntries();
    updateStats();
    bindEvents();
  }

  function bindEvents() {
    // Mobile sidebar toggle
    const toggleBtn = document.getElementById('ace_mobile_toggle');
    const sidebar = document.getElementById('ace_sidebar');
    const overlay = document.getElementById('ace_sidebar_overlay');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', function() {
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

    // New Entry button
    const newBtn = document.getElementById('ace_new_btn');
    if (newBtn) {
      newBtn.addEventListener('click', function() {
        openEditModal(null);
      });
    }

    // Search
    const searchInput = document.getElementById('ace_search_input');
    if (searchInput) {
      searchInput.addEventListener('input', function(e) {
        searchQuery = e.target.value.toLowerCase();
        renderEntries();
      });
    }

    // Filter
    const filterSelect = document.getElementById('ace_filter_wallet');
    if (filterSelect) {
      filterSelect.addEventListener('change', function(e) {
        currentFilter = e.target.value;
        renderEntries();
      });
    }

    // Modal close
    const modalOverlay = document.getElementById('ace_edit_modal');
    if (modalOverlay) {
      modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
          closeModal();
        }
      });
    }

    const deleteOverlay = document.getElementById('ace_delete_modal');
    if (deleteOverlay) {
      deleteOverlay.addEventListener('click', function(e) {
        if (e.target === deleteOverlay) {
          closeDeleteModal();
        }
      });
    }

    // Modal close buttons
    document.querySelectorAll('[data-action="close-modal"]').forEach(function(btn) {
      btn.addEventListener('click', closeModal);
    });

    document.querySelectorAll('[data-action="close-delete-modal"]').forEach(function(btn) {
      btn.addEventListener('click', closeDeleteModal);
    });

    // Save button
    const saveBtn = document.getElementById('ace_save_btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', function() {
        saveEntry('published');
      });
    }

    // Save as Draft button
    const saveDraftBtn = document.getElementById('ace_save_draft_btn');
    if (saveDraftBtn) {
      saveDraftBtn.addEventListener('click', function() {
        saveEntry('draft');
      });
    }

    // Confirm delete
    const confirmDeleteBtn = document.getElementById('ace_confirm_delete_btn');
    if (confirmDeleteBtn) {
      confirmDeleteBtn.addEventListener('click', confirmDelete);
    }

    // Tag selection
    document.querySelectorAll('.tag-select-option').forEach(function(tag) {
      tag.addEventListener('click', function() {
        this.classList.toggle('selected');
      });
    });

    // Keyboard: Escape to close modals
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
        closeDeleteModal();
      }
    });
  }

  function getFilteredEntries() {
    return changelogEntries.filter(function(entry) {
      const matchesFilter = currentFilter === 'all' || entry.walletType === currentFilter;
      const matchesSearch = !searchQuery ||
        entry.version.toLowerCase().includes(searchQuery) ||
        entry.description.toLowerCase().includes(searchQuery);
      return matchesFilter && matchesSearch;
    });
  }

  function renderEntries() {
    const tbody = document.getElementById('ace_entries_tbody');
    const emptyState = document.getElementById('ace_empty_state');
    const tableWrapper = document.getElementById('ace_table_wrapper');
    const tableFooter = document.getElementById('ace_table_footer');

    const filtered = getFilteredEntries();

    if (filtered.length === 0) {
      if (tableWrapper) tableWrapper.style.display = 'none';
      if (tableFooter) tableFooter.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (tableWrapper) tableWrapper.style.display = 'block';
    if (tableFooter) tableFooter.style.display = 'flex';
    if (emptyState) emptyState.style.display = 'none';

    // Sort by date descending
    filtered.sort(function(a, b) {
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    });

    var html = '';
    filtered.forEach(function(entry) {
      html += '<tr data-entry-id="' + entry.id + '">';
      html += '<td>';
      html += '<div class="version-cell">';
      html += '<span class="version-number">' + escapeHtml(entry.version) + '</span>';
      html += '<span class="version-date">' + formatDate(entry.releaseDate) + '</span>';
      html += '</div>';
      html += '</td>';
      html += '<td>' + getWalletBadge(entry.walletType) + '</td>';
      html += '<td><div class="tag-list">' + getTagsHtml(entry.tags) + '</div></td>';
      html += '<td><div class="description-preview">' + escapeHtml(getDescriptionPreview(entry.description)) + '</div></td>';
      html += '<td>' + getStatusHtml(entry.status) + '</td>';
      html += '<td>';
      html += '<div class="action-btns">';
      html += '<button class="action-btn" title="Edit entry" aria-label="Edit ' + escapeHtml(entry.version) + '" onclick="window.aceEditEntry(' + entry.id + ')"><i class="fa-solid fa-pen"></i></button>';
      html += '<button class="action-btn" title="Duplicate entry" aria-label="Duplicate ' + escapeHtml(entry.version) + '" onclick="window.aceDuplicateEntry(' + entry.id + ')"><i class="fa-solid fa-copy"></i></button>';
      html += '<button class="action-btn danger" title="Delete entry" aria-label="Delete ' + escapeHtml(entry.version) + '" onclick="window.aceDeleteEntry(' + entry.id + ')"><i class="fa-solid fa-trash"></i></button>';
      html += '</div>';
      html += '</td>';
      html += '</tr>';
    });

    if (tbody) tbody.innerHTML = html;

    // Update count
    const countEl = document.getElementById('ace_entries_count');
    if (countEl) countEl.textContent = 'Showing ' + filtered.length + ' of ' + changelogEntries.length + ' entries';
  }

  function updateStats() {
    var total = changelogEntries.length;
    var published = changelogEntries.filter(function(e) { return e.status === 'published'; }).length;
    var drafts = changelogEntries.filter(function(e) { return e.status === 'draft'; }).length;
    var thisMonth = changelogEntries.filter(function(e) {
      var d = new Date(e.releaseDate);
      var now = new Date();
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;

    var el1 = document.getElementById('ace_stat_total');
    var el2 = document.getElementById('ace_stat_published');
    var el3 = document.getElementById('ace_stat_drafts');
    var el4 = document.getElementById('ace_stat_this_month');

    if (el1) el1.textContent = total;
    if (el2) el2.textContent = published;
    if (el3) el3.textContent = drafts;
    if (el4) el4.textContent = thisMonth;
  }

  function openEditModal(entryId) {
    editingEntryId = entryId;
    var modal = document.getElementById('ace_edit_modal');
    var titleEl = document.getElementById('ace_modal_title');
    var deleteBtn = document.getElementById('ace_delete_btn');

    // Reset form
    document.getElementById('ace_version').value = '';
    document.getElementById('ace_release_date').value = '';
    document.getElementById('ace_wallet_type').value = 'both';
    document.getElementById('ace_description').value = '';
    document.querySelectorAll('.tag-select-option').forEach(function(t) {
      t.classList.remove('selected');
    });

    // Clear errors
    document.querySelectorAll('.form-error').forEach(function(e) {
      e.classList.remove('visible');
    });
    document.querySelectorAll('.form-input.error').forEach(function(e) {
      e.classList.remove('error');
    });

    if (entryId) {
      var entry = changelogEntries.find(function(e) { return e.id === entryId; });
      if (entry) {
        if (titleEl) titleEl.textContent = 'Edit Changelog Entry';
        document.getElementById('ace_version').value = entry.version;
        document.getElementById('ace_release_date').value = entry.releaseDate;
        document.getElementById('ace_wallet_type').value = entry.walletType;
        document.getElementById('ace_description').value = entry.description;

        entry.tags.forEach(function(tag) {
          var el = document.querySelector('.tag-select-option[data-tag="' + tag + '"]');
          if (el) el.classList.add('selected');
        });

        if (deleteBtn) deleteBtn.style.display = 'inline-flex';
      }
    } else {
      if (titleEl) titleEl.textContent = 'New Changelog Entry';
      // Default date to today
      document.getElementById('ace_release_date').value = new Date().toISOString().split('T')[0];
      if (deleteBtn) deleteBtn.style.display = 'none';
    }

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      // Focus first input
      setTimeout(function() {
        document.getElementById('ace_version').focus();
      }, 100);
    }
  }

  function closeModal() {
    var modal = document.getElementById('ace_edit_modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      editingEntryId = null;
    }
  }

  function saveEntry(status) {
    // Validate
    var version = document.getElementById('ace_version').value.trim();
    var releaseDate = document.getElementById('ace_release_date').value;
    var walletType = document.getElementById('ace_wallet_type').value;
    var description = document.getElementById('ace_description').value.trim();
    var selectedTags = [];
    document.querySelectorAll('.tag-select-option.selected').forEach(function(t) {
      selectedTags.push(t.getAttribute('data-tag'));
    });

    var valid = true;

    // Version validation
    var versionError = document.getElementById('ace_version_error');
    var versionInput = document.getElementById('ace_version');
    if (!version) {
      if (versionError) versionError.classList.add('visible');
      if (versionInput) versionInput.classList.add('error');
      valid = false;
    } else {
      if (versionError) versionError.classList.remove('visible');
      if (versionInput) versionInput.classList.remove('error');
    }

    // Date validation
    var dateError = document.getElementById('ace_date_error');
    var dateInput = document.getElementById('ace_release_date');
    if (!releaseDate) {
      if (dateError) dateError.classList.add('visible');
      if (dateInput) dateInput.classList.add('error');
      valid = false;
    } else {
      if (dateError) dateError.classList.remove('visible');
      if (dateInput) dateInput.classList.remove('error');
    }

    // Description validation
    var descError = document.getElementById('ace_desc_error');
    var descInput = document.getElementById('ace_description');
    if (!description) {
      if (descError) descError.classList.add('visible');
      if (descInput) descInput.classList.add('error');
      valid = false;
    } else {
      if (descError) descError.classList.remove('visible');
      if (descInput) descInput.classList.remove('error');
    }

    if (!valid) return;

    if (editingEntryId) {
      // Update existing
      var entry = changelogEntries.find(function(e) { return e.id === editingEntryId; });
      if (entry) {
        entry.version = version;
        entry.releaseDate = releaseDate;
        entry.walletType = walletType;
        entry.tags = selectedTags;
        entry.description = description;
        entry.status = status;
      }
      showToast('Changelog entry updated successfully!', 'success');
    } else {
      // Create new
      var newId = Math.max.apply(null, changelogEntries.map(function(e) { return e.id; })) + 1;
      changelogEntries.push({
        id: newId,
        version: version,
        releaseDate: releaseDate,
        walletType: walletType,
        tags: selectedTags,
        description: description,
        status: status,
        createdAt: new Date().toISOString().split('T')[0]
      });
      showToast('Changelog entry created successfully!', 'success');
    }

    closeModal();
    renderEntries();
    updateStats();
  }

  var deleteTargetId = null;

  function openDeleteModal(entryId) {
    deleteTargetId = entryId;
    var entry = changelogEntries.find(function(e) { return e.id === entryId; });
    var modal = document.getElementById('ace_delete_modal');
    var versionEl = document.getElementById('ace_delete_version');

    if (entry && versionEl) {
      versionEl.textContent = entry.version;
    }

    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDeleteModal() {
    var modal = document.getElementById('ace_delete_modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      deleteTargetId = null;
    }
  }

  function confirmDelete() {
    if (deleteTargetId) {
      changelogEntries = changelogEntries.filter(function(e) { return e.id !== deleteTargetId; });
      showToast('Changelog entry deleted.', 'success');
      closeDeleteModal();
      closeModal();
      renderEntries();
      updateStats();
    }
  }

  function duplicateEntry(entryId) {
    var entry = changelogEntries.find(function(e) { return e.id === entryId; });
    if (entry) {
      var newId = Math.max.apply(null, changelogEntries.map(function(e) { return e.id; })) + 1;
      changelogEntries.push({
        id: newId,
        version: entry.version + '-copy',
        releaseDate: entry.releaseDate,
        walletType: entry.walletType,
        tags: entry.tags.slice(),
        description: entry.description,
        status: 'draft',
        createdAt: new Date().toISOString().split('T')[0]
      });
      showToast('Entry duplicated as draft.', 'success');
      renderEntries();
      updateStats();
    }
  }

  // Helper functions
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function formatDate(dateStr) {
    var d = new Date(dateStr + 'T00:00:00');
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
    return d.toLocaleDateString('en-US', options);
  }

  function getWalletBadge(type) {
    var labels = { merchant: 'Merchant', consumer: 'Consumer', both: 'Both' };
    var icons = { merchant: 'fa-store', consumer: 'fa-user', both: 'fa-layer-group' };
    return '<span class="wallet-badge ' + type + '"><i class="fa-solid ' + icons[type] + '"></i> ' + labels[type] + '</span>';
  }

  function getTagsHtml(tags) {
    var tagMap = {
      feature: { label: 'New Feature', cls: 'feature', icon: 'fa-sparkles' },
      bugfix: { label: 'Bug Fix', cls: 'bugfix', icon: 'fa-bug' },
      improvement: { label: 'Improvement', cls: 'improvement', icon: 'fa-arrow-up' },
      breaking: { label: 'Breaking', cls: 'breaking', icon: 'fa-triangle-exclamation' },
      security: { label: 'Security', cls: 'security', icon: 'fa-shield-halved' }
    };
    return tags.map(function(tag) {
      var t = tagMap[tag] || { label: tag, cls: '', icon: 'fa-tag' };
      return '<span class="tag ' + t.cls + '"><i class="fa-solid ' + t.icon + '"></i> ' + t.label + '</span>';
    }).join('');
  }

  function getDescriptionPreview(md) {
    // Strip markdown headers and bullet points for preview
    return md.replace(/###?\s*/g, '').replace(/^-\s*/gm, '').replace(/\n+/g, ' ').substring(0, 120);
  }

  function getStatusHtml(status) {
    return '<span class="status-dot ' + status + '">' + (status === 'published' ? 'Published' : 'Draft') + '</span>';
  }

  function showToast(message, type) {
    var container = document.getElementById('ace_toast_container');
    if (!container) return;

    var toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML = '<i class="fa-solid ' + (type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle') + '"></i>' +
      '<span class="toast-message">' + message + '</span>' +
      '<button class="toast-close" aria-label="Dismiss"><i class="fa-solid fa-times"></i></button>';

    container.appendChild(toast);

    // Animate in
    setTimeout(function() { toast.classList.add('show'); }, 10);

    // Close button
    toast.querySelector('.toast-close').addEventListener('click', function() {
      toast.classList.remove('show');
      setTimeout(function() { toast.remove(); }, 300);
    });

    // Auto dismiss
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() { toast.remove(); }, 300);
    }, 4000);
  }

  // Expose to global scope for inline onclick handlers
  window.aceEditEntry = function(id) { openEditModal(id); };
  window.aceDeleteEntry = function(id) { openDeleteModal(id); };
  window.aceDuplicateEntry = function(id) { duplicateEntry(id); };
  window.aceDeleteFromModal = function() {
    if (editingEntryId) {
      openDeleteModal(editingEntryId);
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();