const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../service/user.service');
const router = express.Router();

router.get('/', (request, response) => {
    response.status(200).send(getAllUsers());
});

router.get('/:id', (request, response) => {
    try {
        const { id } = request.params;
        response.status(200).send(getUserById(id));
    } catch (error) {
        response.status(404).send(error.message);
    }
});

router.post('/', (request, response) => {
    const { name, surname, email, pwd } = request.body;
    response.status(200).send(createUser(name, surname, email, pwd));
});

router.put('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const { name, surname, email, pwd } = request.body;
        response.status(200).send(updateUser(id, name, surname, email, pwd));
    } catch (error) {
        response.status(404).send(error.message);       
    }
});

router.delete('/:id', (request, response) => {
    try {
        const { id } = request.params;
        response.status(200).send(deleteUser(id));
    } catch (error) {
        response.status(404).send(error.message);
    }
});

module.exports = router;