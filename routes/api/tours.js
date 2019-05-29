const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const mongoose = require('mongoose');

// Item Model
const Tour = require('../../models/Tour');
const Place = require('../../models/Place');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Tour.find()
    .then(items => res.json(items));
});

router.get('/:id', (req, res) => {
  Tour.findOneAndUpdate(
    {_id: req.params.id},
    { $inc: { "view" : 1 } }
 ).then(item => null)
  Tour.findById(req.params.id)
    .then(items => res.json(items));
});


// @route   POST api/items/sort
// @desc    Sort tpurs
router.post('/sort', (req, res) => {
  const findRule = {
    country: {$exists: true},
    type: {$exists: true},
    days: 0,
    people: 1,
    kids: 0
  };

  for(n in req.body) {
    if(req.body[n] !== '') {
      findRule[n] = req.body[n]
    }
  }
  Place.findOneAndUpdate(
    {'name': findRule.country},
    { $inc: { "view" : 1 } }
 ).then(item => null)
  Tour.find({ country: findRule.country, type: findRule.type, kids: { $gte: findRule.kids }, days: { $gte: findRule.days }, people: { $gte: findRule.people } })
  .then(items => {
    res.json(items)
  })
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
    filePath: req.body.filePath,
    days: req.body.days,
    location: req.body.location,
    hotel: req.body.hotel,
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
    filePath: req.body.filePath,
    days: req.body.days,
    location: req.body.location,
    hotel: req.body.hotel,
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
