const Flight = require('../models/flight');


module.exports = {
    create
};


function create(req, res) {
   //console.log(req.body)
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