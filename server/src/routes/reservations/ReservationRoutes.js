const express = require('express');
const router = express.Router();
const reservationController = require('../../controllers/reservationController');
const tokenAuthenticaton = require('../../middleware/tokenAuthentication');
const checkRole = require('../../middleware/authorization');


router.get('/getReservations', reservationController.getReservations);

router.post('/getReservationsAdmin',tokenAuthenticaton, checkRole('admin'), reservationController.getAllReservationInformation);

router.delete('/deleteReservationsAdmin',tokenAuthenticaton, checkRole('admin'), reservationController.deleteReservation);

router.post('/newRes',tokenAuthenticaton, reservationController.newRes);

module.exports = router;