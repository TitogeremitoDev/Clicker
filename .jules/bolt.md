## 2026-08-01 - DOM Caching in Hot Paths
**Learning:** Frequent DOM lookups via `document.getElementById` and `document.querySelector` within tight click loops and rapid `setInterval` blocks (like `boss.addEventListener` and `dañocontinuo`) significantly harm performance by forcing unnecessary main-thread blocking operations.
**Action:** Always extract and cache statically placed DOM elements used in recurring actions (click handlers, interval functions, game loops) into module-level constants.
