const express = require('express');
const router = express.Router();
const WorkshopController = require('../controller/bookings.js');

router.post('/book', WorkshopController.bookWorkshop);

module.exports = router;
