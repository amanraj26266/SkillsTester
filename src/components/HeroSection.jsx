import { motion } from 'framer-motion';
import { Bot, Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8rem 2rem 4rem',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background gradient blobs */}
            <div style={{
                position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
            }}>
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    style={{
                        position: 'absolute',
                        top: '20%', left: '10%',
                        width: '500px', height: '500px',
                        background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />
                <motion.div
                    animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                    style={{
                        position: 'absolute',
                        top: '30%', right: '10%',
                        width: '400px', height: '400px',
                        background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 4 }}
                    style={{
                        position: 'absolute',
                        bottom: '20%', left: '40%',
                        width: '350px', height: '350px',
                        background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
                        borderRadius: '50%',
                    }}
                />
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '1.5rem' }}
                >
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(124,58,237,0.12)',
                        border: '1px solid rgba(124,58,237,0.35)',
                        color: '#a855f7',
                        borderRadius: '999px',
                        padding: '6px 18px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                    }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#a855f7', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                        GitHub Copilot Agent Customization
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.02em',
                    }}
                >
                    Build AI Agents with{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Personas & Skills
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: '1.15rem',
                        color: '#9898b8',
                        maxWidth: '640px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.75,
                    }}
                >
                    Learn how to use <code style={{ background: '#16161f', padding: '2px 8px', borderRadius: '4px', color: '#a855f7' }}>AGENTS.md</code> to define AI personas and <code style={{ background: '#16161f', padding: '2px 8px', borderRadius: '4px', color: '#3b82f6' }}>SKILL.md</code> files to package on-demand workflows — all inside your <code style={{ background: '#16161f', padding: '2px 8px', borderRadius: '4px', color: '#06b6d4' }}>.github/</code> folder.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
                    <motion.a
                        href="#persona"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '12px',
                            padding: '14px 28px',
                            fontWeight: 700,
                            fontSize: '1rem',
                        }}
                    >
                        <Bot size={18} />
                        Meet the Persona
                        <ArrowRight size={16} />
                    </motion.a>

                    <motion.a
                        href="#skills"
                        whileHover={{ scale: 1.05, borderColor: '#a855f7' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'transparent',
                            color: '#f0f0ff',
                            textDecoration: 'none',
                            borderRadius: '12px',
                            border: '1px solid #2a2a3d',
                            padding: '14px 28px',
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: 'border-color 0.2s',
                        }}
                    >
                        <Sparkles size={18} />
                        Explore Skills
                    </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        justifyContent: 'center',
                        marginTop: '4rem',
                        flexWrap: 'wrap',
                    }}
                >
                    {[
                        { value: '1', label: 'AGENTS.md Persona', color: '#a855f7' },
                        { value: '2', label: 'Skills Included', color: '#3b82f6' },
                        { value: '4', label: 'Review Passes', color: '#06b6d4' },
                        { value: '5', label: 'API Design Phases', color: '#10b981' },
                    ].map(({ value, label, color }) => (
                        <div key={label} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, color, lineHeight: 1 }}>{value}</div>
                            <div style={{ fontSize: '0.78rem', color: '#5a5a7a', marginTop: '4px', fontWeight: 500 }}>{label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
