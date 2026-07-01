
## 2024-07-01 - Caching DOM elements in hot paths (clicker)
**Learning:** In a clicker game architecture where clicks happen multiple times per second (and intervals fire continuously), repeatedly querying the DOM using `document.getElementById` or `document.querySelector` can cause measurable performance drag and micro-stutters.
**Action:** Always pre-cache DOM elements that are updated frequently (like health bars, score text, and hit sounds) outside the event listeners or game loops to avoid unnecessary DOM traversals.
