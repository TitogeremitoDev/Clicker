## 2026-04-11 - DOM caching inside rapid events
**Learning:** In a clicker game, executing `document.getElementById` on every single user click or every interval tick (e.g. 500ms) leads to redundant DOM lookups and wastes processing cycles on a critical path.
**Action:** Always extract and cache static, frequently accessed DOM elements into global or higher-scoped variables before relying on them inside tight loops or high-frequency event handlers.
