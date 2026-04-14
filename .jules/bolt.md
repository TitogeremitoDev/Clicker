## 2024-05-18 - Caching DOM lookups in intervals
**Learning:** Frequent DOM lookups in `setInterval` and high-frequency event listeners (like fast clicks) cause significant performance overhead in Vanilla JS.
**Action:** Always cache `document.getElementById` and `document.querySelector` at the top level when they are used repeatedly, especially within functions that fire multiple times per second.
