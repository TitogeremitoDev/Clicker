## 2024-05-23 - DOM Caching in Vanilla JS Loop
**Learning:** High-frequency `setInterval` loops in vanilla JS games cause significant overhead if they re-query DOM elements (e.g., `document.getElementById`) on every tick.
**Action:** Cache DOM references in a global `ui` object during initialization to bypass DOM traversal in the game loop.
