'use strict';

const { Router } = require('express');
const router = Router();

const {register, login, logout} = require('../controllers/authCtrl.js');

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);

module.exports = router;