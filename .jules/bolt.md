## 2024-07-03 - Caching frequently accessed DOM elements
**Learning:** Frequent DOM queries (like `document.getElementById` or `document.querySelector`) in click handlers and intervals (game loops) cause unnecessary overhead.
**Action:** Cache these DOM elements in variables at the top of the file to reuse them.
