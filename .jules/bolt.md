# Bolt's Journal

## 2024-05-22 - [Optimizing DOM Manipulation]
**Learning:** This codebase relies heavily on direct DOM manipulation (e.g., `document.getElementById`, `document.querySelector`) inside high-frequency loops (`setInterval` every 500ms) and event handlers.
**Action:** Implement a caching strategy (`ui` object) to store references to frequently accessed DOM elements, reducing the overhead of DOM queries in the critical path.
