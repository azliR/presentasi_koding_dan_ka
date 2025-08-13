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
    // Center group: prev / counter / next
    const centerGroup = document.createElement('div');
    centerGroup.className = 'flex items-center justify-center gap-4';
    centerGroup.innerHTML = `
      <button id="prevBtn" title="Previous (←)" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-[1.25rem] hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <div id="slideCounter" class="text-gray-200 text-lg font-semibold text-center">1 / ${slides.length}</div>
      <button id="nextBtn" title="Next (→)" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-[1.25rem] hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
      </button>
      <button id="fullscreenBtn" title="Fullscreen" class="bg-gray-700/90 backdrop-blur text-white p-3 rounded-[1.25rem] hover:bg-blue-500 transition-colors shadow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-icon lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>
      </button>
    `;

    // Right-bottom vertical zoom panel
    const zoomPanel = document.createElement('div');
    zoomPanel.id = 'zoomPanel';
    zoomPanel.className = 'fixed right-4 bottom-4 z-[60] flex flex-col items-center gap-2';
    zoomPanel.innerHTML = `
      <div class="bg-gray-800/80 text-gray-100 text-xs px-2 py-1 rounded-full shadow cursor-pointer" id="zoomPercent" title="Klik untuk reset ke 100%">100%</div>
      <div class="flex flex-col bg-gray-700/80 backdrop-blur rounded-full shadow overflow-hidden">
        <button id="zoomInBtn" title="Zoom In (+)" class="bg-transparent text-white p-3 hover:bg-blue-500/80 transition-colors disabled:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>
        </button>
        <button id="zoomOutBtn" title="Zoom Out (-)" class="bg-transparent text-white p-3 hover:bg-blue-500/80 transition-colors disabled:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zoom-out"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/></svg>
        </button>
      </div>`;

    controls.appendChild(centerGroup);
    canvasContainer.appendChild(controls);
    canvasContainer.appendChild(zoomPanel);

    // State and constants
    let currentSlide = 0;
    const totalSlides = slides.length;
    const BASE_WIDTH = 1600;
    const BASE_HEIGHT = 900;
  const ZOOM_STEP = 0.1;
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 3.0;
  const SNAP_EPSILON = 0.02; // within 2% snap to 100%
  let zoomFactor = 1.0;
  let panX = 0; // in CSS pixels after scale
  let panY = 0;

    // Utility: scale to fit + zoom
    function updateScale() {
      const w = canvasContainer.clientWidth;
      const h = canvasContainer.clientHeight;
      const fitScale = Math.min(w / BASE_WIDTH, h / BASE_HEIGHT);
      const applied = fitScale * zoomFactor;
      canvasEl.style.setProperty('--scale', applied);
      // When at 100%, reset pan
      if (Math.abs(zoomFactor - 1) < SNAP_EPSILON) {
        panX = 0;
        panY = 0;
      }
      // Clamp pan each time scale changes
      clampAndApplyPan();
      updateZoomUI();
    }

    // Slides position + UI
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const zoomPercentEl = document.getElementById('zoomPercent');
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
      // Snap around 1.0
      if (Math.abs(z - 1) < SNAP_EPSILON) return 1;
      return Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z));
    }

    function updateZoomUI() {
      if (!zoomPercentEl) return;
      const percent = Math.round(zoomFactor * 100);
      zoomPercentEl.textContent = `${percent}%`;
      // Toggle zoomed body class for cursor hint
      document.body.classList.toggle('is-zoomed', zoomFactor !== 1);
    }

    function setZoom(newZoom, centerX = null, centerY = null) {
      const prevZoom = zoomFactor;
      const clamped = clampZoom(newZoom);
      if (clamped === prevZoom) {
        updateScale();
        return;
      }
      // Zoom relative to a point: adjust pan so the focal point stays under cursor
      if (centerX !== null && centerY !== null) {
        // Convert screen point to pan adjustments
        const containerRect = canvasContainer.getBoundingClientRect();
        const cx = centerX - containerRect.left - containerRect.width / 2;
        const cy = centerY - containerRect.top - containerRect.height / 2;
        // delta factor
        const k = clamped / prevZoom;
        panX = cx - k * (cx - panX);
        panY = cy - k * (cy - panY);
      }
      zoomFactor = clamped;
      updateScale();
    }
    if (zoomInBtn)
      zoomInBtn.addEventListener('click', (e) => {
        const pt = getEventPoint(e);
        setZoom(zoomFactor + ZOOM_STEP, pt.x, pt.y);
      });
    if (zoomOutBtn)
      zoomOutBtn.addEventListener('click', (e) => {
        const pt = getEventPoint(e);
        setZoom(zoomFactor - ZOOM_STEP, pt.x, pt.y);
      });
    if (zoomPercentEl) {
      zoomPercentEl.addEventListener('click', () => {
        setZoom(1);
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') showNextSlide();
      if (e.key === 'ArrowLeft') showPrevSlide();
      if (e.key === '+') {
        setZoom(zoomFactor + ZOOM_STEP);
      }
      if (e.key === '-') {
        setZoom(zoomFactor - ZOOM_STEP);
      }
    });

    // Wheel to zoom (desktop): ctrl+wheel on browsers often zooms page; we use alt/cmd or trackpad pinch
    canvasContainer.addEventListener(
      'wheel',
      (e) => {
        // If a pinch gesture is detected (ctrlKey on some OS), treat as zoom
        const isPinchLike = e.ctrlKey || e.metaKey;
        if (isPinchLike) {
          e.preventDefault();
          const direction = e.deltaY > 0 ? -1 : 1;
          const pt = { x: e.clientX, y: e.clientY };
          setZoom(zoomFactor + direction * ZOOM_STEP, pt.x, pt.y);
        }
      },
      { passive: false },
    );

    // Helpers for pan bounds and gestures
    function getEventPoint(e) {
      if (e.touches && e.touches.length) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX ?? 0, y: e.clientY ?? 0 };
    }

    function getMaxPan() {
      const containerRect = canvasContainer.getBoundingClientRect();
      const w = containerRect.width;
      const h = containerRect.height;
      const fitScale = Math.min(w / BASE_WIDTH, h / BASE_HEIGHT);
      const scaledW = BASE_WIDTH * fitScale * zoomFactor;
      const scaledH = BASE_HEIGHT * fitScale * zoomFactor;
      const maxX = Math.max(0, (scaledW - w) / 2);
      const maxY = Math.max(0, (scaledH - h) / 2);
      return { maxX, maxY };
    }

    function clampAndApplyPan() {
      const { maxX, maxY } = getMaxPan();
      panX = Math.max(-maxX, Math.min(maxX, panX));
      panY = Math.max(-maxY, Math.min(maxY, panY));
      canvasEl.style.setProperty('--panX', `${panX}px`);
      canvasEl.style.setProperty('--panY', `${panY}px`);
      // When zoomed, mark panning mode for cursor
      canvasEl.classList.toggle('pannable', zoomFactor !== 1);
    }

    // Touch gestures: pinch-to-zoom and pan with one finger when zoomed
    let pinchStartDist = 0;
    let pinchStartZoom = 1;
    let panStartX = 0;
    let panStartY = 0;
    let startPanX = 0;
    let startPanY = 0;
    let isPanning = false;
    const SWIPE_THRESHOLD = 60; // for slide swipe when not zoomed
    const VERTICAL_TOLERANCE = 50;
    let touchStartX = 0;
    let touchStartY = 0;
    let trackingSwipe = false;

    canvasEl.addEventListener(
      'touchstart',
      (e) => {
        if (e.touches.length === 2) {
          // Pinch start
          trackingSwipe = false;
          pinchStartDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY,
          );
          pinchStartZoom = zoomFactor;
        } else if (e.touches.length === 1) {
          if (zoomFactor !== 1) {
            // Start panning
            isPanning = true;
            panStartX = e.touches[0].clientX;
            panStartY = e.touches[0].clientY;
            startPanX = panX;
            startPanY = panY;
            canvasEl.classList.add('panning');
          } else {
            // Track for slide swipe
            trackingSwipe = true;
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
          }
        }
      },
      { passive: true },
    );

    canvasEl.addEventListener(
      'touchmove',
      (e) => {
        if (e.touches.length === 2) {
          // Pinch update
          const dist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY,
          );
          const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
          const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
          const scaleDelta = dist / pinchStartDist;
          const newZoom = clampZoom(pinchStartZoom * scaleDelta);
          // Prevent page zoom
          e.preventDefault();
          setZoom(newZoom, centerX, centerY);
        } else if (e.touches.length === 1 && isPanning) {
          // Pan when zoomed
          e.preventDefault();
          const dx = e.touches[0].clientX - panStartX;
          const dy = e.touches[0].clientY - panStartY;
          panX = startPanX + dx;
          panY = startPanY + dy;
          clampAndApplyPan();
        }
      },
      { passive: false },
    );

    canvasEl.addEventListener(
      'touchend',
      (e) => {
        // End panning
        if (isPanning && e.touches.length === 0) {
          isPanning = false;
          canvasEl.classList.remove('panning');
        }
        // Handle swipe if not zoomed
        if (trackingSwipe && zoomFactor === 1) {
          const touch = e.changedTouches && e.changedTouches[0];
          if (touch) {
            const dx = touch.clientX - touchStartX;
            const dy = touch.clientY - touchStartY;
            if (Math.abs(dy) <= VERTICAL_TOLERANCE) {
              if (dx <= -SWIPE_THRESHOLD) showNextSlide();
              else if (dx >= SWIPE_THRESHOLD) showPrevSlide();
            }
          }
        }
        trackingSwipe = false;
      },
      { passive: true },
    );

    // Mouse panning when zoomed (desktop)
    let mousePanning = false;
    let mouseStartX = 0;
    let mouseStartY = 0;
    let mouseStartPanX = 0;
    let mouseStartPanY = 0;

    canvasEl.addEventListener('mousedown', (e) => {
      if (zoomFactor === 1) return;
      mousePanning = true;
      canvasEl.classList.add('panning');
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;
      mouseStartPanX = panX;
      mouseStartPanY = panY;
    });
    window.addEventListener('mousemove', (e) => {
      if (!mousePanning) return;
      const dx = e.clientX - mouseStartX;
      const dy = e.clientY - mouseStartY;
      panX = mouseStartPanX + dx;
      panY = mouseStartPanY + dy;
      clampAndApplyPan();
    });
    window.addEventListener('mouseup', () => {
      if (!mousePanning) return;
      mousePanning = false;
      canvasEl.classList.remove('panning');
    });

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
