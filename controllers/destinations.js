const Destination = require('../models/destination');

module.exports = {
    create,
    new: newDestination
};

function create(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        console.log(flight);
        flight.destination.push(req.body);
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function newDestination(req, res) {
    Destination.find({}, function (err, destinations){
        res.render('destinations/new', {
            title: 'Add Destination', destinations,
        })
    })
}

