'use strict';

const express = require('express');
const router = express.Router();
const login = require('../ctrls/login');

// just executing the local.js file
const local = require('../ctrls/login');


router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
