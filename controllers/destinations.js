const Flight = require('../models/flight');


module.exports = {
    create
};


function create(req, res) {
   //console.log(req.body)
   console.log(req.params.id, '<--params flight id');
   console.log(req.body, '<--contents of the destinations')
   Flight.findById(req.params.id, function (err, flightDoc) {
    if (err) {
        res.redirect(`/flights/${req.params.id}`);
    }
    flightDoc.destinations.push(req.body);
    flightDoc.save(function (err) {
        res.redirect(`/flights/${req.params.id}`);
    })
   })
}