## 2023-10-25 - DOM Caching in High-Frequency Game Loops
**Learning:** In vanilla JS games (like this clicker game), high-frequency events (clicks, setInterval loops running every 500ms) that repeatedly query the DOM using `document.getElementById` or `document.querySelector` cause measurable overhead.
**Action:** Always extract and cache static DOM references into top-level constants to avoid redundant DOM traversals. Ensure variables are properly reused throughout all sub-functions (e.g., in `muerteboss` and `comprardaño`).
