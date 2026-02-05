## 2024-05-23 - [DOM Query Caching in Game Loop]
**Learning:** The application uses a 500ms `setInterval` game loop (`dañocontinuo`) that repeatedly queried the DOM using `getElementById` and `querySelector` for static elements. This caused unnecessary overhead in the hot path.
**Action:** In vanilla JS game loops, always cache DOM references in a global `const` or setup function outside the loop to minimize DOM access costs.
