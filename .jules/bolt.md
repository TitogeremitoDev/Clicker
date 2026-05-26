## 2024-05-26 - DOM Element Caching in Interval Callbacks
**Learning:** In a vanilla JS browser clicker game, functions running every tick (e.g. `dañocontinuo` running every 500ms via `setInterval`) and rapid click handlers (e.g., `boss.addEventListener("click")`) doing continuous `document.getElementById` lookup can cause measurable performance overhead.
**Action:** Cache these DOM elements at initialization and reference the cached globals to bypass DOM tree search for high-frequency operations.
