(function () {
  "use strict";

  const navbar = document.querySelector(".lp-navbar");
  const scrollTopBtn = document.querySelector(".lp-scroll-top");
  const hamburger = document.querySelector(".lp-hamburger");
  const mobileNav = document.querySelector(".lp-mobile-nav");
  const searchTrigger = document.querySelector(".lp-search-trigger");
  const searchModal = document.querySelector(".lp-search-modal");
  const searchInput = document.querySelector(".lp-search-input-wrap input");
  const searchEsc = document.querySelector(".lp-search-esc");
  const searchResults = document.querySelector(".lp-search-results");
  const dropdowns = document.querySelectorAll(".lp-dropdown");

  const searchIndex = [
    {
      title: "Documentation",
      desc: "Start with the think4ever user manual and platform introduction.",
      page: "manual_introduction",
    },
    {
      title: "Blog",
      desc: "Read the latest updates, articles, and platform stories.",
      page: "blog_listing",
    },
    {
      title: "Feedback",
      desc: "Send feedback, ideas, and improvement requests to the team.",
      page: "feedback_form",
    },
    {
      title: "Changelog",
      desc: "Review recent product and documentation updates.",
      page: "changelog_page",
    },
    {
      title: "Merchant Docs",
      desc: "Explore merchant wallet documentation and setup guides.",
      page: "merchant_docs_home",
    },
    {
      title: "Consumer Docs",
      desc: "Browse consumer wallet documentation and how-to content.",
      page: "consumer_docs_home",
    },
  ];

  function syncScrollState() {
    const scrolled = (window.scrollY || window.pageYOffset) > 10;

    if (navbar) {
      navbar.classList.toggle("scrolled", scrolled);
    }

    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle("visible", (window.scrollY || window.pageYOffset) > 360);
    }
  }

  function closeMobileNav() {
    if (!mobileNav || !hamburger) return;

    mobileNav.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    const icon = hamburger.querySelector("i");
    if (icon) {
      icon.className = "fa-solid fa-bars";
    }
  }

  function closeDropdowns() {
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("open");
      const trigger = dropdown.querySelector(".lp-dropdown-trigger");
      if (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  function renderSearchResults(query) {
    if (!searchResults) return;

    if (!query.trim()) {
      searchResults.innerHTML =
        '<div class="lp-search-empty">Start typing to search documentation...</div>';
      return;
    }

    const matches = searchIndex.filter(function (item) {
      const needle = query.toLowerCase();
      return (
        item.title.toLowerCase().includes(needle) ||
        item.desc.toLowerCase().includes(needle)
      );
    });

    if (!matches.length) {
      searchResults.innerHTML =
        '<div class="lp-search-empty">No results found for "' + query + '".</div>';
      return;
    }

    searchResults.innerHTML = matches
      .map(function (item) {
        return (
          '<div class="lp-search-result-item" tabindex="0" data-page="' +
          item.page +
          '">' +
          '<div class="result-title">' +
          item.title +
          "</div>" +
          '<div class="result-desc">' +
          item.desc +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function openSearch() {
    if (!searchModal) return;

    searchModal.classList.add("open");
    searchModal.setAttribute("aria-hidden", "false");
    renderSearchResults("");

    if (searchInput) {
      searchInput.value = "";
      setTimeout(function () {
        searchInput.focus();
      }, 0);
    }
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove("open");
    searchModal.setAttribute("aria-hidden", "true");
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      const isOpen = mobileNav.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(isOpen));

      const icon = hamburger.querySelector("i");
      if (icon) {
        icon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
      }
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileNav);
    });
  }

  dropdowns.forEach(function (dropdown) {
    const trigger = dropdown.querySelector(".lp-dropdown-trigger");
    const items = dropdown.querySelectorAll(".lp-dropdown-item");

    if (!trigger) return;

    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      const willOpen = !dropdown.classList.contains("open");
      closeDropdowns();
      dropdown.classList.toggle("open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });

    items.forEach(function (item) {
      item.addEventListener("click", function () {
        items.forEach(function (entry) {
          entry.classList.remove("active");
        });
        item.classList.add("active");
        const label = dropdown.querySelector(".lp-dropdown-label");
        if (label) {
          label.textContent = item.textContent.trim().slice(0, 2).toUpperCase();
        }
        closeDropdowns();
      });
    });
  });

  if (searchTrigger) {
    searchTrigger.addEventListener("click", openSearch);
  }

  if (searchEsc) {
    searchEsc.addEventListener("click", closeSearch);
  }

  if (searchModal) {
    searchModal.addEventListener("click", function (event) {
      if (event.target === searchModal) {
        closeSearch();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      renderSearchResults(this.value);
    });
  }

  if (searchResults) {
    searchResults.addEventListener("click", function (event) {
      const item = event.target.closest(".lp-search-result-item");
      if (!item) return;
      const page = item.getAttribute("data-page");
      closeSearch();
      if (page && typeof load_page === "function") {
        load_page(page);
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("click", function (event) {
    if (!mobileNav || !hamburger) return;
    if (
      mobileNav.classList.contains("open") &&
      !mobileNav.contains(event.target) &&
      !hamburger.contains(event.target)
    ) {
      closeMobileNav();
    }

    if (!event.target.closest(".lp-dropdown")) {
      closeDropdowns();
    }
  });

  document.addEventListener("keydown", function (event) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (searchModal && searchModal.classList.contains("open")) {
        closeSearch();
      } else {
        openSearch();
      }
    }

    if (event.key === "Escape") {
      closeSearch();
      closeDropdowns();
      closeMobileNav();
    }
  });

  window.addEventListener("scroll", syncScrollState, { passive: true });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1080) {
      closeMobileNav();
    }
  });

  syncScrollState();
})();
