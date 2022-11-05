var express = require('express');
var router = express.Router();
const destinationCtrl = require('../controllers/destination');

router.post('flights/:id/destination', destinationCtrl.create);

router.exports = router