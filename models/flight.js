const mongoose = require('mongoose')

// data creates the Schema that defines what the objects in mongoDb collection (flights) will all look like
const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
});

// create or model, which will create the collection and return the object that can perform crud operations on that collection (typically use the model in controller files)
module.exports = mongoose.model('Flight;', flightSchema);