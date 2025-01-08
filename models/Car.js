const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    make: String,
    model: String,
    price: Number,
    launch_year: Number,
});

const Car = mongoose.model('Car', carSchema, 'carsMakeModelPriceYear');

module.exports = Car; 
