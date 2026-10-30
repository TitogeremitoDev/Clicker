## 2024-05-17 - DOM Querying in Animation Loops
**Learning:** In a clicker game structure where rapid clicks trigger UI updates and game loops (`setInterval`) constantly evaluate state, redundant `document.getElementById` and `document.querySelector` calls act as a significant hidden bottleneck on the main thread, wasting cycle time on lookups instead of logic.
**Action:** Always extract and cache statically placed DOM elements that will be mutated frequently during loops or rapidly occurring events (e.g. clicks) to a global or module-scoped variable right after they become available.
