## 2023-10-27 - Caching DOM lookups in event loops
**Learning:** Performing `document.getElementById` and `document.querySelector` operations directly inside rapid event listeners (like click handlers and `setInterval` ticks) causes a noticeable performance drop in pure JavaScript codebases without VDOM.
**Action:** When inspecting vanilla JS applications, globally cache elements that are required for real-time interactions (clicks, interval timers) at script initialization rather than querying them repeatedly within the hot path.
