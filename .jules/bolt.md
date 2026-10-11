## 2023-10-11 - DOM Caching Optimization in Clicker Game
**Learning:** High-frequency events (like clicks and 500ms intervals in a clicker game) suffer significantly from redundant `document.getElementById` calls.
**Action:** Always verify if a queried DOM element can be cached globally, especially for audio playback and UI stat updates during loops/events.
