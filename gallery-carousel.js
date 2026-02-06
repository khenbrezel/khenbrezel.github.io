const galleryGrid = document.getElementById("galleryGrid");
const viewport = document.getElementById("carouselViewport");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

const groups = window.galleryGroups || [];
const dims = window.dimensionsBySrc || {};
const buildMeta = window.buildMeta || (() => "");

const maxArea = Math.max(
  ...Object.values(dims).map(([w, h]) => w * h),
);

const minScale = 0.82;
const maxScale = 1.12;
const stackBreakpoint = 720;

const scaleFor = (src) => {
  const d = dims[src];
  if (!d) return 0.95;
  const area = d[0] * d[1];
  const raw = Math.sqrt(area / maxArea);
  return minScale + (maxScale - minScale) * raw;
};

const ratioFor = (src) => {
  const d = dims[src];
  if (!d) return 1;
  return d[0] / d[1];
};

const createItemElement = (item, width, height) => {
  const figure = document.createElement("figure");
  figure.className = "gallery-item";
  if (width) figure.style.width = `${width}px`;

  const button = document.createElement("button");
  button.type = "button";
  button.className = "image-button";
  button.setAttribute("aria-label", `Open ${item.title}`);
  button.dataset.title = item.title;
  button.dataset.meta = buildMeta(item);
  button.dataset.src = item.src;
  if (height) button.style.height = `${height}px`;

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.title;

  button.appendChild(img);

  const caption = document.createElement("figcaption");
  const captionTitle = document.createElement("div");
  captionTitle.className = "caption-title";
  captionTitle.textContent = item.title;
  const captionMeta = document.createElement("div");
  captionMeta.className = "caption-meta";
  captionMeta.textContent = [item.year, item.size].filter(Boolean).join(" ");

  caption.appendChild(captionTitle);
  if (captionMeta.textContent) caption.appendChild(captionMeta);

  figure.appendChild(button);
  figure.appendChild(caption);

  return figure;
};

const excluded = new Set(["assets/images/image28.png"]);
const flattenItems = () =>
  groups.flatMap((group) => group.items).filter((item) => !excluded.has(item.src));

const baseHeightFor = () => {
  const width = window.innerWidth;
  if (width < 720) return 160;
  if (width < 1200) return 210;
  return 240;
};

let loopWidth = 0;
let isPaused = false;
let pauseTimer;
let rafId;
let scrollPosition = 0;

const updateLoopWidth = () => {
  if (!galleryGrid) return;
  loopWidth = galleryGrid.scrollWidth / 2;
};

const pauseAuto = (duration = 2000) => {
  isPaused = true;
  clearTimeout(pauseTimer);
  pauseTimer = setTimeout(() => {
    isPaused = false;
  }, duration);
};

const buildCarousel = () => {
  if (!galleryGrid || !viewport) return;
  galleryGrid.innerHTML = "";

  const items = flattenItems();
  const baseHeight = baseHeightFor();

  const buildSet = (list) => {
    list.forEach((item) => {
      const ratio = ratioFor(item.src);
      const scale = scaleFor(item.src);
      const height = baseHeight * scale;
      const width = Math.max(80, ratio * height);
      const figure = createItemElement(item, width, height);
      galleryGrid.appendChild(figure);
    });
  };

  buildSet(items);
  buildSet(items);

  requestAnimationFrame(() => {
    updateLoopWidth();
    scrollPosition = viewport.scrollLeft;
  });

  galleryGrid.querySelectorAll("img").forEach((img) => {
    if (img.complete) return;
    img.addEventListener("load", updateLoopWidth, { once: true });
  });
};

const step = (time) => {
  if (!viewport) return;
  if (!rafId) rafId = time;
  const delta = time - rafId;
  rafId = time;

  if (!loopWidth && galleryGrid) {
    updateLoopWidth();
  }

  if (!isPaused && loopWidth) {
    scrollPosition += delta * 0.03;
    if (scrollPosition >= loopWidth) {
      scrollPosition -= loopWidth;
    }
    viewport.scrollLeft = scrollPosition;
  }
  requestAnimationFrame(step);
};

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(buildCarousel, 150);
});

if (viewport) {
  viewport.addEventListener("mouseenter", () => pauseAuto(1800));
  viewport.addEventListener("pointerdown", () => pauseAuto(2400));
  viewport.addEventListener("scroll", () => {
    scrollPosition = viewport.scrollLeft;
  });
}

if (prevButton && viewport) {
  prevButton.addEventListener("click", () => {
    pauseAuto(2400);
    viewport.scrollBy({ left: -viewport.clientWidth * 0.7, behavior: "smooth" });
  });
}

if (nextButton && viewport) {
  nextButton.addEventListener("click", () => {
    pauseAuto(2400);
    viewport.scrollBy({ left: viewport.clientWidth * 0.7, behavior: "smooth" });
  });
}

buildCarousel();
requestAnimationFrame(step);

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxInfo = document.getElementById("lightboxInfo");

const openLightbox = (item) => {
  if (!lightbox) return;
  lightboxImage.src = item.dataset.src;
  lightboxImage.alt = item.dataset.title;
  lightboxTitle.textContent = item.dataset.title;
  lightboxInfo.textContent = item.dataset.meta;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
};

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
};

if (galleryGrid) {
  galleryGrid.addEventListener("click", (event) => {
    const target = event.target.closest(".image-button");
    if (!target) return;
    openLightbox(target);
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close")) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
