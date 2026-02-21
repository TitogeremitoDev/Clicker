## 2026-02-21 - Implicit Globals and DOM Caching
**Learning:** Legacy JS often relies on implicit globals from HTML IDs (e.g., `id="daño"` creating `window.daño`). This is fragile and breaks when variables are scoped correctly or refactored. Caching DOM elements in a `ui` object not only boosts performance but also eliminates these risky implicit references.
**Action:** When refactoring for performance, explicitly replace implicit ID globals with cached `document.getElementById` references to prevent `ReferenceError`s.
