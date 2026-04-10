// ===============================
// Page Navigation
// ===============================
function load_page(pageId) {
  localStorage.setItem("currentPage", pageId);
  window.location.href = toBasePath(pageId + ".html");
}

function getSiteBasePath() {
  const navScript = document.querySelector("script[src*='assets/js/navigation.js']");

  if (navScript) {
    const rawSrc = navScript.getAttribute("src") || "";
    try {
      const resolved = new URL(rawSrc, window.location.href);
      const marker = "/assets/js/navigation.js";
      const idx = resolved.pathname.lastIndexOf(marker);

      if (idx !== -1) {
        const base = resolved.pathname.slice(0, idx + 1);
        if (base) return base;
      }
    } catch (error) {
      console.warn("Unable to resolve base path from navigation script:", error);
    }
  }

  const pathname = window.location.pathname || "/";
  if (pathname.includes("/docs/")) {
    return pathname.slice(0, pathname.indexOf("/docs/") + "/docs/".length);
  }

  if (pathname === "/") return "/";

  const lastSlash = pathname.lastIndexOf("/");
  return pathname.slice(0, lastSlash + 1) || "/";
}

function toBasePath(path) {
  const base = getSiteBasePath();
  const cleanPath = String(path || "").replace(/^\.?\//, "");
  return base + cleanPath;
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
  const pathname = window.location.pathname;
  const groups = container.querySelectorAll(".modern-nav-group");

  groups.forEach((group) => group.classList.remove("active"));

  links.forEach((link) => {
    link.classList.remove("active");

    const onclickPage = link.getAttribute("onclick")?.match(/'(.*?)'/)?.[1];
    const dataTarget = link.getAttribute("data-target");
    const dataPath = link.getAttribute("data-path");

    const isActiveOnclick = onclickPage && onclickPage === activePage;
    const isActiveTarget = dataTarget && pathname.endsWith("/" + dataTarget);
    const isActivePath = dataPath && pathname.endsWith(dataPath);

    if (isActiveOnclick || isActiveTarget || isActivePath) {
      link.classList.add("active");
      const parentGroup = link.closest(".modern-nav-group");
      if (parentGroup) {
        parentGroup.classList.add("active");
      }
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
  const sidebar = document.getElementById("cgsSidebar");
  let sidebarToggle = document.getElementById("cgsSidebarToggle");
  let overlay = document.getElementById("cgsSidebarOverlay");

  // Some documentation pages do not include toggle/overlay markup.
  // Create the shared controls dynamically so mobile sidebar works everywhere.
  if (sidebar && !sidebarToggle) {
    sidebarToggle = document.createElement("button");
    sidebarToggle.className = "cgs-sidebar-toggle";
    sidebarToggle.id = "cgsSidebarToggle";
    sidebarToggle.setAttribute("aria-label", "Toggle navigation menu");
    sidebarToggle.setAttribute("aria-expanded", "false");
    sidebarToggle.innerHTML = '<i class="fa fa-bars"></i>';
    document.body.appendChild(sidebarToggle);
  }

  if (sidebar && !overlay) {
    overlay = document.createElement("div");
    overlay.className = "cgs-sidebar-overlay";
    overlay.id = "cgsSidebarOverlay";
    document.body.appendChild(overlay);
  }

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

function initHeaderNavDropdowns() {
  const nav = document.querySelector(".modern-nav");

  document.querySelectorAll("[data-asset-src]").forEach((el) => {
    const assetSrc = el.getAttribute("data-asset-src");
    if (!assetSrc) return;
    el.setAttribute("src", toBasePath(assetSrc));
  });

  if (!nav) return;

  const groups = nav.querySelectorAll("[data-nav-group]");
  if (!groups.length) return;

  // Resolve shared header links for both root and nested pages.
  nav.querySelectorAll("[data-target]").forEach((link) => {
    const target = link.getAttribute("data-target");
    if (!target) return;
    link.setAttribute("href", toBasePath(target));
  });

  nav.querySelectorAll("[data-disabled='true']").forEach((link) => {
    if (link.dataset.boundDisabled === "true") return;
    link.dataset.boundDisabled = "true";
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  function closeAllGroups() {
    groups.forEach((group) => {
      group.classList.remove("open");
      const trigger = group.querySelector(".modern-nav-group-trigger");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  groups.forEach((group) => {
    const trigger = group.querySelector(".modern-nav-group-trigger");
    if (!trigger || trigger.dataset.bound === "true") return;

    trigger.dataset.bound = "true";
    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      const willOpen = !group.classList.contains("open");
      closeAllGroups();
      group.classList.toggle("open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".modern-nav-group")) {
      closeAllGroups();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeAllGroups();
    }
  });

  // Mobile nav: close drawer when a real navigation link is clicked.
  nav.querySelectorAll("a").forEach((link) => {
    if (link.dataset.boundNavLink === "true") return;
    link.dataset.boundNavLink = "true";

    link.addEventListener("click", function (event) {
      if (this.getAttribute("data-disabled") === "true") {
        event.preventDefault();
        return;
      }

      const mobileNavOpen = nav.classList.contains("open");
      if (!mobileNavOpen) return;

      const toggle = document.getElementById("mobileMenuToggle");
      const overlay = document.getElementById("mobileMenuOverlay");
      nav.classList.remove("open");
      if (overlay) overlay.classList.remove("open");
      if (toggle) {
        toggle.innerHTML = '<i class="fa fa-bars"></i>';
        toggle.setAttribute("aria-expanded", "false");
      }
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
    url: toBasePath("components/doc-header.html"),
    onLoaded: (el) => {
      setHeaderActive(el, currentPage);
      if (window.I18n) window.I18n.applyToDOM(el);
      initMobileMenu();
      initHeaderNavDropdowns();
    },
  });

  // -------- Footer --------

  loadComponent({
    id: "docFooter",
    url: toBasePath("components/doc-footer.html"),
    onLoaded: (el) => {
      if (window.I18n) window.I18n.applyToDOM(el);
    },
  });

  // -------- Sidebar --------
  loadComponent({
    id: "consumerSidebar",
    url: toBasePath("components/user-manual-sidebar.html"),
    onLoaded: (el) => {
      setSidebarActive(el, currentPage);
      attachSidebarClickHandler(el);
      if (window.I18n) window.I18n.applyToDOM(el);
      setTimeout(() => {
        initSidebarToggle();
        generateBreadcrumb();
        generateGlobalTOC();
      }, 0);
    },
  });

  loadComponent({
    id: "merchantSidebar",
    url: toBasePath("components/merchant-sidebar.html"),
    onLoaded: (el) => {
      setSidebarActive(el, currentPage);
      attachSidebarClickHandler(el);
      if (window.I18n) window.I18n.applyToDOM(el);
      setTimeout(() => {
        initSidebarToggle();
        generateBreadcrumb();
        generateGlobalTOC();
      }, 0);
    },
  });
});

// ===============================
// BREADCRUMB GENERATOR
// ===============================
function generateBreadcrumb() {
  const currentPage = getCurrentPage();
  if (currentPage === 'index' || currentPage === 'consumer_docs_home' || currentPage === 'merchant_docs_home') return;

  const activeLink = document.querySelector('.cgs-nav-link.active') || document.querySelector('.admin-nav-link.active');
  if (!activeLink) return;

  const mainContent = document.querySelector('.cd-main-content') || document.querySelector('.md-main-content') || document.querySelector('main');
  if (!mainContent) return;

  if (document.getElementById('dynamic-breadcrumb')) return;

  const sidebar = activeLink.closest('.cgs-sidebar, .admin-sidebar');
  let topTitle = "Documentation";
  if (sidebar) {
    const headerTitle = sidebar.querySelector('.cgs-sidebar-header span, .admin-sidebar-header span, h5 span');
    if (headerTitle) topTitle = headerTitle.textContent.trim();
  }

  let sectionTitle = "";
  const navSection = activeLink.closest('.cgs-nav-section');
  if (navSection) {
    const sectionLabel = navSection.querySelector('.cgs-nav-section-label');
    if (sectionLabel) sectionTitle = sectionLabel.textContent.trim();
  }

  const pageTitleSpan = activeLink.querySelector('span');
  const pageTitle = pageTitleSpan ? pageTitleSpan.textContent.trim() : activeLink.textContent.trim();

  const breadcrumbNav = document.createElement('nav');
  breadcrumbNav.id = 'dynamic-breadcrumb';
  breadcrumbNav.className = 'modern-breadcrumb';
  breadcrumbNav.setAttribute('aria-label', 'Breadcrumb');

  let html = `<ol>
    <li>
      <a href="javascript:void(0)" onclick="load_page('index')" class="breadcrumb-icon"><i class="fa-solid fa-house"></i></a>
    </li>`;

  if (topTitle) {
    html += `
    <li class="separator"><i class="fa-solid fa-chevron-right"></i></li>
    <li><span class="breadcrumb-item">${topTitle}</span></li>`;
  }

  if (sectionTitle) {
    html += `
    <li class="separator"><i class="fa-solid fa-chevron-right"></i></li>
    <li><span class="breadcrumb-item">${sectionTitle}</span></li>`;
  }

  html += `
    <li class="separator"><i class="fa-solid fa-chevron-right"></i></li>
    <li class="current" aria-current="page">${pageTitle}</li>
  </ol>`;

  breadcrumbNav.innerHTML = html;
  
  const pageTitleEl = mainContent.querySelector('.cd-page-title, .md-page-title, h1');
  if (pageTitleEl) {
    mainContent.insertBefore(breadcrumbNav, pageTitleEl);
  } else {
    mainContent.insertBefore(breadcrumbNav, mainContent.firstChild);
  }
}

// ===============================
// GLOBAL TOC GENERATOR
// ===============================
function generateGlobalTOC() {
  const mainContent = document.querySelector('.cd-main-content') || document.querySelector('.md-main-content') || document.querySelector('main');
  if (!mainContent) return;

  const headings = Array.from(mainContent.querySelectorAll('h2, h3'));
  if (headings.length === 0) return;

  const layoutContainer = mainContent.parentElement;
  if (!layoutContainer) return;

  if (document.getElementById('global-toc')) return;

  const tocAside = document.createElement('aside');
  tocAside.id = 'global-toc';
  tocAside.className = 'cgs-toc';

  let html = `
    <h4 class="cgs-toc-title" data-i18n="toc.title">On this page</h4>
    <ul class="cgs-toc-list">
  `;

  headings.forEach((heading, index) => {
    if (!heading.id) {
      const text = heading.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      heading.id = text || `section-${index}`;
    }

    const isH3 = heading.tagName.toLowerCase() === 'h3';
    html += `
      <li>
        <a href="#${heading.id}" class="cgs-toc-link" style="${isH3 ? 'padding-left: 24px;' : ''}">${heading.textContent}</a>
      </li>
    `;
  });

  html += `</ul>`;
  tocAside.innerHTML = html;

  layoutContainer.appendChild(tocAside);

  // Active state highlighting on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocAside.querySelectorAll('.cgs-toc-link').forEach(link => link.classList.remove('active'));
        const activeLink = tocAside.querySelector(`.cgs-toc-link[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, { rootMargin: '0px 0px -80% 0px', threshold: 0 });

  headings.forEach(heading => observer.observe(heading));

  // Handle click events for smooth scroll and active state updates
  tocAside.querySelectorAll('.cgs-toc-link').forEach(link => {
    link.addEventListener('click', (e) => {
      tocAside.querySelectorAll('.cgs-toc-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

// ===============================
// i18n (Internationalization)
// ===============================
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
