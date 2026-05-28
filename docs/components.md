# Component Reference

All components live in `src/components/`. Each is a default-exported React function component with no props — all data is co-located.

---

## Header

**File**: [src/components/Header.jsx](../src/components/Header.jsx)  
**Scroll anchor**: fixed top bar (no anchor)

### Purpose
Fixed navigation bar with the DevMentor logo and section links. Includes a "View Docs" CTA button and a GitHub profile link pointing to [github.com/amanraj26266](https://github.com/amanraj26266).

### Key internals
| Element | Detail |
|---------|--------|
| `navItems` array | Labels + `href` anchors for each page section |
| Logo | Bot icon + `DevMentor.agent` wordmark |
| GitHub button | Links to Aman Raj's GitHub profile |
| Styling | `position: fixed`, `backdropFilter: blur(20px)`, `z-index: 100` |

---

## HeroSection

**File**: [src/components/HeroSection.jsx](../src/components/HeroSection.jsx)  
**Scroll anchor**: top of page

### Purpose
Full-viewport landing section with animated gradient blobs, headline, sub-copy, and two CTAs (Explore Agent / View on GitHub).

### Key internals
- Three absolutely-positioned `motion.div` blobs animate on `scale` + `opacity` with staggered durations (8s / 10s / 12s).
- Entrance animations via `initial` / `animate` on headline, badge, and button group.

---

## PersonaSection

**File**: [src/components/PersonaSection.jsx](../src/components/PersonaSection.jsx)  
**Scroll anchor**: `#persona`

### Purpose
Introduces the DevMentor persona. Split layout: left profile card, right trait grid.

### Key internals
| Array | Contents |
|-------|----------|
| `traits` | 4 core principles (Security First, Clear Over Clever, Fail Fast, Document Intent) each with icon, label, description, accent color |

---

## SkillsSection

**File**: [src/components/SkillsSection.jsx](../src/components/SkillsSection.jsx)  
**Scroll anchor**: `#skills`

### Purpose
Tabbed interface showing details for each skill: Code Reviewer, API Designer, UI Design System, Syntax Validator (auto).

### Key internals
| Element | Detail |
|---------|--------|
| `skills` array | Full detail objects (passes, outputFormat, file path, icon, colors) |
| `activeId` state | `useState` tracking which tab is selected |
| Pass list | 4 emoji-labelled passes per skill |
| Output preview | `<pre>` block showing expected response format |

---

## HowItWorksSection

**File**: [src/components/HowItWorksSection.jsx](../src/components/HowItWorksSection.jsx)  
**Scroll anchor**: `#how-it-works`

### Purpose
4-step horizontal card flow explaining: Create AGENTS.md → Author SKILL.md → Prompt triggers skill → Persona responds.

### Key internals
| Array | Contents |
|-------|----------|
| `steps` | 4 objects: step number, icon, color, title, description, inline code sample |

---

## FileStructureSection

**File**: [src/components/FileStructureSection.jsx](../src/components/FileStructureSection.jsx)  
**Scroll anchor**: `#structure`

### Purpose
Annotated visual of the repository's file tree, highlighting where `AGENTS.md` and `SKILL.md` files live.

---

## PlaygroundSection

**File**: [src/components/PlaygroundSection.jsx](../src/components/PlaygroundSection.jsx)  
**Scroll anchor**: `#playground`

### Purpose
Interactive prompt simulator — clicking an example prompt highlights which skill it would trigger and explains the match reason.

### Key internals
| Element | Detail |
|---------|--------|
| `skills` array | Skill metadata (id, color, icon, command, trigger keywords, `isAuto` flag) |
| `examplePrompts` array | Sample user prompts with `matchedSkill`, `layer` (slash/description/auto), and `reason` |
| `activePrompt` state | Index of currently selected prompt |
| Match display | Shows matched skill badge + reason string |

---

## DeveloperSection

**File**: [src/components/DeveloperSection.jsx](../src/components/DeveloperSection.jsx)  
**Scroll anchor**: `#developer`

### Purpose
Profile card for **Aman Raj** — the developer who built this project.

### Key internals
| Array | Contents |
|-------|----------|
| `techStack` | 12 technologies with label + accent color |
| `stats` | 3 stat cards: Experience (6 mo), Projects Built (27), Lines of Code (100K+) |
| `links` | GitHub, Portfolio, LinkedIn, LeetCode with icons and hrefs |

### Real data
| Field | Value |
|-------|-------|
| Name | Aman Raj |
| Role | Full Stack Developer @ Gritsa Technologies |
| Location | Narkatiaganj, Bihar, India |
| GitHub | [github.com/amanraj26266](https://github.com/amanraj26266) |
| Portfolio | [portfolio-aman-9myc.onrender.com](https://portfolio-aman-9myc.onrender.com/) |
| LinkedIn | [linkedin.com/in/amanraj26266](https://www.linkedin.com/in/amanraj26266/) |
| LeetCode | [leetcode.com/aman12106020](https://www.leetcode.com/aman12106020) |

---

## Footer

**File**: [src/components/Footer.jsx](../src/components/Footer.jsx)

### Purpose
Minimal footer with DevMentor branding, tagline, and "Made with React + Framer Motion" credit line.
