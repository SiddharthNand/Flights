var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


router.get('/new', flightsCtrl.new) 
res.send("new flight page");


module.exports = router;
