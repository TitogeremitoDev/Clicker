## 2024-05-11 - DOM Querying in Clicker Games
**Learning:** Clicker games often suffer from performance bottlenecks when DOM queries (`getElementById`, `querySelector`) are executed on high-frequency events like clicks or rapid intervals. In this vanilla JS project, every click queried the DOM multiple times.
**Action:** Cache DOM elements in a top-level object to avoid re-querying the DOM tree on every high-frequency interaction.
## 2024-05-11 - Vanilla JS High-Frequency Event Optimization
**Learning:** In clicker games with rapid intervals (e.g. `dañocontinuo` called every 500ms) and user clicks, repeatedly querying the DOM using `getElementById` and `querySelector` causes unnecessary performance overhead, as it triggers synchronous document traversal repeatedly.
**Action:** Caching these variables globally when the file loads significantly reduces this overhead without sacrificing code readability.
