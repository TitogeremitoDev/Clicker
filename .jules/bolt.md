## 2025-02-23 - Implicit Global Variables from HTML IDs
**Learning:** Found a critical bug and performance anti-pattern where HTML elements with `id="daño"` were accessed as implicit global variables (e.g., `daño`). This returned an `HTMLCollection` instead of the expected number, causing `innerText` to display `[object HTMLCollection]`. Implicit globals are also slower due to scope chain lookup and potential DOM queries.
**Action:** Always explicitly query DOM elements using `document.getElementById` or `querySelector` and cache them in variables. Never rely on ID-based global variables.
