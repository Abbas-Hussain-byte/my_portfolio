import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { projectsData } from '../data/projects'
import MetricCard from '../components/MetricCard'
import CheckeredFlag from '../components/CheckeredFlag'

function ProjectDetail() {
    const { slug } = useParams()
    const project = projectsData.find(p => p.slug === slug)

    if (!project) {
        return (
            <div className="container section">
                <h1>Project not found</h1>
                <Link to="/projects">← Back to projects</Link>
            </div>
        )
    }

    // Map old status to F1 status
    const getF1Status = (status) => {
        const statusLower = status.toLowerCase();
        if (statusLower.includes('live') || statusLower.includes('deployed')) {
            return { text: 'ON TRACK', class: 'status-on-track' };
        } else if (statusLower.includes('building') || statusLower.includes('progress')) {
            return { text: 'IN PITS', class: 'status-in-pits' };
        } else if (statusLower.includes('archived') || statusLower.includes('retired')) {
            return { text: 'RETIRED', class: 'status-retired' };
        }
        return { text: status.toUpperCase(), class: `status-${statusLower.replace(' ', '-')}` };
    };

    const f1Status = getF1Status(project.status);

    return (
        <div className="container">
            <section className="section">
                <Link to="/projects" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '32px',
                    fontSize: '14px',
                    color: 'var(--text-secondary)'
                }}>
                    <ArrowLeft size={16} /> Back to projects
                </Link>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                    <div>
                        <h1 className="mono" style={{ marginBottom: '16px' }}>{project.name}</h1>
                        <span className={`status ${f1Status.class}`}>
                            {f1Status.text}
                        </span>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        {project.links.github && (
                            <a href={project.links.github} className="btn btn-secondary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                                <Github size={16} /> GitHub
                            </a>
                        )}
                        {project.links.demo && (
                            <a href={project.links.demo} className="btn btn-primary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Engineering Brief */}
                <div style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '32px',
                    marginBottom: '48px'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
                        <div>
                            <div className="mono" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                                CONSTRAINT
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                                {project.constraint}
                            </p>
                        </div>

                        <div>
                            <div className="mono" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                                STRATEGY
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                                {project.strategy}
                            </p>
                        </div>

                        <div>
                            <div className="mono" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '8px' }}>
                                STACK
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                {project.stack.map((tech, idx) => (
                                    <span key={idx}>{tech}{idx < project.stack.length - 1 ? ' ·' : ''}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* F1 Metrics Dashboard */}
                    {project.metrics && Object.keys(project.metrics).length > 0 && (
                        <>
                            <div className="section-divider" style={{ margin: '32px 0' }}>
                                <div className="section-divider-line"></div>
                                <CheckeredFlag size={20} />
                                <div className="section-divider-line"></div>
                            </div>

                            <div className="mono" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '16px' }}>
                                PROJECT METRICS
                            </div>
                            <div className="metrics-grid">
                                {Object.entries(project.metrics).map(([key, value]) => (
                                    <MetricCard
                                        key={key}
                                        label={key.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}
                                        value={value}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Full Description */}
                <div style={{
                    maxWidth: '800px',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7'
                }}>
                    <div dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br />') }} />
                </div>
            </section>
        </div>
    )
}

export default ProjectDetail
