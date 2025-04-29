const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authentificationController');
const userExists = require('../../middleware.js/userExists');

router.post('/login', authController.login);

router.post('/register',userExists, authController.register);



module.exports = router;