## 2026-09-10 - DOM Query Caching in High-Frequency Events
**Learning:** In a clicker game with very fast input loops and intervals, placing DOM queries like `document.getElementById` directly in the event handlers or ticks will re-query the DOM every single click/tick. This forces main-thread layout recalculations unnecessarily.
**Action:** Always cache these element references globally or in a closure if they don't change dynamically.
