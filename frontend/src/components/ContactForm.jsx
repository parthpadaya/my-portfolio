import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');
        
        try {
            // Send to our backend running on port 5000 (adjust if deployed)
            const response = await axios.post('http://localhost:5000/api/messages', formData);
            if (response.data.success) {
                setStatus('SUCCESS');
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error(error);
            setStatus('ERROR');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="section-header">
                <h2>Let's Connect</h2>
                <p>Have a project in mind or just want to say hi? Drop me a message.</p>
            </div>
            
            <div className="contact-container">
                <form className="glass-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="John Doe" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="john@example.com" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            value={formData.message} 
                            onChange={handleChange} 
                            placeholder="Hello, I'd like to talk about..." 
                            required 
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {status === 'SUCCESS' && <p className="success-msg">Message sent successfully!</p>}
                    {status === 'ERROR' && <p className="error-msg">Failed to send message. Please try again.</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
