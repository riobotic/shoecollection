// REQUIRE DEPENDENCIES
const express = require('express');
const mongoose = require("mongoose");


// INTIALIZE EXPRESS APP
const app = express();

// CONFIGURE SETTINGS

// DATABASE CONFIGURATION

const DATABASE_URL =
  "mongodb+srv://admin:abcd123@cluster0.emozf.mongodb.net/shoecollection?retryWrites=true&w=majority"
const db = mongoose.connection
mongoose.connect(DATABASE_URL)

const PORT = 3000;



app.listen(PORT, () => {
    console.log('BADADADAAAA');
})
