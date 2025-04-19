const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authentificationController');
const app = require('../../app');

app.post('/login', authController.login);

app.post('/register', authController.register);