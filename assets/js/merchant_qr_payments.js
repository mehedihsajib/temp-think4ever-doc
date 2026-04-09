// Merchant QR Payments - Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  initSidebar();
  initFaqAccordion();
  initQRDemo();
  initCodeCopy();
  initTOCHighlighting();
  initSmoothScrolling();
});

// Sidebar toggle for mobile
function initSidebar() {
  const sidebar = document.getElementById('mqr_sidebar');
  const toggle = document.getElementById('sidebarToggle');
  const overlay = document.getElementById('sidebarOverlay');

  if (toggle) {
    toggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
      const isOpen = sidebar.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.innerHTML = isOpen ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function() {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="fa fa-bars"></i>';
      }
    });
  }
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(function(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const answerInner = item.querySelector('.faq-answer-inner');
    
    question.addEventListener('click', function() {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(function(otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          otherAnswer.style.maxHeight = '0';
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = '0';
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answerInner.scrollHeight + 'px';
        question.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard support
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
}

// QR Demo - Generate QR code based on amount
function initQRDemo() {
  const amountInput = document.getElementById('qrAmountInput');
  const generateBtn = document.getElementById('generateQrBtn');
  const qrCanvas = document.getElementById('qrDemoCanvas');
  const dynamicQrCanvas = document.getElementById('dynamicQrCanvas');

  // Generate initial static QR code
  if (qrCanvas) {
    drawSimpleQR(qrCanvas, 'mpay://merchant/STORE001');
  }

  if (generateBtn && amountInput && dynamicQrCanvas) {
    generateBtn.addEventListener('click', function() {
      const amount = amountInput.value.trim();
      if (amount && !isNaN(amount) && parseFloat(amount) > 0) {
        const data = 'mpay://pay?merchant=STORE001&amount=' + amount + '&currency=USD';
        drawSimpleQR(dynamicQrCanvas, data);
        
        // Animate button
        generateBtn.innerHTML = '<i class="fa fa-check"></i> Generated!';
        generateBtn.style.background = '#22c55e';
        setTimeout(function() {
          generateBtn.innerHTML = '<i class="fa fa-qrcode"></i> Generate QR';
          generateBtn.style.background = '';
        }, 1500);
      } else {
        amountInput.style.borderColor = '#ef4444';
        amountInput.focus();
        setTimeout(function() {
          amountInput.style.borderColor = '';
        }, 2000);
      }
    });

    amountInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        generateBtn.click();
      }
    });
  }
}

// Simple QR code-like pattern drawing (since we can't load external libs)
function drawSimpleQR(canvas, data) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  const cellSize = Math.floor(size / 25);
  const offset = Math.floor((size - cellSize * 25) / 2);
  
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);
  
  // Generate pseudo-random pattern from data string
  let seed = 0;
  for (let i = 0; i < data.length; i++) {
    seed = ((seed << 5) - seed) + data.charCodeAt(i);
    seed = seed & seed;
  }
  
  function seededRandom() {
    seed = (seed * 16807 + 0) % 2147483647;
    return (seed & 1) === 1;
  }
  
  ctx.fillStyle = '#1e3a8a';
  
  // Draw finder patterns (top-left, top-right, bottom-left)
  function drawFinder(x, y) {
    // Outer
    ctx.fillRect(offset + x * cellSize, offset + y * cellSize, 7 * cellSize, 7 * cellSize);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(offset + (x + 1) * cellSize, offset + (y + 1) * cellSize, 5 * cellSize, 5 * cellSize);
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(offset + (x + 2) * cellSize, offset + (y + 2) * cellSize, 3 * cellSize, 3 * cellSize);
  }
  
  drawFinder(0, 0);
  drawFinder(18, 0);
  drawFinder(0, 18);
  
  // Fill data area
  for (let row = 0; row < 25; row++) {
    for (let col = 0; col < 25; col++) {
      // Skip finder pattern areas
      if ((row < 8 && col < 8) || (row < 8 && col > 16) || (row > 16 && col < 8)) continue;
      
      if (seededRandom()) {
        ctx.fillStyle = '#1e3a8a';
        ctx.fillRect(offset + col * cellSize, offset + row * cellSize, cellSize, cellSize);
      }
    }
  }

  // Draw small MPay logo in center
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(offset + 10 * cellSize, offset + 10 * cellSize, 5 * cellSize, 5 * cellSize);
  ctx.fillStyle = '#2563eb';
  ctx.font = 'bold ' + (3 * cellSize) + 'px Plus Jakarta Sans, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('M', offset + 12.5 * cellSize, offset + 12.8 * cellSize);
}

// Code block copy functionality
function initCodeCopy() {
  const copyBtns = document.querySelectorAll('.code-copy-btn');
  
  copyBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const codeBlock = btn.closest('.code-block-wrapper').querySelector('code');
      const text = codeBlock.textContent;
      
      navigator.clipboard.writeText(text).then(function() {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fa fa-check"></i> Copied!';
        btn.style.color = '#22c55e';
        btn.style.borderColor = '#22c55e';
        setTimeout(function() {
          btn.innerHTML = original;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }).catch(function() {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.innerHTML = '<i class="fa fa-check"></i> Copied!';
        setTimeout(function() {
          btn.innerHTML = '<i class="fa fa-copy"></i> Copy';
        }, 2000);
      });
    });
  });
}

// TOC highlighting based on scroll position
function initTOCHighlighting() {
  const tocLinks = document.querySelectorAll('.toc-list a');
  const sections = [];
  
  tocLinks.forEach(function(link) {
    const id = link.getAttribute('href').replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      sections.push({ el: section, link: link });
    }
  });
  
  if (sections.length === 0) return;
  
  function updateActive() {
    let current = sections[0];
    
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].el.getBoundingClientRect();
      if (rect.top <= 120) {
        current = sections[i];
      }
    }
    
    tocLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    
    if (current) {
      current.link.classList.add('active');
    }
  }
  
  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without triggering scroll
        history.pushState(null, null, '#' + targetId);
      }
    });
  });
}
