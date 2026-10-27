## 2026-10-27 - Optimize DOM queries
**Learning:** Found redundant DOM queries (`document.getElementById`) inside high-frequency execution paths like click event listeners and `setInterval` game loops.
**Action:** Always verify if DOM queries can be cached at the module/script level to avoid repeating costly queries.
