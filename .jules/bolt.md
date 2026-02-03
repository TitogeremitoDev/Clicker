## 2024-05-22 - Initial Performance Journal
**Learning:** Application uses direct DOM manipulation in `setInterval` loop (500ms).
**Action:** Cache DOM elements to reduce reflow/repaint triggers and JS execution time during the game loop.
