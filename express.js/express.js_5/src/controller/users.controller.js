const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../service/users.service');

router.get('/', (request, response) => {
    response.send(getAllUsers());
});

router.get('/:id', (request, response) => {
    const { id } = request.params;
    response.send(getUserById(id));
});

router.post('/', (request, response) => {
    const { name, surname, email, pwd } = request.body;
    response.status(200).send(createUser(name, surname, email, pwd));
});

router.put('/:id', (request, response) => {
    const { id } = request.params;
    const { name, surname, email, pwd } = request.body;
    response.status(200).send(updateUser(id, name, surname, email, pwd));               
});

router.delete('/:id', (request, response) => {
    const { id } = request.params;
    response.status(200).send(deleteUser(id));
});

module.exports = { router }