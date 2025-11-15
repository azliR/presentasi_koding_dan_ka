# Presentation Site

This is a simple static presentation website with a landing page and slide decks for different sessions. It uses a lightweight "canvas" runtime to render the slides.

## Running Locally

There is no build step. You can open the `index.html` and `pertemuan_*.html` files directly in your browser. Alternatively, you can serve the entire folder with a static server to ensure all relative paths work correctly.

## Project Structure

*   `index.html`: The landing page with a search function, theme toggle, and links to the presentation sessions.
*   `pertemuan_*.html`: The individual slide decks for each session.
*   `public/`: Contains the shared assets for the site.
    *   `canvas.js`: The core script that wraps the slides and manages the presentation canvas.
    *   `tools.js`: Injects the presentation controls (Prev/Next, fullscreen, zoom, etc.) and other tools.
    *   `canvas.css`: The stylesheet for the presentation canvas, slides, and controls.
    *   `*.png`, `*.ico`, `site.webmanifest`: PWA assets.

## Adding a New Session

1.  Create a new `pertemuan_X.html` file, using one of the existing `pertemuan_*.html` files as a template.
2.  Add your slide content within `<div class="slide">` elements in the `<body>` of the new file.
3.  Include the necessary scripts and stylesheets in the `<head>` and at the end of the `<body>`.
4.  Add a new card to the `index.html` file to link to your new session. Make sure to add relevant keywords in the `data-keywords` attribute for the search functionality.

## Key Dependencies

*   **Tailwind CSS**: Used for styling, loaded via CDN.
*   **highlight.js**: Used for syntax highlighting in code blocks, loaded via CDN.
