## 2024-05-18 - Repetitive DOM queries in Clicker Game
**Learning:** Found repetitive `document.getElementById` and `document.querySelector` inside high-frequency event handlers (mouse clicks) and intervals in plain JavaScript game, which causes significant performance overhead in the form of re-renders and blocking.
**Action:** Always cache high-frequency queried DOM elements into variables at the top of the file to prevent unnecessary DOM traversal.
