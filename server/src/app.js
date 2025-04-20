const express = require("express");
const app = express();
const cors = require("cors");
const authentificationRoutes = require('./routes/authentification/authentificationRoutes')


// Middleware
app.use(cors());
app.use(express.json());

app.use('/', authentificationRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

console.log("App is running");
module.exports = app;
