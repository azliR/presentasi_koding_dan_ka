## AI contributor guide for this repo

Purpose: help an AI agent work productively in this static presentation site. Keep changes small, match the patterns below, and test by opening the HTML files in a browser.

### Big picture

- This is a static site with a landing page (`index.html`) and per-session slide decks (`pertemuan_3.html`, `pertemuan_4.html`). No build step, no bundlers.
- Slide decks are plain HTML sections (`div.slide`) rendered by a lightweight “canvas” runtime:
  - `public/canvas.js` wraps slides into `#canvas-container > #presentation-canvas` and ensures one `.slide.active`.
  - `public/tools.js` injects an overlay (Prev/Next, counter, fullscreen) plus zoom/pan, keyboard arrows, swipe, copy-to-clipboard, and highlight.js integration.
  - `public/canvas.css` defines a fixed 16:9 canvas (1600×900), slide transitions, zoom/pan via CSS variables, and overlay styling.

### Key dependencies

- Tailwind via CDN on every page; `index.html` also defines a small Tailwind config (brand colors, font, shadow).
- highlight.js via CDN is used on slide pages; `tools.js` calls `hljs.highlightAll()` if available.
- PWA manifest `site.webmanifest` and icons in `public/` are referenced by all pages.

### Patterns to follow (slides)

- Structure: each slide is a top-level `<div class="slide">…</div>` within `<body>`. `canvas.js` will wrap them and mark the first as `.active` if none is.
- Navigation/controls are auto-injected; don’t add your own slide controls in the HTML.
- Code blocks use `<pre><code class="language-…">…</code><button class="copy-btn">Copy</button></pre>` so copy buttons work.
- Keep slide content self-contained; global canvas behavior comes solely from `canvas.js` + `tools.js`.

### Patterns to follow (index landing)

- Cards are anchor tags inside `#cards`. Each card contains a visible title/description and an optional hidden `<span data-keywords class="hidden">…</span>` that the search indexes.
- Search: a simple text filter normalizes to lowercase and strips diacritics; it matches `innerText` + `data-keywords`.
- Theme: a “dark” class toggled on `<html>` with preference persisted to `localStorage("theme")`.

### Add a new session (pertemuan_X)

1. Create `pertemuan_X.html` modeled after existing decks. Include in `<head>`: Tailwind CDN, fonts, highlight.js CSS, and `public/canvas.css`.
2. In `<body>`, add multiple top-level `<div class="slide">…</div>` blocks. Optionally mark the first with `class="slide active"`.
3. Before `</body>`, include scripts in this order: highlight.js, `public/canvas.js`, then `public/tools.js`.
4. Add a card link in `index.html` under `#cards` following the same structure, and include `data-keywords` for search.

### Develop/run locally

- There is no build. Open `index.html` and the `pertemuan_*.html` files directly in a browser, or serve the folder with any static server for proper relative paths.
- Verify: controls render, arrow keys navigate, zoom/pan work, fullscreen toggles and auto-hides controls, code highlighting applies, and “Copy” buttons copy code.

### Conventions and gotchas

- Don’t rename `#canvas-container`, `#presentation-canvas`, or `.slide`; `tools.js` relies on these IDs/classes.
- Ensure only one slide is `.active` at a time; the runtime sets transforms for others.
- Keep external asset paths relative (e.g., `public/canvas.css`, icon PNGs) and referenced from the site root.
- If you add code examples, set an appropriate `language-…` on `<code>` so highlight.js styles correctly.
- Prefer the theme helpers defined in `public/canvas.css` (e.g., `theme-panel`, `theme-panel-soft`, `theme-card`, `theme-muted`, `theme-accent`) instead of hard-coded Tailwind grays so slides stay readable in both light and dark mode.
- For better search on the landing page, put extra keywords in the hidden `data-keywords` span inside each card.

### File map (quick reference)

- `index.html` — landing with search, theme toggle, and cards linking to sessions.
- `pertemuan_3.html`, `pertemuan_4.html` — example slide decks using the canvas runtime.
- `public/canvas.js` — wraps slides and bootstraps the canvas.
- `public/tools.js` — controls UI, zoom/pan, keyboard/touch, fullscreen, copy, highlighting.
- `public/canvas.css` — canvas sizing, slide transitions, controls styling.
- `site.webmanifest`, `public/*icon*.png` — PWA metadata and icons.

If anything above is unclear or you need more examples (e.g., a minimal slide template), ask and we’ll add it here.
