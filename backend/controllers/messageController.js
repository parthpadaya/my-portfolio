const Message = require('../models/Message');

const saveMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const newMessage = new Message({
            name,
            email,
            message
        });

        await newMessage.save();

        res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'Internal server error. Please try again later.' });
    }
};

module.exports = { saveMessage };
