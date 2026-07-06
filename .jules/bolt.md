## 2024-05-28 - Caching Frequent DOM Lookups in Clicker Games
**Learning:** In clicker/idle games, functions triggered by rapid user clicks or frequent intervals (like damage ticks) can create a performance bottleneck if they repeatedly query the DOM (e.g., `document.getElementById`).
**Action:** Always cache DOM elements that are queried inside high-frequency event listeners (like clicks in a clicker game) or `setInterval` loops to prevent synchronous layout/query blocking.
