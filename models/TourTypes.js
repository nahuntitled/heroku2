const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TourTypeSchems = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = TourType = mongoose.model('Country', TourTypeSchems);
