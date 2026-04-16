## 2024-05-18 - Unnecessary DOM queries in high-frequency functions
**Learning:** In clicker games, functions like auto-damage (run via `setInterval` every 500ms) and click handlers are executed extremely frequently. Querying the DOM inside these functions (e.g., `document.getElementById`) creates a significant performance bottleneck.
**Action:** Always cache DOM elements outside of high-frequency intervals and click handlers to improve responsiveness and reduce CPU load.
