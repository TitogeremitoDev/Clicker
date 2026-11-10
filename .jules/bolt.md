## 2026-11-10 - DOM caching in clicker loops
**Learning:** Found frequent `document.getElementById` calls in vanilla JavaScript game loop (`setInterval`) and click handlers. This blocks the main thread with repetitive DOM querying.
**Action:** Extract DOM element lookups into global cache constants near the top of the file to reuse them in loops without repeatedly calling `getElementById`.
