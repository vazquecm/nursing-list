'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const multer = require('multer');
const login = require('../ctrls/login');

// just executing the local.js file
const local = require('../ctrls/local');

// router.post('/login', login.loginUser);
// router.delete('/login', login.logout);

// module.exports = router;
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login',
  passport.authenticate('local',
    {
      failureFlash: 'Incorrect email or password',
      failureRedirect: '/login',
      successFlash: 'Success!',
      successRedirect: '/'
    }
  )
);

// req.session.user = user;
router.delete('/login', (req, res) => {
  req.session.regenerate(function(err) {
    if (err) throw err;

    res.redirect('/');
  });
});
