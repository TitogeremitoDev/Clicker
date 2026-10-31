
## 2024-11-20 - Cache DOM Elements in High-Frequency Game Loops
**Learning:** Repetitive querying for the same DOM elements (e.g., `document.getElementById('salud')`, `document.getElementById('hit1')`) within high-frequency event listeners (like a continuous `setInterval` every 500ms for damage, or rapid user clicks) significantly impacts performance due to unnecessary layout thrashing and synchronous query overhead.
**Action:** When working on clicker games or applications with continuous game loops and event listeners, identify frequently queried DOM nodes, cache them in variables at initialization (or module scope), and reuse them inside the hot paths.
