## 2026-05-05 - DOM Query Caching
**Learning:** Frequent DOM queries (like `document.getElementById`) inside game loops (`setInterval`) or click handlers block the main thread and reduce FPS in clicker games.
**Action:** Cache DOM elements at the module level instead of looking them up on every interaction/tick to improve rendering performance and reduce unnecessary layout calculations.
