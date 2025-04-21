function SkillsContent() {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Skills</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <div className="skill">
                            <span className="skill-icon"><i className="fab fa-react"></i></span>
                            <span className="skill-name">React</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "50%", width: "50%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">50%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-icon"><i className="fab fa-js"></i></span>
                            <span className="skill-name">JavaScript</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "60%", width: "60%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">60%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-icon"><i className="fab fa-html5"></i></span>
                            <span className="skill-name">HTML</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "70%", width: "70%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">70%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-icon"><i className="fab fa-css3-alt"></i></span>
                            <span className="skill-name">CSS</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "70%", width: "70%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">70%</span>
                            </div>
                        </div>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <div className="skill">
                            <span className="skill-icon"><i className="fab fa-node-js"></i></span>
                            <span className="skill-name">NodeJS</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "40%", width: "40%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">40%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-icon"><i className="fas fa-database"></i></span>
                            <span className="skill-name">SQL</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "70%", width: "70%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">70%</span>
                            </div>
                        </div>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Other</h2>
                        <div className="skill">
                            <span className="skill-icon"><i className="fas fa-terminal"></i></span>
                            <span className="skill-name">Bash</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "60%", width: "60%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">60%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-icon"><i className="fas fa-code"></i></span>
                            <span className="skill-name">C# (OOP)</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "30%", width: "30%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">30%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-icon"><i className="fab fa-java"></i></span>
                            <span className="skill-name">Java</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "30%", width: "30%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">30%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <span className="skill-icon"><i className="fas fa-project-diagram"></i></span>
                            <span className="skill-name">Algorithms & D.S.</span>
                            <div className="progress-bar">
                                <div className="progress" style={{ "--progress": "90%", width: "90%" } as React.CSSProperties}></div>
                                <span className="progress-percentage">90%</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default SkillsContent;