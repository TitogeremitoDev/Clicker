# Bolt's Journal

## 2024-05-23 - Initial Setup
**Learning:** Performance journals help track decisions and outcomes.
**Action:** Use this journal to record specific performance learnings for this project.

## 2024-05-23 - Caching DOM Queries in Game Loops
**Learning:** In a `setInterval` game loop running every 500ms, repeated `document.getElementById` calls are redundant overhead. Caching these elements in a global `ui` object avoids this cost.
**Action:** When identifying high-frequency loops (like game ticks or scroll handlers), always check for and hoist DOM queries outside the loop.
