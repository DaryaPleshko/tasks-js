const fs = require("fs");


class Task {
    constructor() {
        this.filePath = 'C:/Users/Hanna/Desktop/dasha/курсы/repository/tasks-js/express.js5/src/storage/data.json';
    }

    getAllEnvironmentById = (id) => {
        const parsedData = this.readDataFile();
        const filterDate = parsedData.filter(el => el.id === id);
        return filterDate;
    }
    getAllEnvironment = () => {
        const parsedData = this.readDataFile();
        return parsedData;
    }
    readDataFile = () => {
        return JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
    }

    createEnvironment = (obj) => {
        const parsedData = this.readDataFile();
        parsedData.push(obj)
        fs.writeFileSync(this.filePath, JSON.stringify(obj));
        return parsedData;
    }

    updateEnvironment = (id, data) => {
        const parsedData = this.readDataFile();
        const filterDate = parsedData.filter(key => key.id === id);
        filterDate.push({ ...id, ...data });
        return filterDate;
    }

    deleteEnvironment = (id) => {
        const parsedData = this.readDataFile();
        const filterDate = parsedData.filter(key => key.id != id);
        return filterDate;
    }
}

module.exports = Task