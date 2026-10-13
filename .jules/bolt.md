## 2023-10-13 - Vanilla JS DOM caching
**Learning:** In vanilla JS games with high-frequency interactions (like clickers and game loops), repeatedly querying the DOM with `document.getElementById` or `document.querySelector` inside event handlers and `setInterval` functions is a major bottleneck.
**Action:** Cache these DOM elements globally once during initialization to avoid re-evaluating the DOM tree on every click or game tick.
