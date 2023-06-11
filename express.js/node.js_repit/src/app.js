const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const user = require('./controller/user.controller');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/user', user);
app.use((error, request, response, next) => response.send(error.message));

module.exports = app;