## 2026-05-16 - DOM Caching Optimization
**Learning:** Frequent DOM queries via `document.getElementById` or `document.querySelector` inside synchronous high-frequency events (like `setInterval` or click event listeners in clicker games) can introduce unnecessary bottlenecks. In `clicker.js`, multiple DOM selections were happening every 500ms and on every fast user click.
**Action:** When working on clicker or high-frequency event applications, cache invariant DOM elements globally instead of repeating the queries inside event or interval callbacks.
