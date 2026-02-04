## 2026-02-04 - DOM Manipulation in Game Loop
**Learning:** The game loop relies on frequent `getElementById` and `querySelector` calls within `setInterval` (500ms). This creates unnecessary overhead.
**Action:** Cache DOM elements in global constants when they are accessed repeatedly in the game loop.
