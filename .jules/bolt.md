# Bolt's Journal

## 2024-05-22 - Missing package.json
**Learning:** The project lacks a `package.json` and build system, meaning standard `pnpm lint`/`pnpm test` commands are unavailable.
**Action:** I must temporarily scaffold a testing environment (or manual verification script) to verify changes, then clean up before submitting, or rely on careful manual verification instructions if scaffolding is too invasive.

## 2024-05-22 - Script Defer Loading
**Learning:** The `clicker.js` script is loaded with `defer`, meaning the DOM is fully parsed before execution. This allows top-level `document.getElementById` calls to work safely without a `DOMContentLoaded` event listener wrapper.
**Action:** When caching DOM elements, declare them at the top level of the script for simplicity and performance, avoiding unnecessary event listeners.
