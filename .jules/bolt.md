## 2024-05-20 - Prevent Layout Thrashing & Redundant DOM Lookup

**Learning:** This codebase (a vanilla JS clicker game) featured rapid DOM access (e.g. `document.getElementById('salud')`) inside 500ms `setInterval` callbacks (`dañocontinuo`) and fast click handlers (`boss.addEventListener('click')`). Continually querying the DOM structure limits maximum UI updates per second because it re-evaluates selectors on every game tick/click instead of storing their references.
**Action:** Always cache variables that map to frequently changed/accessed DOM nodes at the top global scope when working on vanilla JS clicker architectures to drastically reduce redundant tree traversals and parsing lookups.
