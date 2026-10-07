## 2024-05-15 - Cached DOM queries for high-frequency events
**Learning:** In a vanilla JS clicker game, frequently firing events (clicks or intervals) were querying the DOM on every tick, which slows down rapid input processing.
**Action:** Always cache DOM elements at the module level when they need to be accessed frequently in hot paths.
