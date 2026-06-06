## 2024-05-15 - DOM element caching in hot paths
**Learning:** Repetitively querying the DOM for the same elements using `document.getElementById` and `document.querySelector` inside high-frequency event listeners (like rapidly clicking a boss) or intervals causes unnecessary overhead and slows down execution.
**Action:** Always cache these DOM element lookups as global or outer-scope variables so they are queried only once upon initialization.
