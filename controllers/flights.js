const Flight = require('../models/flight');


module.exports = {
    new: newFlight, 
    create,
    index, 
    show
};

    function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    let flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/new');
        console.log(flight);
        res.redirect('/flights');
    });
  };

    function index(req, res) {
        console.log(req.flight)
        Flight.find({}, function(err,flights) {
            res.render('flights/index', { title: 'All Flights', flightss});
        });
    }

    function show(req, res) {
        Flight.findById(req.params.id, function(err, flight) {
            res.render('flights/show', {title: 'Flight Details', flight});
        });
    }



