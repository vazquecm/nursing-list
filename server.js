'use strict';


// const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


const PORT = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname +  '/public')));


app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
});


