## 2024-05-24 - DOM Query Performance in Clicker Games
**Learning:** High-frequency event architectures like clicker games (where users spam click and a continuous damage loop runs) can suffer significant performance degradation and CPU overhead from repeatedly querying the DOM (`document.getElementById`, `document.querySelector`) inside event listeners and `setInterval` ticks.
**Action:** Always extract and cache frequently accessed DOM elements into a single `domCache` object at the top level to avoid querying the DOM inside hot paths.
