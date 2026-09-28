## 2024-09-28 - Caching DOM queries in high-frequency event listeners
**Learning:** In a clicker game context, DOM queries inside the core 'click' event listener and fast intervals (e.g. 500ms continuous damage loop) create a substantial performance bottleneck that limits max actions/second.
**Action:** Always inspect the main 'click' listener in clicker games or high-interactivity elements to cache DOM nodes at module level instead of repeatedly fetching them during the hot path.
