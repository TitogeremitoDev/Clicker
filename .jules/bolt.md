## 2024-05-10 - Vanilla JS DOM Caching
**Learning:** Frequent DOM queries via `document.getElementById` inside high-frequency intervals (like `setInterval` running every 500ms) or rapid click event listeners are a significant, codebase-specific performance drain for vanilla JS clicker games without virtual DOMs.
**Action:** Always extract and cache repeated DOM elements (`hit1`, `salud`, `salud-tiene-texto`, `salud-total-texto`) in variables at the top-level scope instead of inline queries in vanilla JS.
