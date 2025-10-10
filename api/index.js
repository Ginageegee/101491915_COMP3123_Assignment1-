const express = require('express');
require('dotenv').config();
const connectDB = require('../config/db'); // Adjusted path for Vercel

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
    console.log('Root route hit');
    res.send('Your server is running on Vercel!');
});

// Mount employee routes
const employeeRoutes = require('../routes/employeeRoutes');
app.use('/api/v1/emp', employeeRoutes);

// Mount user routes
const userRoutes = require('../routes/userRoutes');
app.use('/api/v1/user', userRoutes);

// Export the app (no app.listen)
module.exports = app;
