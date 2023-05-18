const express = require('express');
const bodyParser = require('body-parser');
const environment = require('./controller/environment.controller.js');

const app = express();

app.use(bodyParser.json());

app.use('/environment', environment);

app.use((error, req, res, _next) => res.send(error.message));

module.exports = app;
