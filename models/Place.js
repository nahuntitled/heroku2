const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PlaceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imgPath: {
    type: String,
    required: true
  },
  view: {
    type: Number,
    default: 0
  }
});

module.exports = Place = mongoose.model('Place', PlaceSchema);
