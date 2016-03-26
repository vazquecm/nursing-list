'use strict';

const express = require('express');
const router = express.Router();
const login = require('../ctrls/login');

router.post('/login', login.loginUser);
router.delete('/login', login.logout);

module.exports = router;
