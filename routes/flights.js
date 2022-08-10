const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights')


/* GET flights. */
router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.get('/:id', flightsController.show);
router.get('/:id/tickets/new', flightsController.newTicket);
router.post('/', flightsController.create);

//router.post('/:id/destinations', flightsController.addToDestinations);


module.exports = router;
