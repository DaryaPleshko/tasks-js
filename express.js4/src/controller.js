const express = require("express");
const { Tasks } = require("./service");

const router = express.Router();

router.get("/", (req, res) => {
    try {
        const tasks = new Tasks;
        res.status(200).send(tasks.getAllData());
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const tasks = new Tasks;
        res.status(200).send(tasks.getById(id));
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post("/", (req, res) => {
    try {
        const tasks = new Tasks();
        res.status(200).send(tasks.postOfData(req.body));
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const tasks = new Tasks();
        res.status(200).send(tasks.putOfData(id, req.body));
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const tasks = new Tasks();
        res.status(200).send(tasks.deleteData(id));
    } catch (error) {
        res.status(404).send(error.message);
    }
});

module.exports = router;