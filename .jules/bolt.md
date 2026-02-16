## 2024-05-23 - DOM Query Caching in Loops
**Learning:** Frequent DOM queries (`document.getElementById`, `querySelector`) inside high-frequency game loops (like `setInterval` at 500ms) significantly impact performance in this vanilla JS architecture.
**Action:** Always cache DOM element references in a global `ui` object or top-level constants during initialization to avoid re-querying the DOM in every frame/tick.
