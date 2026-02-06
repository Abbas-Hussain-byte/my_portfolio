import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CheckeredFlag from '../components/CheckeredFlag'
import { RacingHelmet, Terminal, Speedometer, Laptop, CircuitBoard } from '../components/TechIcons'

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

                {/* Floating Tech Icons Banner */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '32px',
                        marginBottom: '40px',
                        opacity: 0.6,
                        alignItems: 'center',
                        justifyContent: 'center' // Centered icons
                    }}
                >
                    <RacingHelmet size={40} color="var(--accent-primary)" />
                    <Terminal size={40} color="var(--accent-success)" />
                    <Speedometer size={40} color="var(--accent-warning)" />
                    <Laptop size={40} color="var(--accent-primary)" />
                    <CircuitBoard size={40} color="var(--accent-highlight)" />
                </motion.div>

                <motion.h1 variants={itemVariants} style={{ marginBottom: '24px', textAlign: 'center' }}>
                    Abbas Hussain
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: '20px',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        maxWidth: '700px',
                        marginBottom: '16px',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto'
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
                        fontStyle: 'italic',
                        textAlign: 'center',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    Building software with focus on clean code, measured performance, and iterative improvement.
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '16px',
                        marginBottom: '48px',
                        justifyContent: 'center'
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
                        paddingLeft: '16px',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
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

                {/* Skills Section */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        marginTop: '64px',
                        width: '100%'
                    }}
                >
                    <h3 style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-primary)', fontSize: '32px', fontWeight: 'bold', letterSpacing: '-0.02em' }}>Technical Arsenal</h3>
                    <motion.div
                        className="skills-grid"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.08,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Java', 'Python', 'MySQL', 'PostgreSQL', 'Git'].map((skill) => (
                            <motion.div
                                key={skill}
                                className="skill-card"
                                variants={{
                                    hidden: { y: 30, opacity: 0, scale: 0.9 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 40,
                                            damping: 10,
                                            mass: 1
                                        }
                                    }
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.2, ease: "easeOut" },
                                    boxShadow: "0 10px 30px -10px rgba(0, 217, 255, 0.4)",
                                    borderColor: "var(--accent-primary)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{skill}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>
        </div >
    )
}

export default Home
