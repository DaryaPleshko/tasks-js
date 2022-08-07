const express = require("express");
const { getDataById, createDate, updateValue, deleteGetById } = require("./api.service");
const { validEmail } = require("../helper/validation");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("done")
})

router.get("/:id", (req, res) => {
    try {
        const { id } = req.params
        const user = getDataById(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.post("/", (req, res) => {
    try {
        const obj = req.body;
        const users = createDate(obj);
        res.status(200).send(users);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.put("/:id", validEmail, (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, email, pwd } = req.body
        const user = updateValue(id, { name, surname, email, pwd });
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body
        const user = deleteGetById(id, { name, surname, email, pwd });
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router