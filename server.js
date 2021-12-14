// REQUIRE DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
const shoesController = require('./controllers/shoes');

const PORT = process.env.PORT || 3000


// CONFIGURE SETTINGS
require('dotenv').config();

// DATABASE CONFIGURATION
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

// Error / success
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("connected", () => console.log("mongod connected: ", MONGODB_URI))
db.on("disconnected", () => console.log("mongod disconnected"))

app.use(express.static('public'));

// EVENT LISTENERS
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('MongoDB Error: ' + err.message));


// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(methodOverride('_method'));


// ROUTES

app.use('/shoecollection', shoesController);



app.listen(PORT, () => console.log("express is listening on:", PORT))