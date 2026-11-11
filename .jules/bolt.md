## 2024-05-24 - DOM Caching in high frequency intervals
**Learning:** Querying the DOM elements repeatedly within high frequency interactions like `setInterval` and rapidly clicked elements leads to measurable performance drop in vanilla javascript applications.
**Action:** When a project heavily uses `document.getElementById` and doesn't rely on frontend frameworks, explicitly check for these calls in frequent paths (like `setInterval` or multiple event listeners) and replace them with variables pointing to cached DOM elements.
