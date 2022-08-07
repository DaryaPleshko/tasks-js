const express = require("express");
const { task, taskById, createTask, putMetod } = require('./src/service');
const app = express();
app.use(express.json());


app.get('/', (request, response) => {
    try {
        response.status(200).send(task())
    } catch (err) {
        response.status(404).send(err.message)
    }

})

app.get('/:id', (req, res) => {
    try {
        const result = taskById(req.params.id)
        res.send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

app.post('/', (req, res) => {
    try {
        const result = createTask(req.body);
        res.send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

app.put('/:id', (req, res) => {
    try {
        const result = putMetod(req.params.id);
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

app.delete('/:id', (req, res) => {
    try {

    } catch (err) {
        res.status(404).send(err.message)
    }
})

const port = 3000;
app.listen(port, () => {
    console.log('Сервер работает');
})