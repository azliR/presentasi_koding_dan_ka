// Presentation tools and controls for custom slide deck
// This script dynamically injects the controls overlay and wires behavior to the canvas-only slide files.
(function () {
  // Wait for DOM ready to ensure canvas exists
  document.addEventListener('DOMContentLoaded', () => {
    const canvasContainer = document.getElementById('canvas-container');
    const canvasEl = document.getElementById('presentation-canvas');
    const slides = canvasEl ? canvasEl.querySelectorAll('.slide') : [];

    if (!canvasContainer || !canvasEl || slides.length === 0) {
      console.warn(
        '[tools.js] Canvas or slides not found. Ensure #canvas-container, #presentation-canvas, and .slide exist.',
      );
      return;
    }

    // Inject controls overlay markup
    const controls = document.createElement('div');
    controls.id = 'controlsOverlay';
    controls.className =
      'fixed left-0 right-0 bottom-4 z-50 flex items-center justify-center gap-4 select-none pointer-events-auto';
    controls.innerHTML = `
      <button id="prevBtn" title="Previous (←)" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-full hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div id="slideCounter" class="text-gray-200 text-lg font-semibold min-w-[90px] text-center">1 / ${slides.length}</div>
      <button id="nextBtn" title="Next (→)" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-full hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>
      <button id="zoomOutBtn" title="Zoom Out (-)" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-full hover:bg-blue-500 transition-colors disabled:opacity-50 shadow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <button id="zoomInBtn" title="Zoom In (+)" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-full hover:bg-blue-500 transition-colors disabled:opacity-50 shadow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>
      <button id="fullscreenBtn" title="Fullscreen" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-full hover:bg-blue-500 transition-colors shadow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fullscreen-icon lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="10" height="8" x="7" y="8" rx="1"/></svg>
      </button>
    `;
    document.body.appendChild(controls);

    // State and constants
    let currentSlide = 0;
    const totalSlides = slides.length;
    const BASE_WIDTH = 1600;
    const BASE_HEIGHT = 900;
    const ZOOM_STEP = 0.1;
    const MIN_ZOOM = 0.5;
    const MAX_ZOOM = 2.0;
    let zoomFactor = 1.0;

    // Utility: scale to fit + zoom
    function updateScale() {
      const w = canvasContainer.clientWidth;
      const h = canvasContainer.clientHeight;
      const fitScale = Math.min(w / BASE_WIDTH, h / BASE_HEIGHT);
      const applied = fitScale * zoomFactor;
      canvasEl.style.setProperty('--scale', applied);
    }

    // Slides position + UI
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');
    const slideCounter = document.getElementById('slideCounter');

    function updateSlides() {
      slides.forEach((slide, index) => {
        if (index < currentSlide) {
          slide.style.transform = 'translateX(-100%)';
          slide.classList.remove('active');
        } else if (index > currentSlide) {
          slide.style.transform = 'translateX(100%)';
          slide.classList.remove('active');
        } else {
          slide.style.transform = 'translateX(0)';
          slide.classList.add('active');
        }
      });
      if (slideCounter)
        slideCounter.textContent = `${currentSlide + 1} / ${totalSlides}`;
      if (prevBtn) prevBtn.disabled = currentSlide === 0;
      if (nextBtn) nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    function showNextSlide() {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlides();
      }
    }

    function showPrevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
      }
    }

    // Events
    if (nextBtn) nextBtn.addEventListener('click', showNextSlide);
    if (prevBtn) prevBtn.addEventListener('click', showPrevSlide);

    function clampZoom(z) {
      return Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z));
    }
    if (zoomInBtn)
      zoomInBtn.addEventListener('click', () => {
        zoomFactor = clampZoom(zoomFactor + ZOOM_STEP);
        updateScale();
      });
    if (zoomOutBtn)
      zoomOutBtn.addEventListener('click', () => {
        zoomFactor = clampZoom(zoomFactor - ZOOM_STEP);
        updateScale();
      });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') showNextSlide();
      if (e.key === 'ArrowLeft') showPrevSlide();
      if (e.key === '+') {
        zoomFactor = clampZoom(zoomFactor + ZOOM_STEP);
        updateScale();
      }
      if (e.key === '-') {
        zoomFactor = clampZoom(zoomFactor - ZOOM_STEP);
        updateScale();
      }
    });

    // Fullscreen
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          canvasContainer.requestFullscreen().catch((err) => {
            alert(
              `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
            );
          });
          if (
            screen.orientation &&
            typeof screen.orientation.lock === 'function'
          ) {
            screen.orientation.lock('landscape').catch(() => {});
          }
        } else {
          document.exitFullscreen();
        }
      });
    }

    // Copy buttons: support both pre-existing and future blocks
    function wireCopyButtons(root = document) {
      const copyButtons = root.querySelectorAll('.copy-btn');
      copyButtons.forEach((button) => {
        // Prevent duplicate listeners
        if (button.dataset.wired) return;
        button.dataset.wired = 'true';
        button.addEventListener('click', (e) => {
          const pre = e.target.closest('pre');
          const code = pre ? pre.querySelector('code') : null;
          const text = code ? code.innerText : '';
          if (!text) return;
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand('copy');
            e.target.textContent = 'Copied!';
          } catch (err) {
            console.error('Failed to copy text: ', err);
            e.target.textContent = 'Error';
          }
          document.body.removeChild(textArea);
          setTimeout(() => {
            e.target.textContent = 'Copy';
          }, 2000);
        });
      });
    }

    wireCopyButtons(document);

    // Syntax highlighting (guard if hljs missing)
    if (window.hljs && typeof window.hljs.highlightAll === 'function') {
      window.hljs.highlightAll();
    }

    // Initial state
    updateSlides();
    updateScale();

    // Recompute on resize and fullscreen
    window.addEventListener('resize', updateScale);
    window.addEventListener('orientationchange', updateScale);
    document.addEventListener('fullscreenchange', updateScale);
  });
})();
