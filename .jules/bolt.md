## 2026-06-24 - Cached DOM Elements in High-Frequency Loops
**Learning:** In vanilla JavaScript auto-clicker games, calling `document.getElementById` inside a high-frequency `setInterval` and `click` event listener is a performance bottleneck. The DOM doesn't change, so these lookups are redundant and slow down the main thread.
**Action:** Always cache static DOM elements outside of event handlers and interval loops to improve performance.
