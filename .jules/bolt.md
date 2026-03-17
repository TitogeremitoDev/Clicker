## 2024-05-20 - Global DOM Element Caching in Vanilla JS Apps
**Learning:** Frequent `document.getElementById` and `document.querySelector` lookups within tight loops (like `setInterval` for ticks) or rapid user inputs (boss clicks) trigger excessive main-thread layout thrashing and tree traversals.
**Action:** Always pre-cache repeatedly accessed DOM elements globally in Vanilla JS projects to alleviate main thread strain, significantly improving performance and saving battery. Be sure to add comments explaining *why* the cache is added.
