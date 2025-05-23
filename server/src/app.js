const express = require("express");
const path = require('path');
const app = express();
const cors = require("cors");
const authentificationRoutes = require('./routes/authentification/authentificationRoutes');
const ReservationRoutes = require('./routes/reservations/ReservationRoutes')
const imageRoutes = require('./routes/images/slideShowImages');


// Middleware
app.use(cors());
app.use(express.json());

app.use('/', authentificationRoutes);
app.use('/reservations', ReservationRoutes)
app.use('/images', imageRoutes);

app.use('/images_view', express.static(path.join(__dirname, 'images')));

console.log("App is running");
module.exports = app;
