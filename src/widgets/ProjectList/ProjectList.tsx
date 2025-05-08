import { Link } from 'react-router-dom';
import { projects } from '../../../data/projects';
import FilterProject from "../FilterProject/FilterProject.tsx";
import { useProjectFilter } from '../../hooks/useProjectFilter';

function ProjectList() {
    const { filteredProjects, currentFilter, setFilter } = useProjectFilter(projects);

    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <FilterProject currentFilter={currentFilter} onFilterChange={setFilter} />
                <ul className="projects">
                    {filteredProjects.map(project => (
                        <li key={project.id} className="project">
                            <Link to={`/projects/${project.id}`}>
                                <img
                                    src={project.coverImage.replace('.big', '')}
                                    alt={project.title}
                                    className="project__img"
                                />
                                <h3 className="project__title">{project.title}</h3>
                                <button className={`filter ${project.difficulty}`}>
                                    {project.difficulty}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default ProjectList;