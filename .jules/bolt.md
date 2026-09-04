## 2024-09-04 - Cache DOM queries in hot paths
**Learning:** Calling `document.getElementById` or `document.querySelector` inside high-frequency event listeners (like every click in a clicker game) or `setInterval` loops causes measurable performance degradation.
**Action:** Always extract and cache these DOM references at module scope during initialization when working on performance-critical game loops or listeners.
