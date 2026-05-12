## 2024-05-24 - Caching DOM lookups in rapid-fire event listeners
**Learning:** In a vanilla JS clicker game, querying the DOM (`getElementById`, `querySelector`) inside the main click handler creates a massive performance bottleneck as it triggers on every single user click (which can be 10+ times per second), and also inside intervals.
**Action:** Always cache static DOM elements outside of high-frequency event listeners and intervals to minimize Main Thread blocking and reduce GC pauses.
