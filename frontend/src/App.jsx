import { Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
