const Flight = require('../models/flight');
const Ticket = require('../models/ticket');




module.exports = {
    create,
    //addToDetails,
    
}


function create(req,res) {
    console.log(req.params.id, '<--params ticket id');
    console.log(req.body, '<--contents of the ticket');
    // Flight.findById(req.params.id, function(err, flightDocument) {
    //     flightDocument.tickets.push(req.body)
    //     flightDocument.save(function(err){
    //          res.redirect(`/flights/${req.params.id}`);
    //      });
    //  });
    req.body.flight = req.params.id;
     Ticket.create(req.body, function (err, ticket) {
        if(err) {
             console.log('There is an error')
         }
             res.redirect(`/flights/${req.params.id}`);
         });
     };


// function addToDetails(req, res){
//     Flight.findById(req.params.id, function(err, flightDoc){
//         flightDoc.ticket.push(req.body.ticketId);
//         flightDoc.save(function(err){
//             res.redirect(`/flights/${flightDoc._id}`)
//         })
//     })
// }

