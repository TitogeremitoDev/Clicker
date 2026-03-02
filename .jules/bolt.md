## 2024-06-18 - [Cache DOM Queries]
**Learning:** Frequent DOM queries (`document.getElementById`, `document.querySelector`) inside loops like `dañocontinuo` created overhead. In vanilla architectures running `defer`, querying the DOM globally at the top level is perfectly safe since the document has parsed.
**Action:** Use a global object (`ui`) to declare constants for cached elements at the top of the file rather than locally querying the DOM on interval loops or frequent clicks.
