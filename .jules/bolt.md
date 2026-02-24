# Bolt's Performance Journal

## 2024-05-22 - Repeated DOM Queries
**Learning:** Frequent `getElementById` and `querySelector` calls inside game loops (like `dañocontinuo`) and frequent event handlers (like `muerteboss`) can add up, causing unnecessary overhead. Caching these elements in a top-level object avoids this cost.
**Action:** Always cache DOM references for elements that are accessed repeatedly, especially within `setInterval` or animation frames.
