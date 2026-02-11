## 2024-10-24 - [Legacy File Encoding Issues]
**Learning:** `replace_with_git_merge_diff` fails on files with CRLF line endings when the environment assumes LF. The tool might not match multiline blocks if newlines differ.
**Action:** For legacy files with CRLF, read the full file content, modify it in memory, and write the full file back using Python scripts to handle binary replacement.

## 2024-10-24 - [DOM Caching in Game Loops]
**Learning:** In vanilla JS game loops (`setInterval`), repeated `document.getElementById` calls are a common anti-pattern.
**Action:** Always hoist DOM selections to the top level (if `defer` is used) or initialization phase to reduce overhead in the hot path.
