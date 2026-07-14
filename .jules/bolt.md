## 2024-07-14 - DOM Element Caching in Core Loop
**Learning:** In simple vanilla JS clicker games without frameworks, rapidly repeated calls like `document.getElementById` inside `setInterval` loops (e.g. `dañocontinuo` running every 500ms) or rapid player clicking (boss hits) can cause unnecessary CPU spikes.
**Action:** Extract query selectors and getElementById calls into top-level constants when modifying similar vanilla JS loops.
