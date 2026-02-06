## 2024-05-22 - Direct DOM Manipulation Bottleneck
**Learning:** The application's core loop (`dañocontinuo`) and event handlers rely on repeated `document.getElementById` calls for static elements. Given the vanilla JS architecture, caching these references is the primary optimization strategy.
**Action:** When working on this codebase, always look for repeated DOM queries in `setInterval` loops and cache them globally.
