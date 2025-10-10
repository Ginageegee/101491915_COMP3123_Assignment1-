const mongoose = require('mongoose');

// Connect app to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true

        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        throw error; // Let Vercel handle the error instead of exiting
    }
};

module.exports = connectDB;