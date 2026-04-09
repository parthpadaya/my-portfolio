const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const messageRoutes = require('./routes/messageRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/messages', messageRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connection established successfully'))
.catch((err) => console.error('MongoDB connection error: ', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
