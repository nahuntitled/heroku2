const express = require('express');
const router = express.Router();
const path = require("path");
const fs = require("fs");
const multer = require("multer");


//File Uploading errors
const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

const upload = multer({
  dest: "./uploads/"
});



// @route   POST api/upload
// @desc    Create An Item
// @access  Private
router.post('/', upload.single("file"), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, "../../uploads/" + req.file.originalname);

    console.log(tempPath,targetPath);
    
    if (path.extname(req.file.originalname).toLowerCase() !== "fffkdnfjkd") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .json("/uploads/" + req.file.originalname)
          .end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }

});

module.exports = router;