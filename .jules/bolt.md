## 2024-04-17 - DOM Queries Bottleneck
**Learning:** In a clicker game context, inline DOM queries like `document.getElementById` and `document.querySelector` executed inside rapidly firing click handlers or setInterval game loops add unnecessary main thread blocking and lag.
**Action:** Always extract and cache elements referenced inside hot paths (e.g. `boss.addEventListener("click", ...)` or `setInterval`) at the file or component scope to avoid repetitively querying the DOM tree.
