## 2024-11-20 - [DOM Query Optimization]
**Learning:** Found a common performance anti-pattern in vanilla JS game loops/rapid click handlers: repeatedly calling `document.getElementById` and `document.querySelector` on every tick/click.
**Action:** Next time working on a high-frequency event handler or game loop in vanilla JS, immediately check for and cache repeated DOM queries at the global/module level to avoid layout thrashing and DOM traversal overhead.
