## 2024-07-29 - [Cache DOM Elements in game loops]
**Learning:** Frequent DOM accesses inside event listeners (clicks) and game loops (setInterval) cause significant performance bottlenecks in clicker games.
**Action:** Extract `document.getElementById` calls and cache them in variables at the module level whenever they are repeatedly accessed in hot paths.
