const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authentificationController');
const userExists = require('../../middleware/userExists');

router.post('/login', authController.login);

router.post('/register',userExists, authController.register);

router.post('/registerAdmin',userExists, authController.registerNewAdmin);



module.exports = router;