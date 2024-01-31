const express = require("express");
const { getData, getDataById, createData, updateData, deleteData } = require('./service/service');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.status(200).send(getData());
});

app.get('/:id', (request, response) => {
    const { id } = request.params;
    response.status(200).send(getDataById(id));
});

app.post('/', (request, response) => {
    const { name, age } = request.body;
    response.status(200).send(createData(name, age));
});

app.put('/:id', (request, response) => {
    const { id } = request.params;
    const { name, age } = request.body;
    response.status(200).send(updateData(id, name, age));
});

app.delete('/:id', (request, response) => {
    const { id } = request.params;
    response.status(200).send(deleteData(id));
});

app.listen(3000, () => console.log(`Server is running`));

























// const express = require('express');
// const { getData, createData, updateData, deleteData } = require('./service/service');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(bodyParser.json());

// app.get('/', (request, response) => {
//     const result = getData();
//     response.send(result)
// });

// app.post('/', (request, response) => {
//     const { name, age } = request.body;
//     response.status(200).send(createData(name, age));
// });

// app.put("/:id", (request, response) => {
//     const { id } = request.params;
//     const { name, age } = request.body;
//     response.status(200).send(updateData(id, name, age));
// });

// app.delete('/:id', (request, response) => {
//     const { id } = request.params;
//     const data = deleteData(id);
//     response.send(data);
// })
// app.listen(3000, () => console.log(`server is running`));