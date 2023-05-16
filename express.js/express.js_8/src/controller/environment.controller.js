const express = require('express');
const { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment } = require('../service/environment.servise');
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

route.get('/:id', async (request, response) => {
        try {
                const { id } = request.params;
                const data = await getEnvironmentById(id);
                buildResponse(response, data, 200);
        } catch (error) {
                buildResponse(response, error.message, 500);
        }
})

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

route.delete('/:id', async (request, response) => {
        try {
                const { id } = request.params;
                const data = await deleteEnvironment(id);
                buildResponse(response, data, 200);
        } catch (error) {
                buildResponse(response, error.message, 500);
        }
})

module.exports = route;