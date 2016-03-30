"use strict";

const express = require('express');
const router = express.Router();

//dependencies
const login = require("../models/users");

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
