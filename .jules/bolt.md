## 2024-05-15 - DOM Lookup Optimization
**Learning:** Frequent DOM lookups inside rapid event handlers (like click intervals and `setInterval`) can block the main thread and reduce FPS, especially in clicker games.
**Action:** Always cache DOM element references outside of hot paths.
