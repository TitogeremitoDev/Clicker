## 2025-05-23 - Repeated DOM Queries
**Learning:** The codebase relies on repeated DOM queries (`getElementById`, `querySelector`) inside high-frequency loops (`setInterval` every 500ms) and event handlers.
**Action:** Cache DOM references in global constants to avoid DOM traversal overhead in the game loop.
