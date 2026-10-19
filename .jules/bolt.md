## 2024-05-18 - Caching DOM elements in high-frequency event handlers
**Learning:** Frequent calls to `document.getElementById` or `document.querySelector` within high-frequency event listeners (like rapidly clicked buttons in clicker games) or frequent interval callbacks (like game loops) cause measurable DOM query overhead.
**Action:** Cache these DOM elements into a static or global object at execution time and reference them from memory in those handlers rather than re-querying the DOM.
