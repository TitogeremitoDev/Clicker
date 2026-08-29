## 2024-05-24 - Cached frequently accessed DOM elements
**Learning:** Frequent DOM queries via `document.getElementById` inside high-frequency event listeners (like rapidly clicking a boss in a clicker game) and `setInterval` loops can cause performance overhead.
**Action:** Extract and cache these static DOM elements into variables at the module scope so they are queried only once upon initialization.
