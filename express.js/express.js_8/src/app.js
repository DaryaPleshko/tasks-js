const express = require('express');
const bodyParser = require('body-parser');
const route = require('./controller/environment.controller');

const app = express();

app.use(bodyParser.json());

app.use('/environment', route);

app.use((error, request, response, next) => response.send(error.message));
          
module.exports = app;     