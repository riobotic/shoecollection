// REQUIRE DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const shoesController = require('./controllers/shoes');



// INTIALIZE EXPRESS APP
const app = express();

// CONFIGURE SETTINGS
require('dotenv').config();

// DATABASE CONFIGURATION
mongoose.connect(process.env.DATABASE_URL);

// CALLBACK
const db = mongoose.connection;

// EVENT LISTENERS
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('MongoDB Error: ' + err.message));


// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));


// ROUTES

app.use('/shoecollection', shoesController);

const PORT = process.env.PORT; 

app.listen(PORT, () => {
    console.log('Express is listening on port: ' + PORT);
});