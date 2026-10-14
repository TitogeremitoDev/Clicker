## 2026-10-14 - DOM Query Caching
**Learning:** Caching DOM queries outside of high-frequency event listeners (like clicks in a clicker game) prevents unnecessary DOM traversal and significantly improves performance.
**Action:** Always cache elements accessed inside hot loops or fast event listeners.
