## 2023-10-27 - Caching DOM lookups in high-frequency event handlers
**Learning:** In a clicker game, querying the DOM (`document.getElementById`) on every single click or in tight intervals (like `setInterval` every 500ms) creates unnecessary overhead and can cause micro-stutters during rapid clicking.
**Action:** Always cache DOM elements outside of high-frequency event handlers (like clicks in a clicker game or requestAnimationFrame loops) to ensure smooth performance.
