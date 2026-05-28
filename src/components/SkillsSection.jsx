import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Server, ChevronRight, Terminal, FileText, ScanSearch, Zap, Palette } from 'lucide-react';

const skills = [
    {
        id: 'code-reviewer',
        icon: ShieldCheck,
        color: '#ef4444',
        gradient: 'linear-gradient(135deg, #ef4444, #f59e0b)',
        title: 'Code Reviewer',
        command: '/code-reviewer',
        tagline: 'Deep multi-pass code analysis',
        description: 'Performs a 4-pass security, correctness, performance, and maintainability review on any code snippet.',
        passes: [
            { emoji: '🔴', label: 'Security Scan', detail: 'OWASP Top 10, injection, XSS, auth issues' },
            { emoji: '🟡', label: 'Correctness', detail: 'Logic errors, null refs, edge cases' },
            { emoji: '🔵', label: 'Performance', detail: 'N+1 queries, memory leaks, O(n²) patterns' },
            { emoji: '🟢', label: 'Maintainability', detail: 'Dead code, naming, complexity, docs' },
        ],
        outputFormat: `## 🔴 Critical
[Issue] → [Why] → [Fix]

## 🟡 Important
[Issue] → [Impact] → [Change]

## 🟢 Suggestions
[Observation] → [Alternative]

## ✅ What's Working Well`,
        file: '.github/skills/code-reviewer/SKILL.md',
    },
    {
        id: 'api-designer',
        icon: Server,
        color: '#3b82f6',
        gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
        title: 'API Designer',
        command: '/api-designer',
        tagline: 'RESTful API design from scratch',
        description: 'Guides you through resource modeling, HTTP semantics, status codes, OpenAPI schemas, and security checklists.',
        passes: [
            { emoji: '📦', label: 'Resource Modeling', detail: 'Identify nouns, map relationships' },
            { emoji: '🔄', label: 'HTTP Semantics', detail: 'GET/POST/PUT/PATCH/DELETE best practices' },
            { emoji: '📋', label: 'Schema Design', detail: 'OpenAPI 3.0 request/response contracts' },
            { emoji: '🔒', label: 'Security Checklist', detail: 'Auth, CORS, rate limiting, validation' },
        ],
        outputFormat: `paths:
  /users:
    post:
      summary: Create user
      requestBody: ...
      responses:
        '201':
          description: Created
        '400':
          $ref: '#/components/responses/BadRequest'`,
        file: '.github/skills/api-designer/SKILL.md',
    },
    {
        id: 'syntax-validator',
        icon: ScanSearch,
        color: '#f59e0b',
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        title: 'Syntax Validator',
        command: 'auto-triggered',
        tagline: 'Post-edit syntax & import checks',
        description: 'Runs automatically after every file edit. Validates imports, bracket balance, JSX structure, string literals, and variable references before presenting output.',
        passes: [
            { emoji: '📦', label: 'Import Integrity', detail: 'Symbols exist in their source module' },
            { emoji: '🔗', label: 'Bracket Balance', detail: 'All {}, (), [], <> properly matched' },
            { emoji: '⚛️', label: 'JSX Structure', detail: 'Tags closed, keys present, no orphans' },
            { emoji: '🔤', label: 'String & Refs', detail: 'Unclosed strings, undefined variables' },
        ],
        outputFormat: `⚠️  Syntax Validation Report
════════════════════════════
Found 1 issue:

  Line 2 │ IMPORT ERROR
          │ 'Github' not exported by 'lucide-react'
          │ Fix: use 'GitBranch' instead

✅ Fix applied in the code below.`,
        file: '.github/skills/syntax-validator/SKILL.md',
        auto: true,
    },
    {
        id: 'ui-design-system',
        icon: Palette,
        color: '#06b6d4',
        gradient: 'linear-gradient(135deg, #06b6d4, #7c3aed)',
        title: 'UI Design System',
        command: '/ui-design-system',
        tagline: 'Consistent screens, every time',
        description: 'Loads the full design token snapshot before writing any JSX — background colors, card patterns, border styles, typography, and animation conventions are locked and enforced.',
        passes: [
            { emoji: '🎨', label: 'Token Snapshot', detail: 'Reads all colors, spacing & radius values' },
            { emoji: '🃏', label: 'Card Pattern', detail: 'Enforces #16161f bg + 1px solid #2a2a3d border' },
            { emoji: '🧭', label: 'Nav Guard', detail: 'Adds link to navItems only — no style changes' },
            { emoji: '✅', label: 'Design Checklist', detail: 'Verifies every token before presenting code' },
        ],
        outputFormat: `✅ Syntax Validation — Passed
✅ Design System — Tokens verified
   bg: #16161f  border: #2a2a3d
   accent: #7c3aed  text: #f0f0ff

// New screen scaffolded below
export default function SettingsScreen() {
  return (
    <section id="settings"
      style={{ padding: '5rem 2rem',
               background: '#111118' }}>
      ...`,
        file: '.github/skills/ui-design-system/SKILL.md',
    },
];

export default function SkillsSection() {
    const [activeSkill, setActiveSkill] = useState(skills[0].id);
    const skill = skills.find(s => s.id === activeSkill);
    const Icon = skill.icon;

    return (
        <section id="skills" style={{ padding: '5rem 2rem', background: '#111118' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <span style={{
                        display: 'inline-block',
                        background: 'rgba(59,130,246,0.15)',
                        border: '1px solid rgba(59,130,246,0.4)',
                        color: '#3b82f6',
                        borderRadius: '999px',
                        padding: '4px 16px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                    }}>
                        Skills
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f0f0ff', marginBottom: '1rem' }}>
                        <span style={{ background: 'linear-gradient(90deg,#3b82f6,#06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>On-Demand</span> Skill Files
                    </h2>
                    <p style={{ color: '#9898b8', maxWidth: '520px', margin: '0 auto' }}>
                        Skills live in <code style={{ background: '#16161f', padding: '2px 8px', borderRadius: '4px', color: '#3b82f6', fontSize: '0.85rem' }}>.github/skills/</code> and are triggered via slash commands in chat.
                    </p>
                </motion.div>

                {/* Skill Tabs */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
                    {skills.map(s => {
                        const SIcon = s.icon;
                        const active = s.id === activeSkill;
                        return (
                            <motion.button
                                key={s.id}
                                onClick={() => setActiveSkill(s.id)}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    padding: '12px 24px',
                                    borderRadius: '12px',
                                    border: active ? `1px solid ${s.color}` : '1px solid #2a2a3d',
                                    background: active ? `${s.color}18` : '#16161f',
                                    color: active ? s.color : '#9898b8',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                }}
                            >
                                <SIcon size={18} />
                                {s.title}
                                {s.auto && (
                                    <span style={{
                                        fontSize: '0.6rem', fontWeight: 700,
                                        background: `${s.color}25`, border: `1px solid ${s.color}50`,
                                        color: s.color, borderRadius: '4px', padding: '2px 6px',
                                        display: 'flex', alignItems: 'center', gap: '3px',
                                    }}>
                                        <Zap size={9} /> AUTO
                                    </span>
                                )}
                            </motion.button>
                        );
                    })}
                </div>

                {/* Skill Detail */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSkill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2rem',
                        }}
                    >
                        {/* Left: Info */}
                        <div style={{
                            background: '#16161f',
                            border: `1px solid ${skill.color}40`,
                            borderRadius: '16px',
                            padding: '2rem',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                                <div style={{
                                    width: '50px', height: '50px',
                                    background: skill.gradient,
                                    borderRadius: '12px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Icon size={24} color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f0f0ff' }}>{skill.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <code style={{ color: skill.color, fontSize: '0.82rem' }}>{skill.command}</code>
                                        {skill.auto && (
                                            <span style={{ fontSize: '0.65rem', color: skill.color, background: `${skill.color}15`, border: `1px solid ${skill.color}40`, borderRadius: '4px', padding: '1px 7px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                                                <Zap size={9} /> Runs automatically after every edit
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <p style={{ color: '#9898b8', marginBottom: '1.5rem', lineHeight: 1.7 }}>{skill.description}</p>

                            <p style={{ color: '#5a5a7a', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '0.8rem' }}>REVIEW PASSES</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {skill.passes.map((pass, i) => (
                                    <motion.div
                                        key={pass.label}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.07 }}
                                        style={{
                                            display: 'flex', alignItems: 'flex-start', gap: '12px',
                                            padding: '10px 12px',
                                            background: '#0a0a0f',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        <span style={{ fontSize: '1rem' }}>{pass.emoji}</span>
                                        <div>
                                            <p style={{ color: '#f0f0ff', fontSize: '0.88rem', fontWeight: 600 }}>{pass.label}</p>
                                            <p style={{ color: '#9898b8', fontSize: '0.78rem' }}>{pass.detail}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FileText size={14} color="#5a5a7a" />
                                <code style={{ color: '#5a5a7a', fontSize: '0.75rem' }}>{skill.file}</code>
                            </div>
                        </div>

                        {/* Right: Output Format */}
                        <div style={{
                            background: '#16161f',
                            border: '1px solid #2a2a3d',
                            borderRadius: '16px',
                            padding: '2rem',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.2rem' }}>
                                <Terminal size={16} color="#5a5a7a" />
                                <span style={{ color: '#5a5a7a', fontSize: '0.82rem', fontWeight: 500 }}>Output Format</span>
                            </div>
                            <pre style={{
                                background: '#0a0a0f',
                                borderRadius: '10px',
                                padding: '1.2rem',
                                color: '#9898b8',
                                fontSize: '0.8rem',
                                lineHeight: 1.8,
                                overflowX: 'auto',
                                border: '1px solid #2a2a3d',
                            }}>
                                {skill.outputFormat}
                            </pre>

                            <div style={{ marginTop: '1.5rem' }}>
                                <p style={{ color: '#5a5a7a', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '0.8rem' }}>HOW TO INVOKE</p>
                                <div style={{
                                    background: '#0a0a0f',
                                    border: '1px solid #2a2a3d',
                                    borderRadius: '10px',
                                    padding: '1rem',
                                }}>
                                    {skill.auto ? (
                                        <>
                                            <p style={{ color: '#5a5a7a', fontSize: '0.78rem', marginBottom: '6px' }}>No manual invocation needed:</p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                                <Zap size={14} color='#f59e0b' />
                                                <code style={{ color: '#f59e0b', fontSize: '0.9rem' }}>Triggered after every code edit</code>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <p style={{ color: '#5a5a7a', fontSize: '0.78rem', marginBottom: '6px' }}>In GitHub Copilot Chat, type:</p>
                                            <code style={{ color: '#10b981', fontSize: '1rem', display: 'block', marginBottom: '6px' }}>{skill.command}</code>
                                        </>
                                    )}
                                    <p style={{ color: '#9898b8', fontSize: '0.8rem' }}>The skill is auto-loaded from its <code style={{ color: '#a855f7' }}>SKILL.md</code> file and DevMentor activates it.</p>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.03, boxShadow: `0 0 20px ${skill.color}40` }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    marginTop: '1.5rem',
                                    width: '100%',
                                    padding: '12px',
                                    background: skill.gradient,
                                    border: 'none',
                                    borderRadius: '10px',
                                    color: 'white',
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '8px',
                                }}
                            >
                                {skill.auto ? <><Zap size={16} /> Auto-Validates Every Edit</> : <>Try {skill.title} <ChevronRight size={16} /></>}
                            </motion.button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
