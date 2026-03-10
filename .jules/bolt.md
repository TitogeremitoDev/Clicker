## 2024-05-17 - [DOM Cache Optimization in High-Frequency Intervals]
**Learning:** High-frequency `setInterval` functions (like `dañocontinuo`) parsing DOM nodes explicitly (`document.getElementById`) causes unnecessary rendering recalculations in this codebase.
**Action:** Use a global `ui` object to cache static elements on load. Because the script is loaded with `defer`, DOM parsing is already complete, avoiding null references without needing `DOMContentLoaded` wrappers.
