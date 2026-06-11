## 2024-06-11 - DOM Query Bottleneck in Game Loop
**Learning:** In clicker games with continuous damage loops and rapid clicking, repeatedly querying the DOM (e.g., `document.getElementById` inside `setInterval` and `click` handlers) causes unnecessary layout thrashing and slows down the main thread.
**Action:** Always cache DOM elements outside of high-frequency loops (like damage intervals) and fast-firing event listeners (like clicking the boss) to improve responsiveness.
