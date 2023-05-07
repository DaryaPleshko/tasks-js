const fs = require('fs');

class User {
    path = './storage/storage.json';

    getAllUser = () => {
        const array = JSON.parse(fs.readFileSync(this.path));
        if (!array.length) throw new Error('Array is empty');
        return array;
    };

    getUserById = (id) => {
        const array = JSON.parse(fs.readFileSync(this.path));
        const filtered = array.filter(elem => elem.id == id);
        if (!filtered.length) throw new Error('There is no such id');
        return filtered;
    };

    createUser = (name, surname, email, pwd) => {
        const array = JSON.parse(fs.readFileSync(this.path));
        array.push({ id: array.length + 1, name, surname, email, pwd });
        fs.writeFileSync(this.path, JSON.stringify(array));
        return array;
    };

    updataUser = (id, name, surname, email, pwd) => {
        const array = JSON.parse(fs.readFileSync(this.path));
        const filtered = array.filter(elem => elem.id != id);
        if (filtered.length == array.length) throw new Error('There is no such id');
        filtered.push({ id, name, surname, email, pwd });
        fs.writeFileSync(this.path, JSON.stringify(filtered));
        return filtered;
    };

    deleteUser = (id) => {
        const array = JSON.parse(fs.readFileSync(this.path));
        const filtered = array.filter(elem => elem.id != id);
        if (filtered.length == array.length) throw new Error('There is no such id');
        fs.writeFileSync(this.path, JSON.stringify(filtered));
        return filtered;
    };
}

module.exports = { User };