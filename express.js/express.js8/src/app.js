const bodyParser = require("body-parser");
const express = require("express");
const news = require("./news/news.controller")
const app = express();

app.use(bodyParser.json());

app.use('/news', news);

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});

module.exports = app;