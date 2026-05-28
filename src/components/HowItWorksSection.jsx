import { motion } from 'framer-motion';
import { ArrowRight, FileText, Bot, Sparkles, MessageSquare, Zap } from 'lucide-react';

const steps = [
    {
        icon: FileText,
        color: '#a855f7',
        step: '01',
        title: 'Create AGENTS.md',
        desc: 'Define your persona at the project root. Copilot loads it automatically on every request — no command needed. Sets name, tone, principles, and which skills are available.',
        code: '# DevMentor\nYou are a senior engineer...\n\n## Activated Skills\n/code-reviewer, /api-designer\n/ui-design-system\n\n## Auto-Skills\nsyntax-validator ← after every edit',
    },
    {
        icon: Bot,
        color: '#3b82f6',
        step: '02',
        title: 'Author SKILL.md files',
        desc: 'Each skill has TWO trigger layers — the YAML description (scanned by the agent) and a ## When to use section inside the body (read after loading). Both must match.',
        code: '---\nname: code-reviewer\ndescription: >\n  Use when: reviewing code...\n  Trigger: "find bugs", "audit"\n---\n\n## When to use\nActivate when user asks to\nreview, audit, or analyze code.',
    },
    {
        icon: MessageSquare,
        color: '#06b6d4',
        step: '03',
        title: 'Prompt Triggers the Skill',
        desc: 'The agent scans the description field of every skill. When your prompt matches — either via /slash command or natural language — the matching SKILL.md is loaded automatically.',
        code: '// Slash command (explicit)\n> /code-reviewer\n\n// Natural language (auto-matched)\n> "can you review my auth function?\n   find any security issues"\n\n← Both load code-reviewer/SKILL.md',
    },
    {
        icon: Sparkles,
        color: '#10b981',
        step: '04',
        title: 'Persona Responds',
        desc: 'DevMentor activates the skill, follows the structured workflow, and returns formatted results aligned with its persona.',
        code: '## 🔴 Critical\nHardcoded secret detected → exposes\ncredentials → move to env vars\n\n## ✅ What\'s Working Well\nProper async/await usage!',
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" style={{ padding: '5rem 2rem', background: '#111118' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3.5rem' }}
                >
                    <span style={{
                        display: 'inline-block',
                        background: 'rgba(6,182,212,0.15)',
                        border: '1px solid rgba(6,182,212,0.4)',
                        color: '#06b6d4',
                        borderRadius: '999px',
                        padding: '4px 16px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                    }}>
                        How It Works
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f0f0ff', marginBottom: '1rem' }}>
                        From Files to <span style={{ background: 'linear-gradient(90deg,#06b6d4,#10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Intelligence</span>
                    </h2>
                    <p style={{ color: '#9898b8', maxWidth: '520px', margin: '0 auto' }}>
                        Four simple steps from defining a persona to getting structured, expert-level responses from your AI agent.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', position: 'relative' }}>
                    {/* Connector line */}
                    <div style={{
                        position: 'absolute',
                        top: '60px',
                        left: '12.5%',
                        right: '12.5%',
                        height: '1px',
                        background: 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4, #10b981)',
                        opacity: 0.3,
                    }} />

                    {steps.map(({ icon: Icon, color, step, title, desc, code }, i) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            style={{
                                background: '#16161f',
                                border: `1px solid ${color}30`,
                                borderRadius: '16px',
                                padding: '1.5rem',
                                cursor: 'default',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                <motion.div
                                    animate={{ boxShadow: [`0 0 0px ${color}00`, `0 0 20px ${color}60`, `0 0 0px ${color}00`] }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                                    style={{
                                        width: '48px', height: '48px',
                                        background: `${color}20`,
                                        borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: `1px solid ${color}40`,
                                    }}
                                >
                                    <Icon size={22} color={color} />
                                </motion.div>
                                <span style={{ color: `${color}60`, fontSize: '1.8rem', fontWeight: 900, fontFamily: 'JetBrains Mono, monospace' }}>{step}</span>
                            </div>

                            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f0ff', marginBottom: '0.5rem' }}>{title}</h3>
                            <p style={{ color: '#9898b8', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1rem' }}>{desc}</p>

                            <pre style={{
                                background: '#0a0a0f',
                                border: '1px solid #2a2a3d',
                                borderRadius: '8px',
                                padding: '0.8rem',
                                color: '#9898b8',
                                fontSize: '0.7rem',
                                lineHeight: 1.7,
                                overflowX: 'auto',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-all',
                            }}>
                                {code}
                            </pre>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
