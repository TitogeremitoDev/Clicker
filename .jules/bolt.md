## 2024-04-29 - [Optimize repeated DOM queries in hot paths]
**Learning:** In a clicker game, executing `document.getElementById` or `document.querySelector` inside fast intervals (e.g., game loop every 500ms) or frequent events (e.g., rapid consecutive clicks) creates unnecessary overhead and blocks the main thread.
**Action:** Always cache these DOM element references at the top level so they are looked up only once.
