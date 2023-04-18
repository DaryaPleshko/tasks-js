const express = require('express');
const { getEnvironment, getEnvironmentById, createValue, putOfData } = require('./service/service');
const app = express();

app.get('/', (request, response) => {
    const result = getEnvironment();
    response.send(result)
});

app.get('/:id', (request, response) => {
    try {
        const { id } = request.params;
        const result = getEnvironmentById(id);
        response.send(result);
    } catch (error) {
        response.status(404).send(error.message);
    }
});

app.post('/', (request, response) => {
    try {
        const data = createValue(request.body);
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
});

app.put("/:id", (request, response) => {
        const { id } = request.params;
        response.status(200).send(putOfData(id, request.body));
});

app.listen(3000, () => console.log(`server is running`));