import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
    // Map old status names to new F1-style status names
    const getF1Status = (status) => {
        const statusLower = status.toLowerCase();
        if (statusLower.includes('live') || statusLower.includes('deployed')) {
            return { text: 'LIVE', class: 'status-live' };
        } else if (statusLower.includes('building') || statusLower.includes('progress') || statusLower.includes('development')) {
            return { text: 'IN PROGRESS', class: 'status-building' };
        } else if (statusLower.includes('archived') || statusLower.includes('retired')) {
            return { text: 'ARCHIVED', class: 'status-archived' };
        }
        // Default fallback
        return { text: status.toUpperCase(), class: `status-${statusLower.replace(' ', '-')}` };
    };

    const f1Status = getF1Status(project.status);

    return (
        <div className="project-card">
            <div className="project-card-header">
                <Link to={`/projects/${project.slug}`} style={{ textDecoration: 'none', border: 'none' }}>
                    <h3 className="project-card-title">{project.name}</h3>
                </Link>
                <span className={`status ${f1Status.class}`}>
                    {f1Status.text}
                </span>
            </div>

            <Link to={`/projects/${project.slug}`} style={{ textDecoration: 'none', border: 'none', flex: 1 }}>
                <div className="project-card-label">CONSTRAINT</div>
                <p className="project-card-content">{project.constraint}</p>

                <div className="project-card-label">STRATEGY</div>
                <p className="project-card-content">{project.strategy}</p>

                <div className="project-card-label">STACK</div>
                <div className="project-card-stack">
                    {project.stack.map((tech, idx) => (
                        <span key={idx}>{tech}{idx < project.stack.length - 1 ? ' ·' : ''}</span>
                    ))}
                </div>

                <div className="project-card-label">IMPACT</div>
                <p className="project-card-content mono" style={{ color: 'var(--accent-success)' }}>
                    {project.impact}
                </p>
            </Link>

            <div className="project-card-links">
                {project.links.github && (
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '13px', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600, zIndex: 20 }}
                    >
                        GitHub →
                    </a>
                )}
                {project.links.demo && (
                    <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '13px', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600, zIndex: 20 }}
                    >
                        Demo →
                    </a>
                )}
                <Link
                    to={`/projects/${project.slug}`}
                    style={{ fontSize: '13px', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 600, zIndex: 20 }}
                >
                    Details →
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
