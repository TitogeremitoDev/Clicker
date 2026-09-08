## 2024-05-18 - Repeated DOM access in game loops
**Learning:** Frequent calls to `document.getElementById` inside recurring game functions (like attack handlers or damage loops) can significantly impact performance, especially in a game loop.
**Action:** Cache these DOM elements outside the function scope so they are retrieved only once when the script loads, avoiding the overhead of querying the DOM repeatedly.
