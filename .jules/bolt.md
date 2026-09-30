## 2023-10-24 - DOM Query Optimization in Game Loops
**Learning:** Frequent DOM queries (like `document.getElementById`) inside game loops or high-frequency event listeners (like `setInterval` or click handlers in clicker games) can cause significant main thread blocking and performance issues in vanilla JS apps.
**Action:** Always cache frequently accessed DOM elements at the module/top level instead of querying them repeatedly within intervals or event handlers.
