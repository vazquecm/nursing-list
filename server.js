'use strict';


// const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;

const MONGODB_URL = 'mongodb://localhost:27017/nursing-list';
console.log('URL', MONGODB_URL);

// parses urlencoded url's
app.use(bodyParser.urlencoded({ extended: false }));
// parses JSON
app.use(bodyParser.json());

// server gets files that don't change
app.use(express.static(path.join(__dirname +  '/public')));


mongoose.connect(MONGODB_URL);
mongoose.connection.on('open', () => {
app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
});
});


