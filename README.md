# SkillsTester

> A React + Vite demo showcasing GitHub Copilot's custom agent system — `AGENTS.md` personas and `SKILL.md` on-demand workflow modules.

**Developer**: [Aman Raj](https://github.com/amanraj26266) — Full Stack Developer @ Gritsa Technologies  
**Live Portfolio**: [portfolio-aman-9myc.onrender.com](https://portfolio-aman-9myc.onrender.com/)

---

## What It Does

SkillsTester is a single-page site that visually explains how GitHub Copilot agent customization works:

- **`AGENTS.md`** — defines the **DevMentor** persona: tone, principles, skills, and auto-validators.
- **`SKILL.md` files** — on-demand workflow modules triggered by `/slash commands` or natural-language phrases.

The site walks through the persona, available skills, how prompt routing works, the file structure, and an interactive playground.

---

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve production build locally
npm run lint      # run ESLint
```

---

## Tech Stack

| | |
|---|---|
| UI | React 19 |
| Build | Vite 8 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Code Highlighting | react-syntax-highlighter |

---

## Documentation

Full docs are in the [`docs/`](./docs/README.md) folder:

| Doc | Contents |
|-----|----------|
| [getting-started.md](./docs/getting-started.md) | Install, dev, build, lint commands |
| [architecture.md](./docs/architecture.md) | Project structure, data flow, design decisions |
| [components.md](./docs/components.md) | Per-component reference |
| [design-system.md](./docs/design-system.md) | Colors, typography, spacing, animation patterns |
| [skills.md](./docs/skills.md) | AGENTS.md + SKILL.md system explained |

---

## Skills

| Skill | Command | Trigger |
|-------|---------|---------|
| Code Reviewer | `/code-reviewer` | "review", "audit", "find bugs" |
| API Designer | `/api-designer` | "design API", "REST endpoints" |
| UI Design System | `/ui-design-system` | "new screen", "new component" |
| Syntax Validator | _(auto)_ | fires after every file edit |

---

## License

MIT
