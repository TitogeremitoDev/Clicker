## 2024-09-03 - DOM Caching in Clicker Event Loops
**Learning:** Vanilla JS clicker games rely heavily on high-frequency DOM manipulation. Repeated `document.getElementById` and `document.querySelector` queries in tight event loops (like frantic clicking) and fast `setInterval` timers (like passive damage) accumulate significant unnecessary overhead and can jank the UI thread.
**Action:** Always pre-cache DOM elements at module level in vanilla JS applications with high-frequency user interactions or game loops.
