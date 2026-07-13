// Blog Post Detail - Page JavaScript

(function() {
  'use strict';

  // Header scroll effect
  const header = document.querySelector('.bpd-header');
  const scrollTopBtn = document.querySelector('.bpd-scroll-top');

  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollTopBtn) {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Scroll to top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Navigation
  const mobileToggle = document.querySelector('.bpd-mobile-toggle');
  const mobileNav = document.querySelector('.bpd-mobile-nav');
  const mobileClose = document.querySelector('.bpd-mobile-nav-close');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function() {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    function closeMobileNav() {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (mobileClose) {
      mobileClose.addEventListener('click', closeMobileNav);
    }

    mobileNav.addEventListener('click', function(e) {
      if (e.target === mobileNav) {
        closeMobileNav();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMobileNav();
      }
    });
  }

  // Star Rating Selector
  let selectedRating = 0;
  const starButtons = document.querySelectorAll('.bpd-star-btn');

  starButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectedRating = parseInt(this.getAttribute('data-value'));
      updateStarDisplay();
    });

    btn.addEventListener('mouseenter', function() {
      const hoverVal = parseInt(this.getAttribute('data-value'));
      highlightStars(hoverVal);
    });

    btn.addEventListener('mouseleave', function() {
      highlightStars(selectedRating);
    });
  });

  function highlightStars(value) {
    starButtons.forEach(function(btn) {
      const val = parseInt(btn.getAttribute('data-value'));
      if (val <= value) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function updateStarDisplay() {
    highlightStars(selectedRating);
  }

  // Table of Contents - Active state tracking
  const tocLinks = document.querySelectorAll('.bpd-toc-list a');
  const headingElements = [];

  tocLinks.forEach(function(link) {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const el = document.getElementById(targetId.substring(1));
      if (el) {
        headingElements.push({ element: el, link: link });
      }
    }
  });

  function updateTocActive() {
    if (headingElements.length === 0) return;
    let activeIndex = 0;
    const scrollPos = window.scrollY + 120;

    for (let i = 0; i < headingElements.length; i++) {
      if (headingElements[i].element.offsetTop <= scrollPos) {
        activeIndex = i;
      }
    }

    tocLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    if (headingElements[activeIndex]) {
      headingElements[activeIndex].link.classList.add('active');
    }
  }

  window.addEventListener('scroll', updateTocActive, { passive: true });
  updateTocActive();

  // Smooth scroll for TOC links
  tocLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.getElementById(targetId.substring(1));
        if (target) {
          const offset = target.offsetTop - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    });
  });

  // Comment Form Validation & Submission
  const commentForm = document.getElementById('bpd-comment-form');
  const commentTextInput = document.getElementById('bpd_comment_form_text');
  const commentNameInput = document.getElementById('bpd_comment_form_name');
  const commentEmailInput = document.getElementById('bpd_comment_form_email');
  const submitBtn = document.getElementById('bpd_comment_submit');
  const successMsg = document.querySelector('.bpd-comment-success');
  const textError = document.getElementById('bpd-text-error');
  const emailError = document.getElementById('bpd-email-error');

  if (commentForm) {
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      // Clear errors
      if (textError) { textError.classList.remove('visible'); }
      if (emailError) { emailError.classList.remove('visible'); }
      if (commentTextInput) { commentTextInput.classList.remove('error'); }
      if (commentEmailInput) { commentEmailInput.classList.remove('error'); }

      // Validate comment text
      if (!commentTextInput || !commentTextInput.value.trim()) {
        if (textError) { textError.classList.add('visible'); }
        if (commentTextInput) { commentTextInput.classList.add('error'); }
        isValid = false;
      }

      // Validate email if provided
      if (commentEmailInput && commentEmailInput.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(commentEmailInput.value.trim())) {
          if (emailError) { emailError.classList.add('visible'); }
          commentEmailInput.classList.add('error');
          isValid = false;
        }
      }

      if (!isValid) return;

      // Simulate submission
      if (submitBtn) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
      }

      setTimeout(function() {
        if (submitBtn) {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
        }

        // Show success
        if (successMsg) {
          successMsg.classList.add('visible');
        }

        // Reset form
        commentForm.reset();
        selectedRating = 0;
        updateStarDisplay();

        // Hide success after 5s
        setTimeout(function() {
          if (successMsg) {
            successMsg.classList.remove('visible');
          }
        }, 5000);
      }, 1500);
    });
  }

  // Share button functionality
  const shareButtons = document.querySelectorAll('.bpd-share-btn');
  shareButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const platform = this.getAttribute('data-platform');
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.querySelector('.bpd-post-title') ? document.querySelector('.bpd-post-title').textContent : '');
      let shareUrl = '';

      switch (platform) {
        case 'twitter':
          shareUrl = 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title;
          break;
        case 'linkedin':
          shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url;
          break;
        case 'facebook':
          shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
          break;
        case 'copy':
          navigator.clipboard.writeText(window.location.href).then(function() {
            btn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
            setTimeout(function() {
              btn.innerHTML = '<i class="fa fa-link" aria-hidden="true"></i>';
            }, 2000);
          });
          return;
      }

      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });

  // Code block copy buttons
  const codeBlocks = document.querySelectorAll('.bpd-post-content pre');
  codeBlocks.forEach(function(block) {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'bpd-code-copy-btn';
    copyBtn.innerHTML = '<i class="fa fa-copy" aria-hidden="true"></i>';
    copyBtn.title = 'Copy code';
    copyBtn.style.cssText = 'position:absolute;top:8px;right:8px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:#94a3b8;border-radius:6px;padding:6px 8px;cursor:pointer;font-size:0.75rem;transition:all 0.15s ease;';
    block.style.position = 'relative';
    block.appendChild(copyBtn);

    copyBtn.addEventListener('click', function() {
      const code = block.querySelector('code');
      if (code) {
        navigator.clipboard.writeText(code.textContent).then(function() {
          copyBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
          copyBtn.style.color = '#22c55e';
          setTimeout(function() {
            copyBtn.innerHTML = '<i class="fa fa-copy" aria-hidden="true"></i>';
            copyBtn.style.color = '#94a3b8';
          }, 2000);
        });
      }
    });

    copyBtn.addEventListener('mouseenter', function() {
      this.style.color = '#e2e8f0';
      this.style.background = 'rgba(255,255,255,0.2)';
    });

    copyBtn.addEventListener('mouseleave', function() {
      this.style.color = '#94a3b8';
      this.style.background = 'rgba(255,255,255,0.1)';
    });
  });

})();