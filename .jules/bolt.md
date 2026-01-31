## 2024-05-23 - DOM Querying in Loops
**Learning:** Frequent DOM queries (like `getElementById` or `querySelector`) inside loops (`setInterval`) or frequent events (`click`) cause unnecessary overhead.
**Action:** Cache DOM references in variables at initialization time to avoid repeated lookups.

## 2024-05-24 - Variable Shadowing in Refactoring
**Learning:** When refactoring legacy code to cache DOM elements, be careful not to name the new `const` variables the same as the variables they replace if those variables are implicitly global or used in a way that causes a Temporal Dead Zone (TDZ) or ReferenceError (e.g., `const x = x;` or `const x = document.getElementById(x)`).
**Action:** Use distinct names for cached elements (e.g., `elHit1` instead of `hit1`) or ensure the scope is cleanly separated.
