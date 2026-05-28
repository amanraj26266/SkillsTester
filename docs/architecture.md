# Architecture

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI Framework | React | 19.x |
| Build Tool | Vite | 8.x |
| Animations | Framer Motion | 12.x |
| Icons | Lucide React | 1.x |
| Code Highlighting | react-syntax-highlighter | 16.x |
| Linting | ESLint | 10.x |

---

## Project Structure

```
SkillsTester/
├── AGENTS.md                  # DevMentor persona — loaded by GitHub Copilot
├── index.html                 # HTML entry point
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint flat config
├── package.json
│
├── public/                    # Static assets served as-is
│
├── src/
│   ├── main.jsx               # React root — mounts <App /> into #root
│   ├── App.jsx                # Page shell — composes all sections in order
│   ├── App.css                # Global layout overrides
│   ├── index.css              # CSS reset and base styles
│   ├── assets/                # Images / SVGs imported by components
│   └── components/
│       ├── Header.jsx          # Fixed top nav with skill links
│       ├── HeroSection.jsx     # Landing hero with animated blobs
│       ├── PersonaSection.jsx  # DevMentor persona card + trait grid
│       ├── SkillsSection.jsx   # Tabbed skill detail cards
│       ├── HowItWorksSection.jsx # 4-step explainer (AGENTS → SKILL → Prompt → Response)
│       ├── FileStructureSection.jsx # Annotated repo tree
│       ├── PlaygroundSection.jsx   # Interactive prompt → skill matcher
│       ├── DeveloperSection.jsx    # Aman Raj profile, stats, tech stack, links
│       └── Footer.jsx          # Footer with branding
│
├── .github/
│   └── skills/
│       ├── code-reviewer/SKILL.md
│       ├── api-designer/SKILL.md
│       ├── ui-design-system/SKILL.md
│       └── syntax-validator/SKILL.md
│
└── docs/                      # ← You are here
    ├── README.md
    ├── getting-started.md
    ├── architecture.md
    ├── components.md
    ├── design-system.md
    └── skills.md
```

---

## Data Flow

```
User visits page
      │
      ▼
App.jsx (page shell)
      │
      ├── Header          — fixed nav, GitHub link
      ├── HeroSection     — static animated hero
      ├── PersonaSection  — reads trait data from local array
      ├── SkillsSection   — local skills array, tab state (useState)
      ├── HowItWorksSection — local steps array
      ├── FileStructureSection — static annotated tree
      ├── PlaygroundSection   — local prompts array, active state (useState)
      ├── DeveloperSection    — local stats/links/techStack arrays
      └── Footer
```

All data is **co-located** in each component file as a plain JS array — no external API, no global state, no context.

---

## Rendering Strategy

- **Fully static SPA** — rendered client-side by React 19.
- **No server-side rendering** — Vite outputs a standard `dist/index.html` shell.
- **Animation** — Framer Motion handles all enter/exit animations via `whileInView` and `motion.*` wrappers.
- **Styling** — 100% inline styles using React's `style` prop; no CSS modules or Tailwind.

---

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| Inline styles only | Zero build-time CSS tooling; keeps component styles self-contained |
| Co-located data arrays | Avoids a separate data layer for a demo app; easier to read and edit |
| Framer Motion `whileInView` | Scroll-triggered animations without an IntersectionObserver setup |
| No routing | Single page — all sections scroll-anchored via `id` attributes |
| No TypeScript | Kept intentionally simple for a demo/showcase project |
