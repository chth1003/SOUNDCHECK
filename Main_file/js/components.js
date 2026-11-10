(() => {
  const E = window.EVENT;
  const page = document.body.dataset.page;
  const active = page === "summary" ? "formular" : page;

  const links = [
    ["Home", "index.html", "Home"],
    ["svg", "svg.html", "Explore the venue"],
    ["Get a pass", "formular.html", "Get a pass"],
  ];

  const bars = [6, 12, 18, 10, 16, 8, 12].map((h, i) => `<rect x="${i * 4 + 1}" y="${(20 - h) / 2}" width="2.4" height="${h}" rx="1.2"/>`).join("");

  const headerEl = document.getElementById("site-header");
  if (headerEl) {
    headerEl.outerHTML = `
      <header class="site-header" data-open="false">
        <a class="skip-link" href="#main">Skip to content</a>
        <div class="container header-inner">
          <a class="brand" href="index.html">
            <svg class="brand-mark" viewBox="0 0 28 20" fill="currentColor" aria-hidden="true">${bars}</svg>
            <span>${E.short}</span>
          </a>
          <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
          <nav class="site-nav" id="site-nav" aria-label="Main navigation">
            <ul>
              ${links.map(([key, href, label]) => `<li><a href="${href}"${key === active ? ' aria-current="page"' : ""}>${label}</a></li>`).join("")}
            </ul>
          </nav>
        </div>
      </header>`;

    const header = document.querySelector(".site-header");
    const button = header.querySelector(".menu-btn");
    const setOpen = (open) => {
      header.dataset.open = String(open);
      button.setAttribute("aria-expanded", String(open));
    };
    button.addEventListener("click", () => setOpen(header.dataset.open !== "true"));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
    header.querySelectorAll(".site-nav a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  }

  const footerEl = document.getElementById("site-footer");
  if (footerEl) {
    footerEl.outerHTML = `
      <footer class="site-footer">
        <div class="container footer-inner">
          <span>${E.short} · ${E.company}</span>
          <span>This is a school project · not affiliated with TXT or BIGHIT MUSIC</span>
        </div>
      </footer>`;
  }
})();
