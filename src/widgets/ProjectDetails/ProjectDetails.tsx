import {Project} from "../../types/project.ts";

interface ProjectDetailsProps {
    project: Project;
}

function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>

                    <img
                        src={project.coverImage}
                        alt={project.title}
                        className="project-details__cover"
                    />

                    <div className="project-details__desc">
                        <div className="project-description">
                            <h2>Tech stack</h2>
                            <div className="tags">
                                {project.tags.map(tag => (
                                    <button
                                        key={tag}
                                        className={`tag ${tag.toLowerCase()}`}
                                        onClick={() => window.open(getTagLink(tag), '_blank')}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                            <h2>Description</h2>
                            <p className="description">{project.description}</p>
                        </div>
                    </div>

                    <a
                        href={project.githubUrl}
                        className="btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/img/icons/gitHub-black.svg" alt="GitHub" />
                        GitHub
                    </a>

                    <a
                        href={project.deployUrl}
                        className="btn-outline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/img/icons/world-wide-web.png" alt="Live Demo" className="go-to-page" />
                        Go to page
                    </a>
                </div>
            </div>
        </main>
    );
}

function getTagLink(tag: string): string {
    const techLinks: Record<string, string> = {
        'Vanilla JS': 'https://www.javascript.com/',
        'HTML': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        'CSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        'React': 'https://react.dev/',
        'TypeScript': 'https://www.typescriptlang.org/',
        'Bootstrap': 'https://getbootstrap.com/',
        'Vite': 'https://vitejs.dev/'
    };

    return techLinks[tag] || '#';
}

export default ProjectDetails;