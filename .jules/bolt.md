## 2025-02-17 - Caching DOM Queries in Game Loop
**Learning:** Frequent DOM queries (`document.getElementById`) inside high-frequency game loops (like `setInterval`) create significant overhead.
**Action:** Cache DOM element references in global constants or closure variables outside the loop to improve performance, especially for elements that do not change.
