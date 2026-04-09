const projects = [
    {
        id: 1,
        title: "E-Commerce App",
        description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
        tech: ["React", "Express", "Node.js", "MongoDB"],
        link: "#"
    },
    {
        id: 2,
        title: "Travel Tour System",
        description: "A comprehensive dashboard for managing travel tours, booking, and histories.",
        tech: ["React", "CSS", "Vite"],
        link: "#"
    },
    {
        id: 3,
        title: "Social Media Dashboard",
        description: "A real-time data visualizer for social media statistics using interactive charts.",
        tech: ["JavaScript", "HTML5", "CSS3", "REST API"],
        link: "#"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-header">
                <h2>Featured Projects</h2>
                <p>Some of the work I've done over the past year.</p>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tags">
                                {project.tech.map((t, idx) => (
                                    <span key={idx} className="tag">{t}</span>
                                ))}
                            </div>
                            <a href={project.link} className="btn-secondary">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
