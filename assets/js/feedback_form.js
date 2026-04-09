// Feedback Form Page JavaScript
(function() {
  'use strict';

  // State
  let selectedCategory = '';
  let selectedRating = 0;
  let hoveredRating = 0;
  const MAX_MESSAGE_LENGTH = 2000;

  // DOM references
  const header = document.querySelector('.feedback-header');
  const form = document.getElementById('feedbackForm');
  const formCard = document.querySelector('.feedback-form-card');
  const successSection = document.querySelector('.feedback-success');
  const typeCards = document.querySelectorAll('.type-card');
  const categorySelect = document.getElementById('ff_category');
  const subjectInput = document.getElementById('ff_subject');
  const messageTextarea = document.getElementById('ff_message');
  const nameInput = document.getElementById('ff_name');
  const emailInput = document.getElementById('ff_email');
  const submitBtn = document.getElementById('ff_submit');
  const starBtns = document.querySelectorAll('.star-btn');
  const ratingText = document.querySelector('.star-rating-text');
  const charCounter = document.querySelector('.char-counter');
  const typeSelectorSection = document.querySelector('.feedback-type-selector');

  // Category map from type cards
  const categoryMap = {
    'bug_report': 'Bug Report',
    'feature_request': 'Feature Request',
    'general': 'General',
    'merchant_wallet': 'Merchant Wallet',
    'consumer_wallet': 'Consumer Wallet'
  };

  // Header scroll shadow
  function handleScroll() {
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Type card selection
  typeCards.forEach(function(card) {
    card.addEventListener('click', function() {
      typeCards.forEach(function(c) { c.classList.remove('active'); c.setAttribute('aria-checked', 'false'); });
      card.classList.add('active');
      card.setAttribute('aria-checked', 'true');
      selectedCategory = card.dataset.category;
      if (categorySelect) {
        categorySelect.value = selectedCategory;
        clearError('ff_category');
      }
    });

    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Category select change updates type cards
  if (categorySelect) {
    categorySelect.addEventListener('change', function() {
      selectedCategory = this.value;
      typeCards.forEach(function(card) {
        if (card.dataset.category === selectedCategory) {
          card.classList.add('active');
          card.setAttribute('aria-checked', 'true');
        } else {
          card.classList.remove('active');
          card.setAttribute('aria-checked', 'false');
        }
      });
      clearError('ff_category');
    });
  }

  // Star rating
  const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

  function updateStars() {
    const displayRating = hoveredRating > 0 ? hoveredRating : selectedRating;
    starBtns.forEach(function(btn) {
      const val = parseInt(btn.dataset.value);
      if (val <= displayRating) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="fa fa-star"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fa-regular fa-star"></i>';
      }
      if (hoveredRating > 0 && val <= hoveredRating) {
        btn.classList.add('hovered');
      } else {
        btn.classList.remove('hovered');
      }
    });
    if (ratingText) {
      if (hoveredRating > 0) {
        ratingText.textContent = ratingLabels[hoveredRating];
      } else if (selectedRating > 0) {
        ratingText.textContent = ratingLabels[selectedRating];
      } else {
        ratingText.textContent = 'Not rated';
      }
    }
  }

  starBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectedRating = parseInt(btn.dataset.value);
      updateStars();
    });

    btn.addEventListener('mouseenter', function() {
      hoveredRating = parseInt(btn.dataset.value);
      updateStars();
    });

    btn.addEventListener('mouseleave', function() {
      hoveredRating = 0;
      updateStars();
    });

    btn.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        var next = btn.nextElementSibling;
        while (next && !next.classList.contains('star-btn')) {
          next = next.nextElementSibling;
        }
        if (next) {
          next.focus();
          selectedRating = parseInt(next.dataset.value);
          updateStars();
        }
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        var prev = btn.previousElementSibling;
        while (prev && !prev.classList.contains('star-btn')) {
          prev = prev.previousElementSibling;
        }
        if (prev) {
          prev.focus();
          selectedRating = parseInt(prev.dataset.value);
          updateStars();
        }
      }
    });
  });

  // Character counter for message
  if (messageTextarea && charCounter) {
    messageTextarea.addEventListener('input', function() {
      var len = messageTextarea.value.length;
      charCounter.textContent = len + ' / ' + MAX_MESSAGE_LENGTH;
      charCounter.classList.remove('warning', 'danger');
      if (len > MAX_MESSAGE_LENGTH * 0.9) {
        charCounter.classList.add('danger');
      } else if (len > MAX_MESSAGE_LENGTH * 0.75) {
        charCounter.classList.add('warning');
      }
      if (messageTextarea.value.trim()) {
        clearError('ff_message');
      }
    });
  }

  // Clear error on input
  if (subjectInput) {
    subjectInput.addEventListener('input', function() {
      if (subjectInput.value.trim()) clearError('ff_subject');
    });
  }

  if (emailInput) {
    emailInput.addEventListener('input', function() {
      clearError('ff_email');
    });
  }

  // Validation helpers
  function showError(fieldId, message) {
    var input = document.getElementById(fieldId);
    var errorEl = document.getElementById(fieldId + '_error');
    if (input) input.classList.add('error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('visible');
      errorEl.innerHTML = '<i class="fa fa-exclamation-circle"></i> ' + message;
    }
  }

  function clearError(fieldId) {
    var input = document.getElementById(fieldId);
    var errorEl = document.getElementById(fieldId + '_error');
    if (input) input.classList.remove('error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('visible');
    }
  }

  function validateEmail(email) {
    if (!email) return true; // optional
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validateForm() {
    var isValid = true;

    // Category
    if (!categorySelect.value) {
      showError('ff_category', 'Please select a category.');
      isValid = false;
    } else {
      clearError('ff_category');
    }

    // Subject
    if (!subjectInput.value.trim()) {
      showError('ff_subject', 'Subject is required.');
      isValid = false;
    } else {
      clearError('ff_subject');
    }

    // Message
    if (!messageTextarea.value.trim()) {
      showError('ff_message', 'Please enter your feedback message.');
      isValid = false;
    } else if (messageTextarea.value.length > MAX_MESSAGE_LENGTH) {
      showError('ff_message', 'Message exceeds maximum length of ' + MAX_MESSAGE_LENGTH + ' characters.');
      isValid = false;
    } else {
      clearError('ff_message');
    }

    // Email (optional but if provided must be valid)
    if (emailInput.value.trim() && !validateEmail(emailInput.value.trim())) {
      showError('ff_email', 'Please enter a valid email address.');
      isValid = false;
    } else {
      clearError('ff_email');
    }

    return isValid;
  }

  // Form submission
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (!validateForm()) {
        // Scroll to first error
        var firstError = form.querySelector('.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstError.focus();
        }
        return;
      }

      // Collect data
      var feedbackData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        category: categorySelect.value,
        subject: subjectInput.value.trim(),
        message: messageTextarea.value.trim(),
        rating: selectedRating || null,
        submitted_at: new Date().toISOString()
      };

      console.log('Feedback submitted:', feedbackData);

      // Show loading state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      // Simulate submission delay
      setTimeout(function() {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;

        // Hide form, show success
        if (formCard) formCard.style.display = 'none';
        if (typeSelectorSection) typeSelectorSection.style.display = 'none';
        if (successSection) successSection.classList.add('visible');

        // Scroll to success
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    });
  }

  // Reset form for new feedback
  var newFeedbackBtn = document.getElementById('ff_new_feedback');
  if (newFeedbackBtn) {
    newFeedbackBtn.addEventListener('click', function() {
      // Reset form
      if (form) form.reset();
      selectedCategory = '';
      selectedRating = 0;
      hoveredRating = 0;
      updateStars();

      typeCards.forEach(function(c) { c.classList.remove('active'); c.setAttribute('aria-checked', 'false'); });

      if (charCounter) {
        charCounter.textContent = '0 / ' + MAX_MESSAGE_LENGTH;
        charCounter.classList.remove('warning', 'danger');
      }

      // Show form, hide success
      if (formCard) formCard.style.display = '';
      if (typeSelectorSection) typeSelectorSection.style.display = '';
      if (successSection) successSection.classList.remove('visible');

      // Clear all errors
      ['ff_category', 'ff_subject', 'ff_message', 'ff_email', 'ff_name'].forEach(clearError);
    });
  }

  // Initialize
  updateStars();
})();