const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Place = require('../../models/Place');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Place.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', auth, (req, res) => {

  const newItem = new Place({
    name: req.body.name,
    description: req.body.description,
    imgPath: req.body.imgPath
  });

  newItem.save().then(item => res.json(item));
});

// @route   PUT api/items/:id
// @desc    Create An Item
// @access  Private
router.put('/:id', (req, res) => {
  Place.findOneAndReplace({_id: req.params.id},  {
    name: req.body.name,
    description: req.body.description,
    imgPath: req.body.imgPath
  }).then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', (req, res) => {
  Place.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
