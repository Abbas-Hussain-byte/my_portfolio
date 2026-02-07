import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

function ContactForm() {
    const [status, setStatus] = useState(null) // 'sending', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        const formData = new FormData(e.target)
        // Access key is managed via Web3Forms - public key
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE") // User should replace this

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success')
                e.target.reset()
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        }
    }

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card"
                style={{
                    padding: '40px',
                    textAlign: 'center',
                    borderRadius: '16px',
                    border: '1px solid var(--accent-success)'
                }}
            >
                <CheckCircle2 size={48} color="var(--accent-success)" style={{ marginBottom: '16px' }} />
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Message Received</h3>
                <p style={{ color: 'var(--text-secondary)' }}>I'll get back to you within 24-48 hours. Ready to race!</p>
                <button
                    onClick={() => setStatus(null)}
                    className="btn btn-secondary"
                    style={{ marginTop: '24px' }}
                >
                    Send Another
                </button>
            </motion.div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '32px', borderRadius: '16px' }}>
            <div style={{ marginBottom: '24px' }}>
                <label className="mono" style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                    FULL NAME
                </label>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Abbas Hussain"
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        outline: 'none'
                    }}
                />
            </div>

            <div style={{ marginBottom: '24px' }}>
                <label className="mono" style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                    EMAIL ADDRESS
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="engineering@portfolio.dev"
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        outline: 'none'
                    }}
                />
            </div>

            <div style={{ marginBottom: '24px' }}>
                <label className="mono" style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                    SUBJECT
                </label>
                <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Project Inquiry / Collaboration"
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        outline: 'none'
                    }}
                />
            </div>

            <div style={{ marginBottom: '32px' }}>
                <label className="mono" style={{ display: 'block', fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                    MESSAGE
                </label>
                <textarea
                    name="message"
                    required
                    rows="4"
                    placeholder="Briefly describe your inquiry..."
                    style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '8px',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        minHeight: '100px'
                    }}
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
            >
                {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                <Send size={16} />
            </button>

            {status === 'error' && (
                <p style={{ color: 'var(--accent-critical)', fontSize: '12px', marginTop: '16px', textAlign: 'center' }}>
                    Transmission failed. Please try again or use direct email.
                </p>
            )}
        </form>
    )
}

export default ContactForm
