// ===============================
// Page Navigation
// ===============================
function load_page(pageId) {
  localStorage.setItem("currentPage", pageId);
  window.location.href = toBasePath(pageId + ".html");
}

function load_dev_page(pageId) {
  localStorage.setItem("currentPage", pageId);

  window.location.href = toBasePath(`dev/${pageId}.html`);
}

function load_portal_page(pageId) {
  localStorage.setItem("currentPage", pageId);

  window.location.href = toBasePath(`portal/${pageId}.html`);
}

function getSiteBasePath() {
  const navScript = document.querySelector(
    "script[src*='assets/js/navigation.js']",
  );

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
      console.warn(
        "Unable to resolve base path from navigation script:",
        error,
      );
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

function ensureGlobalFavicon() {
  const existing = document.querySelector(
    "link[rel='icon'], link[rel='shortcut icon']",
  );
  if (existing) return;

  const link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/png";
  link.href = toBasePath("assets/images/favicon.png");
  document.head.appendChild(link);
}

// ===============================
// Theme (Light / Dark)
// ===============================
const THEME_STORAGE_KEY = "think4ever_theme";

function getSavedTheme() {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    // Ignore storage errors in private mode.
  }
}

function applyTheme(theme) {
  const body = document.body;
  if (!body) return;

  const isDark = theme === "dark";
  body.classList.toggle("dark", isDark);
  body.setAttribute("data-theme", isDark ? "dark" : "light");

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
  }
}

function initSavedTheme() {
  const savedTheme = getSavedTheme();
  applyTheme(savedTheme === "dark" ? "dark" : "light");
}

function toggleTheme() {
  const isDark = document.body.classList.contains("dark");
  const nextTheme = isDark ? "light" : "dark";
  applyTheme(nextTheme);
  saveTheme(nextTheme);
}

function initThemeToggle() {
  if (!document.body) return;

  const mountTarget =
    document.getElementById("docThemeToggleMount") ||
    document.getElementById("lpThemeToggleMount");

  if (!mountTarget) return;

  let button = document.getElementById("themeToggle");

  if (!button) {
    button = document.createElement("button");
    button.id = "themeToggle";
    button.className = "theme-toggle";
    button.type = "button";
    button.setAttribute("aria-live", "polite");
    button.innerHTML = `
    <span class="theme-toggle-track" aria-hidden="true">
      <span class="theme-toggle-icon theme-toggle-icon-sun">
        <i class="fa-solid fa-sun"></i>
      </span>
      <span class="theme-toggle-icon theme-toggle-icon-moon">
        <i class="fa-solid fa-moon"></i>
      </span>
      <span class="theme-toggle-thumb"></span>
    </span>
  `;

    button.addEventListener("click", toggleTheme);
  }

  if (button.parentElement !== mountTarget) {
    mountTarget.appendChild(button);
  }

  initSavedTheme();
}

function ensureGlobalBrandAndOrbit() {
  if (!document.body) return;
  if (
    document.querySelector(".global-vertical-brand") ||
    document.querySelector(".vertical-brand")
  )
    return;

  const styleId = "global-brand-orbit-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .global-vertical-brand {
        position: absolute;
        right: 50px;
        top: 50px;
        bottom: 0;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        pointer-events: none;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: clamp(5rem, 10vw, 7rem);
        font-weight: 900;
        text-transform: uppercase;
        color: #e2e8f0;
        letter-spacing: -0.04em;
        opacity: 0.55;
        white-space: nowrap;
        z-index: 0;
      }

      .global-orbital-hero {
        position: fixed;
        top: -220px;
        right: 64px;
        width: 720px;
        height: 720px;
        pointer-events: none;
        z-index: 0;
      }

      .global-orbital-circle {
        position: absolute;
        inset: 0;
        border: 1px solid #e0e0e0;
        border-radius: 50%;
        animation: hero-rotation 10s linear infinite;
        will-change: transform;
      }

      .global-orbital-ball-wrapper {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        z-index: 1;
      }

      .global-orbital-ball-wrapper.orbit-0 {
        transform: rotate(0deg);
      }

      .global-orbital-ball-wrapper.orbit-120 {
        transform: rotate(120deg);
      }

      .global-orbital-ball-wrapper.orbit-240 {
        transform: rotate(240deg);
      }

      .global-orbital-ball {
        width: 20px;
        height: 20px;
        border-radius: 9999px;
        background: #093cad;
        border: 2px solid #ffffff;
        box-shadow: 0 20px 30px rgba(15, 23, 42, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
      }

      .global-orbital-ball-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        transform-origin: center center;
      }

      // .global-orbital-ball-inner.counter-0 {
      //   transform: rotate(0deg);
      // }

      // .global-orbital-ball-inner.counter-120 {
      //   transform: rotate(-120deg);
      // }

      // .global-orbital-ball-inner.counter-240 {
      //   transform: rotate(-240deg);
      // }

      .global-orbital-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 10px;
        line-height: 1;
      }

      @media (min-width: 768px) {
        .global-orbital-ball {
          width: 32px;
          height: 32px;
        }

        .global-orbital-icon {
          font-size: 18px;
        }
      }

      @media (max-width: 840px) {
        .global-orbital-hero {
          width: 620px;
          height: 620px;
          top: -180px;
          right: 24px;
        }
      }

      @media (max-width: 560px) {
        .global-orbital-hero {
          width: 440px;
          height: 440px;
          top: -140px;
          right: 12px;
        }
      }

      @keyframes hero-rotation {
        to {
          transform: rotate(360deg);
        }
      }
    `;
    document.head.appendChild(style);
  }

  const brand = document.createElement("div");
  brand.className = "vertical-brand global-vertical-brand";
  brand.textContent = "THINK4EVER";

  const orbit = document.createElement("div");
  orbit.className = "global-orbital-hero";
  orbit.innerHTML = `
    <div class="global-orbital-circle" aria-hidden="true">
      <div class="global-orbital-ball-wrapper orbit-0">
        <div class="global-orbital-ball">
          <div class="global-orbital-ball-inner counter-0">
            <span class="global-orbital-icon">∞</span>
          </div>
        </div>
      </div>
      <div class="global-orbital-ball-wrapper orbit-120">
        <div class="global-orbital-ball">
          <div class="global-orbital-ball-inner counter-120">
            <span class="global-orbital-icon">∞</span>
          </div>
        </div>
      </div>
      <div class="global-orbital-ball-wrapper orbit-240">
        <div class="global-orbital-ball">
          <div class="global-orbital-ball-inner counter-240">
            <span class="global-orbital-icon">∞</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertBefore(orbit, document.body.firstChild);
  document.body.insertBefore(brand, document.body.firstChild);
}

// ===============================
// Get Current Page
// ===============================
function getCurrentPage() {
  const path = window.location.pathname.split("/").pop() || "";
  const fromPath = path.replace(".html", "").trim();

  if (fromPath) {
    try {
      localStorage.setItem("currentPage", fromPath);
    } catch (error) {
      // Ignore storage failures.
    }
    return fromPath;
  }

  const stored = localStorage.getItem("currentPage");
  return stored || "index";
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
  const pathname = window.location.pathname || "";
  const currentFile = pathname.split("/").pop() || "";
  let hasActiveMatch = false;

  links.forEach((link) => {
    link.classList.remove("active");

    const onclick = link.getAttribute("onclick") || "";
    const page =
      onclick.match(/load_(?:dev_|portal_)?page\('([^']+)'\)/)?.[1] ||
      onclick.match(/'([^']+)'/)?.[1];
    const href = link.getAttribute("href") || "";
    const dataTarget = link.getAttribute("data-target") || "";
    const dataPath = link.getAttribute("data-path") || "";

    const hrefFile = href.split("/").pop()?.split("#")[0]?.split("?")[0] || "";
    const hrefPage = hrefFile.endsWith(".html")
      ? hrefFile.replace(".html", "")
      : "";

    const isOnclickMatch = page && page === activePage;
    const isHrefMatch = hrefPage && hrefPage === activePage;
    const isDataTargetMatch =
      dataTarget &&
      (currentFile.endsWith(dataTarget) || pathname.endsWith("/" + dataTarget));
    const isDataPathMatch = dataPath && pathname.endsWith(dataPath);

    if (isOnclickMatch || isHrefMatch || isDataTargetMatch || isDataPathMatch) {
      link.classList.add("active");
      hasActiveMatch = true;
    }
  });

  // Fallback: if no exact activePage match, resolve from current URL file.
  if (!hasActiveMatch && currentFile) {
    const currentPage = currentFile.replace(".html", "");
    links.forEach((link) => {
      const onclick = link.getAttribute("onclick") || "";
      const page =
        onclick.match(/load_(?:dev_|portal_)?page\('([^']+)'\)/)?.[1] ||
        onclick.match(/'([^']+)'/)?.[1];
      const href = link.getAttribute("href") || "";
      const hrefFile =
        href.split("/").pop()?.split("#")[0]?.split("?")[0] || "";
      const hrefPage = hrefFile.endsWith(".html")
        ? hrefFile.replace(".html", "")
        : "";

      if (page === currentPage || hrefPage === currentPage) {
        link.classList.add("active");
      }
    });
  }
}

function getActiveSidebarLink() {
  const activeLink =
    document.querySelector(".cgs-nav-link.active") ||
    document.querySelector(".admin-nav-link.active");

  if (activeLink) return activeLink;

  const pathname = window.location.pathname || "";
  const currentFile = pathname.split("/").pop() || "";
  if (!currentFile) return null;

  const candidates = document.querySelectorAll(
    ".cgs-nav-link, .admin-nav-link",
  );
  for (const link of candidates) {
    const onclick = link.getAttribute("onclick") || "";
    const page =
      onclick.match(/load_(?:dev_|portal_)?page\('([^']+)'\)/)?.[1] ||
      onclick.match(/'([^']+)'/)?.[1];
    const href = link.getAttribute("href") || "";
    const hrefFile = href.split("/").pop()?.split("#")[0]?.split("?")[0] || "";
    const hrefPage = hrefFile.endsWith(".html")
      ? hrefFile.replace(".html", "")
      : "";
    const currentPage = currentFile.replace(".html", "");

    if (page === currentPage || hrefPage === currentPage) {
      link.classList.add("active");
      return link;
    }
  }

  return null;
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

  toggle.addEventListener("click", function (event) {
    event.stopPropagation();
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

  // Close menu on link click (except dropdown triggers)
  nav.querySelectorAll("a:not(.modern-nav-group-trigger)").forEach((link) => {
    if (link.dataset.boundMobileClose === "true") return;
    link.dataset.boundMobileClose = "true";

    link.addEventListener("click", (event) => {
      // Don't close for disabled links
      if (link.getAttribute("data-disabled") === "true") {
        event.preventDefault();
        return;
      }

      // Close menu
      nav.classList.remove("open");
      overlay.classList.remove("open");
      toggle.innerHTML = '<i class="fa fa-bars"></i>';
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initHeaderNavDropdowns() {
  const nav = document.querySelector(".modern-nav");
  const isDesktop = () =>
    window.matchMedia && window.matchMedia("(min-width: 1025px)").matches;

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

    let hoverCloseTimer = null;

    const setOpen = (open) => {
      if (open && isDesktop()) closeAllGroups();
      group.classList.toggle("open", open);
      trigger.setAttribute("aria-expanded", String(open));
    };

    const cancelHoverClose = () => {
      if (hoverCloseTimer) {
        clearTimeout(hoverCloseTimer);
        hoverCloseTimer = null;
      }
    };

    const scheduleHoverClose = () => {
      cancelHoverClose();
      hoverCloseTimer = setTimeout(() => setOpen(false), 140);
    };

    // Desktop: open on hover
    group.addEventListener("mouseenter", function () {
      if (!isDesktop()) return;
      cancelHoverClose();
      setOpen(true);
    });
    group.addEventListener("mouseleave", function () {
      if (!isDesktop()) return;
      scheduleHoverClose();
    });

    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      event.preventDefault();

      // Mobile: toggle dropdown open/closed
      if (!isDesktop()) {
        const willOpen = !group.classList.contains("open");
        setOpen(willOpen);
        return;
      }

      // Desktop: open on click, don't close
      cancelHoverClose();
      setOpen(true);
    });

    // Keyboard: open on focus (desktop only)
    trigger.addEventListener("focus", function () {
      if (isDesktop()) setOpen(true);
    });
    group.addEventListener("focusout", function (event) {
      if (!isDesktop()) return;
      if (group.contains(event.relatedTarget)) return;
      scheduleHoverClose();
    });
  });

  // Close all dropdowns on document click (desktop)
  document.addEventListener("click", function (event) {
    if (isDesktop() && !event.target.closest(".modern-nav-group")) {
      closeAllGroups();
    }
  });

  // Escape key closes dropdowns
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeAllGroups();
    }
  });

  // Mobile nav: close drawer when a real navigation link is clicked.
  nav.querySelectorAll("a:not(.modern-nav-group-trigger)").forEach((link) => {
    if (link.dataset.boundNavLink === "true") return;
    link.dataset.boundNavLink = "true";

    link.addEventListener("click", function (event) {
      if (this.getAttribute("data-disabled") === "true") {
        event.preventDefault();
        return;
      }

      const mobileNavOpen = nav.classList.contains("open");
      if (!mobileNavOpen) return;

      // Close mobile menu on link click
      const toggle = document.getElementById("mobileMenuToggle");
      const overlay = document.getElementById("mobileMenuOverlay");
      nav.classList.remove("open");
      if (overlay) overlay.classList.remove("open");
      if (toggle) {
        toggle.innerHTML = '<i class="fa fa-bars"></i>';
        toggle.setAttribute("aria-expanded", "false");
      }
      // Close all dropdowns
      closeAllGroups();
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

// ============ Hide video temporarry might need to enable later ===========
// document.addEventListener("DOMContentLoaded", initYouTubeVideos);

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
      "header, nav, footer, aside, .cgs-sidebar, .modern-header, .modern-nav, .lp-navbar, .sr-header, .bpd-header, .pp-header, .tos-header, .not-found-header, .admin-sidebar, .admin-topbar, .modern-search-btn, .modern-lang-wrapper, .lp-navbar-logo, .sr-header-logo, .cgs-sidebar-header, .lp-footer, #docFooter",
    )
  ) {
    return false;
  }

  const inContent = img.closest(
    "main, article, .docs-content, .docs-main, .cd-main-content, .md-main-content, .bpd-main, .pp-main, .tos-main, .ctr-content, .cwm-content-wrapper",
  );

  if (!inContent) return false;
  if (img.closest("a, button, [role='button']")) return false;

  const rect = img.getBoundingClientRect();
  const renderedWidth = Math.max(rect.width, img.clientWidth || 0);
  const renderedHeight = Math.max(rect.height, img.clientHeight || 0);
  const naturalWidth = img.naturalWidth || 0;
  const naturalHeight = img.naturalHeight || 0;

  if (renderedWidth < 80 || renderedHeight < 80) return false;
  if (
    naturalWidth &&
    naturalHeight &&
    naturalWidth < 120 &&
    naturalHeight < 120
  ) {
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
// ===============================
// DOC HEADER INITIALIZATION
// ===============================
function initDocHeader(headerEl) {
  if (!headerEl || headerEl.dataset.headerReady === "true") return;

  const root = headerEl.querySelector(".t4e-doc-header-shell") || headerEl;
  const header =
    headerEl.id === "consumerHeader"
      ? headerEl
      : document.getElementById("consumerHeader");
  const button = root.querySelector(".t4e-doc-menu-toggle");
  const docs = root.querySelector("[data-submenu-trigger]");
  const submenu = root.querySelector(".t4e-doc-submenu");
  const links = root.querySelectorAll(".t4e-doc-menu-link[data-section]");
  const sectionIds = ["home", "how-it-works", "resources", "contact"];

  // Menu state management
  function closeMenu() {
    root.classList.remove("is-open");
    if (header) header.classList.remove("is-open");
    if (button) {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open menu");
    }
    root.classList.remove("submenu-open");
    if (docs) docs.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    root.classList.add("is-open");
    if (header) header.classList.add("is-open");
    if (button) {
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-label", "Close menu");
    }
  }

  // Expose globally for logo click handler and external use
  window.t4eDocHeaderClose = closeMenu;

  // Menu toggle button
  if (button) {
    if (button.dataset.boundDocHeader !== "true") {
      button.dataset.boundDocHeader = "true";
      button.addEventListener("click", function () {
        root.classList.contains("is-open") ? closeMenu() : openMenu();
      });
    }
  }

  // Submenu trigger
  if (docs) {
    if (docs.dataset.boundDocSubmenu !== "true") {
      docs.dataset.boundDocSubmenu = "true";
      docs.addEventListener("click", function (event) {
        event.preventDefault();
        const open = !root.classList.contains("submenu-open");
        root.classList.toggle("submenu-open", open);
        docs.setAttribute("aria-expanded", String(open));
      });
    }
  }

  // Submenu link close
  if (submenu) {
    submenu.querySelectorAll("a").forEach(function (link) {
      if (link.dataset.boundDocClose !== "true") {
        link.dataset.boundDocClose = "true";
        link.addEventListener("click", closeMenu);
      }
    });
  }

  // Close menu on data-close-menu clicks (logo, menu links)
  root.querySelectorAll("[data-close-menu]").forEach(function (link) {
    if (link.dataset.boundDocClose !== "true") {
      link.dataset.boundDocClose = "true";
      link.addEventListener("click", closeMenu);
    }
  });

  // Scroll behavior
  const scrollHandler = function () {
    if (header)
      header.classList.toggle(
        "is-scrolled",
        (window.scrollY || window.pageYOffset) > 40,
      );
  };

  if (!window.t4eDocHeaderScrollBound) {
    window.t4eDocHeaderScrollBound = true;
    window.addEventListener("scroll", scrollHandler, { passive: true });
  }

  // Initial scroll state
  if (header)
    header.classList.toggle(
      "is-scrolled",
      (window.scrollY || window.pageYOffset) > 40,
    );

  // Active section detection
  function setActive(id) {
    links.forEach(function (link) {
      link.classList.toggle("is-active", link.dataset.section === id);
    });
  }

  // Intersection observer for active sections
  if ("IntersectionObserver" in window) {
    if (!window.t4eDocHeaderObserver) {
      window.t4eDocHeaderObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting && entry.target.id)
              setActive(entry.target.id);
          });
        },
        { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 },
      );
    }

    sectionIds.forEach(function (id) {
      var section = document.getElementById(id);
      if (section && !section.dataset.docHeaderObserved) {
        section.dataset.docHeaderObserved = "true";
        window.t4eDocHeaderObserver.observe(section);
      }
    });
  }

  // setActive("home");
  headerEl.dataset.headerReady = "true";
}

// ===============================
// INIT
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  ensureGlobalFavicon();
  ensureGlobalBrandAndOrbit();
  initThemeToggle();
  const currentPage = getCurrentPage();

  // -------- Header --------
  loadComponent({
    id: "consumerHeader",
    url: toBasePath("components/doc-header.html"),
    onLoaded: (el) => {
      // Load header styles dynamically
      if (!document.getElementById("t4e-header-css")) {
        const link = document.createElement("link");
        link.id = "t4e-header-css";
        link.rel = "stylesheet";
        link.href = toBasePath("assets/css/header.css");
        document.head.appendChild(link);
      }

      initDocHeader(el);
      setHeaderActive(el, currentPage);
      if (window.I18n) window.I18n.applyToDOM(el);
      initMobileMenu();
      initHeaderNavDropdowns();
      initThemeToggle();
    },
  });

  // -------- Footer --------

  loadComponent({
    id: "docFooter",
    url: toBasePath("components/doc-footer.html"),
    onLoaded: (el) => {
      if (window.I18n) window.I18n.applyToDOM(el);

      const logo = el.querySelector("#footer-logo");

      if (logo) {
        const isDevPage = window.location.pathname.includes("/dev/");

        logo.src = isDevPage
          ? "../assets/images/think4ever-logo.png"
          : "assets/images/think4ever-logo.png";
      }
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

  // -------- Portal Sidebar --------
  loadComponent({
    id: "devSidebar",
    url: toBasePath("components/dev-sidebar.html"),
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

  // -------- Portal Sidebar --------
  loadComponent({
    id: "portalSidebar",
    url: toBasePath("components/portal-sidebar.html"),
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

  // --------  Sidebar --------
  loadComponent({
    id: "reSidebar",
    url: toBasePath("components/re-sidebar.html"),
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
  if (
    currentPage === "index" ||
    currentPage === "consumer_docs_home" ||
    currentPage === "merchant_docs_home"
  )
    return;

  const activeLink = getActiveSidebarLink();
  if (!activeLink) return;

  const mainContent =
    document.querySelector(".cd-main-content") ||
    document.querySelector(".md-main-content") ||
    document.querySelector("main");
  if (!mainContent) return;

  if (document.getElementById("dynamic-breadcrumb")) return;

  const sidebar = activeLink.closest(".cgs-sidebar, .admin-sidebar");
  let topTitle = "Documentation";
  let topI18n = "";
  if (sidebar) {
    const headerTitle = sidebar.querySelector(
      ".cgs-sidebar-header span, .admin-sidebar-header span, h5 span",
    );
    if (headerTitle) {
      topTitle = headerTitle.textContent.trim();
      topI18n = headerTitle.getAttribute("data-i18n") || "";
    }
  }

  let sectionTitle = "";
  let sectionI18n = "";
  const navSection = activeLink.closest(".cgs-nav-section");
  if (navSection) {
    const sectionLabel = navSection.querySelector(".cgs-nav-section-label");
    if (sectionLabel) {
      sectionTitle = sectionLabel.textContent.trim();
      sectionI18n = sectionLabel.getAttribute("data-i18n") || "";
    }
  }

  const pageTitleSpan = activeLink.querySelector("span");
  const pageTitle = pageTitleSpan
    ? pageTitleSpan.textContent.trim()
    : activeLink.textContent.trim();
  const pageI18n = pageTitleSpan
    ? pageTitleSpan.getAttribute("data-i18n") || ""
    : activeLink.getAttribute("data-i18n") || "";

  const breadcrumbNav = document.createElement("nav");
  breadcrumbNav.id = "dynamic-breadcrumb";
  breadcrumbNav.className = "modern-breadcrumb";
  breadcrumbNav.setAttribute("aria-label", "Breadcrumb");

  let html = `<ol>
    <li>
      <a href="javascript:void(0)" onclick="load_page('index')" class="breadcrumb-icon"><i class="fa-solid fa-house"></i></a>
    </li>`;

  if (topTitle) {
    const i18nAttr = topI18n ? ` data-i18n="${topI18n}"` : "";
    html += `
    <li class="separator"><i class="fa-solid fa-chevron-right"></i></li>
    <li><span class="breadcrumb-item"${i18nAttr}>${topTitle}</span></li>`;
  }

  if (sectionTitle) {
    const i18nAttr = sectionI18n ? ` data-i18n="${sectionI18n}"` : "";
    html += `
    <li class="separator"><i class="fa-solid fa-chevron-right"></i></li>
    <li><span class="breadcrumb-item"${i18nAttr}>${sectionTitle}</span></li>`;
  }

  const pageI18nAttr = pageI18n ? ` data-i18n="${pageI18n}"` : "";
  html += `
    <li class="separator"><i class="fa-solid fa-chevron-right"></i></li>
    <li class="current" aria-current="page"><span${pageI18nAttr}>${pageTitle}</span></li>
  </ol>`;

  breadcrumbNav.innerHTML = html;

  if (window.I18n) window.I18n.applyToDOM(breadcrumbNav);

  const pageTitleEl = mainContent.querySelector(
    ".cd-page-title, .md-page-title, h1",
  );
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
  const mainContent =
    document.querySelector(".cd-main-content") ||
    document.querySelector(".md-main-content") ||
    document.querySelector("main");
  if (!mainContent) return;

  const headings = Array.from(mainContent.querySelectorAll("h2, h3"));
  if (headings.length === 0) return;

  const layoutContainer = mainContent.parentElement;
  if (!layoutContainer) return;

  if (document.getElementById("global-toc")) return;

  const tocAside = document.createElement("aside");
  tocAside.id = "global-toc";
  tocAside.className = "cgs-toc";

  let html = `
    <h4 class="cgs-toc-title">On this page</h4>
    <ul class="cgs-toc-list">
  `;

  headings.forEach((heading, index) => {
    if (!heading.id) {
      const text = heading.textContent
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      heading.id = text || `section-${index}`;
    }

    const isH3 = heading.tagName.toLowerCase() === "h3";
    html += `
      <li>
        <a href="#${heading.id}" class="cgs-toc-link" style="${isH3 ? "padding-left: 24px;" : ""}">${heading.textContent}</a>
      </li>
    `;
  });

  html += `</ul>`;
  tocAside.innerHTML = html;

  layoutContainer.appendChild(tocAside);

  // Active state highlighting on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tocAside
            .querySelectorAll(".cgs-toc-link")
            .forEach((link) => link.classList.remove("active"));
          const activeLink = tocAside.querySelector(
            `.cgs-toc-link[href="#${entry.target.id}"]`,
          );
          if (activeLink) activeLink.classList.add("active");
        }
      });
    },
    { rootMargin: "0px 0px -80% 0px", threshold: 0 },
  );

  headings.forEach((heading) => observer.observe(heading));

  // Handle click events for smooth scroll and active state updates
  tocAside.querySelectorAll(".cgs-toc-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      tocAside
        .querySelectorAll(".cgs-toc-link")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
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

function copyToClipboard(button) {
  const codeElement = button
    .closest(".code-block-wrapper")
    .querySelector("pre code");
  const text = codeElement.textContent || codeElement.innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const originalHTML = button.innerHTML;
      button.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
      button.classList.add("copied");
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove("copied");
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
