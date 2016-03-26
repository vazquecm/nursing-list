'use strict';

const mongoose = require('mongoose');


module.exports = mongoose.model('Procedures', mongoose.Schema({
  procedure: String,
  note: String,
  isCompleted: Boolean,
  isEditing: Boolean
  })
});
