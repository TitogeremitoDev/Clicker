## 2024-05-14 - DOM query caching in hot paths
**Learning:** In vanilla JS clicker games, DOM queries (`getElementById`, `querySelector`) inside click handlers and intervals (the "hot paths") are frequent and unnecessary.
**Action:** Next time, identify and lift these DOM queries to the module/top-level scope to cache them and prevent repeated DOM traversals on rapid user interactions.
