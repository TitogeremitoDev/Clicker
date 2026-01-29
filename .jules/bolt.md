## 2024-05-22 - DOM Caching in Game Loop
**Learning:** Frequent DOM queries (getElementById, querySelector) inside game loops (setInterval) and high-frequency events (click) can cause significant performance overhead.
**Action:** Cache DOM elements in top-level variables during initialization to avoid repeated lookups on every frame/tick.
