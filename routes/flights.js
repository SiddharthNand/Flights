var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');


router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get("/index", flightsCtrl.index);
router.get('/:id', flightsCtrl.show)


module.exports = router;
