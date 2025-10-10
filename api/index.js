const express = require('express');
const serverless = require('serverless-http');
require('dotenv').config();
const connectDB = require('../config/db');

const app = express();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Your server is running on Vercel!');
});

const employeeRoutes = require('../routes/employeeRoutes');
app.use('/api/v1/emp', employeeRoutes);

const userRoutes = require('../routes/userRoutes');
app.use('/api/v1/user', userRoutes);

const handler = serverless(app);
module.exports = async (req, res) => {
    return await handler(req, res);
};