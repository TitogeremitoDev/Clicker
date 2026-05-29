## 2024-05-24 - Cached DOM Elements in High-Frequency Paths
**Learning:** This Vanilla JS clicker game had an expensive anti-pattern where every click and every 500ms background interval queried the DOM (e.g., `document.getElementById`) to update health bars and text.
**Action:** Always cache DOM elements in variables at the top of the file when dealing with rapid user inputs or high-frequency game loops to prevent unnecessary DOM traversals.
