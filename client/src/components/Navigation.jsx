import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navigation() {
    const location = useLocation()
    const [theme, setTheme] = useState('terminal')

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <ul className="nav-links">
                        <li><Link to="/projects" className={isActive('/projects')}>Projects</Link></li>
                        <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
                        <li><a href="/resume.pdf" download className="nav-link">Resume</a></li>
                    </ul>
                    <button
                        onClick={toggleTheme}
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
        </nav>
    )
}

export default Navigation
