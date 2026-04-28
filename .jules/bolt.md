## 2026-04-28 - DOM Caching for Game Loop Performance
**Learning:** In a vanilla JS incremental game, repeatedly querying the DOM using `document.getElementById` and `document.querySelector` inside a high-frequency `setInterval` (every 500ms) or a repeated `click` event listener causes noticeable overhead. The DOM lookup forces the browser to search the document tree continuously.
**Action:** Always declare constants to cache DOM elements at the top level of the module for components that are repeatedly updated in game loops or fast event listeners.
