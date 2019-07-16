'use strict';

require('dotenv').config();
const express = require('express');


// Setup a Server using Expess
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});

// Configure Middleware
// Serve the Static Assets
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

// SetUp Routes
app.post('/api', (req, res) => {
    console.log(req.body);
    res.json({
        status: 'Success',
        latitude: req.body.lat,
        longitude: req.body.long
    });
});