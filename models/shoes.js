const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoesSchema = new Schema({
    price: String,
    brand: String,
    image: String,
})

module.exports = mongoose.model('Shoes', shoesSchema)