(function () {
  "use strict";

  const sourcePages = [
    "manual_introduction",
    "manual_key_features",
    "manual_create_project",
    "manual_business_flow",
  ];

  // Curated titles per source page/video position to avoid generic labels.
  const curatedVideoTitles = {
    manual_introduction: ["Think4ever User Manual Overview"],
    manual_key_features: ["Key Features Walkthrough"],
    manual_create_project: ["How to Create a New Project"],
    manual_business_flow: ["Business Flow Mapping Tutorial"],
  };

  const fallbackVideos = [
    {
      id: "CQpIODqNFek",
      pageId: "manual_introduction",
      pageTitle: "Introduction",
    },
    {
      id: "6wmwLtcdV6k",
      pageId: "manual_key_features",
      pageTitle: "Key Features",
    },
    {
      id: "6wmwLtcdV6k",
      pageId: "manual_create_project",
      pageTitle: "Create a New Project",
    },
    {
      id: "oS5Ot6ek_Yo",
      pageId: "manual_business_flow",
      pageTitle: "Business Flow",
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

  function extractTitleFromDocument(doc, pageId) {
    const h1 =
      doc.querySelector(".cd-page-title") ||
      doc.querySelector("main h1") ||
      doc.querySelector("h1");
    const title = h1 ? h1.textContent.trim() : pageId.replace("manual_", "");
    return title.replace(/^\d+\.?\s*/, "");
  }

  function cardTemplate(item) {
    const thumb = "https://i.ytimg.com/vi/" + item.id + "/hqdefault.jpg";
    const sourceHref = "../" + item.pageId + ".html";

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
      '"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
      "</div>" +
      "</article>"
    );
  }

  function renderCards(items) {
    if (!tutorialGrid) return;

    if (!items.length) {
      tutorialGrid.innerHTML =
        '<div class="tut-empty">No tutorials matched your search. Try another keyword.</div>';
      return;
    }

    tutorialGrid.innerHTML = items.map(cardTemplate).join("");
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
    videoSourceLink.href = "../" + pageId + ".html";
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
            item.pageTitle.toLowerCase().includes(q)
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

  function normalizeTutorials(items) {
    return items.map(function (item, index) {
      const byPage = curatedVideoTitles[item.pageId] || [];
      const curated = byPage[index];
      return {
        id: item.id,
        pageId: item.pageId,
        pageTitle: item.pageTitle,
        videoTitle: curated || item.pageTitle + " Walkthrough",
      };
    });
  }

  async function loadTutorialsFromManualPages() {
    const loaded = [];

    for (const pageId of sourcePages) {
      try {
        const response = await fetch("../" + pageId + ".html");
        if (!response.ok) continue;
        const html = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const pageTitle = extractTitleFromDocument(doc, pageId);

        const videos = doc.querySelectorAll(".yt-video[data-video-id]");
        videos.forEach(function (videoEl, idx) {
          const id = videoEl.getAttribute("data-video-id");
          if (!id) return;

          const byPage = curatedVideoTitles[pageId] || [];
          const curated = byPage[idx];

          loaded.push({
            id: id,
            pageId: pageId,
            pageTitle: pageTitle,
            videoTitle: curated || pageTitle + " Walkthrough",
          });
        });
      } catch (err) {
        console.warn("Could not load tutorial source page:", pageId, err);
      }
    }

    return loaded;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  async function init() {
    bindEvents();

    const dynamicTutorials = await loadTutorialsFromManualPages();
    tutorials = dynamicTutorials.length
      ? dynamicTutorials
      : normalizeTutorials(fallbackVideos);

    updateCount(tutorials.length);
    renderCards(tutorials);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
