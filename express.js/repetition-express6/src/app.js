const bodyParser = require("body-parser");
const express = require("express");
const test = require("./test/controller")
const app = express();

app.use(bodyParser.json());
app.use('/test', test);

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
})

module.exports = app;