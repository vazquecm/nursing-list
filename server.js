'use strict';


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

// configuration
const PORT = process.env.PORT || 3000;
const MONGODB_URL = 'mongodb://localhost:27017/nursing-list';
console.log('URL', MONGODB_URL);
const loginRoutes = require('./routes/login');
const checklistsRoutes = require('./routes/checklists');

// init app
const app = express();
const MONGODB_HOST = process.env.MONGODB_HOST || `localhost`;
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || `nursing-list`;
// getting information from the requested url in the browser transfers info into usable JSON -- this is middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// server gets files that don't change
app.use(express.static(path.join(__dirname +  '/public')));

// middleware comes before routes
app.use(methodOverride('_method'));

app.use(loginRoutes);
app.use(checklistsRoutes);
// app.get('/checklists/create', (req, res) => {
//   res.render('create-checklists');
// });

// app.post('/checklists', (req, res) => {
//   console.log(req.body);
//   res.redirect('/');
// });


// open up and listen to the request once connection is made it locks onto the db to listen for any requests
mongoose.connect(MONGODB_URL);

mongoose.connection.on('open', () => {
app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
});
});
