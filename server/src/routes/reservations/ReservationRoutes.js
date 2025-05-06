const express = require('express');
const router = express.Router();
const reservationController = require('../../controllers/reservationController');
const tokenAuthenticaton = require('../../middleware/tokenAuthentication');


router.get('/getReservations', reservationController.getReservations);



router.post('/newRes', reservationController.newRes);

module.exports = router;