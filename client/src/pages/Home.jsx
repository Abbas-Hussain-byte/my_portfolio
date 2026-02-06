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

                <motion.h1
                    variants={itemVariants}
                    style={{
                        marginBottom: '24px',
                        textAlign: 'center',
                        fontSize: '56px', // Smaller as requested
                        letterSpacing: 'normal',
                        wordSpacing: '12px', // More distance between names
                        background: 'linear-gradient(to right, #ffffff, #888888, #ffffff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 40px rgba(255,255,255,0.1)'
                    }}
                    className="hero-name"
                >
                    ABBAS    HUSSAIN
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
                        <span style={{ color: 'var(--text-secondary)' }}>Developing optimized Full-Stack & AI/ML solutions</span>
                    </div>
                    <div>
                        <span style={{ color: 'var(--text-tertiary)' }}>FOCUS:</span>{' '}
                        <span style={{ color: 'var(--text-secondary)' }}>Problem Solving, RDBMS, Backend & Advanced Git</span>
                    </div>
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
