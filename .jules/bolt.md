## 2024-05-22 - [DOM Caching in Loop-Heavy Architecture]
**Learning:** This codebase relies heavily on `setInterval` loops (e.g., `dañocontinuo`) and frequent click handlers that repeatedly query the DOM for the same elements (`getElementById` inside loops). This creates unnecessary overhead.
**Action:** Always scan for `document.getElementById` or `querySelector` inside `setInterval` or event listeners and hoist them to top-level `const` variables.

## 2024-05-22 - [JSDOM Script Injection]
**Learning:** To verify vanilla JS files that are included via `<script defer>` in `index.html` using JSDOM, removing the script tag from the HTML string before passing to JSDOM is crucial to avoid double execution when manually `eval`-ing the script content.
**Action:** Strip `<script src="...">` tags from HTML string before loading into JSDOM for unit testing vanilla JS files.
