## 2024-05-18 - Caching DOM elements in high-frequency paths
**Learning:** Querying the DOM (e.g., `document.getElementById`) repeatedly inside high-frequency intervals (like 500ms intervals or quick click listeners in a clicker game) adds unnecessary overhead and can cause micro-stutters over time.
**Action:** Cache DOM elements in constants at the top level of the file when the script initializes, and use these references in high-frequency functions.
