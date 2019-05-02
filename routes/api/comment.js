const express = require('express');
const router = express.Router();

// Item Model
const Comment = require('../../models/Comment');

// @route   GET api/commnt
// @desc    Get comment by id
// @access  Public
router.get('/:id', (req, res) => {
  Comment.find({ id: req.params.id })
    .then(items => res.json(items));
});

// @route   POST api/commnt
// @desc    Create An comment
// @access  Private
router.post('/', (req, res) => {

  const newItem = new Comment({
    name: req.body.name,
    comment: req.body.comment,
    id: req.body.id
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
