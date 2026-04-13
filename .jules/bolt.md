## 2024-05-18 - Caching DOM elements in high-frequency events
**Learning:** In vanilla JS clicker games, repeatedly querying the DOM using `document.getElementById` and `document.querySelector` inside high-frequency click handlers and intervals (like `dañocontinuo`, `boss.addEventListener("click")`, and `muerteboss`) causes unnecessary performance overhead.
**Action:** Cache DOM references at the module/file level so they are queried only once upon initialization.
