const express = require('express');
const router = express.Router();
const reservationController = require('../../controllers/reservationController');
const tokenAuthenticaton = require('../../middleware/tokenAuthentication');
const checkRole = require('../../middleware/authorization');


router.get('/getReservations', reservationController.getReservations);

router.get('/getReservationsAdmin',checkRole('admin'), reservationController.getAllReservationInformation);

router.post('/newRes', reservationController.newRes);

module.exports = router;