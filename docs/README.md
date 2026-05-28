# SkillsTester — Documentation

> A React + Vite showcase demonstrating GitHub Copilot's custom agent system through `AGENTS.md` and `SKILL.md` files.

**Developer**: Aman Raj — Full Stack Developer @ Gritsa Technologies  
**GitHub**: [amanraj26266](https://github.com/amanraj26266)  
**Portfolio**: [portfolio-aman-9myc.onrender.com](https://portfolio-aman-9myc.onrender.com/)

---

## Documentation Index

| File | Description |
|------|-------------|
| [getting-started.md](./getting-started.md) | Installation, dev server, build commands |
| [architecture.md](./architecture.md) | Project structure, data flow, tech stack |
| [components.md](./components.md) | Per-component reference (props, purpose, location) |
| [design-system.md](./design-system.md) | Color tokens, typography, spacing, card patterns |
| [skills.md](./skills.md) | AGENTS.md persona + SKILL.md system explained |

---

## What This Project Does

SkillsTester is a single-page marketing/demo site that visually explains how GitHub Copilot's **agent customization** system works:

- **`AGENTS.md`** — defines the **DevMentor** persona: tone, principles, activated skills, and auto-triggered validators that shape every Copilot interaction.
- **`SKILL.md`** files — on-demand workflow modules invoked by `/slash commands` or natural-language trigger phrases.

The site walks visitors through the persona, available skills, how skill routing works, the project file structure, and a live playground demonstrating prompt-to-skill matching.

---

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`
