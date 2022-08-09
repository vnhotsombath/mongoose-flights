const Destination = require('../models/destination');


module.exports = {
    create,
    new: newDestination
};


function newDestination(req, res) {
    const error = Boolean(req.query.error);
    Destination.find({}, function (err, destinations) {
        res.render('destinations/new', {
            title: 'Add Destination', 
            destinations: destinations,
            error: error,
        });
    })
}


function create(req, res) {
   //console.log(req.body)
   Flight.findbyId(req.params.id, function (err, flightDoc) {
    flightDoc.destinations.push(req.body);
    flightDoc.save(function (err) {
        res.redirect(`flights/${flightDoc._id}`);
    })
   })
}