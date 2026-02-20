## 2024-05-24 - DOM Caching Optimization
**Learning:** Frequent calls to `document.getElementById` and `querySelector` inside high-frequency loops (e.g., `setInterval`) can be a significant performance bottleneck.
**Action:** Cache these DOM elements in a global `ui` object during initialization and reference them directly. This reduces the DOM traversal overhead.
