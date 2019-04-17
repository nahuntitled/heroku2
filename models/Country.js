const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CountrySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imgPath: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Country = mongoose.model('Country', CountrySchema);
