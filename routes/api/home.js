const express = require('express');
const router = express.Router();

// Item Model
const Tour = require('../../models/Tour');
const Place = require('../../models/Place');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/tours', (req, res) => {
  Tour.find()
    .limit(6)
    .then(items => res.json(items));
});

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/countrys', (req, res) => {
  Place.find()
    .then(items => res.json(items));
});

module.exports = router;
