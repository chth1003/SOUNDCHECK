# Perfect Storm Launch Party – Theme 4

Event site with a landing page, interactive SVG, form, and summary. Clean HTML, CSS, and JavaScript (no installation required).

## How to open it

1. **In VS Code:** File → Open Folder… and select the `tema4` folder.
2. **In VS Code:** open Extensions in the left sidebar (the square icon), search for **Live Server**, and click Install.
3. **In VS Code:** right-click `index.html` in Explorer → **Open with Live Server**.
4. **In the browser (preview):** the page opens automatically. Save a file in VS Code, and the preview updates on its own.

(You can also double-click `index.html`, but Live Server is best for testing the form.)

## Files

| File                   | What it does                                                             |
| ---------------------- | ------------------------------------------------------------------------ |
| `index.html`           | Landing page: hero (full width), 3 popup articles, teaser for SVG + form |
| `svg.html`             | Interactive SVG with 3 highlighted areas and 3 accordion items          |
| `formular.html`        | Form that forwards to the summary page                                   |
| `Summary.html`         | Displays the user’s selection as a pass with a barcode                   |
| `css/style.css`        | All styling. Colors are stored as variables at the top (`:root`)        |
| `js/config.js`         | Event name, date, location, and the 3 passes                             |
| `js/components.js`     | Header (with a menu button on mobile) and footer, used on all pages     |
| `js/forside.js`        | The wave in the hero + popups                                            |
| `js/interaktiv-svg.js` | Connects the SVG areas and accordion together                           |
| `js/formular.js`       | Validation and forwarding                                                |
| `js/opsamling.js`      | Draws the pass and barcode                                              |

## Add your own logo

1. **In VS Code:** place your SVG file in `assets/` (for example, `assets/logo.svg`).
2. **In VS Code:** open `js/components.js` and find the line with `<svg class="brand-mark" …>`.
3. **In VS Code:** replace the entire `<svg>…</svg>` with `<img class="brand-mark" src="assets/logo.svg" alt="">` and save.
4. **In the browser (preview):** check that the logo appears in the header. If needed, adjust `.brand-mark` in `css/style.css` to make it larger.

## Use your own SVG on the SVG page

1. **In VS Code:** open `svg.html` and find `<svg id="venue-map">`.
2. **In VS Code:** replace the content with your own SVG. Every clickable area should be an element like `<g class="zone" data-zone="…" role="button" tabindex="0" aria-pressed="false" aria-label="…">`.
3. **In VS Code:** make sure the `data-zone` matches the corresponding `.acc-item` `data-zone` further down in the file.

## Remember

- The event, location, and times are fictional for the school project.
- The form has no backend server. The email is validated, but not saved. The name, pass, and quantity are only sent in the URL to the summary page.
- Do not use the band’s official logo or images on the page without checking your assignment rules.
