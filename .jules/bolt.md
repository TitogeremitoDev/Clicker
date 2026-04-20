## 2024-05-19 - DOM Element Caching in Interval Loops
**Learning:** Frequent DOM queries like `document.getElementById` inside high-frequency intervals (e.g., a 500ms damage loop) or rapid click handlers cause unnecessary layout thrashing and main thread blocking in vanilla JS clicker games.
**Action:** Always cache stable DOM elements referenced inside game loops, intervals, or frequent event handlers to variables at initialization.
