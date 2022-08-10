const { data } = require("./data");

class Tasks {
    constructor() {
        this.data = data;
    }

    getAllData = () => {
        if (this.data.length === 0) throw new Error('Not Found');
        return this.data;
    }

    getById = (id) => {
        const filterById = this.data.filter(key => key.id === id);
        if (filterById.length === 0) throw new Error('Not Found');
        return filterById;
    }

    postOfData = (postFromClient) => {
        this.data.push(postFromClient);
        if (!this.data.length) throw new Error("Array is empty");
        return this.data;
    }

    putOfData = (id, nextdata) => {
        const filterId = this.data.filter(key => key.id === id);
        if (filterId.length === this.data.length) throw new Error('Not Found');
        filterId.push({ ...id, ...nextdata });
        return filterId;
    }

    deleteData = (id) => {
        const filterId = this.data.filter(key => key.id != +id);
        return filterId;
    }
}
module.exports = { Tasks }