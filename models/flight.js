const mongoose = require('mongoose');

const Schema = mongoose.Schema;
	
const flightSchema = new Schema({

  Airline: { 
    type: String, 
    enum: ['American', 'Southwest', 'United'] 
  },
  Airport: { 
    type: String, 
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'] 
  },
  flightNo: {
     type: Number, min: 10, max: 9999 
  },
  Departs: { 
    type: Date,
    min: '2022-10-31',
    max: '2023-10-31'  
  }, 
},
{
  timestamps: true
}
);

module.exports = mongoose.model('Flight', flightSchema);