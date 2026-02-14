import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CheckeredFlag from '../components/CheckeredFlag'
import { RacingHelmet, Terminal, Speedometer, Laptop, CircuitBoard, Database } from '../components/TechIcons'

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

const skillsData = [
    { name: 'React', icon: CircuitBoard },
    { name: 'Node.js', icon: Terminal },
    { name: 'MongoDB', icon: Database },
    { name: 'Express', icon: Laptop }, // Laptop as placeholder for server/framework
    { name: 'JavaScript', icon: Terminal },
    { name: 'Java', icon: Laptop },
    { name: 'Python', icon: Terminal },
    { name: 'MySQL', icon: Database },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Git', icon: CircuitBoard }
];

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
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '80px',
                    position: 'relative'
                }}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Background Glow Effects */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }} />

                {/* Avatar / Profile Placeholder */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-tertiary))',
                        border: '2px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px',
                        position: 'relative',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                    }}
                >
                    <RacingHelmet size={60} color="var(--accent-primary)" />
                    <div style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        width: '32px',
                        height: '32px',
                        background: 'var(--bg-primary)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid var(--border-subtle)'
                    }}>
                        <div style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            background: 'var(--accent-success)',
                            boxShadow: '0 0 8px var(--accent-success)'
                        }} />
                    </div>
                </motion.div>

                {/* Status Badge */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        marginBottom: '24px'
                    }}
                >
                    <div className="status-badge" style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--text-secondary)'
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: 'var(--accent-success)',
                            boxShadow: '0 0 8px var(--accent-success)'
                        }} />
                        Available for Work
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={itemVariants}
                    style={{
                        marginBottom: '16px',
                        textAlign: 'center',
                        lineHeight: '1.1',
                        letterSpacing: '-0.03em',
                    }}
                    className="hero-name hero-h1-responsive"
                >
                    ABBAS HUSSAIN
                </motion.h1>

                {/* Subtitle / Role */}
                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: '20px',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        maxWidth: '800px',
                        marginBottom: '32px',
                        textAlign: 'center'
                    }}
                    className="hero-text-responsive"
                >
                    CS student & tech enthusiast engineering <span style={{ color: 'var(--accent-primary)' }}>Full Stack</span> and <span style={{ color: 'var(--accent-primary)' }}>AI/ML</span> solutions. Focused on clean code, performance, and iterative improvement.
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: '18px',
                        color: 'var(--text-primary)',
                        fontStyle: 'italic',
                        marginTop: '-16px',
                        marginBottom: '32px',
                        textAlign: 'center',
                        opacity: 0.9
                    }}
                >
                    "I tell machines what to do and sometimes they listen."
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '16px',
                        marginBottom: '48px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <Link to="/projects" className="btn btn-primary">
                        View Projects <ArrowRight size={16} />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                        Get in Touch
                    </Link>
                </motion.div>

                {/* Tech Stack Icons (Floating below) */}
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '24px',
                        opacity: 0.5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 'auto',
                        paddingBottom: '40px'
                    }}
                    className="hero-icons-responsive"
                >
                    <Terminal size={24} color="var(--text-tertiary)" />
                    <Laptop size={24} color="var(--text-tertiary)" />
                    <Database size={24} color="var(--text-tertiary)" />
                    <CircuitBoard size={24} color="var(--text-tertiary)" />
                </motion.div>
            </motion.section>

            {/* Skills Section - Separate from Hero for better spacing */}
            <motion.section
                id="skills"
                className="section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                style={{ paddingTop: '0' }}
            >
                <motion.div
                    variants={itemVariants}
                    style={{
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
                    >
                        {skillsData.map((skill) => (
                            <motion.div
                                key={skill.name}
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
                                    y: -8,
                                    transition: { duration: 0.2, ease: "easeOut" },
                                    boxShadow: "0 14px 28px rgba(0, 217, 255, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                                    borderColor: "var(--accent-primary)",
                                    backgroundColor: "rgba(255, 255, 255, 0.03)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div style={{ marginBottom: '8px', color: 'var(--accent-primary)', opacity: 0.8 }}>
                                    <skill.icon size={28} />
                                </div>
                                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>
        </div >
    )
}

export default Home
