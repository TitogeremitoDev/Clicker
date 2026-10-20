## 2024-10-20 - Cache DOM Queries in Event Listeners and Intervals
**Learning:** Frequent DOM queries like `document.getElementById` in `setInterval` or rapid `click` event listeners can cause unnecessary performance overhead in vanilla JS applications without frameworks.
**Action:** Cache these DOM elements in variables outside the execution loop to save processing time on every click or tick.
