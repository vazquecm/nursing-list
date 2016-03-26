'use strict';

const mongoose = require('mongoose');

module.exports = mongoose.model('Checklists',
  mongoose.Schema({
  task: String,
  isCompleted: Boolean,
  isEditing: Boolean
 })
);

