## 2026-01-30 - DOM Caching in Game Loops
**Learning:** Frequent DOM queries (`document.getElementById`, `document.querySelector`) inside `setInterval` loops create unnecessary overhead in vanilla JS applications.
**Action:** Always cache DOM references in variables at the top level or initialization scope, especially for elements updated in the game loop.
