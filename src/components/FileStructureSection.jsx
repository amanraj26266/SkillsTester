import { motion } from 'framer-motion';
import { FolderOpen, FileText, Bot, Layers } from 'lucide-react';

const tree = [
    {
        name: 'AGENTS.md',
        type: 'file',
        color: '#a855f7',
        badge: 'Persona · Root',
        badgeColor: '#a855f7',
        desc: 'Placed at the project root — Copilot loads it automatically. Defines DevMentor persona, traits, behavior rules, and activated skills.',
    },
    {
        name: '.github/',
        type: 'folder',
        color: '#f59e0b',
        children: [
            {
                name: 'skills/',
                type: 'folder',
                color: '#f59e0b',
                children: [
                    {
                        name: 'code-reviewer/',
                        type: 'folder',
                        color: '#ef4444',
                        children: [
                            {
                                name: 'SKILL.md',
                                type: 'file',
                                color: '#ef4444',
                                badge: 'Skill 1',
                                badgeColor: '#ef4444',
                                desc: 'Invoked via /code-reviewer — 4-pass code analysis with structured output format.',
                            },
                        ],
                    },
                    {
                        name: 'api-designer/',
                        type: 'folder',
                        color: '#3b82f6',
                        children: [
                            {
                                name: 'SKILL.md',
                                type: 'file',
                                color: '#3b82f6',
                                badge: 'Skill 2',
                                badgeColor: '#3b82f6',
                                desc: 'Invoked via /api-designer — resource modeling, OpenAPI schemas, and security checklists.',
                            },
                        ],
                    },
                    {
                        name: 'syntax-validator/',
                        type: 'folder',
                        color: '#f59e0b',
                        children: [
                            {
                                name: 'SKILL.md',
                                type: 'file',
                                color: '#f59e0b',
                                badge: 'Auto',
                                badgeColor: '#f59e0b',
                                desc: 'Auto-runs after every edit — validates imports, brackets, JSX, strings, and variable refs.',
                            },
                        ],
                    },
                    {
                        name: 'ui-design-system/',
                        type: 'folder',
                        color: '#06b6d4',
                        children: [
                            {
                                name: 'SKILL.md',
                                type: 'file',
                                color: '#06b6d4',
                                badge: 'Skill 3',
                                badgeColor: '#06b6d4',
                                desc: 'Invoked via /ui-design-system — locks all design tokens before scaffolding new screens or navigation.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

function TreeNode({ node, depth = 0, index = 0 }) {
    const indent = depth * 20;
    const isFolder = node.type === 'folder';

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ background: '#1e1e2a' }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    paddingLeft: `${12 + indent}px`,
                    borderRadius: '8px',
                    cursor: 'default',
                    transition: 'background 0.15s',
                    position: 'relative',
                }}
            >
                {isFolder
                    ? <FolderOpen size={16} color={node.color} />
                    : <FileText size={16} color={node.color} />
                }
                <span style={{ color: isFolder ? '#f0f0ff' : '#d0d0f0', fontSize: '0.88rem', fontWeight: isFolder ? 600 : 400, fontFamily: 'JetBrains Mono, monospace' }}>
                    {node.name}
                </span>
                {node.badge && (
                    <span style={{
                        background: `${node.badgeColor}20`,
                        border: `1px solid ${node.badgeColor}50`,
                        color: node.badgeColor,
                        borderRadius: '999px',
                        padding: '2px 10px',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                    }}>
                        {node.badge}
                    </span>
                )}
            </motion.div>

            {node.desc && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 + 0.1 }}
                    style={{
                        paddingLeft: `${32 + indent}px`,
                        paddingBottom: '6px',
                    }}
                >
                    <p style={{ color: '#5a5a7a', fontSize: '0.78rem', lineHeight: 1.5 }}>{node.desc}</p>
                </motion.div>
            )}

            {node.children && node.children.map((child, i) => (
                <TreeNode key={child.name} node={child} depth={depth + 1} index={index + i + 1} />
            ))}
        </div>
    );
}

export default function FileStructureSection() {
    return (
        <section id="structure" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <span style={{
                        display: 'inline-block',
                        background: 'rgba(245,158,11,0.15)',
                        border: '1px solid rgba(245,158,11,0.4)',
                        color: '#f59e0b',
                        borderRadius: '999px',
                        padding: '4px 16px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                    }}>
                        File Structure
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f0f0ff', marginBottom: '1rem' }}>
                        Where Files <span style={{ background: 'linear-gradient(90deg,#f59e0b,#ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Live</span>
                    </h2>
                    <p style={{ color: '#9898b8', maxWidth: '580px', margin: '0 auto' }}>
                        <code style={{ background: '#16161f', padding: '2px 8px', borderRadius: '4px', color: '#a855f7', fontSize: '0.85rem' }}>AGENTS.md</code> goes at the <strong style={{ color: '#f0f0ff' }}>project root</strong>. Skills live under <code style={{ background: '#16161f', padding: '2px 8px', borderRadius: '4px', color: '#f59e0b', fontSize: '0.85rem' }}>.github/skills/</code> — both recognized automatically by GitHub Copilot.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem' }}>
                    <div style={{
                        background: '#16161f',
                        border: '1px solid #2a2a3d',
                        borderRadius: '16px',
                        padding: '1.5rem',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem', paddingBottom: '0.8rem', borderBottom: '1px solid #2a2a3d' }}>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                            </div>
                            <span style={{ color: '#5a5a7a', fontSize: '0.78rem', marginLeft: '4px' }}>Project Explorer</span>
                        </div>
                        {tree.map((node, i) => <TreeNode key={node.name} node={node} index={i} />)}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            {
                                icon: Bot,
                                color: '#a855f7',
                                title: 'AGENTS.md',
                                subtitle: 'Always-On Persona · Project Root',
                                desc: 'Lives at the project root (not inside .github/). Copilot loads it automatically on every request. It defines WHO the AI is — name, tone, principles, and which skills it activates.',
                            },
                            {
                                icon: Layers,
                                color: '#3b82f6',
                                title: 'SKILL.md',
                                subtitle: 'On-Demand Workflows',
                                desc: 'Each skill lives in its own folder under .github/skills/. Skills are only loaded when explicitly triggered by the user via /slash commands — keeping context lean.',
                            },
                        ].map(({ icon: Icon, color, title, subtitle, desc }) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ borderColor: color }}
                                style={{
                                    background: '#16161f',
                                    border: '1px solid #2a2a3d',
                                    borderRadius: '14px',
                                    padding: '1.4rem',
                                    transition: 'border-color 0.2s',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.7rem' }}>
                                    <div style={{
                                        width: '36px', height: '36px',
                                        background: `${color}20`,
                                        borderRadius: '8px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Icon size={18} color={color} />
                                    </div>
                                    <div>
                                        <code style={{ color, fontSize: '0.9rem', fontWeight: 600 }}>{title}</code>
                                        <p style={{ color: '#5a5a7a', fontSize: '0.75rem' }}>{subtitle}</p>
                                    </div>
                                </div>
                                <p style={{ color: '#9898b8', fontSize: '0.85rem', lineHeight: 1.65 }}>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
