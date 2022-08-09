const Flight = require('../models/flight');
const Ticket = require('../models/ticket');



module.exports = {
    create,
}

function create(req,res) {
    Flight.findById(req.params.id, function(err, flightDoc) {
        req.body.flight = flightDoc._id;
        Ticket.create(req.body, function (err, ticket) {
            res.redirect(`/flights/${flightDoc._id}`);
        });
    });
}