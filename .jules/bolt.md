## 2023-10-24 - Caching DOM queries in game loop
**Learning:** High-frequency event listeners (like clickers and game loops) querying the DOM repetitively is a performance bottleneck.
**Action:** Always cache DOM elements outside the game loop or event listeners in vanilla JS projects.
