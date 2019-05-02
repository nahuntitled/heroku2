const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CommentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  }
});

module.exports = Comment = mongoose.model('Comment', CommentSchema);
