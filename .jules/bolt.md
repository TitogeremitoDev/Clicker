## 2023-10-25 - Caching Hot Path DOM Lookups
**Learning:** In vanilla JavaScript games with intense user interaction (rapid clicking) and continuous damage intervals (`setInterval`), redundant DOM queries (like `document.getElementById` and `document.querySelector`) inside event listeners and tick functions cause significant layout thrashing and high execution times.
**Action:** Always cache these DOM element references at file scope to minimize repeated lookups in hot paths.
