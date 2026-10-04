## 2023-10-24 - Cached Hot Path DOM Queries
**Learning:** Vanilla JS games with tight game loops (e.g., setInterval or rapid clicks) can suffer from querying the DOM inside the loop.
**Action:** Always cache frequently accessed elements at the script's root in global variables before entering hot paths (event listeners or tick functions).
