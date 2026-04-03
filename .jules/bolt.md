## 2024-05-24 - DOM Query Caching in High-Frequency Loops
**Learning:** Repetitive DOM queries (`document.getElementById`) inside high-frequency events (clicks) and rapid `setInterval` loops (e.g., a 500ms continuous damage loop in `clicker.js`) can block the main thread and degrade frontend performance.
**Action:** Always cache frequently accessed DOM elements at the script's root scope (global or module level) if the elements exist on load, rather than querying them repeatedly within loops or event listeners. Ensure ad-hoc fixing scripts are deleted before committing.
