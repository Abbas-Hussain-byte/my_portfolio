import { motion } from 'framer-motion'
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

                <motion.div variants={containerVariants} className="projects-grid">
                    {projectsData.map((project) => (
                        <motion.div key={project.slug} variants={itemVariants}>
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    )
}

export default Projects
