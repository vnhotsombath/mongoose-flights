const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    //createTicket,
    newTicket,
    show

    
}

// function show(req, res) {
//     Flight.findById(req.params.id)
//     .populate('destinations')
//     .exec(function(err, flight) {
//         Destination.find({ _id: {$nin: flight.destinations}}, 
//         function(err, destinations){
//             //console.log(destinations, 'destinations');
//             res.render('flights/show', {
//                 title: 'Flight Details',
//                 flight: flight,
//                 destinations: destinations,
//                 err: err,
//             });
//         });
//     });
// }
//     Flight.findById(req.params.id, function (err, allOfTheFlightsInTheDatabase){
//         res.render('flights/show', {
//             title: 'Flight Detail',
//             flight: allOfTheFlightsInTheDatabase,
//         });
//     });
// }

function index(req, res) {
    Flight.find({}, function(err, flightDocuments) {
        /// console.log(flightDocuments, '<-this is all of the flights');
        res.render('flights/index', {
            title: 'All Flights',
            flights: flightDocuments,
        });
    });
};

function show(req,res) {
    const newFlight = new Flight();
    // get the default date
    const defaultDate = newFlight.departs;
    let offset = defaultDate.getTimezoneOffset() * 60000;
    // this takes the default date, subtracts the offset and converts to ISO string
    // set value = 'localDate', and use slice(0,16) to get proper format
    let localDate = new Date(defaultDate - offset).toISOString();
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render('flights/show', {
                title: 'Flight Details',
                localDate,
                flight,
                tickets,
            });
        });
    });
}


function create(req, res) {
    Flight.create(req.body, function (err, flightDoc) {
        res.redirect('/flights');
    })
}

function newFlight(req, res) {
    const newFlight = new Flight();
    // get the default date
    const defaultDate = newFlight.departs;
    let offset = defaultDate.getTimezoneOffset() * 60000;
    // this takes the default date, subtracts the offset and converts to ISO string
    // set value = 'localDate', and use slice(0,16) to get proper format
    let localDate = new Date(defaultDate - offset).toISOString();
    //render the date
    res.render('flights/new', { localDate });
}

// function addToDestinations(req,res) {
//    // console.log(req.body)
//     Flight.findById(req.params.id, function(err, flight) {
//         flight.destinations.push(req.body.destinationId)
//         flight.save(function(err){
//             res.redirect(`/flights/${flight._id}`)
//         })
//     })
// }

// function createTicket(req,res) {
//     Flight.findById(req.params.id, function(err, flight) {
//         //req.body.flight= flight._id;
//         flight.tickets.push(req.body)
//         flight.save(function(err) {
//             res.redirect(`/flights/${flight._id}`)
//         })
//         //Ticket.create(rew.body, function (err, ticket) {
//         //    res.redirect(`/flights/${flight._id}`);
//         });
//     };
function newTicket(req, res) {
    res.send('new ticket function');
    Flight.findById(req.params.id, function(err, flight) {
        console.log(err);
        res.render('tickets/new', { flight });
    });
}