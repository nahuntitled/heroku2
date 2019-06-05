const express = require('express');
const router = express.Router();
const path = require("path");
var fs = require('fs');

router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, './adminConfig.json'), 'utf8', (err, data) => {
    if (err){
        console.log(err);
    } else {
      obj = JSON.parse(data);
      res.status(200).json(obj);
  }});
});

router.post('/', (req, res) => {
  json = JSON.stringify(req.body); //convert it back to json
  fs.writeFile(path.join(__dirname, './adminConfig.json'), json, 'utf8', (err,data) => { res.status(200).json(data); });
});

module.exports = router;
