const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlights,
    create
}

function index(req, res) {
    Flight.find({}, function(err, allOfTheFlightsInTheDatabase){
        console.log(allOfTheFlightsInTheDatabase, '<-this is all of the flights');
        if (err){
            res.send('You have an error trying to find the flights, check the terminal')
        }
        res.render('flights/index.ejs', {
            flights: allOfTheFlightsInTheDatabase
        })
    })
}

function newFlights(req,res) {
    res.render('flights/new.ejs');
}

function create(req, res) {
   const flight = newFlight(req.body);
   flight.save(function(err){
    if (err) return res.render('flights/new.ejs');
    res.redirect('/flights');
   })
}