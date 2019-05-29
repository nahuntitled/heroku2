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
    type: String,
    default: 1
  },
  people: {
    type: Number,
    min: 1,
    required: true
  },
  kids: {
    type: Number,
    min: 0,
    default: 0,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  },
  days: {
    type: Number,
    required: true
  },
  hotel: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  view: {
    type: Number
  }
});

module.exports = Tour = mongoose.model('Tour', TourSchema);
