import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ShieldCheck, Server, ScanSearch, Palette, Zap, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';

const skills = [
    {
        id: 'code-reviewer',
        label: 'code-reviewer',
        color: '#ef4444',
        icon: ShieldCheck,
        command: '/code-reviewer',
        descTrigger: 'review, audit, security, bugs, find issues',
    },
    {
        id: 'api-designer',
        label: 'api-designer',
        color: '#3b82f6',
        icon: Server,
        command: '/api-designer',
        descTrigger: 'design API, endpoints, REST, openapi, routes',
    },
    {
        id: 'ui-design-system',
        label: 'ui-design-system',
        color: '#06b6d4',
        icon: Palette,
        command: '/ui-design-system',
        descTrigger: 'new screen, new page, component, navigation',
    },
    {
        id: 'syntax-validator',
        label: 'syntax-validator',
        color: '#f59e0b',
        icon: ScanSearch,
        command: '— auto —',
        descTrigger: 'fires automatically after EVERY edit',
        isAuto: true,
    },
];

const examplePrompts = [
    {
        text: 'Can you review my auth middleware for security issues?',
        matchedSkill: 'code-reviewer',
        layer: 'description',
        reason: 'Matches description keywords: "review", "security issues"',
    },
    {
        text: 'Design a REST API for a blog with posts and comments.',
        matchedSkill: 'api-designer',
        layer: 'description',
        reason: 'Matches description keywords: "design", "REST API"',
    },
    {
        text: '/ui-design-system — add a new Settings screen',
        matchedSkill: 'ui-design-system',
        layer: 'slash',
        reason: 'Explicit /slash command — direct match',
    },
    {
        text: 'Add a new dashboard page to the app.',
        matchedSkill: 'ui-design-system',
        layer: 'when-to-use',
        reason: '## When to use: "Create a new screen, page, or view"',
    },
    {
        text: '[After any code edit — no prompt needed]',
        matchedSkill: 'syntax-validator',
        layer: 'auto',
        reason: 'Auto-triggered — fires unconditionally after every edit',
    },
];

const layerLabels = {
    slash: { label: 'Slash Command', color: '#a855f7' },
    description: { label: 'Layer 1 — Frontmatter Description', color: '#3b82f6' },
    'when-to-use': { label: 'Layer 2 — ## When to use', color: '#10b981' },
    auto: { label: 'Auto-Trigger Contract', color: '#f59e0b' },
};

export default function PlaygroundSection() {
    const [activePrompt, setActivePrompt] = useState(0);
    const matched = examplePrompts[activePrompt];
    const matchedSkill = skills.find((s) => s.id === matched.matchedSkill);
    const layer = layerLabels[matched.layer];

    return (
        <section id="playground" style={{ padding: '5rem 2rem', background: '#111118' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <span style={{
                        display: 'inline-block',
                        background: 'rgba(168,85,247,0.12)',
                        border: '1px solid rgba(168,85,247,0.4)',
                        color: '#a855f7',
                        borderRadius: '999px',
                        padding: '4px 16px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                    }}>
                        Live Trigger Demo
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f0f0ff', marginBottom: '1rem' }}>
                        See How{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #a855f7, #06b6d4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Skills Get Matched
                        </span>
                    </h2>
                    <p style={{ color: '#9898b8', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
                        Pick a prompt below. The agent scans skill descriptions and{' '}
                        <code style={{ color: '#a855f7', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.82rem' }}>## When to use</code>{' '}
                        sections to decide which skill loads — automatically.
                    </p>
                </motion.div>

                {/* Main demo grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>

                    {/* Left: Prompt picker */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#5a5a7a',
                            marginBottom: '1rem',
                        }}>
                            Select a user prompt
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                            {examplePrompts.map((prompt, i) => (
                                <motion.button
                                    key={i}
                                    onClick={() => setActivePrompt(i)}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    style={{
                                        background: activePrompt === i ? '#1e1e2a' : '#16161f',
                                        border: `1px solid ${activePrompt === i ? '#3d3d5c' : '#2a2a3d'}`,
                                        borderLeft: activePrompt === i
                                            ? `3px solid ${skills.find(s => s.id === prompt.matchedSkill)?.color}`
                                            : '3px solid transparent',
                                        borderRadius: '12px',
                                        padding: '0.9rem 1rem',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        width: '100%',
                                        transition: 'border-color 0.2s, background 0.2s',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                        <MessageSquare
                                            size={14}
                                            color={activePrompt === i ? '#a855f7' : '#5a5a7a'}
                                            style={{ marginTop: '2px', flexShrink: 0 }}
                                        />
                                        <span style={{
                                            fontSize: '0.84rem',
                                            color: activePrompt === i ? '#f0f0ff' : '#9898b8',
                                            lineHeight: 1.5,
                                            fontFamily: prompt.text.startsWith('[') ? 'JetBrains Mono, monospace' : 'inherit',
                                        }}>
                                            {prompt.text}
                                        </span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Match result */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                    >
                        <p style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: '#5a5a7a',
                            marginBottom: '0rem',
                        }}>
                            Agent resolution
                        </p>

                        {/* Trigger layer badge */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePrompt + '-layer'}
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 8 }}
                                transition={{ duration: 0.2 }}
                                style={{
                                    background: `${layer.color}15`,
                                    border: `1px solid ${layer.color}50`,
                                    borderRadius: '10px',
                                    padding: '0.75rem 1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                }}
                            >
                                <Zap size={14} color={layer.color} />
                                <div>
                                    <p style={{ fontSize: '0.7rem', color: layer.color, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                        Trigger Method
                                    </p>
                                    <p style={{ fontSize: '0.88rem', color: '#f0f0ff', fontWeight: 600, marginTop: '2px' }}>
                                        {layer.label}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Arrow */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <ArrowRight size={18} color='#3d3d5c' style={{ transform: 'rotate(90deg)' }} />
                        </div>

                        {/* Matched skill card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePrompt + '-skill'}
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.25 }}
                                style={{
                                    background: '#16161f',
                                    border: `1px solid ${matchedSkill.color}60`,
                                    borderRadius: '16px',
                                    padding: '1.4rem',
                                    boxShadow: `0 0 24px ${matchedSkill.color}20`,
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                                    <div style={{
                                        width: '40px', height: '40px',
                                        background: `${matchedSkill.color}20`,
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <matchedSkill.icon size={20} color={matchedSkill.color} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.7rem', color: '#5a5a7a', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                                            Skill Loaded
                                        </p>
                                        <p style={{ fontSize: '1rem', color: '#f0f0ff', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>
                                            {matchedSkill.label}
                                        </p>
                                    </div>
                                    {matchedSkill.isAuto && (
                                        <span style={{
                                            marginLeft: 'auto',
                                            background: 'rgba(245,158,11,0.15)',
                                            border: '1px solid rgba(245,158,11,0.4)',
                                            color: '#f59e0b',
                                            borderRadius: '999px',
                                            padding: '2px 10px',
                                            fontSize: '0.68rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                        }}>
                                            AUTO
                                        </span>
                                    )}
                                </div>

                                <div style={{
                                    background: '#0a0a0f',
                                    borderRadius: '10px',
                                    padding: '0.75rem 1rem',
                                    border: '1px solid #2a2a3d',
                                }}>
                                    <p style={{ fontSize: '0.7rem', color: '#5a5a7a', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                                        Why this skill matched
                                    </p>
                                    <p style={{ fontSize: '0.84rem', color: '#9898b8', lineHeight: 1.6 }}>
                                        {matched.reason}
                                    </p>
                                </div>

                                <div style={{ marginTop: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Bot size={13} color='#5a5a7a' />
                                    <p style={{ fontSize: '0.78rem', color: '#5a5a7a' }}>
                                        DevMentor now follows{' '}
                                        <code style={{ color: matchedSkill.color, fontFamily: 'JetBrains Mono, monospace' }}>
                                            .github/skills/{matchedSkill.id}/SKILL.md
                                        </code>
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Reason box */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePrompt + '-meta'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                                style={{
                                    background: '#16161f',
                                    border: '1px solid #2a2a3d',
                                    borderRadius: '12px',
                                    padding: '0.9rem 1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                }}
                            >
                                <Sparkles size={14} color='#a855f7' />
                                <p style={{ fontSize: '0.82rem', color: '#9898b8', lineHeight: 1.5 }}>
                                    The agent reads{' '}
                                    <span style={{ color: '#f0f0ff', fontWeight: 600 }}>description:</span> in frontmatter first
                                    (cheap scan), then{' '}
                                    <code style={{ color: '#10b981', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem' }}>## When to use</code>{' '}
                                    in the body to confirm the match.
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Bottom: Skill legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}
                >
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            style={{
                                background: '#16161f',
                                border: `1px solid ${matched.matchedSkill === skill.id ? skill.color + '80' : '#2a2a3d'}`,
                                borderRadius: '12px',
                                padding: '1rem',
                                transition: 'border-color 0.3s',
                                boxShadow: matched.matchedSkill === skill.id ? `0 0 16px ${skill.color}20` : 'none',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <skill.icon size={16} color={skill.color} />
                                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#f0f0ff', fontFamily: 'JetBrains Mono, monospace' }}>
                                    {skill.label}
                                </span>
                            </div>
                            <p style={{ fontSize: '0.72rem', color: '#5a5a7a', lineHeight: 1.5 }}>
                                {skill.descTrigger}
                            </p>
                            <div style={{
                                marginTop: '0.5rem',
                                display: 'inline-block',
                                background: `${skill.color}15`,
                                border: `1px solid ${skill.color}40`,
                                borderRadius: '999px',
                                padding: '2px 8px',
                                fontSize: '0.68rem',
                                color: skill.color,
                                fontWeight: 600,
                                fontFamily: 'JetBrains Mono, monospace',
                            }}>
                                {skill.command}
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
