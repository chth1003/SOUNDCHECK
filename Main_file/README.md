# Perfect Storm Launch Party – Tema 4

Event-site med forside, interaktiv SVG, formular og opsamling. Ren HTML, CSS og JavaScript (ingen installation).

## Sådan åbner du det

1. **I VS Code:** File → Open Folder… og vælg mappen `tema4`.
2. **I VS Code:** åbn Extensions i venstre side (firkant-ikonet), søg efter **Live Server** og klik Install.
3. **I VS Code:** højreklik `index.html` i Explorer → **Open with Live Server**.
4. **I browseren (preview):** siden åbner automatisk. Gem en fil i VS Code, så opdaterer preview af sig selv.

(Det virker også at dobbeltklikke på `index.html`, men Live Server er bedst til at teste formularen.)

## Filerne

| Fil | Hvad den gør |
|---|---|
| `index.html` | Forside: hero (fuld bredde), 3 popup-artikler, teaser til SVG + formular |
| `svg.html` | Interaktiv SVG med 3 highlight-områder og 3 accordion-punkter |
| `formular.html` | Formular, der sender videre til opsamlingssiden |
| `opsamling.html` | Viser brugerens valg som et pass med stregkode |
| `css/style.css` | Al styling. Farver ligger som variabler øverst (`:root`) |
| `js/config.js` | Eventnavn, dato, sted og de 3 pass |
| `js/components.js` | Header (med Menu-knap på mobil) og footer, brugt på alle sider |
| `js/forside.js` | Bølgen i hero + popups |
| `js/interaktiv-svg.js` | Kobler SVG-områder og accordion sammen |
| `js/formular.js` | Validering og videresendelse |
| `js/opsamling.js` | Tegner passet og stregkoden |

## Sæt dit eget logo ind

1. **I VS Code:** læg din SVG-fil i `assets/` (fx `assets/logo.svg`).
2. **I VS Code:** åbn `js/components.js` og find linjen med `<svg class="brand-mark" …>`.
3. **I VS Code:** erstat hele den `<svg>…</svg>` med `<img class="brand-mark" src="assets/logo.svg" alt="">` og gem.
4. **I browseren (preview):** tjek, at logoet står i headeren. Ret evt. `.brand-mark` i `css/style.css`, hvis det skal være større.

## Brug din egen SVG på SVG-siden

1. **I VS Code:** åbn `svg.html` og find `<svg id="venue-map">`.
2. **I VS Code:** erstat indholdet med din egen SVG. Hvert klikbart område skal være en `<g class="zone" data-zone="…" role="button" tabindex="0" aria-pressed="false" aria-label="…">`.
3. **I VS Code:** sørg for, at `data-zone` matcher `data-zone` på de tilhørende `.acc-item` længere nede i filen.

## Husk

- Eventet, stedet og tiderne er opfundet til skoleprojektet.
- Formularen har ingen server. E-mailen valideres, men gemmes ikke. Navn, pass og antal sendes kun med i URL'en til opsamlingssiden.
- Brug ikke bandets officielle logo eller billeder på siden uden at tjekke jeres opgaveregler.
