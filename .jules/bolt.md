## 2026-05-02 - Vanilla JS DOM Caching
**Learning:** Repetitive DOM traversal inside hot paths (e.g., click handlers and tight `setInterval` loops) is a significant bottleneck in this vanilla JS app.
**Action:** Always extract `document.getElementById` and similar queries into top-level constants when those elements are statically present and frequently mutated, rather than querying them on every tick or user interaction.
