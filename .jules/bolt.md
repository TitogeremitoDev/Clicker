## 2024-05-18 - Caching DOM queries in hot paths
**Learning:** Found a common anti-pattern where frequent `click` listeners and `setInterval` polling loops query the DOM repeatedly for the same elements (`getElementById` and `querySelector`).
**Action:** Always inspect the event handlers and polling loops for un-cached DOM accesses and hoist them out into top-level variables.