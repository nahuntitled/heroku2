const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

// Create Schema
const HotelSchema = new Schema({
  id: {
    type: Number
  },
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
  country_id: {
    type: Number
  }
});

HotelSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = Hotel = mongoose.model('Hotel', HotelSchema);
