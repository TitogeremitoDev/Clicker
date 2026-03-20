## 2024-05-15 - Vanilla JS DOM Caching
**Learning:** In simple Vanilla JS applications like clicker games, repeatedly querying the DOM (`getElementById`, `querySelector`) inside high-frequency events (like `setInterval` or rapid `click` listeners) is a significant performance bottleneck because it forces synchronous DOM traversals.
**Action:** Always cache frequently accessed DOM elements in variables outside of the event listeners or interval loops to prevent unnecessary DOM queries on every execution tick.
