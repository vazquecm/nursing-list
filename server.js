'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.send('Surgical nursing list')
});

app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
});
