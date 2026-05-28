---
name: ui-design-system
description: >
  Use when: creating any new screen, page, section, navigation bar, or component.
  Trigger phrases — "new screen", "new page", "add navigation", "create component",
  "new section", "add a page", "build a view", "scaffold a screen".
---

# UI Design System Skill

Instructions for DevMentor to follow when this skill is activated.

## When to use

Activate this skill **before writing a single line of JSX** any time the user asks you to:
- Create a new screen, page, or view
- Add a new section to an existing page
- Build a new navigation item or nav bar
- Scaffold a new component (card, modal, panel, list)
- Add a new route or visual area to the app

Example prompts that trigger this skill:
> "add a new screen", "create a settings page", "build a dashboard", "add navigation", "new component", "make a new section"

**Rule**: Load the design token snapshot first. Never guess colors, spacing, or border styles — always read them from this file.

## Purpose

Ensure every new screen, navigation element, and component strictly follows the established visual language. **Never invent new colors, spacing, card styles, or animation patterns.** Read the token snapshot below before writing a single line of JSX.

---

## Design Token Snapshot

### Color Palette

```js
// Backgrounds
bg.primary    = '#0a0a0f'   // page background
bg.secondary  = '#111118'   // section background (alternating sections)
bg.card       = '#16161f'   // card/panel background
bg.cardHover  = '#1e1e2a'   // card on hover

// Borders
border.default = '#2a2a3d'  // all card/panel borders  ← 1px solid
border.bright  = '#3d3d5c'  // focused / active borders

// Text
text.primary   = '#f0f0ff'  // headings, labels
text.secondary = '#9898b8'  // body copy, descriptions
text.muted     = '#5a5a7a'  // metadata, timestamps, labels

// Accent Colors (use for icons, badges, highlights only)
accent.purple      = '#7c3aed'
accent.purpleLight = '#a855f7'
accent.blue        = '#3b82f6'
accent.cyan        = '#06b6d4'
accent.green       = '#10b981'
accent.orange      = '#f59e0b'
accent.red         = '#ef4444'

// Glow values (box-shadow only)
glow.purple = 'rgba(124, 58, 237, 0.3)'
glow.blue   = 'rgba(59, 130, 246, 0.3)'
```

### Typography

```js
font.family.sans = "'Inter', system-ui, sans-serif"
font.family.mono = "'JetBrains Mono', monospace"   // code, commands

// Scale
text.xs   = '0.7rem'    // metadata labels (UPPERCASE + tracking)
text.sm   = '0.82rem'   // helper text, captions
text.base = '0.9rem'    // body
text.md   = '1rem'      // nav items
text.lg   = '1.2rem'    // card titles
text.xl   = '2.5rem'    // section headings
text.hero = 'clamp(2.5rem, 6vw, 4.5rem)'  // hero only

// Weights
weight.normal  = 400
weight.medium  = 500
weight.semibold = 600
weight.bold    = 700
weight.black   = 800   // section headings
weight.heavy   = 900   // hero headings
```

### Spacing & Radius

```js
// Section padding
section.padding = '5rem 2rem'
section.maxWidth = '1200px'

// Card padding
card.padding.default = '1.4rem – 2rem'
card.padding.compact = '1rem'

// Border radius
radius.sm   = '8px'    // badges, small elements
radius.md   = '10px'   // inner panels, code blocks
radius.lg   = '12px'   // buttons, skill tabs
radius.xl   = '14px'   // info cards
radius.2xl  = '16px'   // main cards/panels
radius.full = '999px'  // pill badges
```

---

## Card Pattern (Mandatory Template)

Every card/panel **must** follow this exact structure:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 * index }}
  whileHover={{ scale: 1.02, borderColor: accentColor }}
  style={{
    background: '#16161f',
    border: '1px solid #2a2a3d',
    borderRadius: '16px',
    padding: '1.4rem',
    transition: 'border-color 0.2s',
    cursor: 'default',
  }}
>
  {/* Icon block */}
  <div style={{
    width: '40px', height: '40px',
    background: `${accentColor}20`,   // 20 = 12% opacity hex
    borderRadius: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '0.8rem',
  }}>
    <Icon size={20} color={accentColor} />
  </div>

  {/* Title */}
  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f0f0ff', marginBottom: '0.35rem' }}>
    {title}
  </h4>

  {/* Description */}
  <p style={{ fontSize: '0.82rem', color: '#9898b8', lineHeight: 1.6 }}>
    {description}
  </p>
</motion.div>
```

---

## Section Pattern (Mandatory Template)

Every section must use alternating backgrounds and a consistent header block:

```jsx
<section id="section-id" style={{
  padding: '5rem 2rem',
  // Alternate: background: '#111118' for every other section
}}>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

    {/* Section header — always centered */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ textAlign: 'center', marginBottom: '3rem' }}
    >
      {/* Pill badge */}
      <span style={{
        display: 'inline-block',
        background: `${accentColor}18`,
        border: `1px solid ${accentColor}60`,
        color: accentColor,
        borderRadius: '999px',
        padding: '4px 16px',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }}>
        Section Label
      </span>

      <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f0f0ff', marginBottom: '1rem' }}>
        Heading with{' '}
        <span style={{
          background: 'linear-gradient(90deg, colorA, colorB)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Gradient Word
        </span>
      </h2>

      <p style={{ color: '#9898b8', maxWidth: '520px', margin: '0 auto' }}>
        Supporting description text.
      </p>
    </motion.div>

    {/* Content grid */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
      {/* Cards here */}
    </div>

  </div>
</section>
```

---

## Navigation Pattern

When adding new nav items, insert them into the `navItems` array in `Header.jsx`. **Do not change any colors, font sizes, or hover effects:**

```js
// Header.jsx — navItems array
const navItems = [
  { label: 'Existing Item', href: '#existing' },
  { label: 'New Item',      href: '#new-section-id' },  // ← add here only
];
```

Nav link styles are **frozen** — never override them:
```js
// These values must not change
color: '#9898b8'         // default
color: '#a855f7'         // on hover (motion.whileHover)
fontSize: '0.875rem'
fontWeight: 500
```

---

## Button Styles

### Primary CTA
```jsx
<motion.button
  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
  whileTap={{ scale: 0.97 }}
  style={{
    background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '14px 28px',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: '8px',
  }}
>
```

### Secondary / Ghost
```jsx
<motion.button
  whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
  whileTap={{ scale: 0.97 }}
  style={{
    background: 'transparent',
    color: '#f0f0ff',
    border: '1px solid #2a2a3d',
    borderRadius: '12px',
    padding: '14px 28px',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
  }}
>
```

---

## Animation Conventions

```js
// Entrance (all new elements must use one of these)
initial={{ opacity: 0, y: 20 }}   // standard card
initial={{ opacity: 0, y: 40 }}   // section header
initial={{ opacity: 0, x: -30 }}  // left panel
initial={{ opacity: 0, x: 20 }}   // right panel

// All use viewport trigger
whileInView={{ opacity: 1, y/x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: index * 0.1 }}

// Hover (cards)
whileHover={{ scale: 1.02, borderColor: accentColor }}

// Hover (buttons)
whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${accentColor}40` }}
whileTap={{ scale: 0.97 }}

// Glow pulse (icon backgrounds only)
animate={{ boxShadow: [`0 0 0px ${color}00`, `0 0 20px ${color}60`, `0 0 0px ${color}00`] }}
transition={{ duration: 2.5, repeat: Infinity }}
```

---

## Pill / Badge Pattern

```jsx
// Section label badge
<span style={{
  display: 'inline-block',
  background: `${accentColor}18`,
  border: `1px solid ${accentColor}60`,
  color: accentColor,
  borderRadius: '999px',
  padding: '4px 16px',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
}}>
  Label Text
</span>

// Inline tag badge (small)
<span style={{
  background: `${accentColor}20`,
  border: `1px solid ${accentColor}50`,
  color: accentColor,
  borderRadius: '4px',
  padding: '2px 8px',
  fontSize: '0.7rem',
  fontWeight: 600,
}}>
  Tag
</span>
```

---

## Workflow — Creating a New Screen

1. **Load this skill** — read the token snapshot above before writing any code.
2. **Check the alternating background** — if the previous section used `#0a0a0f`, the new one uses `#111118`, and vice versa.
3. **Choose an accent color** from the palette — do not invent new ones.
4. **Copy the Section Pattern** and fill in the heading, badge label, and grid.
5. **Copy the Card Pattern** for each item in the grid.
6. **Add the nav link** to `Header.jsx → navItems` with the section's `id`.
7. **Run syntax-validator** — confirm imports, JSX structure, and bracket balance.
8. **Confirm no design token was changed** — colors, borders, radii, and animation configs must match the snapshot exactly.

## Checklist Before Presenting New UI Code

- [ ] Background alternates correctly from previous section
- [ ] All colors come from the token palette — no new hex values invented
- [ ] Card uses `#16161f` bg + `1px solid #2a2a3d` border + `16px` radius
- [ ] Section header uses pill badge + gradient heading + `#9898b8` description
- [ ] Animations use `whileInView` + `viewport={{ once: true }}`
- [ ] Nav link added to `navItems` array only — no style changes to Header
- [ ] Syntax validation passed
