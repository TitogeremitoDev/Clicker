## 2024-05-18 - Cached DOM Elements in High Frequency Click Events
**Learning:** Found an app (vanilla JS clicker) where `document.getElementById` and `document.querySelector` are being queried every single frame (500ms intervals) or click handler. Doing this in hot paths is an anti-pattern.
**Action:** When seeing `getElementById` or `querySelector` inside `setInterval`, `requestAnimationFrame`, or frequent user inputs, create cached variables at the module or script level so they don't block the main thread and slow down execution.
