const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FoodSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = Food = mongoose.model('Food', FoodSchema);
