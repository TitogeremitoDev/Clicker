## 2024-04-26 - DOM Queries in Hot Loops
**Learning:** Found an anti-pattern in the clicker where `document.getElementById` and `document.querySelector` are called repeatedly inside high-frequency event handlers like a `500ms` `setInterval` loop and rapid click handlers.
**Action:** Always cache DOM elements outside of loops or rapidly firing event handlers to prevent continuous and unnecessary document parsing/lookups, saving CPU cycles and reducing jank.
