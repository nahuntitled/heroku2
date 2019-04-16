const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TourSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stars: {
    type: String,
    min: 1,
    max: 5,
    required: true
  },
  food: {
    type: Number,
    default: 1
  },
  people: {
    type: Number,
    min: 1,
    required: true
  },
  kids: {
    type: Number,
    min: 1,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  countryId: {
    type: Number,
    required: true
  }
});

module.exports = Tour = mongoose.model('Tour', TourSchema);
