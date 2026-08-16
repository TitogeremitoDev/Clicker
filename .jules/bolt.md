## 2024-10-25 - Caching DOM elements in vanilla JS
**Learning:** Frequent DOM queries (`document.getElementById`, `document.querySelector`) in high-frequency event handlers (like click listeners in a clicker game) or `setInterval` loops are significant performance bottlenecks. Audio elements also need their `currentTime` reset to `0` before playing in rapid succession.
**Action:** Always cache these elements outside the event handlers or loops in vanilla JS projects.
