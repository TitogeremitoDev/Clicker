## 2024-05-18 - Caching DOM Queries in Clicker Game Loops
**Learning:** Repetitive DOM queries (like `document.getElementById` and `document.querySelector`) inside high-frequency event listeners (e.g., `setInterval` ticks or rapid user clicks in a clicker game) significantly degrade performance by causing layout thrashing and increased garbage collection overhead.
**Action:** Extract frequently accessed DOM elements into module-level, cached constants at the top of the file, and reset `.currentTime = 0` on cached audio elements before calling `.play()` to optimize repeated rapid sounds.
