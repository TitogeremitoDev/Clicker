## 2024-05-04 - Caching DOM queries in core game loop
**Learning:** The application repeatedly queries the DOM on every single click on the boss and in a 500ms interval for continuous damage. `document.getElementById` and `document.querySelector` are synchronously traversing the DOM tree. In a clicker game where rapid clicking is the main mechanic, this creates a significant performance bottleneck.
**Action:** Always cache DOM elements outside of high-frequency event listeners (like rapid click events) and intervals to avoid redundant and expensive DOM queries.
