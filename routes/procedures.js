'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../ctrls/procedures');
const Procedure = require('../models/proceduresModel')

// looks for "id" parameter and depending on which method used, will then look in that controller to get the requested data and execute that function command

router.param('id', (req, res, next, id) => {
  Procedure
  .find(id)
  .populate('procedures')
  .exec( (err, procedures) => {
    console.log('procedures');
    if (err) throw err;

    req.procedures = procedures;
    next();
  });

});

router.get('/procedures', ctrl.find)
router.post('/procedures', ctrl.create)
router.post('/procedures/:id', ctrl.update)
router.delete('/procedures/:id', ctrl.destroy);

module.exports = router;
