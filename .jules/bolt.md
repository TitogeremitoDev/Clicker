## 2024-05-24 - DOM Querying in Game Loop
**Learning:** This clicker game queries the DOM repeatedly on every mouse click (`document.getElementById("salud")`, `document.getElementById("hit1")`, etc.) and inside a 500ms `setInterval` for continuous damage. This causes unnecessary synchronous layout thrashing/DOM recalculation overhead on the main thread during "hot" paths (rapid clicking).
**Action:** Always cache frequently accessed DOM elements outside of event listener callbacks and interval loops to improve performance, especially in highly interactive browser-based games.
