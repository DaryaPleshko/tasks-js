const express = require('express');
const { getAllEnvironment, createEnvironment, updateEnvironment } = require('../service/environment.servise');
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.get('/', async (request, response) => {
        try {
                const data = await getAllEnvironment();
                buildResponse(response, data, 200);
        } catch (error) {
                buildResponse(response, error.message, 500);
        }
});

route.post('/', async (request, response) => {
        try {
                const { label, category, priority } = request.body;
                const data = await createEnvironment(label, category, priority);
                buildResponse(response, data, 200);
        } catch (error) {
                buildResponse(response, error.message, 500);
        }
});

route.put('/:id', async (request, response) => {
        try {
                const { id } = request.params;
                const { label, category, priority } = request.body;
                const data = await updateEnvironment(id, label, category, priority);
                buildResponse(response, data, 200);
        } catch (error) {
                buildResponse(response, error.message, 500);
        }
});

module.exports = route;