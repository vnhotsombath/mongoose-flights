const express = require('express');
const Destination = require('../models/destination');

module.exports = {
    create,
    new: newDestination
};

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
    // Flight.findById(req.params.id, function (err, flight) {
    //     console.log(flight);
    //     flight.destination.push(req.body);
    //     flight.save(function (err) {
    //         res.redirect(`/flights/${flight._id}`);
    //     });
    // });
}

function newDestination(req, res) {
    Destination.find({}, function (err, destinations){
        res.render('destinations/new', {
            title: 'Add Destination', destinations,
        })
    })
}

