const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight){
        if (err) return res.redirect('/flights');
    });
};

function index(req, res) {
    Flight.find({}, function(err, flights){
        /// console.log(allOfTheFlightsInTheDatabase, '<-this is all of the flights');
        res.render('flights/index', { flights, title: 'All Flights'
        });
    });
};

function newFlight(req,res) {
    res.render('flights/new', {title: "New Flights"});
};

function create(req, res) {
//    let flight = new Flight(req.body);
//    flight.save(function(err){
//     if (err) return res.render('flights/new');
//     res.redirect(`/flights/${flight._id}`);
//     console.log(req.body);
//    });
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect(`/flights/${flight._id}`)
    });
};
