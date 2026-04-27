## 2026-04-27 - DOM caching in interval loops
**Learning:** High-frequency functions like `setInterval` and click handlers that spam DOM lookups with `getElementById` can be optimized by caching the variables at the top of the file. This creates a global variable reference to the elements and prevents the layout parsing to locate the element by id every time it fires.
**Action:** Always check the contents of `setInterval` loops and click events for DOM querying that can be cached outside.
