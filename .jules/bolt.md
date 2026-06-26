## 2024-06-26 - Cached DOM Elements
**Learning:** Frequent DOM lookups like `document.getElementById` and `document.querySelector` inside high-frequency event handlers or `setInterval` blocks cause performance drops in JS.
**Action:** Always extract and cache elements referenced in repeated actions into top-level variables.
