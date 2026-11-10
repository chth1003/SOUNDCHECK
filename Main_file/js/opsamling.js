(() => {
  const out = document.getElementById("pass-output");
  if (!out) return;

  const E = window.EVENT;
  const PASSES = window.PASSES;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  const params = new URLSearchParams(location.search);
  const name = (params.get("name") || "").trim().slice(0, 60);
  const passKey = params.get("pass") || "";
  const guests = Math.min(4, Math.max(1, parseInt(params.get("guests"), 10) || 1));
  const valid = name.length >= 2 && Object.prototype.hasOwnProperty.call(PASSES, passKey);

  out.replaceChildren();

  if (!valid) {
    const box = el("div", "empty-state");
    box.append(
      el("h2", null, "We could not find your pass"),
      el("p", null, "It looks like you have not filled out the form yet."),
    );
    const link = el("a", "btn btn-primary", "Go to the form");
    link.href = "formular.html";
    box.append(link);
    out.append(box);
    return;
  }

  const pass = PASSES[passKey];
  const hash = (text) => {
    let h = 2166136261;
    for (const ch of text) {
      h ^= ch.codePointAt(0);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  };
  const seed = hash(`${name.toLowerCase()}|${passKey}|${guests}`);
  const code = `PS-${seed.toString(36).toUpperCase().padStart(7, "0").slice(0, 7)}`;

  const rng = (start) => {
    let s = start || 1;
    return () => {
      s ^= s << 13; s >>>= 0;
      s ^= s >>> 17;
      s ^= s << 5; s >>>= 0;
      return s / 4294967296;
    };
  };

  const barcode = () => {
    const NS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 160 70");
    svg.setAttribute("class", "barcode");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", `Barcode for ${code}`);
    const next = rng(seed);
    let x = 0;
    let dark = true;
    while (x < 160) {
      const w = 2 + Math.floor(next() * 4);
      if (dark) {
        const rect = document.createElementNS(NS, "rect");
        rect.setAttribute("x", String(x));
        rect.setAttribute("y", "0");
        rect.setAttribute("width", String(Math.min(w, 160 - x)));
        rect.setAttribute("height", "70");
        rect.setAttribute("fill", "currentColor");
        svg.append(rect);
      }
      x += w;
      dark = !dark;
    }
    return svg;
  };

  const ticket = el("article", "ticket");

  const main = el("div", "ticket-main");
  main.append(el("p", "eyebrow", "Adgangskort"), el("h2", "ticket-title", E.name));

  const details = el("dl", "ticket-details");
  [
    ["Guest", name],
    ["Pass", pass.label],
    ["Area", pass.area],
    ["Quantity", guests === 1 ? "1 person" : `${guests} people`],
    ["Date", E.date],
    ["Location", E.place],
  ].forEach(([label, value]) => {
    const row = el("div");
    row.append(el("dt", null, label), el("dd", null, value));
    details.append(row);
  });
  main.append(details);

  const stub = el("div", "ticket-stub");
  stub.append(barcode(), el("span", "ticket-code", code), el("span", "ticket-code", E.doors));

  ticket.append(main, stub);

  const actions = el("div", "ticket-actions no-print");
  const print = el("button", "btn btn-primary", "Print or save as PDF");
  print.type = "button";
  print.addEventListener("click", () => window.print());
  const home = el("a", "btn btn-ghost", "Back to home");
  home.href = "index.html";
  actions.append(print, home);

  out.append(ticket, actions);
})();