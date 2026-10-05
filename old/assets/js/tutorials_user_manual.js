(function () {
  "use strict";

  const tutorialCatalog = [
    {
      sectionTitle: "Introduction",
      items: [
        {
          pageId: "manual_introduction",
          pageTitle: "Introduction",
          videoTitle: "Vision to Innovation",
          id: "CQpIODqNFek",
        },
        {
          pageId: "manual_key_features",
          pageTitle: "Key Features",
          videoTitle:
            "How to Create a Project? Turning ideas to Conceptualization.",
          id: "6wmwLtcdV6k",
        },
      ],
    },
    {
      sectionTitle: "Getting Started",
      items: [
        {
          pageId: "manual_project_settings",
          pageTitle: "Project Settings",
          videoTitle: "How to Define Project Requirements",
          id: "kqRaUoV8K-E",
        },
        {
          pageId: "manual_project_settings",
          pageTitle: "Project Settings",
          videoTitle: "Technology Stack & Project Details Setup",
          id: "GY_y-n18gm4",
        },
        {
          pageId: "manual_api_keys",
          pageTitle: "API Keys",
          videoTitle: "API Keys Setup",
          id: "pXEXoWqDPys",
        },
      ],
    },
    {
      sectionTitle: "Structure and Ideation",
      items: [
        {
          pageId: "manual_requirements",
          pageTitle: "Requirements",
          videoTitle: "How to Define Project Requirements",
          id: "kqRaUoV8K-E",
        },
        {
          pageId: "manual_concept",
          pageTitle: "Concept",
          videoTitle: "Raw ideas to Clear Concepts",
          id: "o0vO3k-Z3cg",
        },
        {
          pageId: "manual_business_flow",
          pageTitle: "Business Flow",
          videoTitle: "Business Flow - the heart of your project",
          id: "oS5Ot6ek_Yo",
        },
        {
          pageId: "manual_data_objects",
          pageTitle: "Data Objects",
          videoTitle: "Managing Data Objects | Databases",
          id: "GwxF7YvuG9M",
        },
        {
          pageId: "manual_business_rules",
          pageTitle: "Business Rules",
          videoTitle: "How Business Rules Drive Your System",
          id: "kWxnCu0vh_I",
        },
        {
          pageId: "manual_integration_maps",
          pageTitle: "Integration Maps",
          videoTitle: "Integration Maps & External Services",
          id: "BZK9Prej4Jc",
        },
      ],
    },
    {
      sectionTitle: "Design and Docs",
      items: [
        {
          pageId: "manual_ui_design",
          pageTitle: "UI Design",
          videoTitle: "From Technical Specs to UI Design",
          id: "UMSbY-GJDjY",
        },
        {
          pageId: "manual_technical_diagrams",
          pageTitle: "Technical Diagrams",
          videoTitle: "Technical Diagrams & Architecture Mapping",
          id: "Ey6qAKUC9FI",
        },
        {
          pageId: "manual_requirements_docs",
          pageTitle: "Requirements Docs",
          videoTitle: "Mastering the Requirements Docs Dashboard",
          id: "M7NvDD-1tDM",
        },
      ],
    },
    {
      sectionTitle: "Development",
      items: [
        {
          pageId: "manual_tasks",
          pageTitle: "Tasks",
          videoTitle: "Streamlining Tasks Development",
          id: "ekkKNTi6Nmk",
        },
      ],
    },
  ];

  const tutorialGrid = document.getElementById("tutorialGrid");
  const searchInput = document.getElementById("tutSearchInput");
  const videoCount = document.getElementById("tutVideoCount");

  const videoModal = document.getElementById("videoModal");
  const videoModalTitle = document.getElementById("videoModalTitle");
  const videoPlayerFrame = document.getElementById("videoPlayerFrame");
  const videoSourceLink = document.getElementById("videoSourceLink");

  let tutorials = [];
  let sectionOrder = [];

  function toDocPath(path) {
    if (typeof window.toBasePath === "function") {
      return window.toBasePath(path);
    }
    return "../" + path;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function groupTutorials(items) {
    const map = new Map();

    items.forEach(function (item) {
      const sectionTitle = item.sectionTitle || "Other";
      if (!map.has(sectionTitle)) {
        map.set(sectionTitle, []);
      }
      map.get(sectionTitle).push(item);
    });

    const dynamicOrder = Array.from(map.keys()).filter(function (title) {
      return !sectionOrder.includes(title);
    });

    const orderedTitles = sectionOrder
      .concat(dynamicOrder)
      .filter(function (title) {
        return map.has(title);
      });

    return orderedTitles.map(function (title) {
      return { title: title, items: map.get(title) };
    });
  }

  function cardTemplate(item) {
    const thumb = "https://i.ytimg.com/vi/" + item.id + "/hqdefault.jpg";
    const sourceHref = toDocPath(item.pageId + ".html");

    return (
      '<article class="tut-card" data-video-id="' +
      item.id +
      '" data-video-title="' +
      escapeHtml(item.videoTitle) +
      '" data-page-id="' +
      item.pageId +
      '">' +
      '<div class="tut-card-cover" role="button" tabindex="0" aria-label="Play ' +
      escapeHtml(item.videoTitle) +
      '">' +
      '<img src="' +
      thumb +
      '" alt="' +
      escapeHtml(item.pageTitle) +
      ' tutorial thumbnail" loading="lazy" />' +
      '<span class="tut-play-pill"><i class="fa-solid fa-play"></i></span>' +
      "</div>" +
      '<div class="tut-card-body">' +
      '<p class="tut-card-page">' +
      escapeHtml(item.pageTitle) +
      "</p>" +
      '<h3 class="tut-card-title">' +
      escapeHtml(item.videoTitle) +
      "</h3>" +
      '<a class="tut-source-link" href="' +
      sourceHref +
      '" aria-label="Open source page">' +
      '<i class="fa-solid fa-arrow-up-right-from-square"></i>' +
      "</a>" +
      "</div>" +
      "</article>"
    );
  }

  function groupTemplate(group) {
    return (
      '<section class="tut-group">' +
      '<div class="tut-group-head">' +
      "<h2>" +
      escapeHtml(group.title) +
      "</h2>" +
      '<span class="tut-group-count">' +
      group.items.length +
      " videos</span>" +
      "</div>" +
      '<div class="tut-grid tut-grid-group">' +
      group.items.map(cardTemplate).join("") +
      "</div>" +
      "</section>"
    );
  }

  function renderCards(items) {
    if (!tutorialGrid) return;

    if (!items.length) {
      tutorialGrid.innerHTML =
        '<div class="tut-empty">No tutorials matched your search. Try another keyword.</div>';
      return;
    }

    const grouped = groupTutorials(items);
    tutorialGrid.innerHTML = grouped.map(groupTemplate).join("");
  }

  function updateCount(total) {
    if (!videoCount) return;
    const label = total === 1 ? "1 video" : total + " videos";
    videoCount.innerHTML = '<i class="fa-solid fa-film"></i> ' + label;
  }

  function openVideoModal(videoId, title, pageId) {
    if (
      !videoModal ||
      !videoPlayerFrame ||
      !videoModalTitle ||
      !videoSourceLink
    ) {
      return;
    }

    videoModalTitle.textContent = title;
    videoSourceLink.href = toDocPath(pageId + ".html");
    videoPlayerFrame.src =
      "https://www.youtube.com/embed/" +
      videoId +
      "?autoplay=1&rel=0&modestbranding=1";
    videoModal.classList.add("open");
    videoModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeVideoModal() {
    if (!videoModal || !videoPlayerFrame) return;
    videoModal.classList.remove("open");
    videoModal.setAttribute("aria-hidden", "true");
    videoPlayerFrame.src = "";
    document.body.style.overflow = "";
  }

  function bindEvents() {
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        const q = this.value.toLowerCase().trim();
        if (!q) {
          renderCards(tutorials);
          return;
        }

        const filtered = tutorials.filter(function (item) {
          return (
            item.videoTitle.toLowerCase().includes(q) ||
            item.pageTitle.toLowerCase().includes(q) ||
            item.sectionTitle.toLowerCase().includes(q)
          );
        });

        renderCards(filtered);
      });
    }

    if (tutorialGrid) {
      tutorialGrid.addEventListener("click", function (event) {
        const trigger = event.target.closest(
          ".tut-card-cover, .tut-play-pill, .tut-card-cover img",
        );
        if (!trigger) return;

        const card = event.target.closest(".tut-card");
        if (!card) return;

        const videoId = card.getAttribute("data-video-id");
        const videoTitle = card.getAttribute("data-video-title");
        const pageId = card.getAttribute("data-page-id");
        if (!videoId || !pageId) return;

        openVideoModal(videoId, videoTitle || "Tutorial Video", pageId);
      });

      tutorialGrid.addEventListener("keydown", function (event) {
        const cover = event.target.closest(".tut-card-cover");
        if (!cover) return;

        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();

        const card = cover.closest(".tut-card");
        if (!card) return;

        const videoId = card.getAttribute("data-video-id");
        const videoTitle = card.getAttribute("data-video-title");
        const pageId = card.getAttribute("data-page-id");
        if (!videoId || !pageId) return;

        openVideoModal(videoId, videoTitle || "Tutorial Video", pageId);
      });
    }

    document.addEventListener("click", function (event) {
      if (event.target.closest("[data-close-modal='true']")) {
        closeVideoModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeVideoModal();
      }
    });
  }

  function normalizeCatalog() {
    const normalized = [];
    sectionOrder = tutorialCatalog.map(function (section) {
      return section.sectionTitle;
    });

    tutorialCatalog.forEach(function (section) {
      const sectionTitle = section.sectionTitle || "Other";
      const items = Array.isArray(section.items) ? section.items : [];

      items.forEach(function (item) {
        if (!item || !item.id || !item.pageId) return;
        normalized.push({
          sectionTitle: sectionTitle,
          pageId: item.pageId,
          pageTitle: item.pageTitle || item.pageId.replace("manual_", ""),
          videoTitle: item.videoTitle || "Tutorial Video",
          id: item.id,
        });
      });
    });

    return normalized;
  }

  function init() {
    bindEvents();
    tutorials = normalizeCatalog();
    updateCount(tutorials.length);
    renderCards(tutorials);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
