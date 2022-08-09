const Flight = require('../models/flight');
const Ticket = require('../models/ticket');



module.exports = {
    create
    
}

function create(req,res) {
    Flight.findById(req.params.id, function(err, flightDoc) {
        req.body.flight = flightDoc._id;
        Ticket.create(req.body, function (err, ticket) {
        if(err) {
            console.log('There is an error')
        }
            res.redirect(`/flights/${flightDoc._id}`);
        });
    });
}
