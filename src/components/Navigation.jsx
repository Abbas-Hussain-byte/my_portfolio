import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Home, Cpu, Menu, X } from 'lucide-react'
import resumePdf from '../assets/resume.pdf'

function Navigation() {
    const location = useLocation()
    const [theme, setTheme] = useState('terminal')
    const [isOpen, setIsOpen] = useState(false)

    const isActive = (path) => {
        return location.pathname === path ? 'active' : ''
    }

    useEffect(() => {
        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'terminal'
        setTheme(savedTheme)
        document.documentElement.setAttribute('data-theme', savedTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'terminal' ? 'scuderia' : 'terminal'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    return (
        <nav className="nav">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: 'var(--max-width)',
                margin: '0 auto',
                padding: '0 var(--spacing-lg)',
                width: '100%'
            }}>
                <Link to="/" className="nav-brand" style={{ border: 'none' }}>
                    ABBAS  HUSSAIN
                </Link>
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div
                    className={`nav-menu-container ${isOpen ? 'open' : ''} mobile-hidden`}
                >
                    <ul className="nav-links">
                        <li>
                            <Link to="/" className={`nav-link-with-icon ${isActive('/')}`} title="Home" onClick={() => setIsOpen(false)}>
                                <Home size={16} /> <span className="nav-text">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/#skills"
                                className={`nav-link-with-icon ${location.hash === '#skills' ? 'active' : ''}`}
                                title="Technical Arsenal"
                                onClick={(e) => {
                                    setIsOpen(false);
                                    if (location.pathname === '/') {
                                        e.preventDefault();
                                        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                <Cpu size={16} /> <span className="nav-text">Skills</span>
                            </Link>
                        </li>
                        <li><Link to="/projects" className={`nav-link ${isActive('/projects')}`} onClick={() => setIsOpen(false)}>Projects</Link></li>
                        <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>Contact</Link></li>
                        <li><a href={resumePdf} download="Abbas_Hussain_Resume" className="nav-link" onClick={() => setIsOpen(false)}>Resume</a></li>
                    </ul>
                    <div className="mode-toggle-container">
                        <button
                            onClick={() => {
                                toggleTheme();
                                setIsOpen(false);
                            }}
                            className="btn btn-secondary"
                            style={{
                                padding: '8px 16px',
                                fontSize: '11px',
                                minWidth: '140px',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <span>MODE:</span>
                            <span style={{ color: theme === 'scuderia' ? 'var(--accent-primary)' : 'var(--accent-success)' }}>
                                {theme === 'scuderia' ? 'SCUDERIA' : 'TERMINAL'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
