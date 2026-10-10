## 2024-05-14 - Caching repeated DOM element lookups
**Learning:** Frequent calls to `document.getElementById` inside high-frequency event handlers (like rapid clicks in a clicker game) or `setInterval` ticks can cause measurable performance lag due to repeated DOM tree traversals.
**Action:** Always inspect `.addEventListener("click", ...)` and `setInterval`/`requestAnimationFrame` callbacks for repeated DOM queries and lift them out into cached variables at the outer scope.
