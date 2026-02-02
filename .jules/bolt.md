## 2026-02-02 - Caching DOM Queries in Vanilla JS Loops
**Learning:** In vanilla JavaScript applications with a tight game loop (like `setInterval`), repeated calls to `document.getElementById` or `document.querySelector` can accumulate overhead. While modern browsers are fast, caching these references in global variables avoids unnecessary DOM traversal and improves performance in the hot path.
**Action:** Always identify elements accessed in loops (`setInterval`, `requestAnimationFrame`) and cache them in variables at initialization time.
