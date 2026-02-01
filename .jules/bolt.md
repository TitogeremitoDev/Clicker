## 2024-05-23 - Uncached DOM Queries in Game Loop
**Learning:** Frequent DOM queries (like `document.getElementById`) inside high-frequency loops (like `setInterval` running every 500ms) or event handlers are a performance anti-pattern. They force the browser to search the DOM tree repeatedly.
**Action:** Cache DOM references in variables at initialization time and reuse them in the loop.
