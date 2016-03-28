'use strict';


const bodyParser = require('body-parser');
const express = require('express');
// const flash = require('connect-flash');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');

// needed for authorization/
const passport = require('passport');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const multer = require('multer');
const loginRoutes = require('./routes/login');
const checklistsRoutes = require('./routes/checklists');

// init app
const app = express();
//
// configuration
const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb://localhost:27017/nursing-list';
console.log('URL', MONGODB_URL);
const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';

// setup mongodb URL
const MONGODB_HOST = process.env.MONGODB_HOST || `localhost`;
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || `nursing-list`;
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379'

const MONGODB_AUTH = MONGODB_USER
  ? `${MONGODB_USER}:${MONGODB_PASS}@`
  : '';

  const sassMiddleware = require('node-sass-middleware');

// getting information from the requested url in the browser transfers info into usable JSON -- this is middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middleware comes before routes
app.use(methodOverride('_method'));

// app.use(flash());
app.use(session({
  secret: SESSION_SECRET,
  store: new RedisStore(),
  resave: true,
  saveUninitialized: true
}));

// login authentication
app.use(passport.initialize());
app.use(passport.session());
// app.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });

// app.use((req, res, next) => {
//   res.locals.messages = req.flash();
//   next();
// });
// app.use(multer({dest: 'login'}));
// app.use(loginRoutes);
// app.use(checklistsRoutes);


//SASS set up
  app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true,
    sourceMap: true
}));

// server gets files that don't change
app.use(express.static(path.join(__dirname +  '/public')));

// open up and listen to the request once connection is made it locks onto the db to listen for any requests
mongoose.connect(MONGODB_URL);

mongoose.connection.on('open', () => {
app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
  });
});
