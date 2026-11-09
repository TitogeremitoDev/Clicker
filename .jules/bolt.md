## 2024-05-15 - DOM Lookup Bottleneck in Vanilla JS Interval
**Learning:** Found a vanilla JS architecture performing multiple `document.getElementById` and `document.querySelector` lookups inside a 500ms `setInterval` loop and a high-frequency click listener. This blocks the main thread unnecessarily.
**Action:** Always extract and cache repeated DOM lookups into global/outer scope variables when they are within high-frequency paths (`setInterval`, `requestAnimationFrame`, or click spam elements).
