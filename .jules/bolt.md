## 2024-05-20 - [DOM Caching in Clicker Events]
**Learning:** In a clicker game architecture, querying the DOM on every click (e.g. `document.getElementById`) creates a significant performance bottleneck due to the high frequency of events.
**Action:** Always cache DOM elements outside of high-frequency event listeners (like click events and intervals) to prevent redundant DOM traversal.
