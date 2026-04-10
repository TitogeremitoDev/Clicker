## 2024-04-10 - Cache DOM Elements
**Learning:** In vanilla JS games like this clicker, repeatedly querying the DOM in game loops or frequent event listeners (like `setInterval` for continuous damage or click events) is a performance bottleneck.
**Action:** Cache DOM elements like the health bar (`document.getElementById("salud")`) outside the functions where they are frequently used.
