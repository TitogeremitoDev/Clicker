## 2024-05-18 - Vanilla JS DOM Caching in Clicker Game
**Learning:** In simple vanilla JS games heavily relying on intervals and rapid user interaction (like a clicker game), querying the DOM via `document.getElementById` or `querySelector` inside `setInterval` or click event handlers is a significant performance bottleneck.
**Action:** Cache static DOM elements as global constants at the top of the script on load, rather than querying them every time an event triggers or an interval ticks, to reduce CPU overhead and keep frame rates high.
