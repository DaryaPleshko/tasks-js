const express = require('express');
const bodyParser = require('body-parser');
const user = require('./controller/user.controller');

const app = express();

app.use(bodyParser.json());

app.use('/user', user);

app.use((error, request, response, next) => response.send(error.message));

module.exports = app;