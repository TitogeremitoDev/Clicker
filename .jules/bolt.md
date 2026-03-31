## 2024-05-24 - Cache frequently accessed DOM elements
**Learning:** In a clicker game architecture with high-frequency loops (like `dañocontinuo` or `click` event listeners), repeating `getElementById` or `querySelector` inside the loop creates a severe performance bottleneck and CPU usage spike.
**Action:** Always cache these DOM element references outside the event listeners/intervals when their reference does not change over time.
