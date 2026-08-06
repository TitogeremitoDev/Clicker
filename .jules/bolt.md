## 2024-08-06 - DOM Query Caching
**Learning:** Found multiple repeated `document.getElementById` calls inside high-frequency functions such as an interval running every 500ms (`dañocontinuo`) and a user click event listener on the main entity (`boss.addEventListener`). Repeatedly querying the DOM in these hot paths is a major source of frame drops and wasted CPU cycles.
**Action:** Caching these DOM elements at the module level prevents unnecessary layout thrashing/re-queries and is a crucial performance optimization for this specific architecture.
