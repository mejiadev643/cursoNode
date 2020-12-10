const express = require('express');
const controller = require('../controllers/auth');
const auth = express.Router();

auth.get('/', controller.renderAuth);

module.exports = authRouter;