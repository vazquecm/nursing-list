'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../ctrls/checklists');
const Checklist = require('../models/checklistsModel')

// looks for "id" parameter and depending on which method used, will then look in that controller to get the requested data and execute that function command

router.param('id', (req, res, next, id) => {
  Checklist
  .find(id)
  .populate('checklists')
  .exec( (err, checklists) => {
    console.log(checklists);
    if (err) throw err;

    req.checklists = checklists;
    next();
  });

});

router.get('/checklists', ctrl.find)
router.post('/checklists', ctrl.create)
router.put('/checklists/:id', ctrl.update)
router.delete('/checklists/:id', ctrl.destroy);

module.exports = router;
