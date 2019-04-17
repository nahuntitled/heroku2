const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Tour = require('../../models/Tour');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Tour.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});


// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', auth, (req, res) => {
  const newItem = new Tour({
    name: req.body.name,
    price: req.body.price,
    stars: req.body.stars,
    food: req.body.food,
    people: req.body.people,
    kids: req.body.kids,
    description: req.body.description,
    country: req.body.country,
    type: req.body.type,
    filePath: req.body.filePath
  });

  newItem.save().then(item => res.json(item));
});

// @route   PUT api/items/:id
// @desc    Create An Item
// @access  Private
router.put('/:id', auth, (req, res) => {
  Tour.findOneAndReplace({_id: req.params.id},  {
    name: req.body.name,
    price: req.body.price,
    stars: req.body.stars,
    food: req.body.food,
    people: req.body.people,
    kids: req.body.kids,
    description: req.body.description,
    country: req.body.country,
    type: req.body.type,
    filePath: req.body.filePath
  }).then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Tour.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
