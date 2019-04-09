const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;

// Create Schema
const CountrySchema = new Schema({
  id_country: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

CountrySchema.plugin(AutoIncrement, {inc_field: 'id_country'});

module.exports = Country = mongoose.model('Country', CountrySchema);
