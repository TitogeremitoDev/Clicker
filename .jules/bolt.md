## 2024-08-03 - DOM Lookup caching in vanilla JS
**Learning:** Frequent DOM lookup within click events (especially in game clickers) and intervals is an unnecessary performance bottleneck. Elements like audio clips and UI nodes that change frequently can be cached globally.
**Action:** Always check if `document.getElementById` or similar queries are being performed repeatedly inside high-frequency event handlers or `setInterval` callbacks, and move them to cached variables outside.
