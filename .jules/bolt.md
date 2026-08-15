## 2026-08-15 - DOM Element Caching in Vanilla JS
**Learning:** Frequent DOM querying (e.g. `document.getElementById`) inside highly repetitive events like rapid clicking or fast intervals in clicker games is a significant performance bottleneck.
**Action:** Cache frequently used DOM elements in variables/objects once on initialization, and reference those variables inside high-frequency handlers to avoid traversing the DOM tree repeatedly.
