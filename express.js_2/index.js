const express = require('express');
const { getEnvironment, getEnvironmentById } = require('./service/service');
const app = express();

app.get('/', (request, response) => {
    const result = getEnvironment();
    response.send(result)
});

app.get('/:id', (request, response) => {
    const { id } = request.params;
    const result = getEnvironmentById(id);
    response.send(result);
});


app.post('/', (request, response) => response.send('hello post'));

app.listen(3000, () => console.log(`server is running`));