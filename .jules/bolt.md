## 2024-05-24 - Vanilla JS DOM Caching
**Learning:** In vanilla JS browser games without frameworks, putting `document.getElementById` or `document.querySelector` inside high-frequency listeners (like `click`) or game loops (like `setInterval`) creates significant main-thread overhead.
**Action:** Always cache stable DOM elements into global variables during initialization when optimizing vanilla JS clickers/loops.
