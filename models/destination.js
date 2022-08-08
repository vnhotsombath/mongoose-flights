const mongoose = require('mongoose')

//create a destinationSchema 
const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'n/a',
    },
    arrival: {
        type: Date, 
        default: function() {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        }
    }
}); 

module.exports = mongoose.model('Destination', destinationSchema);
