const bodyParser = require("body-parser");
const express = require("express");
const api = require("./api/api.controller");
const post =require("./posts/posts.controller")

const app = express();
app.use(bodyParser.json())

app.use("/api", api);

app.use("/post",post)

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

module.exports = app; 