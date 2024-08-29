const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('./connection');
const jobsRoute = require("./route/jobs")
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors()); // Add this line to handle CORS

// Serve static files from the React app

// Define your API routes here
app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});
app.use("/", jobsRoute)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
