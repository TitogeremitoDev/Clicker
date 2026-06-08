## 2024-05-24 - [DOM Query Optimization]
**Learning:** Frequent DOM queries inside event listeners and intervals (like setInterval) can cause performance bottlenecks in Vanilla JS, especially in games where user interactions (clicks) are rapid.
**Action:** Always cache DOM elements outside of loops, intervals, and frequent event listeners to avoid repeated expensive DOM lookups.
