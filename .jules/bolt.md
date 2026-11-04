## 2024-11-04 - Cache DOM Lookups for Frequent Events
**Learning:** Constantly querying the DOM (using `document.getElementById` and `document.querySelector`) inside high-frequency functions like click handlers and tight `setInterval` loops (e.g. 500ms) leads to unnecessary layout thrashing/re-evaluation and performance degradation, especially in a clicker game context where the event fires very rapidly.
**Action:** Always cache these DOM references in a higher scope instead of querying them continuously within the hot path.
