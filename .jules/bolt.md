## 2026-10-03 - DOM Queries in Hot Paths
**Learning:** Found an anti-pattern in vanilla JS clicker games where `document.getElementById` and `querySelector` are repeatedly called inside rapid loops (e.g. 500ms intervals) and high-frequency click handlers.
**Action:** Always cache these DOM elements at the top level when optimizing vanilla JS loops/event handlers. It's a clean, safe, and measurable performance win.
