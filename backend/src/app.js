const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const chatbotRoutes = require('./routes/chatbotRoutes');
const contactRoutes = require('./routes/contactRoutes');
const updateRoutes = require('./routes/updateRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', chatbotRoutes);
app.use('/api', contactRoutes);
app.use('/api/updates', updateRoutes);
app.use('/api/upload', uploadRoutes);

module.exports = app;
