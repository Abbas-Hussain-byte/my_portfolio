import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileDown, Trophy, Send } from 'lucide-react'
import CheckeredFlag from '../components/CheckeredFlag'
import { Terminal, Gear } from '../components/TechIcons'
import { TeamRadioHeadset, DataStream } from '../components/F1Animations'
import resumePdf from '../assets/resume.pdf'

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

                    {/* Animated Graphics - Aligned with text */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px' }}>
                        <TeamRadioHeadset size={54} />
                        <DataStream size={48} />
                    </motion.div>

                    {/* Static Icons */}
                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '12px', opacity: 0.5, marginTop: '8px' }}>
                        <Terminal size={24} color="var(--accent-primary)" />
                        <Gear size={24} color="var(--accent-success)" />
                    </motion.div>
                </div>
                <motion.p variants={itemVariants} style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '48px' }}>
                    Open to opportunities in full-stack development, AI/ML projects, and collaborative problem-solving.
                </motion.p>

                <div className="contact-section-layout">
                    <style>{`
                        .contact-section-layout {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 48px;
                        }
                        @media (min-width: 1024px) {
                            .contact-section-layout {
                                grid-template-columns: 1.2fr 1fr; /* More space for cards */
                            }
                        }
                        .contact-grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 16px; /* Reduced gap since they are stacked */
                        }
                        /* Removed the 2-column grid for contact cards to ensure email fits */
                        
                        .form-input {
                            width: 100%;
                            background: rgba(255, 255, 255, 0.05);
                            border: 1px solid var(--border-subtle);
                            padding: 16px;
                            border-radius: 8px;
                            color: var(--text-primary);
                            font-family: inherit;
                            font-size: 14px;
                            transition: all 0.2s;
                            outline: none;
                        }
                        .form-input:focus {
                            border-color: var(--accent-primary);
                            background: rgba(255, 255, 255, 0.08);
                        }
                    `}</style>

                    {/* Left Column: Contact Methods */}
                    <div>
                        <div className="contact-grid">
                            {[
                                { href: "mailto:abbashussain0986@gmail.com", icon: Mail, label: "EMAIL", value: "abbashussain0986@gmail.com", color: "var(--accent-primary)" },
                                { href: "https://github.com/Abbas-Hussain-byte", icon: Github, label: "GITHUB", value: "Abbas-Hussain-byte", color: "var(--accent-primary)" },
                                { href: "https://www.linkedin.com/in/abbashussain23/", icon: Linkedin, label: "LINKEDIN", value: "abbashussain23", color: "var(--accent-primary)" },
                                { href: resumePdf, icon: FileDown, label: "RESUME", value: "Download PDF", color: "var(--accent-primary)", download: "Abbas_Hussain_Resume" },
                            ].map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    target={item.href.startsWith('mailto') ? undefined : "_blank"}
                                    rel={item.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                                    download={item.download} // Allow downloading for resume
                                    variants={itemVariants}
                                    className="glass-card"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                        padding: '24px',
                                        textDecoration: 'none',
                                        borderRadius: '16px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid var(--border-subtle)',
                                        minWidth: 0
                                    }}
                                    whileHover={{
                                        scale: 1.03,
                                        borderColor: item.color,
                                        boxShadow: `0 0 20px -5px ${item.color}40`,
                                        background: 'rgba(255,255,255,0.03)'
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div style={{
                                        padding: '12px',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <item.icon size={28} color={item.color} />
                                    </div>
                                    <div style={{ minWidth: 0, flex: 1 }}>
                                        <div className="mono" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '4px', letterSpacing: '0.1em' }}>
                                            {item.label}
                                        </div>
                                        <div style={{
                                            fontSize: '15px',
                                            color: 'var(--text-primary)',
                                            fontWeight: 700,
                                            /* IMPROVED VISIBILITY STYLE */
                                            wordBreak: 'break-all',
                                            lineHeight: '1.4'
                                        }} title={item.value}>
                                            {item.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Response Time Info */}
                        <motion.div
                            variants={itemVariants}
                            style={{
                                marginTop: '32px',
                                padding: '24px',
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '12px',
                                border: '1px dashed var(--border-subtle)'
                            }}
                        >
                            <div className="mono" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                                RESPONSE TIME
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Typically respond within 24-48 hours. For urgent inquiries, email is fastest.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div variants={itemVariants}>
                        <div className="glass-panel" style={{ padding: '32px', borderRadius: '24px', height: '100%' }}>
                            <div style={{ marginBottom: '24px' }}>
                                <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Send a Message</h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Got a project or proposal? Let's talk.</p>
                            </div>

                            <ContactForm />
                        </div>
                    </motion.div>
                </div>

                {/* Checkered Flag Divider */}
                <motion.div variants={itemVariants} className="section-divider" style={{ marginTop: '64px' }}>
                    <div className="section-divider-line"></div>
                    <CheckeredFlag size={28} />
                    <div className="section-divider-line"></div>
                </motion.div>
            </motion.section>
        </div>
    )
}

function ContactForm() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        const formData = new FormData(e.target);

        // IMPORTANT: User needs to get their own access key from https://web3forms.com/
        formData.append("access_key", "adbbac50-4397-4fff-b74c-45b0477ed49f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div>
                <label className="mono" style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '6px', marginLeft: '4px' }}>YOUR NAME</label>
                <input required name="name" type="text" className="form-input" placeholder="John Doe" style={{ padding: '12px' }} />
            </div>

            <div>
                <label className="mono" style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '6px', marginLeft: '4px' }}>EMAIL ADDRESS</label>
                <input required name="email" type="email" className="form-input" placeholder="john@example.com" style={{ padding: '12px' }} />
            </div>

            <div>
                <label className="mono" style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '6px', marginLeft: '4px' }}>SUBJECT</label>
                <input required name="subject" type="text" className="form-input" placeholder="Project Opportunity" style={{ padding: '12px' }} />
            </div>

            <div>
                <label className="mono" style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '6px', marginLeft: '4px' }}>MESSAGE</label>
                <textarea required name="message" rows="4" className="form-input" style={{ resize: 'vertical', minHeight: '100px', padding: '12px' }} placeholder="Tell me about your project..."></textarea>
            </div>

            <motion.button
                disabled={status === "sending" || status === "success"}
                type="submit"
                className="btn btn-primary"
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '8px',
                    opacity: status === "sending" ? 0.7 : 1,
                    cursor: status === "sending" ? "wait" : "pointer"
                }}
                whileHover={{ scale: status === "success" ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : <>Send Message <Send size={16} /></>}
            </motion.button>

            {status === "success" && (
                <p style={{ color: 'var(--accent-success)', fontSize: '13px', textAlign: 'center', marginTop: '8px' }}>
                    Thanks! I'll get back to you soon.
                </p>
            )}
            {status === "error" && (
                <p style={{ color: 'var(--accent-critical)', fontSize: '13px', textAlign: 'center', marginTop: '8px' }}>
                    Something went wrong. Please try again or email me directly.
                </p>
            )}
        </form>
    );
}

export default Contact
