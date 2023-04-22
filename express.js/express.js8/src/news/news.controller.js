const express = require("express");
const News = require("./news.service");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const news = new News();
        const allNews = await news.getAllNews();
        res.status(200).send(allNews);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const news = new News();
        const gotNews = await news.getNewsById(id);
        res.status(200).send(gotNews);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const { label, article, date } = req.body;
        const news = new News();
        const createdNews = await news.createNews(label, article, date);
        res.status(200).send(createdNews);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { label, article, date } = req.body;
        const news = new News();
        const updatedNews = await news.updateNews(id, label, article, date);
        res.status(200).send(updatedNews);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const news = new News();
        const updatedNews = await news.deleteNews(id);
        res.status(200).send(updatedNews);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;