## 2024-05-21 - [DOM Caching in Game Loops]
**Learning:** Repetitive `document.getElementById` calls inside a high-frequency game loop (`setInterval`) create measurable overhead, even in modern browsers.
**Action:** Cache frequently accessed DOM elements in a top-level object (`const ui = {...}`) to avoid repeated DOM traversals, especially for elements updated every tick (like health bars).
