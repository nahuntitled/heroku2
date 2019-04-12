const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

autoIncrement.initialize(mongoose.connection);
// Create Schema
const CountrySchema = new Schema({
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
  }
});


CountrySchema.plugin(autoIncrement.plugin, { model: 'Country', field: 'id' });

module.exports = Country = mongoose.model('Country', CountrySchema);
