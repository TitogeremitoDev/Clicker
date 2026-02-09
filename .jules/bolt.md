## 2026-02-09 - Caching DOM queries in game loop
**Learning:** The application updates the UI every 500ms using `setInterval`. It was querying the DOM (`document.getElementById`) inside this loop and in frequent click handlers. This is a performance anti-pattern.
**Action:** Cached DOM elements into global constants at initialization to reduce overhead during the game loop and user interactions.
