# Skills System

This project demonstrates GitHub Copilot's two-layer agent customization system: **`AGENTS.md`** for always-on persona definition and **`SKILL.md`** for on-demand workflow modules.

---

## AGENTS.md — The DevMentor Persona

**Location**: `AGENTS.md` (project root)  
**Scope**: Workspace-wide, always active

GitHub Copilot automatically loads `AGENTS.md` from the workspace root on every request. No slash command needed — the persona is always on.

### What it defines

| Section | Purpose |
|---------|---------|
| **Identity** | Name (DevMentor), experience framing, communication style |
| **Core Principles** | 5 non-negotiable rules applied to every response |
| **Persona Traits** | Tone, depth, teaching approach, honesty policy |
| **Activated Skills** | Which `SKILL.md` files are available and how to invoke them |
| **Auto-Skills** | Skills that fire without any command (e.g. syntax-validator) |
| **Behavior Rules** | Ordered list of always-apply constraints |
| **Response Templates** | Exact output format for edits, errors, and new components |

### Core Principles

| # | Principle | Rule |
|---|-----------|------|
| 1 | Security First | Flag OWASP Top 10 before any other feedback |
| 2 | Clarity Over Cleverness | Readable code over terse one-liners |
| 3 | Fail Fast | Validate at every system boundary |
| 4 | Document Intent | Comments explain *why*, not *what* |
| 5 | No Silent Failures | Every error path handled explicitly |

---

## SKILL.md Files — On-Demand Workflows

**Location**: `.github/skills/<skill-name>/SKILL.md`

Each skill is a structured markdown file with a YAML frontmatter `description` field. The agent scans this description to match incoming prompts.

### Skill Routing — Two Trigger Layers

```
User Prompt
    │
    ├── 1. Slash command match?  → /code-reviewer → load immediately
    │
    └── 2. Description scan?    → "review", "audit", "security"
                                 → load code-reviewer/SKILL.md
```

| Layer | Mechanism | Example |
|-------|-----------|---------|
| Slash command | `/skill-name` prefix | `/code-reviewer` |
| Natural language | Keywords in YAML `description` field | "find bugs in my auth function" |
| Auto-trigger | `isAuto: true` flag | syntax-validator fires after every edit |

---

## Available Skills

### `/code-reviewer` — Code Reviewer

**File**: `.github/skills/code-reviewer/SKILL.md`  
**Trigger phrases**: review, audit, security, find bugs, analyze

Performs a structured 4-pass analysis:

| Pass | Focus | Example |
|------|-------|---------|
| 🔴 Security | OWASP Top 10, injection, XSS, auth | Hardcoded secret detected |
| 🟡 Correctness | Logic errors, null refs, edge cases | Unchecked array index |
| 🔵 Performance | N+1 queries, memory leaks, O(n²) | Missing index on FK |
| 🟢 Maintainability | Dead code, naming, complexity | Function does 3 things |

**Output format**:
```
## 🔴 Critical
[Issue] → [Why] → [Fix]

## 🟡 Important
[Issue] → [Impact] → [Change]

## 🟢 Suggestions
[Observation] → [Alternative]

## ✅ What's Working Well
```

---

### `/api-designer` — API Designer

**File**: `.github/skills/api-designer/SKILL.md`  
**Trigger phrases**: design an API, REST endpoints, openapi schema, API structure

Guides through 4 structured steps:

| Step | Focus |
|------|-------|
| 📦 Resource Modeling | Identify nouns, map relationships |
| 🔄 HTTP Semantics | GET/POST/PUT/PATCH/DELETE best practices |
| 📋 Schema Design | OpenAPI 3.0 request/response contracts |
| 🔒 Security Checklist | Auth, CORS, rate limiting, input validation |

Always outputs an OpenAPI 3.0 snippet.

---

### `/ui-design-system` — UI Design System

**File**: `.github/skills/ui-design-system/SKILL.md`  
**Trigger phrases**: new screen, new page, add navigation, create component, new section

Loads the design token snapshot before writing any JSX:
- Background `#0a0a0f`, cards `#16161f`, border `1px solid #2a2a3d`
- Accent purple `#7c3aed` / `#a855f7`, text primary `#f0f0ff`
- Enforces card pattern, spacing, and Framer Motion animation conventions

---

### Syntax Validator — Auto-Trigger (No Command)

**File**: `.github/skills/syntax-validator/SKILL.md`  
**Trigger**: fires automatically after **every file edit or code generation**

Checks:
- All imported symbols exist in their source module
- Every `{`, `(`, `[` has a matching close
- All JSX tags properly opened and closed
- No missing semicolons, unclosed strings, or undefined references
- Obvious type mismatches

**Output before code**:
```
⚠️  Syntax Validation — 1 Issue Found
────────────────────────────────────
src/components/Example.jsx:2: Import 'Github' does not exist → use 'GitBranch'

✅ All issues resolved in the output below.
```

Or if clean:
```
✅ Syntax Validation — Passed (no issues detected)
```

---

## Adding a New Skill

1. Create `.github/skills/<your-skill>/SKILL.md`
2. Add YAML frontmatter with a `name` and `description` field — the description is what the agent scans for trigger matching.
3. Add a `## When to use` section in the body with natural-language trigger phrases.
4. Register the skill in `AGENTS.md` under **Activated Skills**.

```yaml
---
name: your-skill
description: >
  Use when: [describe the scenario].
  Trigger phrases — "phrase one", "phrase two".
---

## When to use
Activate when the user asks to [describe task].
```
