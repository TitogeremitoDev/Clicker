## 2023-10-27 - DOM Element Caching in Vanilla JS Games
**Learning:** Frequent `document.getElementById` and `document.querySelector` calls inside hot loops (like a `setInterval` running every 500ms or rapid click event listeners typical in a clicker game) create unnecessary DOM parsing and memory overhead, acting as a performance bottleneck.
**Action:** Extract these DOM queries into module-scoped constant variables upon script load and reuse the variables in the hot paths to reduce CPU cycles and DOM traversing overhead.
