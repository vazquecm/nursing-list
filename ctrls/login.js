//ctrls/login.js
"use strict";

const express = require('express');
const router = express.Router();
const passport = require('passport');
//dependencies
const loginUser = require("../models/users");


module.exports.loginUser = function(req, res) {
  console.log('status? ');
  res.sendStatus(200);
};

module.exports.logout = function(req, res) {
  req.session.regenerate(function(err) {
    if (err) throw err;
    console.log('************');
    res.sendStatus(200);
  });
}
