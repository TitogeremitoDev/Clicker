## 2025-02-18 - Caching DOM Elements in Vanilla JS
**Learning:** Legacy vanilla JS codebases often rely on repeated DOM queries (`document.getElementById`) inside loops, which is a significant performance bottleneck. However, refactoring to cached constants can expose hidden bugs where variables were implicitly relying on global element IDs (e.g., `innerText = daño`).
**Action:** When optimizing legacy DOM manipulation, always grep for implicit global variable usage (IDs as variables) before replacing with cached constants, and be prepared to fix small bugs revealed by the refactor.
