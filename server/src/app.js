const express = require("express");
const path = require('path');
const app = express();
const cors = require("cors");
const authentificationRoutes = require('./routes/authentification/authentificationRoutes');
const ReservationRoutes = require('./routes/reservations/ReservationRoutes')
const imageRoutes = require('./routes/images/slideShowImages');


// Middleware
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use('/', authentificationRoutes);
app.use('/reservations', ReservationRoutes)
app.use('/images', imageRoutes);

app.use('/images_view', express.static(path.join(__dirname, 'images')));

//console.log("App is running");
module.exports = app;
