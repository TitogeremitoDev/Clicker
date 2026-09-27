## 2024-09-27 - DOM Element Caching in High-Frequency Loops
**Learning:** In a vanilla JS clicker game with very fast user interactions and a `setInterval` loop (e.g. 500ms), repeatedly calling `document.getElementById` or `document.querySelector` inside the loop causes unnecessary DOM traversal overhead.
**Action:** Always cache statically present DOM elements globally and reuse those references in high-frequency paths (like click handlers and loops).
