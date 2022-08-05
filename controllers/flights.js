const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlights,
    create,
    show
}

function index(req, res) {
    Flight.find({}, function(err, allOfTheFlightsInTheDatabase){
        console.log(allOfTheFlightsInTheDatabase, '<-this is all of the flights');
        if (err){
            res.send('You have an error trying to find the flights, check the terminal')
        }
        res.render('flights/index', {
            flights: allOfTheFlightsInTheDatabase
        });
    });
}

function newFlights(req,res) {
    res.render('flights/new');
}

function create(req, res) {
   let flight = newFlights(req.body);
   flight.save(function(err){
    if (err) return res.render('flights/new');
    res.redirect('/flights');
   });
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight){
        if (err) return res.direct('/flights')
    });
}