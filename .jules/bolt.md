## 2024-05-24 - DOM Querying Bottleneck in Clicker Games
**Learning:** In a clicker game, attaching `document.getElementById` or `document.querySelector` inside the main click handler or a fast interval (`setInterval`) creates a massive performance bottleneck, causing unneeded GC and DOM traversals up to 10+ times a second.
**Action:** Always cache DOM nodes into constants at script initialization when working with high-frequency events like clicks in incremental games.
