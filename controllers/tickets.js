const Flight = require('../models/flight');
const Ticket = require('../models/ticket');



module.exports = {
    create
    
}

function create(req,res) {
    Ticket.create(req.body, function(err, ticket){
        res.redirect('/flights');
    })
    // Flight.findById(req.params.id, function(err, flight) {
    //     flight.tickets.push(req.body,flightId)
    //     flight.save(function(err){
    //         res.redirect(`/flights/${flight._id}`)
    //     });
    // });


    //     req.body.flight = flight._id;
    //     Ticket.create(req.body, function (err, ticket) {
    //     if(err) {
    //         //console.log('There is an error')
    //     }
    //         res.redirect(`/flights/${flight._id}`);
    //     });
    // });
}
