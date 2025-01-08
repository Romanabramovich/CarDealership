const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const carRoutes = require('./crud-operations/crud'); // Adjust path as needed


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


//MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/CarDealership', {
    serverSelectionTimeoutMS: 5000, // Optional: Adjust timeout
}).then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Database connection error:', err));


app.get('/test', (req, res) => {
    res.send('Test route working!');
});

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '/forms/homePage.html'));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(carRoutes);

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'styles')));


// Start the server with node server.js
app.listen(3000, () => console.log('Server running at http://localhost:3000'));
