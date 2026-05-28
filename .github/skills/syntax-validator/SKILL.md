---
name: syntax-validator
description: >
  ALWAYS run after every file edit or code generation. Checks for missing imports,
  unmatched brackets, broken JSX, unclosed strings, and undefined references before
  presenting any output. Non-optional — runs automatically as part of every DevMentor response.
---

# Post-Edit Syntax Validator

Instructions for DevMentor to follow — this skill runs automatically, no user command needed.

## When to use

Run this skill **automatically** after every single one of these events — no exceptions:
- Any file is created or edited
- Any code block is generated in a response
- Any JSX component is scaffolded
- Any import statement is added or changed

Do NOT wait for the user to ask. This is a non-negotiable post-edit step built into DevMentor's workflow.

## Purpose

Catch syntax and import errors **before** they reach the browser or compiler. This skill runs automatically after every code change produced by DevMentor.

## Validation Passes

### Pass 1 — Import Integrity

Verify every imported symbol exists in its source package.

Common failure patterns:
```js
// ❌ 'Github' does not exist in lucide-react
import { Github } from 'lucide-react';

// ✅ Correct alternatives
import { Github } from 'lucide-react';     // v0.x only
import { GitBranch } from 'lucide-react';  // always available
```

**Action**: Cross-reference the import name against the package's exported symbols. If uncertain, suggest the closest valid alternative.

### Pass 2 — Bracket & Brace Balance

Count and match: `{` `}` · `(` `)` · `[` `]` · `<` `>` (JSX)

- Every opening delimiter must have a closing counterpart.
- JSX self-closing tags must end with `/>`.
- Check nested objects/arrays in `style={{}}` props.

### Pass 3 — JSX Structure

- All custom components start with an uppercase letter.
- All HTML tags are lowercase and properly closed or self-closed.
- No sibling root elements without a wrapping fragment `<>...</>`.
- `key` prop present on all elements inside `.map()`.

### Pass 4 — String & Template Literal Integrity

- All `"`, `'`, and `` ` `` are opened and closed on the same expression.
- Template literal expressions `${...}` are complete.
- No unescaped quotes inside same-quote strings.

### Pass 5 — Variable & Reference Check

- No variables used before declaration.
- No references to undefined functions or components.
- Destructured variables exist on their source object.
- Hook calls (`useState`, `useEffect`) are at the top level of a component, not inside conditionals.

## Output Format

### Issues Found

```
⚠️  Syntax Validation Report
════════════════════════════════════════
Found 1 issue in src/components/HeroSection.jsx:

  Line 2 │ IMPORT ERROR
          │ 'Github' is not exported by 'lucide-react'
          │ Fix: Remove 'Github' from import, or replace with 'GitBranch'

✅ Fix applied in the code below.
════════════════════════════════════════
```

### No Issues

```
✅ Syntax Validation — All checks passed (5/5)
```

## Severity Levels

| Level | Symbol | Meaning | Action |
|-------|--------|---------|--------|
| Error | `❌` | Will crash at runtime/compile time | Must fix before outputting |
| Warning | `⚠️` | May cause unexpected behavior | Fix and note to user |
| Info | `ℹ️` | Style/convention deviation | Note only, do not block |

## Auto-Trigger Contract

This skill is triggered automatically by DevMentor after every:
- File creation
- File edit (partial or full)
- Code block generation

The validation result header MUST appear before every code block in the response.
