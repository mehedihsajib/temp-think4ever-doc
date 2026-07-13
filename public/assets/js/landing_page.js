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
  const navDropdowns = document.querySelectorAll(".lp-nav-dropdown");

  const searchIndex = [
    {
      title: "Introduction",
      desc: "Get started with the think4ever platform vision and core documentation.",
      page: "manual_introduction",
      keywords: ["overview", "user manual", "docs", "platform", "start"],
    },
    {
      title: "Key Features",
      desc: "Explore the main think4ever features for orchestration and collaboration.",
      page: "manual_key_features",
      keywords: ["features", "capabilities", "platform", "highlights"],
    },
    {
      title: "Dashboard",
      desc: "Understand the main dashboard and how to monitor projects and delivery.",
      page: "manual_dashboard",
      keywords: ["dashboard", "overview", "monitoring", "home"],
    },
    {
      title: "Create a New Project",
      desc: "Set up a new think4ever project and define the initial workspace.",
      page: "manual_create_project",
      keywords: ["create", "project", "setup", "new project", "workspace"],
    },
    {
      title: "Project Settings",
      desc: "Configure project settings, preferences, and workspace controls.",
      page: "manual_project_settings",
      keywords: ["settings", "configuration", "project", "preferences"],
    },
    {
      title: "API Keys",
      desc: "Manage existing API keys used across your think4ever environment.",
      page: "manual_api_keys",
      keywords: ["api", "keys", "credentials", "tokens", "access"],
    },
    {
      title: "Add new API Key",
      desc: "Create and connect a new API key for your project integrations.",
      page: "manual_add_api_keys",
      keywords: ["api", "new key", "add key", "credentials", "integration"],
    },
    {
      title: "Version Control",
      desc: "Learn how version control fits into the think4ever workflow.",
      page: "manual_version_control",
      keywords: ["git", "repository", "source control", "versioning"],
    },
    {
      title: "Reverse Engineering",
      desc: "Use reverse engineering workflows to understand and rebuild systems.",
      page: "manual_reverse_engineering",
      keywords: ["reverse engineering", "analysis", "existing systems"],
    },
    {
      title: "Requirements",
      desc: "Document product requirements and define solution expectations clearly.",
      page: "manual_requirements",
      keywords: ["requirements", "spec", "planning", "scope"],
    },
    {
      title: "Concept",
      desc: "Shape product concepts and align ideas before execution begins.",
      page: "manual_concept",
      keywords: ["concept", "idea", "ideation", "product concept"],
    },
    {
      title: "Business Flow",
      desc: "Map business flow and understand how work moves through the platform.",
      page: "manual_business_flow",
      keywords: ["business flow", "workflow", "process", "operations"],
    },
    {
      title: "Data Objects",
      desc: "Review the platform's data objects and structural building blocks.",
      page: "manual_data_objects",
      keywords: ["data", "objects", "schema", "models", "entities"],
    },
    {
      title: "Roles & Permissions",
      desc: "Define access levels, team roles, and permission structures.",
      page: "manual_roles_permissions",
      keywords: ["roles", "permissions", "access", "security", "users"],
    },
    {
      title: "Business Rules",
      desc: "Capture the rules that govern workflows, decisions, and platform behavior.",
      page: "manual_business_rules",
      keywords: ["rules", "logic", "business", "conditions"],
    },
    {
      title: "Integration Maps",
      desc: "Plan how think4ever connects with external services and systems.",
      page: "manual_integration_maps",
      keywords: ["integration", "maps", "services", "connections", "systems"],
    },
    {
      title: "UI Design",
      desc: "Review interface design guidance and product experience structure.",
      page: "manual_ui_design",
      keywords: ["ui", "design", "interface", "ux", "screens"],
    },
    {
      title: "Technical Diagrams",
      desc: "Browse technical diagrams that explain architecture and implementation flows.",
      page: "manual_technical_diagrams",
      keywords: ["technical", "diagrams", "architecture", "system design"],
    },
    {
      title: "Available Diagram Types",
      desc: "See which diagram formats are supported across think4ever documentation.",
      page: "manual_available_diagram_types",
      keywords: ["diagram", "types", "formats", "charts"],
    },
    {
      title: "Requirements Docs",
      desc: "Access supporting requirements documents used during delivery.",
      page: "manual_requirements_docs",
      keywords: ["requirements docs", "documents", "specification"],
    },
    {
      title: "Tasks",
      desc: "Track implementation tasks and break work into actionable steps.",
      page: "manual_tasks",
      keywords: ["tasks", "todo", "implementation", "delivery"],
    },
    {
      title: "Database",
      desc: "Understand the database layer and how information is structured.",
      page: "manual_database",
      keywords: ["database", "storage", "schema", "data layer"],
    },
    {
      title: "Source Code",
      desc: "Explore source code structure and engineering implementation details.",
      page: "manual_source_code",
      keywords: ["source code", "codebase", "engineering", "development"],
    },
    {
      title: "Containers",
      desc: "Review container setup and environment packaging details.",
      page: "manual_containers",
      keywords: ["containers", "docker", "deployment", "infrastructure"],
    },
    {
      title: "Changelog",
      desc: "Review recent think4ever documentation and product updates.",
      page: "changelog_page",
      keywords: ["changes", "release notes", "updates", "history"],
    },
    {
      title: "Blog",
      desc: "Read think4ever articles, product updates, and platform insights.",
      page: "blog_listing",
      keywords: ["articles", "updates", "news", "posts"],
    },
    {
      title: "Feedback",
      desc: "Send feedback, requests, and suggestions to improve think4ever.",
      page: "feedback_form",
      keywords: ["feedback", "contact", "request", "suggestions"],
    },
    {
      title: "Tutorials - User Manual",
      desc: "Watch all available user manual walkthrough videos in one place.",
      page: "tutorials/user_manual",
      keywords: ["tutorials", "videos", "user manual", "walkthroughs"],
    },
    {
      title: "Tutorials - Main",
      desc: "Tutorial landing page for Main tutorials.",
      page: "tutorials/main",
      keywords: ["tutorials", "main"],
    },
    {
      title: "Tutorials - Reports",
      desc: "Tutorial landing page for Reports tutorials.",
      page: "tutorials/reports",
      keywords: ["tutorials", "reports"],
    },
    {
      title: "Tutorials - Together",
      desc: "Tutorial landing page for Together tutorials.",
      page: "tutorials/together",
      keywords: ["tutorials", "together"],
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

  function closeNavDropdowns() {
    navDropdowns.forEach(function (dropdown) {
      dropdown.classList.remove("open");
      const trigger = dropdown.querySelector(".lp-nav-dropdown-trigger");
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

    const needle = query.toLowerCase().trim();
    const matches = searchIndex.filter(function (item) {
      const haystack = [item.title, item.desc]
        .concat(item.keywords || [])
        .join(" ")
        .toLowerCase();

      return (
        haystack.includes(needle)
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
      link.addEventListener("click", function (event) {
        if (link.getAttribute("data-disabled") === "true") {
          event.preventDefault();
          return;
        }
        closeMobileNav();
      });
    });
  }

  document.querySelectorAll("a[data-disabled='true']").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

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

  navDropdowns.forEach(function (dropdown) {
    const trigger = dropdown.querySelector(".lp-nav-dropdown-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", function (event) {
      event.stopPropagation();
      const willOpen = !dropdown.classList.contains("open");
      closeNavDropdowns();
      dropdown.classList.toggle("open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
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
      if (page && page.startsWith("tutorials/")) {
        window.location.href = page + ".html";
      } else if (page && typeof load_page === "function") {
        load_page(page);
      }
    });

    searchResults.addEventListener("keydown", function (event) {
      const item = event.target.closest(".lp-search-result-item");
      if (!item) return;

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const page = item.getAttribute("data-page");
        closeSearch();
        if (page && page.startsWith("tutorials/")) {
          window.location.href = page + ".html";
        } else if (page && typeof load_page === "function") {
          load_page(page);
        }
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

    if (!event.target.closest(".lp-nav-dropdown")) {
      closeNavDropdowns();
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
      closeNavDropdowns();
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
