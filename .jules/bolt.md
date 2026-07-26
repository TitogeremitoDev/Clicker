## 2024-05-24 - DOM Queries in High Frequency Event Listeners
**Learning:** Performing `document.getElementById` and `document.querySelector` inside rapid event listeners (like a mouse click on a boss in a clicker game) or frequent intervals causes synchronous layout recalculations and degrades performance by repeatedly querying the DOM tree.
**Action:** Cache DOM elements globally or in the outer scope of the listener, especially in game loops and high-frequency UI interactions.
