const fs = require('fs');

const path = './storage/storage.json';

const getData = () => {
    const array = JSON.parse(fs.readFileSync(path));
    if (!array.length) throw new Error('Array is empty');
    return array;
}

const getDataById = (id) => {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(el => el.id == id);
    if (!filtered.length) throw new Error('There is no such id ');
    return filtered;
}

const createData = (label, category, priority) => {
    const array = JSON.parse(fs.readFileSync(path));
    array.push({ id: label.toLowerCase(), label, category, priority })
    return array;
}

const updateData = (id, label, category, priority) => {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(el => el.id != id);
    if (filtered.length == array.length) throw new Error('id is empty');
    filtered.push({ id: label.toLowerCase(), label, category, priority });
    return filtered;
}

const deleteData = (id) => {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter(el => el.id != id);
    return filtered;
}

module.exports = { getData, getDataById, createData, updateData, deleteData }