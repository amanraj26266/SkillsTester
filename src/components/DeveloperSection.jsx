import { motion } from 'framer-motion';
import { User, Code, Globe, MapPin, GitBranch, Calendar, Layers, ExternalLink } from 'lucide-react';

const techStack = [
    { label: 'JavaScript', color: '#f59e0b' },
    { label: 'Python', color: '#3b82f6' },
    { label: 'React', color: '#06b6d4' },
    { label: 'Node.js', color: '#10b981' },
    { label: 'Express', color: '#9898b8' },
    { label: 'MongoDB', color: '#4ade80' },
    { label: 'MySQL', color: '#f97316' },
    { label: 'C / C++', color: '#a855f7' },
    { label: '.NET', color: '#7c3aed' },
    { label: 'PHP', color: '#6366f1' },
    { label: 'React Native', color: '#38bdf8' },
    { label: 'Git', color: '#ef4444' },
];

const stats = [
    { icon: Calendar, value: '6 mo', label: 'Experience', color: '#a855f7' },
    { icon: Layers, value: '27', label: 'Projects Built', color: '#3b82f6' },
    { icon: Code, value: '100K+', label: 'Lines of Code', color: '#f59e0b' },
];

const links = [
    { icon: GitBranch, label: 'GitHub', href: 'https://github.com/amanraj26266', color: '#f0f0ff' },
    { icon: Globe, label: 'Portfolio', href: 'https://portfolio-aman-9myc.onrender.com/', color: '#06b6d4' },
    { icon: ExternalLink, label: 'LinkedIn', href: 'https://www.linkedin.com/in/amanraj26266/', color: '#3b82f6' },
    { icon: Code, label: 'LeetCode', href: 'https://www.leetcode.com/aman12106020', color: '#f59e0b' },
];

export default function DeveloperSection() {
    return (
        <section id="developer" style={{ padding: '5rem 2rem', background: '#111118' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
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
                        The Developer
                    </span>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f0f0ff', marginBottom: '1rem' }}>
                        Who Built{' '}
                        <span style={{
                            background: 'linear-gradient(90deg, #a855f7, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            This
                        </span>
                    </h2>
                    <p style={{ color: '#9898b8', maxWidth: '520px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
                        A full-stack developer passionate about AI tooling, developer experience, and building things that matter.
                    </p>
                </motion.div>

                {/* Main layout */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '2rem', alignItems: 'start' }}>

                    {/* Profile card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        style={{
                            background: '#16161f',
                            border: '1px solid #2a2a3d',
                            borderRadius: '16px',
                            padding: '2rem',
                            textAlign: 'center',
                        }}
                    >
                        {/* Avatar */}
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 20px rgba(124,58,237,0.3)',
                                    '0 0 40px rgba(59,130,246,0.4)',
                                    '0 0 20px rgba(124,58,237,0.3)',
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            style={{
                                width: '90px', height: '90px',
                                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                                borderRadius: '50%',
                                margin: '0 auto 1.2rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}
                        >
                            <User size={38} color="white" />
                        </motion.div>

                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f0f0ff', marginBottom: '0.25rem' }}>
                            Aman Raj
                        </h3>
                        <p style={{ color: '#a855f7', fontSize: '0.85rem', fontWeight: 500, marginBottom: '0.6rem' }}>
                            Full Stack Developer @ Gritsa Technologies
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '1.2rem' }}>
                            <MapPin size={13} color="#5a5a7a" />
                            <span style={{ color: '#5a5a7a', fontSize: '0.8rem' }}>Narkatiaganj, Bihar, India</span>
                        </div>

                        <p style={{ color: '#9898b8', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                            Full Stack Developer at Gritsa Technologies. Passionate about Software Development, Problem Solving, and Web Technologies. Hands-on experience in vibe coding and currently levelling up with .NET.
                        </p>

                        {/* Social links */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {links.map(({ icon: Icon, label, href, color }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.03, borderColor: color }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '10px',
                                        padding: '0.6rem 1rem',
                                        background: '#0a0a0f',
                                        border: '1px solid #2a2a3d',
                                        borderRadius: '10px',
                                        textDecoration: 'none',
                                        transition: 'border-color 0.2s',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Icon size={15} color={color} />
                                    <span style={{ color: '#9898b8', fontSize: '0.82rem', fontWeight: 500 }}>{label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        {/* Stats row */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                            {stats.map(({ icon: Icon, value, label, color }, i) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i + 0.2 }}
                                    whileHover={{ scale: 1.02, borderColor: color }}
                                    style={{
                                        background: '#16161f',
                                        border: '1px solid #2a2a3d',
                                        borderRadius: '14px',
                                        padding: '1.4rem',
                                        display: 'flex', alignItems: 'center', gap: '1rem',
                                        transition: 'border-color 0.2s',
                                        cursor: 'default',
                                    }}
                                >
                                    <div style={{
                                        width: '44px', height: '44px',
                                        background: `${color}20`,
                                        borderRadius: '10px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        flexShrink: 0,
                                    }}>
                                        <Icon size={20} color={color} />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#f0f0ff', lineHeight: 1 }}>{value}</p>
                                        <p style={{ fontSize: '0.75rem', color: '#5a5a7a', marginTop: '0.25rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tech stack card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            style={{
                                background: '#16161f',
                                border: '1px solid #2a2a3d',
                                borderRadius: '16px',
                                padding: '1.6rem',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.2rem' }}>
                                <div style={{
                                    width: '36px', height: '36px',
                                    background: 'rgba(124,58,237,0.15)',
                                    borderRadius: '9px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <Code size={18} color="#a855f7" />
                                </div>
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f0f0ff' }}>Tech Stack</h4>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {techStack.map(({ label, color }, i) => (
                                    <motion.span
                                        key={label}
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.04 * i + 0.4 }}
                                        style={{
                                            display: 'inline-block',
                                            background: `${color}18`,
                                            border: `1px solid ${color}50`,
                                            color: color,
                                            borderRadius: '999px',
                                            padding: '4px 14px',
                                            fontSize: '0.78rem',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {label}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* About card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.45 }}
                            style={{
                                background: '#16161f',
                                border: '1px solid #2a2a3d',
                                borderRadius: '16px',
                                padding: '1.6rem',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                                <div style={{
                                    width: '36px', height: '36px',
                                    background: 'rgba(59,130,246,0.15)',
                                    borderRadius: '9px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                }}>
                                    <User size={18} color="#3b82f6" />
                                </div>
                                <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f0f0ff' }}>About</h4>
                            </div>
                            <p style={{ color: '#9898b8', fontSize: '0.875rem', lineHeight: 1.8 }}>
                                I built this project to showcase the power of GitHub Copilot's custom agent system — specifically how{' '}
                                <code style={{ background: '#0a0a0f', padding: '2px 7px', borderRadius: '4px', color: '#a855f7', fontSize: '0.82rem' }}>AGENTS.md</code>
                                {' '}and{' '}
                                <code style={{ background: '#0a0a0f', padding: '2px 7px', borderRadius: '4px', color: '#3b82f6', fontSize: '0.82rem' }}>SKILL.md</code>
                                {' '}files can shape AI behavior at a project level. When AI tools respect your project's conventions, everyone writes better code, faster.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
