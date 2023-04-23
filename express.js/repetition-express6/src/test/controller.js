const express = require("express");
const Task = require("./service");
const { validationPost } = require("../helper/valid");
const router = express.Router();

router.get("/", (req, res) => {
    try {
        const task = new Task();
        const allData = task.getAll();
        res.status(200).send(allData);
    } catch (error) {
        res.status(404).send(error.massage);
    }
});

router.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const task = new Task();
        const allDataById = task.getAllById(id);
        res.status(200).send(allDataById);
    } catch (error) {
        res.status(404).send(error.massage);
    }
});

router.post("/", validationPost, (req, res) => {
    try {
        const task = new Task();
        const createPost = task.createData(req.body);
        res.status(200).send(createPost);
    } catch (error) {
        res.status(404).send(error.massage);
    }
});

router.put("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const task = new Task();
        const updateDate = task.putData(id, req.body);
        res.status(200).send(updateDate);
    } catch (error) {
        res.status(404).send(error.massage);
    }
});

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const task = new Task();
        const deleteDateById = task.deleteData(id);
        res.status(200).send(deleteDateById);
    } catch (error) {
        res.status(404).send(error.massage);
    }
})

module.exports = router;