'use strict';


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

//slash as the end indicated you look in index first
const checklistsRoutes = require('./routes/checklists');


const PORT = process.env.PORT || 3000;

//set url to mongodb--prior to heroku full deply
const MONGODB_URL = 'mongodb://localhost:27017/nursing-list';
console.log('URL', MONGODB_URL);

// getting information from the requested url in the browser transfers info into usable JSON -- this is middleware
app.use(bodyParser.urlencoded({ extended: false }));
// parses JSON

// server gets files that don't change
app.use(express.static(path.join(__dirname +  '/public')));

app.use(bodyParser.json());

// middleware comes before routes
app.use(methodOverride('_method'));

// app.get('/checklists/create', (req, res) => {
//   res.render('create-checklists');
// });

// app.post('/checklists', (req, res) => {
//   console.log(req.body);
//   res.redirect('/');
// });

app.use(checklistsRoutes);

// open up and listen to the request once connection is made it locks onto the db to listen for any requests
mongoose.connect(MONGODB_URL);

mongoose.connection.on('open', () => {
app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
});
});


