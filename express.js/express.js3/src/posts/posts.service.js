const { post } = require("../storage/post");

class Post {
    constructor() {
        this.post = post;
    }

    getAllPosts = () => {
        if (this.post.length === 0) throw new Error('Not Found');
        return this.post;
    }

    getPostById = (id) => {
        const filteredPost = this.post.filter(el => el.id === +id)
        if (filteredPost.length === 0) throw new Error('Not Found');
        return filteredPost;
    }

    createPost = (postFromClient) => {
        this.post.push(postFromClient);
        return this.post;
    }

    updatePostById = (id, postFromClient) => {
        const filtreData = this.post.filter(key => key.id === +id)
        if (filtreData.length === this.post.length) throw new Error('Not Found');
        filtreData.push({ ...id, ...postFromClient });
        return filtreData;
    }

    deletePostById = (id) => {
        const filtreData = this.post.filter(key => key.id != +id)
        return filtreData;
    }
}



module.exports = { Post }