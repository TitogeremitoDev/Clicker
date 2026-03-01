
## 2024-05-28 - [DOM Query Overhead in High-Frequency Loops]
**Learning:** Frequent queries like `document.getElementById` and `document.querySelector` inside a fast `setInterval` loop (like `dañocontinuo` running every 500ms) and heavily-used event listeners introduce measurable overhead in JavaScript engines and JSDOM benchmarks (e.g. ~809ms vs ~606ms for 10000 iterations).
**Action:** Always cache references to static DOM elements at initialization rather than querying them on every loop tick or event trigger. Create a central `ui` cache object to prevent duplicate queries across multiple functions.
