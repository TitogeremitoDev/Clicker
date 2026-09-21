## 2024-05-14 - DOM Queries in Hot Paths
**Learning:** Frequent DOM lookups like `document.getElementById` and `document.querySelector` inside fast-running intervals (`setInterval`) or high-frequency event listeners (like clickers) can lead to significant main thread blocking.
**Action:** Pre-cache frequently used DOM elements in module-level variables during initialization to avoid repeatedly scanning the DOM.
