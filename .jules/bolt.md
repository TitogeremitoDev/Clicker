## 2024-05-18 - [Vanilla JS App with DOM queries in high-frequency loops]
**Learning:** When working with vanilla JS apps, DOM elements accessed inside click listeners and `setInterval` blocks should be cached into module-level variables early on. If attempting to refactor this via automated Python `.replace()`, be careful of duplicate insertions if the target strings exist in multiple places (such as `oro-texto` setting).
**Action:** I will ensure my `replace` scripts target unique boundaries or only run once if patching JS code using scripts.
