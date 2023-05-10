const express = require('express');
const { getAllEnvironment } = require('../service/environment.servise');

const route = express.Router();

route.get('/', async (request, response) => {
        const data = await getAllEnvironment();
        response.status(200).send(data);
});

module.exports = route;