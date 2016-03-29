'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../ctrls/checklists');
const Checklist = require('../models/checklistsModel')


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
