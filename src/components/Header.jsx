import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';

const navItems = [
    { label: 'Persona', href: '#persona' },
    { label: 'Skills', href: '#skills' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'File Structure', href: '#structure' },
    { label: 'Playground', href: '#playground' },
    { label: 'Developer', href: '#developer' },
];

export default function Header() {
    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: 'rgba(10, 10, 15, 0.85)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid #2a2a3d',
                padding: '0 2rem',
            }}
        >
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '64px',
            }}>
                <motion.div
                    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                    whileHover={{ scale: 1.03 }}
                >
                    <div style={{
                        width: '34px', height: '34px',
                        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                        borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Bot size={18} color="white" />
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '1rem', color: '#f0f0ff' }}>
                        DevMentor<span style={{ color: '#a855f7' }}>.agent</span>
                    </span>
                </motion.div>

                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navItems.map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            whileHover={{ color: '#a855f7' }}
                            style={{
                                color: '#9898b8',
                                textDecoration: 'none',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                transition: 'color 0.2s',
                            }}
                        >
                            {item.label}
                        </motion.a>
                    ))}

                    <motion.a
                        href="https://github.com/amanraj26266"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(124,58,237,0.5)' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '8px 18px',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                        }}
                    >
                        <Sparkles size={14} />
                        View Docs
                    </motion.a>
                </nav>
            </div>
        </motion.header>
    );
}
