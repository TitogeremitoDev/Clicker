## 2024-05-13 - Caching DOM elements in vanilla JS game
**Learning:** Repeatedly querying the DOM in game loops or click events (like `document.getElementById`) is a classic performance bottleneck. Caching these queries at the top level saves significant CPU cycles.
**Action:** Always extract DOM queries out of hot paths like `setInterval` or click event handlers.
