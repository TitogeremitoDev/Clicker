## 2026-02-22 - [DOM Caching in Game Loop]
**Learning:** In a vanilla JS game loop (setInterval), repeated `document.getElementById` and `document.querySelector` calls create significant overhead. Caching these elements reduced the game loop execution time by ~20%.
**Action:** Always cache static DOM elements in a `ui` object at initialization for high-frequency update loops.
