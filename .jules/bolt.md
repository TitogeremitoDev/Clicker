## 2024-04-07 - Cached DOM Queries in Hot Paths
**Learning:** Calling `document.getElementById` or `document.querySelector` inside frequently executed hot paths (such as click event listeners like `boss.addEventListener("click", ...)` or interval callbacks like `setInterval` for `dañocontinuo`) causes unnecessary performance overhead by re-querying the DOM repeatedly on every invocation.
**Action:** Always extract and cache frequently accessed DOM elements into variables at an outer scope, reusing the reference across callbacks to avoid duplicate traversals and speed up event handling.
