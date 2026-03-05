
## 2024-10-24 - [DOM Caching in High-Frequency Game Loops]
**Learning:** Caching DOM element references (e.g., in a `ui` object) avoids overhead in high-frequency loops (like `dañocontinuo` running every 500ms via `setInterval`) in vanilla JS applications, even if synthetic `jsdom` benchmarks may show negligible time differences compared to real browser rendering costs.
**Action:** Always cache DOM lookups outside of recursive functions, intervals, or frequent event listeners when working on pure JavaScript game loops.
