const Flight = require('../models/flight');
const Destination = require('../models/destination');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addDestination,
    
}

function show(req, res) {
    Flight.findById(req.params.id)
    .populate('destinations')
    .exec(function(err, flight){
        Destination.find(
        { _id: {$nin: flight.destinations}}, 
        function(err, destinations){
            console.log(destinations, 'destinations');

            res.render('flights/show', {
                title: 'Flight Details',
                flight,
                destinations: destinations,
            });
        });
    });
}
//     Flight.findById(req.params.id, function (err, allOfTheFlightsInTheDatabase){
//         res.render('flights/show', {
//             title: 'Flight Detail',
//             flight: allOfTheFlightsInTheDatabase,
//         });
//     });
// }

function index(req, res) {
    Flight.find({}, function(err, flights){
        /// console.log(allOfTheFlightsInTheDatabase, '<-this is all of the flights');
        res.render('flights/index', {
            flights, 
            title: 'All Flights'
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
    if(req.body.cast){
        req.body.cast = req.body.cast.replace(',',',')
        req.body.cast = req.body.cast.split(',')
    }
    for (let key in req.body) {
        if(req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect(`/flights/${flight._id}`);
    });
};

function addDestination(req,res) {
    console.log(req.body)
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body.destinationId)
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

