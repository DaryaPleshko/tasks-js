const express = require("express");
const bodyParser = require("body-parser");
const task = require("./controller")

const app = express();

app.use(bodyParser.json())

app.use("/task", task)

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

module.exports = app; 