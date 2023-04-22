const express = require("express");
const { createdEnvironment, getAllEnvironment, getEnvironmentById, putData, deleteData } = require("./service")
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const gotEnvironment = await getAllEnvironment();
        res.status(200).send(gotEnvironment);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const gotEnvironmentById = await getEnvironmentById(id);
        res.status(200).send(gotEnvironmentById);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const environment = req.body;
        const newEnvironment = await createdEnvironment(environment);
        res.status(200).send(newEnvironment);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateDate = await putData(id, req.body);
        res.status(200).send(updateDate);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateDate = await deleteData(id);
        res.status(200).send(updateDate);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;