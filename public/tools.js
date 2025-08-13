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
        <button id="prevBtn" title="Previous (←)" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-[1.25rem] hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div id="slideCounter" class="text-gray-200 text-lg font-semibold text-center">1 / ${slides.length}</div>
        <button id="nextBtn" title="Next (→)" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-[1.25rem] hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <div class="flex bg-gray-700/80 backdrop-blur rounded-full shadow">
          <button id="zoomOutBtn" title="Zoom Out (-)" class="bg-transparent text-white p-3 rounded-[1.25rem] hover:bg-blue-500/80 transition-colors disabled:opacity-50 shadow-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-out-icon lucide-zoom-out"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/></svg>
          </button>
          <button id="zoomInBtn" title="Zoom In (+)" class="bg-transparent text-white p-3 rounded-[1.25rem] hover:bg-blue-500/80 transition-colors disabled:opacity-50 shadow-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-in-icon lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>
          </button>
        </div>
        <button id="fullscreenBtn" title="Fullscreen" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-[1.25rem] hover:bg-blue-500 transition-colors shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-icon lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
        </button>
    `;
    // Append controls inside canvas container so they remain visible in fullscreen
    canvasContainer.appendChild(controls);

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

    // Touch swipe navigation for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let trackingTouch = false;
    const SWIPE_THRESHOLD = 60; // px horizontal movement
    const VERTICAL_TOLERANCE = 50; // ignore if too vertical

    function onTouchStart(e) {
      if (!e.touches || e.touches.length !== 1) return;
      trackingTouch = true;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
    function onTouchEnd(e) {
      if (!trackingTouch) return;
      trackingTouch = false;
      const touch = e.changedTouches && e.changedTouches[0];
      if (!touch) return;
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      if (Math.abs(dy) > VERTICAL_TOLERANCE) return; // mostly vertical, ignore
      if (dx <= -SWIPE_THRESHOLD) {
        // swipe left -> next
        showNextSlide();
      } else if (dx >= SWIPE_THRESHOLD) {
        // swipe right -> prev
        showPrevSlide();
      }
    }
    // Attach to canvas to avoid scrolling conflicts
    canvasEl.addEventListener('touchstart', onTouchStart, { passive: true });
    canvasEl.addEventListener('touchend', onTouchEnd, { passive: true });

    // Fullscreen
    const maximizeSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-icon lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>`;
    const shrinkSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shrink-icon lucide-shrink"><path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8"/><path d="M9 19.8V15m0 0H4.2M9 15l-6 6"/><path d="M15 4.2V9m0 0h4.8M15 9l6-6"/><path d="M9 4.2V9m0 0H4.2M9 9 3 3"/></svg>`;
    function setFullscreenIcon(isFullscreen) {
      if (!fullscreenBtn) return;
      fullscreenBtn.innerHTML = isFullscreen ? shrinkSVG : maximizeSVG;
    }
    if (fullscreenBtn) {
      // Set initial icon
      setFullscreenIcon(false);
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
    // Listen for fullscreen changes to update icon
    document.addEventListener('fullscreenchange', () => {
      setFullscreenIcon(!!document.fullscreenElement);
    });

    // Auto-hide controls in fullscreen after inactivity
    let hideTimer = null;
    const INACTIVITY_MS = 3000;
    function setControlsVisible(visible) {
      if (!controls) return;
      if (visible) {
        controls.classList.remove('controls-hidden');
      } else {
        controls.classList.add('controls-hidden');
      }
    }
    function scheduleHide() {
      if (!document.fullscreenElement) return; // only auto-hide in fullscreen
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setControlsVisible(false), INACTIVITY_MS);
    }
    function onUserActivity() {
      // Show immediately on any movement or tap, then schedule hide again
      if (document.fullscreenElement) {
        setControlsVisible(true);
        scheduleHide();
      }
    }
    // Listen for mouse and touch movement at window level
    window.addEventListener('mousemove', onUserActivity, { passive: true });
    window.addEventListener('touchstart', onUserActivity, { passive: true });
    window.addEventListener('touchmove', onUserActivity, { passive: true });
    document.addEventListener('fullscreenchange', () => {
      // Reset visibility when entering/exiting fullscreen
      if (document.fullscreenElement) {
        setControlsVisible(true);
        scheduleHide();
      } else {
        setControlsVisible(true);
        clearTimeout(hideTimer);
      }
    });

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
