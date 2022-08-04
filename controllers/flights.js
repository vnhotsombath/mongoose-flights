const Flight = require('../models/flight');

module.exports = {
    index
}

function index(req, res) {
    Flight.find({}, function(err, allOfTheFlightsInTheDatabase){
        console.log(allOfTheFlightsInTheDatabase, '<-this is all of the lights');
        if (err){
            res.send('You have an error trying to find the flights, check the terminal')
        }
        res.render('flights/index.ejs', {
            flights: allOfTheFlightsInTheDatabase
        })
    })
}