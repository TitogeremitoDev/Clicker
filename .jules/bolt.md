## 2026-03-19 - Caching DOM Queries
**Learning:** The application does frequent DOM lookups (`document.getElementById` and `document.querySelector`) inside `setInterval` loops and click event listeners (e.g., in `dañocontinuo()` and `boss.addEventListener`). This causes performance bottlenecks in JavaScript games due to repeated unneeded browser reflows/lookups.
**Action:** Extract DOM element lookups and cache them in top-level variables outside of loops and event handlers.
