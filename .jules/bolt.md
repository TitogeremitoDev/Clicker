## 2026-09-15 - Cached DOM Elements in High-Frequency Loops
**Learning:** Found an optimization by caching DOM elements in clicker.js which is accessed multiple times during frequent click events and setInterval. Querying DOM elements (document.getElementById) inside hot paths creates unnecessary layout thrashing.
**Action:** Always pre-cache DOM elements that are repeatedly targeted within intervals and high-frequency event listeners.
