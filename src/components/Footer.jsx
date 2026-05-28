import { motion } from 'framer-motion';
import { Bot, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            padding: '3rem 2rem',
            borderTop: '1px solid #2a2a3d',
            textAlign: 'center',
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '1rem' }}>
                    <div style={{
                        width: '30px', height: '30px',
                        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                        borderRadius: '7px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Bot size={15} color="white" />
                    </div>
                    <span style={{ fontWeight: 700, color: '#f0f0ff' }}>DevMentor</span>
                    <span style={{ color: '#5a5a7a' }}>—</span>
                    <span style={{ color: '#5a5a7a', fontSize: '0.875rem' }}>GitHub Copilot Agent Demo</span>
                </div>
                <p style={{ color: '#5a5a7a', fontSize: '0.82rem' }}>
                    Built to demonstrate <code style={{ color: '#a855f7' }}>AGENTS.md</code> personas and <code style={{ color: '#3b82f6' }}>SKILL.md</code> on-demand workflows.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                    <span style={{ color: '#5a5a7a', fontSize: '0.78rem' }}>Made with</span>
                    <Heart size={12} color='#ef4444' fill='#ef4444' />
                    <span style={{ color: '#5a5a7a', fontSize: '0.78rem' }}>using React + Framer Motion</span>
                </div>
            </motion.div>
        </footer>
    );
}
