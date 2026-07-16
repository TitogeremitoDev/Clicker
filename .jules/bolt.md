## 2024-07-16 - Cache DOM Lookups in Game Hot Loops
**Learning:** In browser-based games (like clickers), calling `document.getElementById` and `document.querySelector` inside rapid intervals (like `setInterval` firing every 500ms) or extremely frequent event listeners (like rapidly clicking the boss) leads to unnecessary layout thrashing and high JS execution time, blocking the main thread.
**Action:** Always extract and cache DOM elements into global variables when they are frequently referenced inside loops, intervals, or hot click event listeners.
