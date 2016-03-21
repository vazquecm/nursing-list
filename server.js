'use strict';

const express = require('express');
const app = require('express')();
const bodyParser = require('body-parser');
const path = require('path');


const PORT = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));


// app.get('/', (req,res) => {
//   res.send('/public');
// });

// app.get('/', function (req, res) {
//   res.send('Surgical nursing list')
// });

app.post('/login', function(req, res) {
  console.log('trying to log in');
});

app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
});

module.exports = app;

