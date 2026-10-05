## 2024-10-05 - Global Cache for Vanilla JS Hot Loops
**Learning:** In vanilla JavaScript applications running in browsers without bundling, inline `document.getElementById` and `document.querySelector` within `setInterval` loops or frequent event handlers (like clicking a boss) causes significant re-querying of the DOM tree. Caching these elements locally resolves the CPU drain and prevents stuttering in games/clickers.
**Action:** When approaching vanilla JS projects, search for `.addEventListener` and `setInterval` to cache any inline DOM selectors globally at the top level.
