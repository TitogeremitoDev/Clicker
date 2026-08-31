## 2024-05-18 - High Frequency DOM Querying
**Learning:** Frequent DOM queries via `document.getElementById` inside high-frequency event listeners (like rapidly clicking in a clicker game) or intervals can cause CPU overhead.
**Action:** Cache the queried DOM elements in variables at a higher scope level whenever possible.
