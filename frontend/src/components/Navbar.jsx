import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <h1>Portfolio<span>.</span></h1>
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="social-links">
                <a href="https://github.com"><FaGithub /></a>
                <a href="https://linkedin.com"><FaLinkedin /></a>
                <a href="https://instagram.com"><FaInstagram /></a>
            </div>
        </nav>
    );
};

export default Navbar;
