'use strict';


const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const path = require('path');


const loginRoutes = require('./routes/login');
const checklistsRoutes = require('./routes/checklists');
const proceduresRoutes = require('./routes/procedures');

// init app
const app = express();
//
// configuration
const PORT = process.env.PORT || 3000;
//const MONGODB_URL = 'mongodb://localhost:27017/nursing-list';
const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';

// setup mongodb URL
const MONGODB_HOST = process.env.MONGODB_HOST || `localhost`;
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || `nursing-list`;

const MONGODB_AUTH = MONGODB_USER
  ? `${MONGODB_USER}:${MONGODB_PASS}@`
  : '';
const MONGODB_URL = `mongodb://${MONGODB_AUTH}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;

// getting information from the requested url in the browser transfers info into usable JSON -- this is middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middleware comes before routes
app.use(methodOverride('_method'));

app.use('/', loginRoutes);
app.use('/', checklistsRoutes);
app.use('/', proceduresRoutes);

// server gets files that don't change
app.use(express.static(path.join(__dirname +  '/public')));

// open up and listen to the request once connection is made it locks onto the db to listen for any requests
mongoose.connect(MONGODB_URL);

mongoose.connection.on('open', () => {
app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
  });
});
