const express = require("express");
const { Post } = require("./posts.service");
const { validData } = require("../helper/validation");
const router = express.Router();

router.get("/", (req, res) => {
    try {
        const posts = new Post;
        res.status(200).send(posts.getAllPosts());
    } catch (error) {
        res.status(404).send(error.message);
    }
})

// router.get("/:id", (req, res) => {
//     const { id } = req.params;
//     res.send(id);
// })

router.get("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const posts = new Post();
        res.status(200).send(posts.getPostById(id));
    } catch (error) {
        res.status(404).send(error.message);
    }

})

router.post("/", validData, (req, res) => {
    try {
        const posts = new Post();
        res.status(200).send(posts.createPost(req.body));
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.put("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const posts = new Post();
        res.status(200).send(posts.updatePostById(id, req.body));
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const post = new Post();
        res.status(200).send(post.deletePostById(id));
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;