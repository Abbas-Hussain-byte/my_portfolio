import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileDown, Trophy, Terminal, Settings as Gear } from 'lucide-react'
import CheckeredFlag from '../components/CheckeredFlag'
import { TeamRadioHeadset, DataStream } from '../components/F1Animations'
import ContactForm from '../components/ContactForm'

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

function Contact() {
    return (
        <div className="container">
            <motion.section
                className="section"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    <motion.h1 variants={itemVariants} style={{ marginBottom: 0 }}>Contact</motion.h1>

                    {/* Animated Graphics */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <TeamRadioHeadset size={70} />
                        <DataStream size={60} />
                    </motion.div>

                    {/* Static Icons */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '12px', opacity: 0.5 }}>
                        <Terminal size={26} color="var(--accent-primary)" />
                        <Gear size={26} color="var(--accent-success)" />
                    </motion.div>
                </div>
                <motion.p variants={itemVariants} style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '48px' }}>
                    Open to opportunities in full-stack development, AI/ML projects, and collaborative problem-solving.
                </motion.p>

                <div className="contact-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px',
                    alignItems: 'start'
                }}>
                    {/* Left Column: Form */}
                    <motion.div variants={itemVariants}>
                        <div className="mono" style={{ fontSize: '12px', color: 'var(--accent-success)', marginBottom: '16px', letterSpacing: '2px' }}>
                            // SECURE TRANSMISSION CHANNEL
                        </div>
                        <ContactForm />
                    </motion.div>

                    {/* Right Column: Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <motion.div variants={itemVariants} className="mono" style={{ fontSize: '12px', color: 'var(--accent-primary)', marginBottom: '8px', letterSpacing: '2px' }}>
                            // ALTERNATIVE TELEMETRY
                        </motion.div>
                        {[
                            { href: "mailto:abbashussain0986@gmail.com", icon: Mail, label: "EMAIL", value: "abbashussain0986@gmail.com", color: "var(--accent-primary)" },
                            { href: "https://github.com/Abbas-Hussain-byte", icon: Github, label: "GITHUB", value: "Abbas-Hussain-byte", color: "var(--accent-primary)" },
                            { href: "https://www.linkedin.com/in/abbashussain23/", icon: Linkedin, label: "LINKEDIN", value: "abbashussain23", color: "var(--accent-primary)" },
                            { href: "https://smartinterviews.in/profile/abbas_hussain", icon: Trophy, label: "DSA DASHBOARD", value: "Problem Solving Profile", color: "var(--accent-success)" },
                            { href: "/resume.pdf", icon: FileDown, label: "RESUME", value: "Download PDF", color: "var(--accent-primary)", download: true }
                        ].map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target={item.href.startsWith('mailto') ? undefined : "_blank"}
                                rel={item.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                                download={item.download}
                                variants={itemVariants}
                                className="glass-card"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '20px',
                                    textDecoration: 'none',
                                    borderRadius: '12px',
                                    transition: 'transform 0.2s, border-color 0.2s',
                                }}
                                whileHover={{ scale: 1.02, borderColor: 'var(--accent-primary)' }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <item.icon size={20} color={item.color} />
                                <div>
                                    <div className="mono" style={{ fontSize: '10px', color: 'var(--text-tertiary)', marginBottom: '2px' }}>
                                        {item.label}
                                    </div>
                                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                                        {item.value}
                                    </div>
                                </div>
                            </motion.a>
                        ))}

                        {/* Additional Info Box */}
                        <motion.div
                            variants={itemVariants}
                            className="glass-panel"
                            style={{
                                marginTop: '20px',
                                padding: '24px',
                                borderRadius: '12px',
                                borderLeft: '3px solid var(--accent-warning)'
                            }}
                        >
                            <div className="mono" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '12px' }}>
                                RESPONSE TIME
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Typically respond within 24-48 hours. For urgent inquiries, email is fastest.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Checkered Flag Divider */}
                <motion.div variants={itemVariants} className="section-divider" style={{ marginTop: '80px' }}>
                    <div className="section-divider-line"></div>
                    <CheckeredFlag size={28} />
                    <div className="section-divider-line"></div>
                </motion.div>

                <motion.p variants={itemVariants} style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    color: 'var(--text-tertiary)',
                    fontStyle: 'italic'
                }}>
                    Note: Add your resume.pdf file to the /public folder
                </motion.p>
            </motion.section>
        </div>
    )
}

export default Contact
