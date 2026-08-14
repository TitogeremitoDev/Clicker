## 2024-08-14 - Cached DOM elements in clicker loop
**Learning:** Vanilla JS clicker games without frameworks often suffer from repeated synchronous DOM lookups (`document.getElementById`) inside their high-frequency click handlers and `setInterval` loops.
**Action:** Always verify if DOM elements queried in hot paths (clicks or fast loops) can be cached statically at the top of the script file.
