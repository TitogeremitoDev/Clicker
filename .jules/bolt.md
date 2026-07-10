## 2024-07-10 - Caching DOM lookups in clicker game
**Learning:** Found a performance bottleneck in `clicker.js` where `document.getElementById` was called repeatedly inside the high-frequency `click` event listener and a 500ms `setInterval`. This caused unnecessary layout thrashing.
**Action:** Next time working on a high-frequency event loop (like a game loop or rapid click handler), cache DOM element references outside the loop to improve responsiveness.
