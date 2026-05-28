## 2024-05-28 - DOM Query Optimization in Game Loop
**Learning:** In highly frequent event listeners (like a boss click) and setInterval game loops (running every 500ms), querying the DOM using `document.getElementById` repeatedly blocks the main thread.
**Action:** Always cache stable DOM element references outside of the game loop/intervals in plain JS/HTML projects to improve rendering and execution speed.
