import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CheckeredFlag from '../components/CheckeredFlag'
import { RacingHelmet, Terminal, Speedometer, Laptop, CircuitBoard } from '../components/TechIcons'
// import Scene3D from '../components/Scene3D'

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 }
    }
}

function Home() {
    return (
        <div className="container">
            <motion.section
                className="section hero-with-grid"
                style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >

                {/* Animated F1 Car - Hero Graphic */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        width: '100%',
                        height: '400px',
                        marginBottom: '40px',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid var(--border-subtle)',
                        background: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* <Scene3D /> */}
                    <div className="mono" style={{ zIndex: 2, textAlign: 'center' }}>
                        <div style={{ color: 'var(--accent-warning)', marginBottom: '8px', fontSize: '14px' }}>[ SYSTEM STATUS: OFFLINE ]</div>
                        <div style={{ color: 'var(--text-tertiary)', fontSize: '12px' }}>3D VISUALIZATION TEMPORARILY DISABLED</div>
                    </div>
                    {/* Decorative grid for the placeholder */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.1,
                        backgroundImage: 'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                        pointerEvents: 'none'
                    }}></div>
                </motion.div>

                {/* Floating Tech Icons Banner */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '32px',
                        marginBottom: '40px',
                        opacity: 0.6,
                        alignItems: 'center'
                    }}
                >
                    <RacingHelmet size={32} color="var(--accent-primary)" />
                    <Terminal size={32} color="var(--accent-success)" />
                    <Speedometer size={32} color="var(--accent-warning)" />
                    <Laptop size={32} color="var(--accent-primary)" />
                    <CircuitBoard size={32} color="var(--accent-highlight)" />
                </motion.div>

                <motion.h1 variants={itemVariants} style={{ marginBottom: '24px' }}>
                    Abbas Hussain
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: '20px',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        marginBottom: '16px'
                    }}
                >
                    CS student and tech enthusiast developing solutions using <span style={{ color: 'var(--accent-primary)' }}>full stack</span> and <span style={{ color: 'var(--accent-primary)' }}>AI/ML</span> technology.
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: '16px',
                        lineHeight: '1.7',
                        color: 'var(--text-tertiary)',
                        maxWidth: '650px',
                        marginBottom: '32px',
                        fontStyle: 'italic'
                    }}
                >
                    Building software with focus on clean code, measured performance, and iterative improvement.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '16px',
                        marginBottom: '48px'
                    }}
                >
                    <Link to="/projects" className="btn btn-primary">
                        View Projects <ArrowRight size={16} />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        Get in Touch
                    </Link>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="mono"
                    style={{
                        fontSize: '14px',
                        color: 'var(--text-tertiary)',
                        borderLeft: '2px solid var(--border-subtle)',
                        paddingLeft: '16px'
                    }}
                >
                    <div style={{ marginBottom: '8px' }}>
                        <span style={{ color: 'var(--text-tertiary)' }}>CURRENTLY:</span>{' '}
                        <span style={{ color: 'var(--text-secondary)' }}>Exploring backend & performance optimization</span>
                    </div>
                    <div>
                        <span style={{ color: 'var(--text-tertiary)' }}>LEARNING:</span>{' '}
                        <span style={{ color: 'var(--text-secondary)' }}>Distributed systems, algorithms & AI/ML</span>
                    </div>
                </motion.div>

                {/* Checkered Flag Divider */}
                <motion.div variants={itemVariants} className="section-divider">
                    <div className="section-divider-line"></div>
                    <CheckeredFlag size={28} />
                    <div className="section-divider-line"></div>
                </motion.div>
            </motion.section>
        </div>
    )
}

export default Home
