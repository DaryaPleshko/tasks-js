const express = require('express');
const { getData, getDataById, createData, updateData, deleteData } = require('./service/service');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    try {
        response.status(200).send(getData());
    } catch (error) {
        response.status(500).send(error.message);
    }
});

app.get('/:id', (request, response) => {
    try {
        const { id } = request.params;
        response.status(200).send(getDataById(id));
    } catch (error) {
        response.status(500).send(error.message);
    }
});

app.post('/', (request, response) => {
    try {
        const { label, category, priority } = request.body;
        response.status(200).send(createData(label, category, priority));
    } catch (error) {
        response.status(500).send(error.message);
    }
});

app.put('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const { label, category, priority } = request.body;
        response.status(200).send(updateData(id, label, category, priority));
    } catch (error) {
        response.status(500).send(error.message);
    }
})

app.delete('/:id', (request, response) => {
    try {
        const { id } = request.params;
        response.send(deleteData(id));
    } catch (error) {
        response.status(500).send(error.message);
    }
})

app.listen(3000, () => console.log('Server is running'));