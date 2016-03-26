const Checklist = require('../models/checklistsModel')
const express = require('express');
const router = express.Router();

const ctrl = require('../ctrls/checklists');



router.param('id', (req, res, next, id) => {
  Checklists.findById(id, (err, checklists) => {
    if (err) throw err;

    req.checklists = checklists;

    Checklists.find({checklists: id})
    next();
  });

});

router
  // .get('/checklists', ctrl.index)
  // .get('/checklists/new', ctrl.new)
  .post('/checklists', ctrl.create)
  // .get('/checklists/:id', ctrl.show)
  .post('/checklists', ctrl.update)
  .post('/checklists', ctrl.delete);

module.exports = router;


