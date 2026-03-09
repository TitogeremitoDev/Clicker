## 2026-03-09 - [DOM Caching Optimization]
**Learning:** Found a classic performance optimization in a tight setInterval loop (`dañocontinuo` in `clicker.js`). The code repeatedly queried the DOM every 500ms using `document.getElementById` and `document.querySelector`.
**Action:** Introduced a global `ui` object at the top of the file to cache all heavily-accessed DOM elements since the JS file is deferred in `index.html`, ensuring the DOM is parsed. Refactored event listeners and intervals to use this cache.
