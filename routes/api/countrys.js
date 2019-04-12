const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Country = require('../../models/Country');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  res.set({
    'Access-Control-Expose-Headers': 'Content-Range',
    'Content-Range': 'bytes : 0-9/*'
  });
  Country.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', (req, res) => {
  const newItem = new Country({
    name: req.body.name,
    price: req.body.price,
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Country.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.delete('/', (req, res) => {
  Country.remove().then(() => res.json({ success: true }))
});

module.exports = router;
