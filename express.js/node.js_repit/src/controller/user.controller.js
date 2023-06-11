const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { isValidUser } = require('../helper/validation');
const { getAllUser, getUserById, createUser } = require('../service/user.service');

const route = express.Router();

route.get('/', async (request, response) => {
    try {
        buildResponse(response, 200, (await getAllUser()));
    } catch (error) {
        buildResponse(response, 404, error.message);
    }
});

route.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        buildResponse(response, 200, (await getUserById(id)));
    } catch (error) {
        buildResponse(response, 404, error.message);
    }
});

route.post('/', isValidUser, async (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        buildResponse(response, 200, (await createUser(name, surname, email, pwd)));
    } catch (error) {
        buildResponse(response, 404, error.message);
    }
});

module.exports = route;