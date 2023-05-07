const express = require('express');
const { User } = require('../service/user.service');
const { isValidUserData, isValidUserId } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');

const router = express.Router();

router.get('/', (request, response) => {
    try {
        const user = new User();
        const data = user.getAllUser();
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

router.get('/:id', isValidUserId, (request, response) => {
    try {
        const { id } = request.params;
        const user = new User();
        const data = user.getUserById(id);
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

router.post('/', isValidUserData, (request, response) => {
    try {
        const { name, surname, email, pwd } = request.body;
        const user = new User();
        const data = user.createUser(name, surname, email, pwd);
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

router.put('/:id', isValidUserData, isValidUserId, (request, response) => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        const user = new User();
        const data = user.updataUser(id, name, surname, email, pwd);
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

router.delete('/:id', isValidUserId, (request, response) => {
    try {
        const { id } = request.params;
        const user = new User();
        const data = user.deleteUser(id);
        buildResponse(response, data, 200);
    } catch (error) {
        buildResponse(response, error.message, 400);
    }
});

module.exports = router;