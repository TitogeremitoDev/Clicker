## 2024-05-18 - Caching DOM queries in frequent events
**Learning:** High-frequency event handlers like clicker functions and frequent intervals (`setInterval`) are extremely susceptible to performance hits from standard `document.getElementById` and `document.querySelector` DOM queries.
**Action:** Always extract and globally cache DOM queries that are predictably used across interval functions or frequent click listeners to minimize main-thread operations.
