import FilterProject from "../FilterProject/FilterProject.tsx";

function ProjectList() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <FilterProject/>
                <ul className="projects">
                    <li className="project">
                        <a href="html/projects/5-project.html">
                            <img src="/img/projects/05.png" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Base Bootstrap and JS</h3>
                            <button className="filter lite">Lite</button>
                        </a>
                    </li>
                    <li className="project">
                        <a href="html/projects/1-project.html">
                            <img src="/img/projects/01.png" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Quote Generator</h3>
                            <button className="filter lite">Lite</button>
                        </a>
                    </li>
                    <li className="project">
                        <a href="html/projects/2-project.html">
                            <img src="/img/projects/02.png" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Flashcards</h3>
                            <button className="filter lite">Lite</button>
                        </a>
                    </li>
                    <li className="project">
                        <a href="html/projects/3-project.html">
                            <img src="/img/projects/03.png" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Calculator</h3>
                            <button className="filter lite">Lite</button>
                        </a>
                    </li>
                    <li className="project">
                        <a href="html/projects/4-project.html">
                            <img src="/img/projects/04.png" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Animated Portfolio</h3>
                            <button className="filter lite">Lite</button>
                        </a>
                    </li>
                    <li className="project">
                        <a href="html/projects/6-project.html">
                            <img src="/img/projects/06.png" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Weather App</h3>
                            <button className="filter medium">Medium</button>
                        </a>
                    </li>
                    <li className="project">
                        <a href="html/projects/7-project.html">
                            <img src="/img/projects/07.png" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Hangman</h3>
                            <button className="filter medium">Medium</button>
                        </a>
                    </li>
                    <li className="project">
                        <a href="html/projects/8-project.html">
                            <img src="/img/projects/08.png" alt="Project img" className="project__img"/>
                            <h3 className="project__title">Admin Soft</h3>
                            <button className="filter hard">Hard</button>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ProjectList;