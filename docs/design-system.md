# Design System

All styling is done with **inline React `style` props** — no CSS framework, no Tailwind, no CSS modules.

---

## Color Palette

### Backgrounds

| Token | Hex | Usage |
|-------|-----|-------|
| Page background | `#0a0a0f` | `<body>`, page shell, dark panels |
| Card background | `#16161f` | All card / section containers |
| Inset background | `#111118` | Alternate section rows (e.g. DeveloperSection) |
| Deep inset | `#0a0a0f` | Code blocks, badge backgrounds inside cards |

### Borders

| Token | Hex | Usage |
|-------|-----|-------|
| Default border | `#2a2a3d` | All card borders (`1px solid`) |
| Accent border (purple) | `rgba(124,58,237,0.35–0.4)` | Skill badges, hover states |

### Text

| Token | Hex | Usage |
|-------|-----|-------|
| Primary text | `#f0f0ff` | Headings, names, important labels |
| Secondary text | `#9898b8` | Body copy, descriptions |
| Muted text | `#5a5a7a` | Timestamps, sub-labels, dividers |

### Accent Colors

| Color | Hex | Primary Use |
|-------|-----|-------------|
| Purple (primary) | `#7c3aed` | Gradients, logo, CTA buttons |
| Purple (light) | `#a855f7` | Inline highlights, links, tags |
| Blue | `#3b82f6` | API Designer skill, stat cards |
| Cyan | `#06b6d4` | UI Design System skill, portfolio link |
| Green | `#10b981` | Success states, Node.js tag |
| Amber | `#f59e0b` | Syntax Validator skill, LeetCode |
| Red | `#ef4444` | Code Reviewer skill, critical issues |

---

## Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Section h2 | `2.5rem` | `800` | `#f0f0ff` |
| Card h3 | `1.4rem` | `700` | `#f0f0ff` |
| Card h4 | `0.95rem` | `600` | `#f0f0ff` |
| Body copy | `0.875–1.05rem` | `400` | `#9898b8` |
| Badge / label | `0.75–0.8rem` | `600` | accent color |
| Nav link | `0.875rem` | `500` | `#9898b8` |
| Code inline | `0.82–0.9rem` | `400` | `#a855f7` |

Font family: system default (inherited from browser).

---

## Spacing

| Context | Value |
|---------|-------|
| Section vertical padding | `5rem 2rem` |
| Card padding | `1.6–2rem` |
| Section max-width | `1200px` (centered with `margin: 0 auto`) |
| Card border-radius | `14–16px` |
| Button border-radius | `8px` |
| Badge border-radius | `999px` (pill) |
| Grid gap (2-col) | `2rem` |
| Grid gap (stat cards) | `1rem` |

---

## Gradient Patterns

### Text gradient (headings)
```jsx
background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
WebkitBackgroundClip: 'text',
WebkitTextFillColor: 'transparent',
```

### Button / logo gradient
```jsx
background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
```

### Tag / badge background
```jsx
background: `${accentColor}18`,   // 10% opacity
border: `1px solid ${accentColor}50`,  // 30% opacity
color: accentColor,
```

---

## Animation Conventions

All animations use **Framer Motion**.

### Section entrance (scroll-triggered)
```jsx
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
```

### Card entrance (staggered)
```jsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.1 * index + 0.2 }}
```

### Hover lift
```jsx
whileHover={{ scale: 1.02, borderColor: accentColor }}
```

### Avatar glow pulse
```jsx
animate={{
  boxShadow: [
    '0 0 20px rgba(124,58,237,0.3)',
    '0 0 40px rgba(59,130,246,0.4)',
    '0 0 20px rgba(124,58,237,0.3)',
  ],
}}
transition={{ duration: 3, repeat: Infinity }}
```

### Background blob pulse
```jsx
animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
transition={{ duration: 8, repeat: Infinity }}
```

---

## Card Pattern

The standard card used throughout the site:

```jsx
<div style={{
  background: '#16161f',
  border: '1px solid #2a2a3d',
  borderRadius: '16px',
  padding: '1.6rem',  // or 2rem for profile cards
}}>
```

On hover, `borderColor` transitions to the contextual accent color.
