## 2026-10-26 - Cache DOM Elements in Hot Paths
**Learning:** In vanilla JS apps, repeatedly querying the DOM (e.g., `document.getElementById`) inside click handlers and `setInterval` loops causes synchronous main-thread blocking, which degrades performance.
**Action:** Always cache frequently accessed DOM elements at initialization rather than querying them repeatedly within hot paths.
