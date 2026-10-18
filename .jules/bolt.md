## 2026-10-18 - DOM Querying in Game Loop
**Learning:** In clicker games with high-frequency intervals (e.g. 500ms for continuous damage) and rapid click events, repeatedly querying the DOM using `document.getElementById()` creates unnecessary performance overhead.
**Action:** Always cache references to static DOM elements that are frequently updated, especially those used for health bars, text updates, or triggered sound effects, instead of querying them continuously.
