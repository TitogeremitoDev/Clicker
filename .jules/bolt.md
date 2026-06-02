## 2026-06-02 - Caching DOM lookups in vanilla JS
**Learning:** Frequent DOM traversals on every fast click (`clicker`) are a common and easily solvable bottleneck in vanilla JS games where rapid input and update cycles are the norm.
**Action:** Always extract `document.getElementById` and `document.querySelector` variables out of rapid event handlers (click handlers) and `setInterval`/`requestAnimationFrame` loops when the DOM elements persist throughout the lifecycle.
