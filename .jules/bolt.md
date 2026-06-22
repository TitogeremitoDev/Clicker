## 2024-06-22 - Cached DOM nodes
**Learning:** Repeatedly querying the DOM in rapid click events and short intervals causes synchronous bottlenecks. Caching nodes globally outside these functions eliminates this.
**Action:** Replaced repetitive querySelector and getElementById inside events with globally cached DOM element variables.
