const express = require("express");
const Task = require("./environment.service")
const router = express.Router();

router.get("/", (req, res) => {
    // try {
    const task = new Task()
    const allData = task.getAllEnvironment()
    res.status(200).send(allData)
    // } catch (error) {
    //     res.status(404).send(error.message);
    // }
});

router.get("/:id", (req, res) => {
    const { id } = req.params
    const task = new Task()
    const allData = task.getAllEnvironmentById(id);
    res.status(200).send(allData)
});

router.post("/", (req, res) => {
    const obj = req.body;
    const task = new Task()
    const createdTask = task.createEnvironment(obj);
    res.status(200).send(createdTask)
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const task = new Task()
    const updateTask = task.updateEnvironment(id, req.body);
    res.status(200).send(updateTask)
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const task = new Task()
    const deleteTask = task.deleteEnvironment(id);
    res.status(200).send(deleteTask)
});

module.exports = router;