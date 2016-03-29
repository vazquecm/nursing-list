'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const login = require('../ctrls/login');

// just executing the local.js file
const local = require('../ctrls/local');


router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login',
  passport.authenticate('local',
    {
      failureRedirect: '/login',
      successRedirect: '/'
    }
  )
);

// // req.session.user = user;
// router.delete('/login', (req, res) => {
//   req.session.regenerate(function(err) {
//     if (err) throw err;

//     res.redirect('/');
//   });
// });

module.exports = router;
