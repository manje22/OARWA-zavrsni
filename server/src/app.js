const express = require("express");
const path = require('path');
const app = express();
const cors = require("cors");
const authentificationRoutes = require('./routes/authentification/authentificationRoutes');
const imageRoutes = require('./routes/images/slideShowImages');


// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', authentificationRoutes);
app.use('/images', imageRoutes);



// Test route
app.get("/", (req, res) => {
  res.send("API is working");
});

console.log("App is running");
module.exports = app;
