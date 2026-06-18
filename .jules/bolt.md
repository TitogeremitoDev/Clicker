## 2024-05-24 - DOM Query Caching in High-Frequency Events
**Learning:** This codebase uses `setInterval` and rapid click events without caching DOM elements, leading to unnecessary and expensive document-wide lookups on every single frame/click (e.g. `document.getElementById('salud')` repeatedly called in a clicker game).
**Action:** Always cache DOM elements outside of intervals and high-frequency event listeners (`click`, `mousemove`, etc.) in vanilla JS projects. Also look for math computations that can be moved inside conditional blocks to avoid computing them when they aren't needed.
