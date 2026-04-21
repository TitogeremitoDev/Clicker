## 2024-05-24 - [Cache DOM queries for performance]
**Learning:** Repetitive DOM querying in high-frequency event handlers, such as `setInterval` functions or `click` handlers, is a common performance bottleneck in this application structure that queries DOM over and over.
**Action:** Always cache the queried DOM elements globally or in the appropriate closure before utilizing them in recurrent contexts.
