// Canvas wrapper: ensures slides are inside the expected canvas/container structure.
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    // Find all top-level .slide nodes (content-only mode)
    // We accept either slides already inside a #presentation-canvas or plain slides in body.
    const existingCanvas = document.getElementById('presentation-canvas');
    const existingContainer = document.getElementById('canvas-container');

    if (existingCanvas && existingContainer) {
      // Already wrapped — ensure at least one .active
      const slides = existingCanvas.querySelectorAll('.slide');
      if (slides.length && !existingCanvas.querySelector('.slide.active')) {
        slides[0].classList.add('active');
      }
      return;
    }

    // Collect slides that are direct children under body or any container without our canvas
    const bodySlides = Array.from(document.querySelectorAll('body > .slide'));
    if (bodySlides.length === 0) {
      // Try a fallback: any slides in the document
      const anySlides = document.querySelectorAll('.slide');
      if (!anySlides.length) return; // nothing to wrap
    }

    // Create container and canvas
    const container = document.createElement('div');
    container.id = 'canvas-container';
    container.className = 'canvas-container';

    const canvas = document.createElement('div');
    canvas.id = 'presentation-canvas';
    canvas.className = 'canvas';

    // If there are body-level slides, move them. Otherwise, move any .slide found under the first common parent
    const slides = bodySlides.length
      ? bodySlides
      : Array.from(document.querySelectorAll('.slide'));

    slides.forEach((s) => {
      canvas.appendChild(s);
    });

    container.appendChild(canvas);

    // Put container as the only child of body
    // Move any non-slide elements (like scripts) to remain after the container
    const trailing = [];
    Array.from(document.body.childNodes).forEach((node) => {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.classList &&
        node.classList.contains('slide')
      ) {
        // already moved
        return;
      }
      // keep scripts and link nodes to re-append later
      if (
        !(node.id === 'canvas-container' || node.id === 'presentation-canvas')
      ) {
        trailing.push(node);
      }
    });

    document.body.innerHTML = '';
    document.body.appendChild(container);
    trailing.forEach((n) => document.body.appendChild(n));

    // Ensure first slide is active
    const first = canvas.querySelector('.slide');
    if (first && !canvas.querySelector('.slide.active'))
      first.classList.add('active');
  });
})();
