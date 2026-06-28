## 2024-06-28 - Caching DOM Queries in Hot Paths
**Learning:** Found multiple repeated `document.getElementById` calls happening inside a `setInterval` running every 500ms and inside high-frequency `click` event handlers. This forces the browser to repeatedly traverse the DOM tree, causing an unnecessary performance bottleneck.
**Action:** Cached the elements using variables declared at the module level when the file runs, to save CPU cycles inside the hot paths and avoid unneeded reflow risks.
