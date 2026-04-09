import React from 'react';
import { FaCode, FaServer, FaDatabase, FaPaintBrush, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const skills = [
    { title: "Frontend", icon: <FaCode />, items: ["React", "HTML5/CSS3", "JavaScript", "Vite"] },
    { title: "Backend", icon: <FaServer />, items: ["Node.js", "Express", "REST APIs"] },
    { title: "Database", icon: <FaDatabase />, items: ["MongoDB", "Mongoose", "SQL"] },
    { title: "Design", icon: <FaPaintBrush />, items: ["UI/UX", "Figma", "Responsive Design"] }
];

const timelines = [
    {
        type: 'work',
        icon: <FaBriefcase />,
        year: "2024 - Present",
        title: "Full-Stack Developer",
        company: "Tech Solutions Inc.",
        desc: "Leading the development of highly scalable React web apps and RESTful APIs."
    },
    {
        type: 'work',
        icon: <FaBriefcase />,
        year: "2022 - 2024",
        title: "Frontend React Developer",
        company: "Creative Agency",
        desc: "Built beautiful glassmorphic multi-page applications and e-commerce platforms."
    },
    {
        type: 'education',
        icon: <FaGraduationCap />,
        year: "2018 - 2022",
        title: "B.S. Computer Science",
        company: "State University",
        desc: "Graduated with honors. Specialized in software engineering and database architectures."
    }
];

const Profile = () => {
    return (
        <section id="profile" className="profile-section">
            <div className="section-header">
                <h2>About Me & Skills</h2>
                <p>Get to know my technical background and expertise.</p>
            </div>

            <div className="profile-container">
                <div className="profile-about glass-card">
                    <h3>Hello! I'm a Parth Padaya</h3>
                    <p>
                        I'm a passionate full-stack developer dedicated to building high-quality, aesthetic, and functional web applications.
                        With a strong foundation in modern JavaScript frameworks and a keen eye for design, I aim to create seamless user experiences from start to finish.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or improving my design skills.
                    </p>
                    <div className="profile-stats">
                        <div className="stat-item">
                            <span className="stat-number">2+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                    </div>
                </div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card glass-card">
                            <div className="skill-icon">{skill.icon}</div>
                            <h4>{skill.title}</h4>
                            <ul>
                                {skill.items.map((item, idx) => (
                                    <li key={idx}>✓ {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="timeline-section">
                    <div className="section-header" style={{ marginBottom: '3rem' }}>
                        <h2>Experience & Education</h2>
                        <p>My professional and academic journey so far.</p>
                    </div>
                    <div className="timeline">
                        {timelines.map((item, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-icon">
                                    {item.icon}
                                </div>
                                <div className="timeline-content glass-card">
                                    <span className="timeline-year">{item.year}</span>
                                    <h3>{item.title}</h3>
                                    <h4 className="timeline-company">{item.company}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Profile;
