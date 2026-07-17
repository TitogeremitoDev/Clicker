## 2024-05-24 - DOM Query Caching in Clicker Games
**Learning:** Frequent events like 500ms intervals or rapid user clicks can create massive overhead if they contain synchronous DOM queries like `document.getElementById` or `document.querySelector`. In this codebase, the same elements were being queried on every click and interval.
**Action:** Always cache elements that are repeatedly queried in high-frequency functions or loops (e.g., in a `domCache` object) to prevent unnecessary DOM traversals that block the main thread and hinder click response time.
