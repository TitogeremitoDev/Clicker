## 2024-11-03 - DOM Caching Optimization
**Learning:** Frequent DOM queries inside event listeners and setInterval blocks (like dañocontinuo) can cause significant performance bottlenecks in simple interactive applications like this clicker game. Elements like the health bar, text containers, and sounds are accessed repeatedly.
**Action:** Next time, identify 'hot paths'—functions that execute continuously or trigger on user spam-click—and proactively move document.getElementById or document.querySelector outside the scope so the element references are reused.
