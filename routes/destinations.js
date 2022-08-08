const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/destinations');

router.get('/new', destinationsController.new);
router.post('/flights/:id/destinations', destinationsController.create);


module.exports = router;