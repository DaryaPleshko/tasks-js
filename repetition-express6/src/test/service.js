const fs = require("fs");

class Task {
    constructor() {
        this.filePath = 'C:\\Users\\Hanna\\Desktop\\dasha\\курсы\\repository\\tasks-js\\repetition-express6\\src\\test\\storage/data.json';
    }

    readData = () => {
        return JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
    }

    getAll = () => {
        const parsedData = this.readData();
        if (parsedData.length === 0) throw new Error('Not Found');
        return parsedData;
    }

    getAllById = (id) => {
        const parsedData = this.readData();
        const filterData = parsedData.filter(el => el.id === id);
        if (filterData.length === 0) throw new Error('Not Found');
        return filterData;
    }

    createData = (fromClient) => {
        const parsedData = this.readData();
        parsedData.push(fromClient);
        if (fromClient.length === 0) throw new Error('Not Found');
        return parsedData;
    }

    putData = (id, fromClient) => {
        const parsedData = this.readData();
        const filterData = parsedData.filter(el => el.id === id);
        if (filterData.length === 0) throw new Error('Not Found');
        filterData.push({ id, ...fromClient });
        return filterData;
    }

    deleteData = (id) => {
        const parsedData = this.readData();
        const filterData = parsedData.filter(el => el.id != id);
        return filterData;
    }
}

module.exports = Task;