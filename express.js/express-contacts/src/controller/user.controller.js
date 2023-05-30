const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { isValidUserId, isValidUserBody } = require('../helper/validation');
const { getAllData, getDataById, createData, updateData, patchData, deleteData } = require('../servise/user.service');

const route = express.Router();         

route.get('/', async (request, response) => {
  try {
    const data = await getAllData();          
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);           
  }
});

route.get('/:id', isValidUserId, async (request, response) => {
  try {
    const { id } = request.params;
    const data = await getDataById(id);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.post('/', isValidUserBody, async (request, response) => {
  try {
    const { name, surname, birth, city, age } = request.body;
    const data = await createData(name, surname, birth, city, age);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.put('/:id', isValidUserId, isValidUserBody, async (request, response) => {
  try {
    const { id } = request.params;
    const { name, surname, birth, city, age } = request.body;
    const data = await updateData(id, name, surname, birth, city, age);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.patch('/:id', isValidUserId, async (request, response) => {
  try {
    const { id } = request.params;
    const clientData = request.body;
    const data = await patchData(id, clientData);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.delete('/:id', isValidUserId, async (request, response) => {
  try {
    const { id } = request.params;
    const data = await deleteData(id);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

module.exports = route;
