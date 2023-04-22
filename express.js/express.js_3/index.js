const express = require('express');
const { getValues, getValuesById, createValues, updareValues, deleteValues } = require('./service/service');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send(getValues());
});

app.get('/:id', (request, response) => {
    const { id } = request.params;
    response.send(getValuesById(id));
});

app.post('/', (request, response) => {
    const { label, category, priority } = request.body;
    response.status(200).send(createValues(label, category, priority));
});

app.put('/:id', (request, response) => {
    const { id } = request.params;
    const { label, category, priority } = request.body;
    response.status(200).send(updareValues(id, label, category, priority))
});

app.delete('/:id', (request, response) => {
    const { id } = request.params;
    response.send(deleteValues(id));
})

app.listen(3000, () => console.log('server is running'));