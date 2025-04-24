import { useParams } from 'react-router-dom';
import { projects } from '../../../data/projects';
import Header from "../../widgets/Header/Header.tsx";
import ProjectDetails from "../../widgets/ProjectDetails/ProjectDetails.tsx";
import Footer from "../../widgets/Footer/Footer.tsx";

function ProjectPage() {
    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === Number(id));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <>
            <Header />
            <ProjectDetails project={project} />
            <Footer />
        </>
    );
}

export default ProjectPage;