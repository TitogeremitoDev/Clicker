## 2026-10-25 - Cache Repeatedly Accessed DOM Elements
**Learning:** In a vanilla JS game loop or high-frequency click handler, repeatedly calling `document.getElementById` or `document.querySelector` is a significant performance anti-pattern.
**Action:** Always cache DOM elements at the top level when they are accessed in hot paths like event listeners or `setInterval` loops.
