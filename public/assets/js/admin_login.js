// Admin Login Page JavaScript

(function() {
  'use strict';

  // DOM Elements
  const form = document.getElementById('adminLoginForm');
  const usernameInput = document.getElementById('al_username');
  const passwordInput = document.getElementById('al_password');
  const loginBtn = document.getElementById('al_login_btn');
  const errorMsg = document.getElementById('al_error_msg');
  const passwordToggle = document.getElementById('passwordToggle');
  const usernameWrapper = document.getElementById('usernameWrapper');
  const passwordWrapper = document.getElementById('passwordWrapper');
  const usernameError = document.getElementById('usernameErrorText');
  const passwordError = document.getElementById('passwordErrorText');

  // Hardcoded credentials for lightweight auth
  const VALID_USERNAME = 'admin';
  const VALID_PASSWORD = 'admin123';

  // Toggle password visibility
  if (passwordToggle) {
    passwordToggle.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type');
      if (type === 'password') {
        passwordInput.setAttribute('type', 'text');
        passwordToggle.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        passwordToggle.setAttribute('aria-label', 'Hide password');
      } else {
        passwordInput.setAttribute('type', 'password');
        passwordToggle.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        passwordToggle.setAttribute('aria-label', 'Show password');
      }
      passwordInput.focus();
    });
  }

  // Clear field error on input
  function clearFieldError(wrapper, errorEl) {
    wrapper.classList.remove('has-error');
    errorEl.classList.remove('visible');
  }

  function showFieldError(wrapper, errorEl, message) {
    wrapper.classList.add('has-error');
    errorEl.textContent = message;
    errorEl.classList.add('visible');
  }

  if (usernameInput) {
    usernameInput.addEventListener('input', function() {
      clearFieldError(usernameWrapper, usernameError);
      hideError();
    });
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', function() {
      clearFieldError(passwordWrapper, passwordError);
      hideError();
    });
  }

  function hideError() {
    if (errorMsg) {
      errorMsg.classList.remove('visible');
    }
  }

  function showError(message) {
    if (errorMsg) {
      errorMsg.querySelector('.error-text').textContent = message;
      errorMsg.classList.add('visible');
    }
  }

  function setLoading(isLoading) {
    if (isLoading) {
      loginBtn.classList.add('loading');
      loginBtn.disabled = true;
      loginBtn.setAttribute('aria-busy', 'true');
    } else {
      loginBtn.classList.remove('loading');
      loginBtn.disabled = false;
      loginBtn.setAttribute('aria-busy', 'false');
    }
  }

  function validateForm() {
    let isValid = true;
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username) {
      showFieldError(usernameWrapper, usernameError, 'Username is required');
      isValid = false;
    }

    if (!password) {
      showFieldError(passwordWrapper, passwordError, 'Password is required');
      isValid = false;
    }

    return isValid;
  }

  // Form submission
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      hideError();

      if (!validateForm()) {
        return;
      }

      const username = usernameInput.value.trim();
      const password = passwordInput.value;

      setLoading(true);

      // Simulate async auth check
      setTimeout(function() {
        if (username === VALID_USERNAME && password === VALID_PASSWORD) {
          // Store auth state
          try {
            sessionStorage.setItem('mpay_admin_auth', 'true');
            sessionStorage.setItem('mpay_admin_user', username);
          } catch(e) {
            // sessionStorage not available, continue anyway
          }
          // Navigate to admin dashboard
          load_page('admin_dashboard');
        } else {
          setLoading(false);
          showError('Invalid username or password. Please try again.');
          passwordInput.value = '';
          passwordInput.focus();
        }
      }, 800);
    });
  }

  // Handle Enter key on inputs
  [usernameInput, passwordInput].forEach(function(input) {
    if (input) {
      input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          form.dispatchEvent(new Event('submit'));
        }
      });
    }
  });

  // Focus username on load
  if (usernameInput) {
    setTimeout(function() {
      usernameInput.focus();
    }, 100);
  }

})();