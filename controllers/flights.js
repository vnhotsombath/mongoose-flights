const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    create,
    new: newFlight,
    newTicket,
    show
}

function index(req, res) {
    Flight.find({}, function(err, flightDocuments) {
        /// console.log(flightDocuments, '<-this is all of the flights');
        res.render('flights/index', {
            title: 'All Flights',
            flights: flightDocuments,
        });
    });
};

function create(req, res) {
    Flight.create(req.body, function (err, flightDoc) {
        res.redirect('/flights');
    })
}

function newFlight(req, res) {
    const newFlight = new Flight();
    // get the default date
    const dt = newFlight.departs;
    let offset = dt.getTimezoneOffset() * 60000;
    // this takes the default date, subtracts the offset and converts to ISO string
    // set value = 'localDate', and use slice(0,16) to get proper format
    let localDate = new Date(dt - offset).toISOString();
    //render the date
    res.render('flights/new', { localDate });
}

function newTicket(req, res) {
    //res.send('new ticket function');
    Flight.findById(req.params.id, function(err, flight) {
        console.error(err);
        res.render('tickets/new', { flight });
    });
}

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


