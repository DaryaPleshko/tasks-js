const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { getAllData, getDataById } = require('../servise/user.service');

const route = express.Router();


route.get('/', async (request, response) => {
    try {
        const data = await getAllData();
        buildResponse(response, 200, data);
    } catch (error) {
        buildResponse(response, 404, error.message);
    }
});

route.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data = await getDataById(id);
        buildResponse(response, 200, data);
    } catch (error) {
        buildResponse(response, 404, error.message);
    }
})

module.exports = route;