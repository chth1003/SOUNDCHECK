// Forsiden: bølgen i hero-sektionen og popup-artiklerne.

(() => {
  // --- Bølge af streger nederst i hero ---
  const wave = document.querySelector(".hero-wave");
  if (wave) {
    const count = 80;
    for (let i = 0; i < count; i++) {
      const bar = document.createElement("span");
      const t = i / (count - 1);
      const envelope = Math.sin(Math.PI * t); // lav i siderne, høj i midten
      const wobble = Math.abs(Math.sin(i * 2.3) * Math.cos(i * 0.7));
      bar.style.setProperty("--h", `${12 + envelope * (20 + 80 * wobble)}px`);
      bar.style.setProperty("--d", `${-(i % 12) * 0.2}s`);
      wave.append(bar);
    }
  }

  // --- Popup-artikler (native <dialog>) ---
  document.querySelectorAll("[data-popup]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialog = document.getElementById(trigger.dataset.popup);
      if (dialog && typeof dialog.showModal === "function") dialog.showModal();
    });
  });

  document.querySelectorAll("dialog.popup").forEach((dialog) => {
    // Klik på baggrunden lukker (indholdet ligger i .popup-body, så kun baggrunden rammer selve dialogen)
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.querySelectorAll("[data-close]").forEach((btn) => btn.addEventListener("click", () => dialog.close()));
  });
})();
