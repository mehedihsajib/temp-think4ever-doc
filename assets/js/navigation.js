// ===============================
// Page Navigation
// ===============================
function load_page(pageId) {
  localStorage.setItem("currentPage", pageId);

  window.location.href = pageId + ".html";
}

// ===============================
// Get Current Page
// ===============================
function getCurrentPage() {
  const stored = localStorage.getItem("currentPage");

  if (stored) return stored;

  const path = window.location.pathname.split("/").pop();
  return path.replace(".html", "") || "index";
}

// ===============================
// Component Loader
// ===============================
function loadComponent({ id, url, onLoaded }) {
  const el = document.getElementById(id);

  if (!el) {
    console.warn(`Element #${id} not found`);
    return;
  }

  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to load ${url}`);
      }
      return res.text();
    })
    .then((html) => {
      el.innerHTML = html;

      if (typeof onLoaded === "function") {
        onLoaded(el);
      }

      console.log(`${id} loaded`);
    })
    .catch((err) => {
      console.error(`Error loading ${url}:`, err);
    });
}

// ===============================
// Active Link - Header
// ===============================
function setHeaderActive(container, activePage) {
  const links = container.querySelectorAll(".modern-nav a");

  links.forEach((link) => {
    link.classList.remove("active");

    const page = link.getAttribute("onclick")?.match(/'(.*?)'/)?.[1];

    if (page === activePage) {
      link.classList.add("active");
    }
  });
}

// ===============================
// Active Link - Sidebar
// ===============================
function setSidebarActive(container, activePage) {
  const links = container.querySelectorAll(".cgs-nav-link");

  links.forEach((link) => {
    link.classList.remove("active");

    const page = link.getAttribute("onclick")?.match(/'(.*?)'/)?.[1];

    if (page === activePage) {
      link.classList.add("active");
    }
  });
}

// ===============================
// Instant Active Update on Click
// ===============================
function attachSidebarClickHandler(container) {
  container.querySelectorAll(".cgs-nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      const page = this.getAttribute("onclick")?.match(/'(.*?)'/)?.[1];

      if (page) {
        localStorage.setItem("currentPage", page);
        setSidebarActive(container, page);
      }
    });
  });
}

// ===============================
// MOBILE NAV
// ===============================
function initSidebarToggle() {
  console.log("sidebar toglled...");
  const sidebarToggle = document.getElementById("cgsSidebarToggle");
  const overlay = document.getElementById("cgsSidebarOverlay");
  const sidebar = document.getElementById("cgsSidebar");

  if (!sidebarToggle || !overlay || !sidebar) {
    console.warn("Sidebar toggle init failed:", {
      sidebarToggle,
      overlay,
      sidebar,
    });
    return;
  }

  // prevent duplicate binding
  if (sidebarToggle.dataset.bound === "true") return;
  sidebarToggle.dataset.bound = "true";

  sidebarToggle.addEventListener("click", function () {
    console.log("burger clicked...");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");

    const isOpen = sidebar.classList.contains("open");

    sidebarToggle.setAttribute("aria-expanded", isOpen);
    sidebarToggle.innerHTML = isOpen
      ? '<i class="fa fa-times"></i>'
      : '<i class="fa fa-bars"></i>';
  });

  const sidebarClose = document.getElementById("cgsSidebarClose");
  if (sidebarClose) {
    sidebarClose.addEventListener("click", function () {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
      sidebarToggle.setAttribute("aria-expanded", "false");
      sidebarToggle.innerHTML = '<i class="fa fa-bars"></i>';
    });
  }

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");

    sidebarToggle.setAttribute("aria-expanded", "false");
    sidebarToggle.innerHTML = '<i class="fa fa-bars"></i>';
  });
}

// ===============================
// MOBILE HEADER MENU
// ===============================
function initMobileMenu() {
  const toggle = document.getElementById("mobileMenuToggle");
  const overlay = document.getElementById("mobileMenuOverlay");
  const nav = document.querySelector(".modern-nav");

  if (!toggle || !overlay || !nav) return;

  // Prevent duplicate binding
  if (toggle.dataset.bound === "true") return;
  toggle.dataset.bound = "true";

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    overlay.classList.toggle("open");

    toggle.innerHTML = isOpen
      ? '<i class="fa fa-times"></i>'
      : '<i class="fa fa-bars"></i>';
    toggle.setAttribute("aria-expanded", isOpen);
  });

  overlay.addEventListener("click", function () {
    nav.classList.remove("open");
    overlay.classList.remove("open");
    toggle.innerHTML = '<i class="fa fa-bars"></i>';
    toggle.setAttribute("aria-expanded", "false");
  });

  // Close menu on link click
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      overlay.classList.remove("open");
      toggle.innerHTML = '<i class="fa fa-bars"></i>';
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===============================
// LOAD IFRAME
// ===============================
function initYouTubeVideos() {
  document.querySelectorAll(".yt-video").forEach((el) => {
    const videoId = el.dataset.videoId;

    el.innerHTML = `
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    `;
  });
}

document.addEventListener("DOMContentLoaded", initYouTubeVideos);

// ===============================
// GLOBAL IMAGE LIGHTBOX
// ===============================
let docImageLightbox = null;

function isLightboxEligibleImage(img) {
  if (!img || img.tagName !== "IMG") return false;
  if (img.dataset.lightbox === "off" || img.closest("[data-lightbox='off']")) {
    return false;
  }

  if (
    img.closest(
      "header, nav, footer, aside, .cgs-sidebar, .modern-header, .modern-nav, .lp-navbar, .sr-header, .bpd-header, .pp-header, .tos-header, .not-found-header, .admin-sidebar, .admin-topbar, .modern-search-btn, .modern-lang-wrapper, .lp-navbar-logo, .sr-header-logo, .cgs-sidebar-header, .lp-footer, #docFooter"
    )
  ) {
    return false;
  }

  const inContent = img.closest(
    "main, article, .docs-content, .docs-main, .cd-main-content, .md-main-content, .bpd-main, .pp-main, .tos-main, .ctr-content, .cwm-content-wrapper"
  );

  if (!inContent) return false;
  if (img.closest("a, button, [role='button']")) return false;

  const rect = img.getBoundingClientRect();
  const renderedWidth = Math.max(rect.width, img.clientWidth || 0);
  const renderedHeight = Math.max(rect.height, img.clientHeight || 0);
  const naturalWidth = img.naturalWidth || 0;
  const naturalHeight = img.naturalHeight || 0;

  if (renderedWidth < 80 || renderedHeight < 80) return false;
  if (naturalWidth && naturalHeight && naturalWidth < 120 && naturalHeight < 120) {
    return false;
  }

  return true;
}

function ensureImageLightbox() {
  if (docImageLightbox) return docImageLightbox;

  const overlay = document.createElement("div");
  overlay.className = "doc-image-lightbox";
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="doc-image-lightbox__backdrop" data-lightbox-close="true"></div>
    <div class="doc-image-lightbox__dialog" role="dialog" aria-modal="true" aria-label="Image preview">
      <button class="doc-image-lightbox__close" type="button" aria-label="Close image preview" data-lightbox-close="true">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>
      <figure class="doc-image-lightbox__figure">
        <img class="doc-image-lightbox__image" alt="" />
        <figcaption class="doc-image-lightbox__caption"></figcaption>
      </figure>
    </div>
  `;

  document.body.appendChild(overlay);
  docImageLightbox = overlay;

  overlay.addEventListener("click", function (event) {
    if (event.target.closest("[data-lightbox-close='true']")) {
      closeImageLightbox();
    }
  });

  return overlay;
}

function openImageLightbox(img) {
  const overlay = ensureImageLightbox();
  const previewImage = overlay.querySelector(".doc-image-lightbox__image");
  const caption = overlay.querySelector(".doc-image-lightbox__caption");
  const source = img.currentSrc || img.src;
  const captionText =
    img.getAttribute("data-caption") ||
    img.getAttribute("alt") ||
    img.getAttribute("title") ||
    "";

  previewImage.src = source;
  previewImage.alt = img.getAttribute("alt") || "Expanded documentation image";
  caption.textContent = captionText;
  caption.hidden = !captionText;

  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("doc-image-lightbox-open");
}

function closeImageLightbox() {
  if (!docImageLightbox) return;

  docImageLightbox.classList.remove("is-open");
  docImageLightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("doc-image-lightbox-open");
}

function initGlobalImageLightbox() {
  document.addEventListener("click", function (event) {
    const img = event.target.closest("img");
    if (!isLightboxEligibleImage(img)) return;

    event.preventDefault();
    openImageLightbox(img);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeImageLightbox();
    }
  });
}

document.addEventListener("DOMContentLoaded", initGlobalImageLightbox);

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = getCurrentPage();

  // -------- Header --------
  loadComponent({
    id: "consumerHeader",
    url: "./components/doc-header.html",
    onLoaded: (el) => {
      setHeaderActive(el, currentPage);
      if (window.I18n) window.I18n.applyToDOM(el);
      initMobileMenu();
    },
  });

  // -------- Footer --------

  loadComponent({
    id: "docFooter",
    url: "./components/doc-footer.html",
    onLoaded: (el) => {
      if (window.I18n) window.I18n.applyToDOM(el);
    },
  });

  // -------- Sidebar --------
  loadComponent({
    id: "consumerSidebar",
    url: "./components/user-manual-sidebar.html",
    onLoaded: (el) => {
      setSidebarActive(el, currentPage);
      attachSidebarClickHandler(el);
      if (window.I18n) window.I18n.applyToDOM(el);
      setTimeout(() => {
        initSidebarToggle();
      }, 0);
    },
  });

  loadComponent({
    id: "merchantSidebar",
    url: "./components/merchant-sidebar.html",
    onLoaded: (el) => {
      setSidebarActive(el, currentPage);
      attachSidebarClickHandler(el);
      if (window.I18n) window.I18n.applyToDOM(el);
      setTimeout(() => {
        initSidebarToggle();
      }, 0);
    },
  });
});

// ===============================
// i18n (Internationalization)
// ===============================
// ল্যাঙ্গুয়েজ পরিবর্তন এবং লোকাল স্টোরেজে সেভ করার ফাংশন
function changeLanguage(langCode) {
  if (window.I18n) {
    window.I18n.setLocale(langCode);

    // Close dropdown
    const menu = document.getElementById("modernLangMenu");
    const btn = document.getElementById("modernLangBtn");
    if (menu) menu.classList.remove("show");
    if (btn) btn.classList.remove("open");
  } else {
    localStorage.setItem("selectedLanguage", langCode);
    location.reload();
  }
}

// Event Delegation for modern language dropdown
document.addEventListener("click", (e) => {
  const btn = e.target.closest("#modernLangBtn");
  const menu = document.getElementById("modernLangMenu");

  if (btn && menu) {
    menu.classList.toggle("show");
    btn.classList.toggle("open");
    e.stopPropagation();
  } else if (
    menu &&
    menu.classList.contains("show") &&
    !e.target.closest("#modernLangMenu")
  ) {
    menu.classList.remove("show");
    const b = document.getElementById("modernLangBtn");
    if (b) b.classList.remove("open");
  }
});

// Listen for global i18n applied events to update active state
document.addEventListener("i18n:applied", (e) => {
  const locale = e.detail.locale;
  const menu = document.getElementById("modernLangMenu");
  if (!menu) return;

  // Update active class on dropdown items
  menu.querySelectorAll("button").forEach((btn) => {
    if (btn.classList.contains(`lang-opt-${locale}`)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
});
