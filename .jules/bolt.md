## 2026-07-03 - [Cache DOM queries in core loop]
**Learning:** In vanilla JS clicker games, DOM queries (like `document.getElementById`) inside high-frequency event listeners (like fast clicks or `setInterval` loops) create unnecessary performance overhead.
**Action:** Always cache frequently accessed DOM elements at the module/file level if they don't change dynamically to avoid redundant DOM lookups on every tick or user interaction.
