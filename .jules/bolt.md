## 2024-05-24 - Document Object Caching
**Learning:** In simple JS applications with frequent DOM interactions, repetitive `document.getElementById()` or `querySelector()` inside high-frequency event listeners (like click events on a clicker game) causes unnecessary DOM traversal overhead.
**Action:** Cache frequently accessed DOM elements outside the event listeners to avoid re-querying the DOM on every click.
