import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projects'
import { RacingFlag, Speedometer, Database } from '../components/TechIcons'
import { WavingFlag, TelemetryDashboard } from '../components/F1Animations'

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

function Projects() {
    const [activeTab, setActiveTab] = useState('projects')

    return (
        <div className="container">
            <motion.section
                className="section"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
                        <motion.h1 variants={itemVariants} style={{ marginBottom: 0 }}>Projects</motion.h1>

                        {/* Animated Graphics */}
                        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <WavingFlag size={90} />
                            <TelemetryDashboard size={70} />
                        </motion.div>

                        {/* Static Icons */}
                        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', opacity: 0.5 }}>
                            <RacingFlag size={28} color="var(--accent-success)" />
                            <Speedometer size={28} color="var(--accent-primary)" />
                            <Database size={28} color="var(--accent-warning)" />
                        </motion.div>
                    </div>
                    <motion.p variants={itemVariants} style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '48px' }}>
                        Engineering briefs from constraint to impact. Each project framed like an F1 race weekend:
                        constraints, strategy, trade-offs, and measured outcomes.
                    </motion.p>
                </div>

                <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                    <button
                        className={`btn ${activeTab === 'projects' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setActiveTab('projects')}
                    >
                        Projects
                    </button>
                    <button
                        className={`btn ${activeTab === 'stats' ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setActiveTab('stats')}
                    >
                        Problem Solving
                    </button>
                </div>

                {activeTab === 'projects' ? (
                    <motion.div variants={containerVariants} className="projects-grid">
                        {projectsData.map((project) => (
                            <motion.div key={project.slug} variants={itemVariants}>
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ display: 'grid', gap: '24px' }}
                    >
                        {/* SmartInterviews Card */}
                        <div className="project-card" style={{ cursor: 'default', transform: 'none' }}>
                            <div className="project-card-header">
                                <h3 className="project-card-title">SmartInterviews.in</h3>
                                <span className="status status-live">ACTIVE</span>
                            </div>

                            <div className="metrics-grid">
                                <div className="metric-card">
                                    <span className="metric-label">GLOBAL RANK</span>
                                    <span className="metric-value">1245<span className="metric-unit">#</span></span>
                                    <span className="metric-delta metric-delta-positive">Top 5%</span>
                                </div>
                                <div className="metric-card">
                                    <span className="metric-label">PROBLEMS SOLVED</span>
                                    <span className="metric-value">320<span className="metric-unit">+</span></span>
                                    <span className="metric-delta metric-delta-positive">+12 this week</span>
                                </div>
                                <div className="metric-card">
                                    <span className="metric-label">CURRENT STREAK</span>
                                    <span className="metric-value">14<span className="metric-unit">DAYS</span></span>
                                </div>
                                <div className="metric-card">
                                    <span className="metric-label">SCORE</span>
                                    <span className="metric-value">1450</span>
                                </div>
                            </div>

                            <div className="project-card-label">RECENT ACTIVITY</div>
                            <div style={{ height: '60px', display: 'flex', alignItems: 'flex-end', gap: '4px', marginTop: '16px' }}>
                                {/* Mock Refreshing Graph */}
                                {[40, 65, 30, 80, 55, 90, 45, 70, 60, 85, 50, 75, 40, 60, 95].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.05, duration: 0.5 }}
                                        style={{
                                            flex: 1,
                                            background: 'var(--accent-primary)',
                                            opacity: 0.3,
                                            borderRadius: '2px 2px 0 0'
                                        }}
                                    />
                                ))}
                            </div>
                            <div style={{ marginTop: '24px' }}>
                                <a href="https://smartinterviews.in/profile/abbas_hussain" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                                    View Live Profile <ArrowRight size={14} style={{ marginLeft: '8px' }} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.section>
        </div>
    )
}

export default Projects
