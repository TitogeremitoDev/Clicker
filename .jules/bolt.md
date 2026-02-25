## Bolt's Performance Journal

## 2024-05-22 - Implicit Global Variable Anti-Pattern
**Learning:** The codebase relies on HTML IDs becoming global variables (e.g., `daño`), which can lead to confusion and bugs (e.g., `innerText = daño` assigns the element object, not a value).
**Action:** Always verify variable sources. When optimizing, be careful not to break this implicit behavior unless fixing the bug is in scope, but prefer explicit cached references.

## 2024-05-22 - JSDOM Benchmark Variance
**Learning:** Synthetic benchmarks in JSDOM for simple DOM operations can be noisy and may not perfectly reflect browser performance gains from caching.
**Action:** Run sufficient iterations (e.g., 10k+) and trust established best practices (DOM caching) even if synthetic benchmarks show small gains.
