## 2024-05-22 - [Repeated DOM Queries in Game Loop]
**Learning:** The application repeatedly queried the DOM (`document.getElementById`) inside the main `setInterval` loop (every 500ms) and the click handler. This created unnecessary overhead.
**Action:** Identify `setInterval` loops and high-frequency event handlers early. Check for DOM queries inside them. Cache these elements in global constants or module-level variables during initialization. This reduced execution time of the loop logic by ~19% in benchmarks.
