# Getting Started

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | 18+ |
| npm | 9+ |

---

## Installation

```bash
# Clone the repository
git clone https://github.com/amanraj26266/SkillsTester.git
cd SkillsTester

# Install dependencies
npm install
```

---

## Development

```bash
npm run dev
```

Starts the Vite dev server with Hot Module Replacement (HMR).  
Opens at `http://localhost:5173` by default.

---

## Build for Production

```bash
npm run build
```

Outputs optimised static assets to `dist/`.

```bash
# Preview the production build locally
npm run preview
```

---

## Lint

```bash
npm run lint
```

Runs ESLint across all source files using the config in `eslint.config.js`.

---

## Scripts Reference

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `vite` | Start dev server with HMR |
| `build` | `vite build` | Production bundle to `dist/` |
| `preview` | `vite preview` | Serve the production build locally |
| `lint` | `eslint .` | Run ESLint on all files |

---

## Environment

No environment variables are required. This is a fully static front-end application with no API calls or secrets.
