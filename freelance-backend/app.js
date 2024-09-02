const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { auth } = require('express-openid-connect');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');



dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000; // Default port if not specified

app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Authentication configuration
const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL
};

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(auth(config)); // Attach authentication middleware

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, World');
});

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// Start the server
const startServer = async () => {
    try {
        await connectDB(); // Ensure the database connection is established
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

startServer();