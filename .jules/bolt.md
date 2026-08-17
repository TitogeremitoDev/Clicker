## 2024-06-25 - Caching DOM lookups in rapidly executing events
**Learning:** For a clicker game, functions executing very frequently (on click and per 500ms intervals) should not rely on synchronous `document.getElementById` or `document.querySelector` queries as they degrade performance.
**Action:** Use a cached configuration object defining important DOM elements on page load, and replace inner references to them. This greatly mitigates reflow triggers and main-thread blockage during high-frequency interaction.
