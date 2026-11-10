// Fælles indstillinger. Ret navne og tider her, så bruges de på alle sider.
// (Teksten i selve HTML-siderne retter du direkte i HTML-filerne.)

window.EVENT = {
  name: "Perfect Storm Launch Party",
  short: "Perfect Storm",
  company: "Soundcheck Events",
  date: "16. november 2026",
  doors: "Døre kl. 19.00",
  place: "Soundcheck Hall, København", // fiktivt sted til skoleprojektet
};

// De tre pass i formularen. Nøglerne (stage, floor, lounge) matcher
// de tre områder i den interaktive SVG.
window.PASSES = {
  stage: { label: "Stage Pass", area: "Tæt på scenen" },
  floor: { label: "Eyewall Pass", area: "Dansegulvet" },
  lounge: { label: "Calm Pass", area: "Calm Lounge" },
};
