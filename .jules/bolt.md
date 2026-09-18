## 2026-09-18 - Caching DOM lookups in frequent events
**Learning:** Repetitive DOM querying in intervals and event handlers adds substantial overhead.
**Action:** Always extract and cache elements statically initialized for repetitive callbacks like clickers and requestAnimationFrames.
