## 2026-05-15 - Caching DOM elements
**Learning:** Repetitive DOM querying (`document.getElementById` and `document.querySelector`) inside high-frequency event listeners (like "click" events and `setInterval` loops running every 500ms) can be a classic frontend performance bottleneck.
**Action:** Lift these queries to the top level and cache the DOM elements into variables to avoid redundant DOM traversals. Ensure variables are properly replaced in event handlers and interval loops. Remember to handle possible missing elements gracefully.
