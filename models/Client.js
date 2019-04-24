const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: false
  },
  days: {
    type: String,
    required: false
  },
  tour: {
    type: String,
    required: false
  },
  comment: {
    type: String,
    required: false
  }
});

module.exports = Client = mongoose.model('Client', ClientSchema);
