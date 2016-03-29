const Procedure = require('../models/proceduresModel')
const express = require('express');
const router = express.Router();
const ctrl = require('../ctrls/procedures');


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
router.put('/procedures/:id', ctrl.update)
router.delete('/procedures', ctrl.destroy);

module.exports = router;
