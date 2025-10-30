const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const imagesFolder = path.join(__dirname, '../..', 'images');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

router.get('/slide_images', (req, res) => {
  fs.readdir(imagesFolder, (err, files) => {
    if (err) {
      //console.error("Error reading images folder:", err);
      return res.status(500).send('Server error');
    }

    const images = files.map(file => `${BASE_URL}/images_view/${file}`);
    res.json({ images });
  });
});

module.exports = router;
