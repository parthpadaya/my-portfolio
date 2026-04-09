import { Link } from 'react-router-dom';
import { FaCode, FaPaintBrush, FaServer } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="home-container">
            <section id="hero" className="hero-section">
                <div className="hero-content">
                    <h2>Hello, I'm a <br/> <span className="highlight">Full-Stack Developer</span></h2>
                    <p>I build dynamic, beautiful, and secure web applications with modern technologies. Bridging the gap between design and architecture.</p>
                    <div className="hero-actions">
                        <Link to="/projects" className="btn-primary">View My Work</Link>
                        <Link to="/contact" className="btn-secondary" style={{marginLeft: '1rem'}}>Contact Me</Link>
                    </div>
                </div>
                <div className="hero-image-placeholder">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="glass-floating-card">
                        <FaCode className="floating-icon" />
                        <div>
                            <h4>Clean Code</h4>
                            <p>Optimized & scalable</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-teaser">
                <div className="section-header">
                    <h2>What I Do</h2>
                    <p>Transforming ideas into digital realities.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card glass-card">
                        <FaCode className="service-icon" />
                        <h3>Frontend Development</h3>
                        <p>Creating highly interactive, responsive, and visually appealing user interfaces using React and modern CSS.</p>
                    </div>
                    <div className="service-card glass-card">
                        <FaServer className="service-icon" />
                        <h3>Backend Architecture</h3>
                        <p>Designing secure and efficient REST APIs with Node.js, Express, and comprehensive database management.</p>
                    </div>
                    <div className="service-card glass-card">
                        <FaPaintBrush className="service-icon" />
                        <h3>UI/UX Design</h3>
                        <p>Crafting intuitive and engaging user experiences from wireframes to flawless implementation.</p>
                    </div>
                </div>
            </section>
            
            <section className="cta-section">
                <div className="cta-card glass-card">
                    <h2>Ready to start a project?</h2>
                    <p>Let's work together to build something great.</p>
                    <Link to="/contact" className="btn-primary">Get In Touch</Link>
                </div>
            </section>
        </div>
    );
};

export default Hero;
