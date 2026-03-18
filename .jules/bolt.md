## 2024-04-10 - DOM Caching in Hot Paths
**Learning:** In a clicker game (like this one), the main `click` handler on the boss and `setInterval` game loops can fire very frequently. If `document.getElementById` is inside these functions, it leads to redundant, synchronous DOM queries on every click or tick.
**Action:** Cache these DOM elements at the module level on load. This is a quick win with a measurable reduction in synchronous work per frame during rapid input.
