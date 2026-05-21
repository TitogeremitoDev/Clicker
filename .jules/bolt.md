## 2024-05-21 - Redundant DOM Queries in Hot Code Paths
**Learning:** Repeatedly querying the DOM in frequently executed functions (like click handlers and `setInterval` ticks) causes performance bottlenecks. In `clicker.js`, `document.getElementById` and `document.querySelector` were called multiple times per user click and every 500ms in a background loop, causing unnecessary layout/paint calculations or just general overhead.
**Action:** Cache frequently accessed DOM elements at the script's top level initialization to avoid redundant querying during runtime.
