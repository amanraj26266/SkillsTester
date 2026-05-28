import { motion } from 'framer-motion';
import { Bot, Shield, BookOpen, Star, Zap } from 'lucide-react';

const traits = [
    { icon: Shield, label: 'Security First', desc: 'Flags OWASP Top 10 before anything else', color: '#ef4444' },
    { icon: BookOpen, label: 'Clear Over Clever', desc: 'Readable code beats clever one-liners', color: '#3b82f6' },
    { icon: Zap, label: 'Fail Fast', desc: 'Validate at boundaries, surface errors early', color: '#f59e0b' },
    { icon: Star, label: 'Document Intent', desc: 'Comments explain why, not what', color: '#10b981' },
];

export default function PersonaSection() {
    return (
        <section id="persona" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <span style={{
                        display: 'inline-block',
                        background: 'rgba(124,58,237,0.15)',
                        border: '1px solid rgba(124,58,237,0.4)',
                        color: '#a855f7',
                        borderRadius: '999px',
                        padding: '4px 16px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                    }}>
                        AGENTS.md Persona
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: '#f0f0ff' }}>
                        Meet <span style={{ background: 'linear-gradient(90deg,#a855f7,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DevMentor</span>
                    </h2>
                    <p style={{ color: '#9898b8', maxWidth: '560px', margin: '0 auto', fontSize: '1.05rem' }}>
                        A senior engineer persona defined in <code style={{ background: '#16161f', padding: '2px 8px', borderRadius: '4px', color: '#a855f7', fontSize: '0.9rem' }}>AGENTS.md</code> at the project root — always-on behavior that shapes every interaction.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '2rem', alignItems: 'start' }}>
                    {/* Avatar Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            background: '#16161f',
                            border: '1px solid #2a2a3d',
                            borderRadius: '16px',
                            padding: '2rem',
                            textAlign: 'center',
                        }}
                    >
                        <motion.div
                            animate={{ boxShadow: ['0 0 20px rgba(124,58,237,0.3)', '0 0 40px rgba(59,130,246,0.4)', '0 0 20px rgba(124,58,237,0.3)'] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            style={{
                                width: '90px', height: '90px',
                                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                                borderRadius: '50%',
                                margin: '0 auto 1.2rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                        >
                            <Bot size={40} color="white" />
                        </motion.div>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f0f0ff', marginBottom: '0.25rem' }}>DevMentor</h3>
                        <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: 500, marginBottom: '1rem' }}>Senior Engineer Persona</p>
                        <p style={{ color: '#9898b8', fontSize: '0.9rem', lineHeight: 1.7 }}>
                            15+ years in full-stack development, API design, and code quality assurance. Warm, encouraging, and precise.
                        </p>

                        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#0a0a0f', borderRadius: '10px', textAlign: 'left' }}>
                            <p style={{ color: '#5a5a7a', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '0.5rem' }}>ACTIVATED SKILLS</p>
                            {[
                                { cmd: '/code-reviewer', color: '#10b981' },
                                { cmd: '/api-designer', color: '#10b981' }, { cmd: '/ui-design-system', color: '#06b6d4' }, { cmd: '/syntax-validator', color: '#f59e0b', auto: true },
                            ].map(({ cmd, color, auto }) => (
                                <div key={cmd} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color }} />
                                    <code style={{ color, fontSize: '0.82rem' }}>{cmd}</code>
                                    {auto && <span style={{ fontSize: '0.65rem', color: '#f59e0b', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '4px', padding: '1px 6px' }}>auto</span>}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Traits Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {traits.map(({ icon: Icon, label, desc, color }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i + 0.3 }}
                                whileHover={{ scale: 1.03, borderColor: color }}
                                style={{
                                    background: '#16161f',
                                    border: '1px solid #2a2a3d',
                                    borderRadius: '12px',
                                    padding: '1.4rem',
                                    cursor: 'default',
                                    transition: 'border-color 0.2s',
                                }}
                            >
                                <div style={{
                                    width: '40px', height: '40px',
                                    background: `${color}20`,
                                    borderRadius: '10px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '0.8rem',
                                }}>
                                    <Icon size={20} color={color} />
                                </div>
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f0f0ff', marginBottom: '0.35rem' }}>{label}</h4>
                                <p style={{ fontSize: '0.82rem', color: '#9898b8', lineHeight: 1.5 }}>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
