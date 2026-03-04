## 2024-05-18 - [DOM caching]
**Learning:** frequent DOM queries in high-frequency loops (like `dañocontinuo`) can cause unnecessary overhead.
**Action:** Cache DOM elements globally in top-level `ui` object.