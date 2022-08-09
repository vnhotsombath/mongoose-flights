const Destination = require('../models/destination');


module.exports = {
    create,
    new: newDestination
};


function newDestination(req, res) {
    Destination.find({}, function (err, destinations) {
        res.render('destinations/new', {
            title: 'Add Destination', 
            destinations: destinations
        });
    })
}


function create(req, res) {
    console.log(req.body)
    Destination.create(req.body, function (err, destination) {
        if (err) {
            console.log(err)
            res.redirection('/destinations/new')
        }
        else {
            res.redirect('/destinations/new')
        }
    })

}


