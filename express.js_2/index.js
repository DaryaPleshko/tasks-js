const express = require('express');
const { getData, createData, updateData, deleteData } = require('./service/service');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    const result = getData();
    response.send(result)
});

app.post('/', (request, response) => {
    const { name, age } = request.body;
    response.status(200).send(createData(name, age));
});

app.put("/:id", (request, response) => {
    const { id } = request.params;
    const { name, age } = request.body;            
    response.status(200).send(updateData(id, name, age));
});

app.delete('/:id', (request, response) => {
    const { id } = request.params;   
    const data = deleteData(id);
    response.send(data);
})
app.listen(3000, () => console.log(`server is running`));