const bodyParser = require("body-parser");
const express = require("express");
const environment = require("./environment/environment.controller");
const app = express();

app.use(bodyParser.json())

app.use("/environment", environment);

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
})
module.exports = app;