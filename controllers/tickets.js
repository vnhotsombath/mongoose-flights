const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.export = {
    create,
}

function create(req,res) {
    Flight.findById(req.params.id, function(err, flight){
        req.body.flight= flight._id;
        Ticket.create(rew.body, function (err, ticket) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}