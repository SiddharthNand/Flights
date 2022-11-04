const Flight = require('../models/flight');


module.exports = {
    new: newFlight, 
    create,
    index, 
};

function newFlight(req, res) {
    res.render('flights/new');
  }

  function create(req, res) {
	if (req.body.departs === '') delete req.body.departs;
	Flight.create(req.body);
	console.log(req.body);
	res.redirect('/flights');
};

  function index(req, res) {
  Flight.find({}, function(err, flights){
    if (err) {
        console.log(err);
        res.redirect("/");
    }
        res.render("flights/index", { flights });
    });
  }



