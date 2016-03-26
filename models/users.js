'use strict';

const mongoose = require('mongoose');
// const UserSchema

module.exports = mongoose.model('Login',
  mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true },
  password: {
    type: String,
    required: true },
 })
);
