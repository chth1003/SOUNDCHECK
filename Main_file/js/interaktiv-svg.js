// Interaktiv SVG: de tre områder i plantegningen er koblet til tre accordion-punkter.
// Klik på et område åbner det tilhørende punkt, og omvendt. Hover fremhæver begge.

(() => {
  const zones = [...document.querySelectorAll("#venue-map .zone")];
  const items = [...document.querySelectorAll(".acc-item")];
  if (!zones.length || !items.length) return;

  const stacked = window.matchMedia("(max-width: 900px)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const zoneFor = (id) => zones.find((z) => z.dataset.zone === id);

  // id = nøglen på det område, der skal være åbent (eller null for at lukke alle)
  function activate(id) {
    items.forEach((item) => {
      const open = item.dataset.zone === id;
      item.classList.toggle("is-open", open);
      item.querySelector(".acc-btn").setAttribute("aria-expanded", String(open));
      item.querySelector(".acc-panel").hidden = !open;
    });
    zones.forEach((zone) => {
      const on = zone.dataset.zone === id;
      zone.classList.toggle("is-active", on);
      zone.setAttribute("aria-pressed", String(on));
    });
  }

  // Accordion → SVG
  items.forEach((item) => {
    const id = item.dataset.zone;
    const zone = zoneFor(id);
    item.querySelector(".acc-btn").addEventListener("click", () => {
      activate(item.classList.contains("is-open") ? null : id);
    });
    ["pointerenter", "focusin"].forEach((type) =>
      item.addEventListener(type, () => zone && zone.classList.add("is-hover"))
    );
    ["pointerleave", "focusout"].forEach((type) =>
      item.addEventListener(type, () => zone && zone.classList.remove("is-hover"))
    );
  });

  // SVG → accordion
  zones.forEach((zone) => {
    const open = () => {
      const id = zone.dataset.zone;
      activate(id);
      if (stacked.matches) {
        const item = items.find((i) => i.dataset.zone === id);
        if (item) item.scrollIntoView({ block: "nearest", behavior: reduceMotion.matches ? "auto" : "smooth" });
      }
    };
    zone.addEventListener("click", open);
    zone.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  // Start med første punkt åbent
  activate(items[0].dataset.zone);
})();
