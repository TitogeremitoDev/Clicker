## 2024-07-13 - Caching DOM queries in game loops
**Learning:** In a vanilla JS clicker game, doing DOM queries (like `getElementById` or `querySelector`) inside user click event handlers and game intervals creates measurable overhead, as they are invoked constantly.
**Action:** Extract and cache frequently accessed DOM elements outside of high-frequency events (clicks, `setInterval`) to prevent unnecessary DOM traversal.
