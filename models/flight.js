const mongoose = require('mongoose')


// data creates the Schema that defines what the objects in mongoDb collection (flights) will all look like
const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United'],
        default: 'n/a',
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'Den'
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
        default: 'n/a',
    },
    departs: {
        type: Date,
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
            //'one year from date created',

    },
    
});



// create or model, which will create the collection and return the object that can perform crud operations on that collection (typically use the model in controller files)
module.exports = mongoose.model('Flight', flightSchema);
