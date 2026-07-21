## 2024-05-24 - Uncached DOM lookups in high-frequency event handlers
**Learning:** Frequent DOM lookups inside event listeners (like click) and `setInterval` loops (like `dañocontinuo`) can cause unnecessary performance bottlenecks and latency.
**Action:** Always cache DOM elements at the top-level or outside the frequently called functions when they are not expected to be dynamically recreated.
