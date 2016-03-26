const Checklist = require('../models/checklistsModel')
const express = require('express');
const router = express.Router();

const ctrl = require('../ctrls/checklists');


router.param('id', (req, res, next, id) => {
  Checklists
  .findById(id)
  .populate('checklists')
  .exec( (err, checklists) => {
    if (err) throw err;

    req.checklists = checklists;
    next();
  });

});

router.post('/checklists', ctrl.create)
router.put('/checklists/:id', ctrl.update)
router.delete('/checklists/:id', ctrl.destroy);

module.exports = router;
