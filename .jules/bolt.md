## 2024-04-15 - DOM Caching in Vanilla JS

**Learning:** This vanilla JS application frequently queries the DOM (e.g., `getElementById` and `querySelector`) inside high-frequency event listeners (click) and `setInterval` loops. Repeatedly querying the DOM in synchronous event handlers (especially those triggered at intervals or repeatedly via clicks) can lead to unnecessary main thread blocking and layout thrashing.

**Action:** Always cache frequently accessed DOM elements at the module level or outside the scope of loops/event listeners to avoid redundant recalculations.