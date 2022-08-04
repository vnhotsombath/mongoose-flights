const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights')


/* GET flights. */
router.get('/', flightsController.index);

module.exports = router;
