## 2024-05-01 - DOM element caching in rapid click loops
**Learning:** Repetitive DOM querying (`getElementById`, `querySelector`) inside highly frequent event listeners (e.g. clicker game boss clicks, or very fast intervals) can cause noticeable performance overhead, micro-stutters and increased CPU usage, especially in web-based gaming where frames drop easily.
**Action:** Always pre-cache DOM elements at the module level in a `DOM` object or separate variables when they will be repeatedly modified during user-intensive loops or tight interval loops.
